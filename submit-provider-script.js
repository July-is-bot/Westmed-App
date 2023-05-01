
import { csvToJson, readCsvFile, importProviderData, createProviderInstances } from './Functions/import-data-functions.js';
import { Provider } from './Classes/westmed-classes.js';


const submittedFile = document.getElementById("file-input");
const importPreview = document.getElementById("import-preview");

const input = submittedFile.addEventListener("change", displayPreview);

async function displayPreview() {
    while (importPreview.firstChild) {
        importPreview.removeChild(importPreview.firstChild);
        console.log("remove previous things")
    }
    
    const currentFile = submittedFile.files;
    console.log(currentFile);
    if (currentFile.length === 0) {
        const noFile = document.createElement("p");
        noFile.textContent = "No file loaded"

        importPreview.appendChild(noFile);
    }
    else {
        try {
            const csv = await currentFile[0].text();
            console.log(csv);
            const jsonData = csvToJson(csv);
            console.log(jsonData);
            createProviderInstances(jsonData);
            console.log(Provider.allProviders);

            const preview = document.getElementById("import-preview");
            preview.appendChild(Provider.providerTable());
            
        } catch (error) {
            console.log(error);
        }
    }
}