// Author: Julio César Correa Vásquez
// Date: 2023-04-11
// Description: This script contains the code for the search app reworked.
// This script is part of the Westmed Search App Reworked project.
// Questions or comments about this script can be directed to Julio César Correa Vásquez at juliocesarcv3@hotmail.com
// Note: This script is not intended to be used in production. It is only intended to be used for demonstration purposes.
// Version: 1.0.0
//import XLSX from 'xlsx';
// Event Listeners for the Form in index.html


// CLASSES
import { Provider } from "./Classes/westmed-classes.js";

// FUNCTIONS
import { importProviderData } from "./Functions/import-data-functions.js";
import { displaySearchResults, runSearch } from "./Functions/search-functions.js";

// Event Listeners for the Form in index.html
document.getElementById("search-form").addEventListener("submit", runSearch);

// Event Listeners for the Specialty input in index.html
document.getElementById("specialty").addEventListener("click", () => { document.getElementById("specialty").value = "" });




try {
    // Import the data from the CSV file
    await importProviderData("./test-providers-worksheet.csv");
} catch (error) {
  console.log("Error while importing data:");
  console.log(error);
}

// Display the results of the search
displaySearchResults(Provider.getAllProviders());
