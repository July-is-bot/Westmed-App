import { Provider } from '../Classes/westmed-classes.js';

//FUNCTIONS
// Function to convert CSV to JSON
export function csvToJson(csv) {
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
export async function readCsvFile(file) {
    const response = await fetch(file);
    const csv = await response.text();
    return csv;
}

export function createProviderInstances(jsonData) {
    jsonData.forEach(providerData => {
        new Provider(
            [providerData.firstName],
            [providerData.lastName],
            [providerData.title],
            [providerData.gender],
            providerData.specialty.includes(', ') ? providerData.specialty.split(', ') : [providerData.specialty],
            [providerData.acceptsNewPatients === 'true'],
            providerData.office.includes(', ') ? providerData.office.split(', ') : [providerData.office],
            providerData.fax.includes(', ') ? providerData.fax.split(', ') : [providerData.fax],
            providerData.emergencyLine.includes(', ') ? providerData.emergencyLine.split(', ') : [providerData.emergencyLine],
            providerData.languages.includes(', ') ? providerData.languages.split(', ') : [providerData.languages],
            providerData.insurances.includes(', ') ? providerData.insurances.split(', ') : [providerData.insurances],
            [providerData.onLeave === 'true'],
            [providerData.departing === 'true'],
            [providerData.departingDate],
            [providerData.retired === 'true'],
            [providerData.ageGroup],
            [providerData.importantInfo]
        );
    });
}


// Main function to import provider information and create instances of the Provider class
export async function importProviderData(csvFile) {
    const csvData = await readCsvFile(csvFile);
    const jsonData = csvToJson(csvData);
    createProviderInstances(jsonData);

    console.log(Provider.allProviders);
}

function checkForMissinput(value, type) {
    if (value.length === 0) {
        console.log(`${type} must not be empty`);
        return true;
    } else if (value.length > 50) {
        console.log(`${type} must not be longer than 50 characters`);
        return true;
    } else {
        return false;
    }
}


export function isDataCompatible(type, values) {
    let errors = 0;
    values.forEach(value => {
        //const allDataTypes = ["firstName", "lastName", "title", "gender", "specialty", "acceptsNewPatients", "office", "fax", "emergencyLine", "languages", "insurances", "onLeave", "departing", "departingDate", "retired", "ageGroup", "importantInfo"];
        console.log("Now checking for " + type + " with value " + value + " for compatibility")
        
        switch (type) {

            case "firstName":
                if (checkForMissinput(value, type)) {
                    errors++;
                } else {
                    console.log(`${type} is compatible with value ${value}`)
                }
                break;

            case "lastName":
                if (checkForMissinput(value, type)) {
                    errors++;
                } else {
                    console.log(`${type} is compatible with value ${value}`)
                }
                break;

            case "title":
                const validTitles = ["DR", "NP", "PA"];
                const upperCaseValue = value.toUpperCase();
                if (checkForMissinput(upperCaseValue, type)) {
                    errors++;
                } else if (!validTitles.includes(upperCaseValue)) {
                    console.log("Invalid title provided");
                    errors++;
                } else {
                    console.log(`${type} is compatible with value ${upperCaseValue}`);
                }
                break;

            case "gender":
                const validGenders = ["male", "female", "other"];
                if (checkForMissinput(value, type)) {
                    errors++;
                } else if (!validGenders.includes(value)) {
                    console.log("Invalid Gender provided")
                    errors++;
                } else {
                    console.log(`${type} is compatible with value ${value}`)
                }
                break;


            case "specialty":
                const validSpecialties =
                    ["internalmedicine",
                        "gastroenterology",
                        "allergy",
                        "neurology",
                        "podiatry",
                        "pulmonology",
                        "physicaltherapy",
                        "endocrinology",
                        "rheumatology",
                        "cardiology",
                        "dermatology",
                        "nephrology",
                        "vascular",
                        "oncology",
                        "weightmanagement",
                        "orthopedics",
                        "urology",
                        "ophthalmology"
                    ];

                if (typeof value !== "string") {
                    console.log("The specialty must be a string");
                    errors++;
                } else if (!validSpecialties.includes(value)) {
                    errors++;
                } else {
                    console.log(`${type} is compatible with value ${value}`)
                }
                break;


            case "acceptsNewPatients":
                console.log("Checking for acceptsNewPatients. Value is " + value + " and type is " + typeof value)
                if (typeof value !== "boolean") {
                    console.log("The acceptsNewPatients must be a boolean");
                    errors++;
                } else {
                    console.log(`${type} is compatible with value ${value}`)
                }
                break;

            case "office":
                const validOffices = ["whiteplains", "rye", "purchase", "yonkersbt", "yonkersnr"];

                if (!validOffices.includes(value)) {
                    console.log("Invalid office provided");
                    errors++;
                } else {
                    console.log(`${type} is compatible with value ${value}`)

                }
                break;

            case "fax":
                if (checkForMissinput(value, type)) {
                    errors++;
                } else {
                    console.log(`${type} is compatible with value ${value}`)
                }
                break;

            case "emergencyLine":
                if (checkForMissinput(value, type)) {
                    errors++;
                } else {
                    console.log(`${type} is compatible with value ${value}`)
                }
                break;

            case "languages":
                if (checkForMissinput(value, type)) {
                    errors++;
                } else {
                    console.log(`${type} is compatible with value ${value}`)
                }
                break;

            case "insurances":
                if (checkForMissinput(value, type)) {
                    errors++;
                } else {
                    console.log(`${type} is compatible with value ${value}`)
                }
                break;

            case "onLeave":
                if (typeof value !== "boolean") {
                    console.log("The onLeave must be a boolean");
                    errors++;
                } else {
                    console.log(`${type} is compatible with value ${value}`)
                }
                break;

            case "departing":
                if (typeof value !== "boolean") {
                    console.log("The departing must be a boolean");
                    errors++;
                } else {
                    console.log(`${type} is compatible with value ${value}`)
                }
                break;

            case "departingDate":
                if (checkForMissinput(value, type)) {
                    errors++;
                } else {
                    console.log(`${type} is compatible with value ${value}`)
                }
                break;

            case "retired":
                if (typeof value !== "boolean") {
                    console.log("The retired must be a boolean");
                    errors++;
                } else {
                    console.log(`${type} is compatible with value ${value}`)
                }
                break;

            case "ageGroup":
                if (checkForMissinput(value, type)) {
                    errors++;
                } else {
                    console.log(`${type} is compatible with value ${value}`)
                }
                break;

            case "importantInfo":
                if (typeof value !== "string") {
                    console.log("The importantInfo must be a string");
                    errors++;
                } else {
                    console.log(`${type} is compatible with value ${value}`)
                }
                break;

            default:
                throw new TypeError("Invalid data type provided");
        };
    });
    if (errors > 0) {
        return false;
    } else {
        return true;
    }
}


export function setClassSuffix(data) {
    if (data) {
        console.log("data is compatible")
        return "-compatible";
    } else {
        console.log("data is not compatible")
        return "-non-compatible";
    }
}


