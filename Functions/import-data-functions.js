import { Provider } from '../Classes/westmed-classes.js';

//FUNCTIONS
// Function to convert CSV to JSON
function csvToJson(csv) {
    const lines = csv.split("\n");
    const headers = lines[0].split(";");
    const result = [];

    for (let i = 1; i < lines.length - 1; i++) {
        const obj = {};
        const currentLine = lines[i].split(";");

        for (let j = 0; j < headers.length - 1; j++) {
            obj[headers[j].trim()] = currentLine[j] ? currentLine[j].trim() : undefined;
        }
        result.push(obj);
    }
    return result;
}


// Read the CSV file content
async function readCsvFile(file) {
    const response = await fetch(file);
    const csv = await response.text();
    return csv;
}

// Main function to import provider information and create instances of the Provider class
export async function importProviderData(csvFile) {
    const csvData = await readCsvFile(csvFile);
    const jsonData = csvToJson(csvData);

    jsonData.forEach(providerData => {
        new Provider(
            providerData.firstName,
            providerData.lastName,
            providerData.title,
            providerData.gender,
            providerData.specialty.split(', '),
            providerData.acceptsNewPatients === 'true',
            providerData.office.split(', '),
            providerData.fax.split(', '),
            providerData.emergencyLine.split(', '),
            providerData.languages.split(', '),
            providerData.insurances.split(', '),
            providerData.onLeave === 'true',
            providerData.departing === 'true',
            providerData.departingDate,
            providerData.retired === 'true',
            providerData.ageGroup,
            providerData.importantInfo
        );
    });

    console.log(Provider.allProviders);
}