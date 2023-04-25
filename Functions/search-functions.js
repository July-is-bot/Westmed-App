//This is the leveshteinDistance function, it allows for fuzzy search. 
//It takes two strings as parameters and returns the number of edits needed to make the strings equal
//The lower the number, the more similar the strings are

function levenshteinDistance(a, b) {
    const matrix = [];

    for (let i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }

    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }

    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j] + 1
                );
            }
        }
    }

    return matrix[b.length][a.length];
};

// Display Results Function
// This function will be called when the search form is submitted
// It will take the results from the search function and display them on the page
// If there are no results, it will display a message
// Otherwise, it will loop through the results and create a card for each provider using the static ProviderCard method
// It will then append the card to the search-results div
export function displaySearchResults(results) {
    const searchResults = document.getElementById("search-results");
    // Clear any previous results
    searchResults.innerHTML = "";
    // If there are no results, display a message
    if (results.length === 0) {
        const noResultsMsg = document.createElement("div");
        noResultsMsg.classList.add("no-results");
        noResultsMsg.textContent = "No results found.";
        searchResults.appendChild(noResultsMsg);
        return;
    } else {
        // Otherwise, loop through the results and create a card for each provider usin te static ProviderCard method
        console.log(results);
        results.forEach((provider) => {
            console.log(provider);
            searchResults.appendChild(provider.providerCard());
        });
    }
}

// Search Function
// This function will be called when the search form is submitted
// It will take the values from the form and use them to filter the providers array
// It will then return the results
export function runSearch(event) {
    event.preventDefault();

    // Create an object to store the values entered by the user in the search form
    const query = {
        searchQuery: document.getElementById("search-query").value.toLowerCase(),
        selectedSpecialty: document.getElementById("specialty").value.toLowerCase(),
        selectedLocation: document.getElementById("location").value,
        selectedGender: document.getElementById("gender").value,
        selectedInsurance: document.getElementById("insurance").value,
        selectedTitle: document.getElementById("title").value,
        selectedAcceptance: document.getElementById("accepts-new-patients").checked,
        selectedLanguage: document.getElementById("languages").value,
    };

    // Map over the array of all providers and create a new array of objects
    // that includes the original provider objects and a relevanceScore property
    const filteredProviders = Provider.allProviders.map((provider) => {
        // Initialize the relevance score to 1
        provider.relevanceScore = 1;
        // let relevanceScore = 1;

        // Calculate the relevance score for each filter that matches the search criteria
        if (query.selectedSpecialty !== "" && provider.specialty.includes(query.selectedSpecialty)) {
            provider.relevanceScore += 1;
        }

        if (query.selectedLocation !== "" && provider.office.includes(query.selectedLocation)) {
            provider.relevanceScore += 1;
        }

        if (query.selectedInsurance !== "" && provider.insurances.includes(query.selectedInsurance)) {
            provider.relevanceScore += 1;
        }

        if (query.selectedTitle !== "" && provider.title === query.selectedTitle) {
            provider.relevanceScore += 1;
        }

        if (query.selectedAcceptance && provider.acceptsNewPatients === true) {
            provider.relevanceScore += 1;
        }

        if (query.selectedLanguage !== "" && provider.languages.includes(query.selectedLanguage)) {
            provider.relevanceScore += 1;
        }

        if (query.selectedGender !== provider.gender && query.selectedGender !== "") {
            provider.relevanceScore = 0;
        }

        if (query.selectedSpecialty !== "" && !provider.specialty.includes(query.selectedSpecialty)) {
            provider.relevanceScore = 0;
        }

        if (query.selectedLocation !== "" && !provider.office.includes(query.selectedLocation)) {
            provider.relevanceScore = 0;
        }

        if (query.selectedAcceptance && !provider.acceptsNewPatients) {
            provider.relevanceScore = 0;
        }

        if (query.selectedTitle !== "" && provider.title !== query.selectedTitle) {
            provider.relevanceScore = 0;
        }

        if (query.selectedLanguage !== "" && !provider.languages.includes(query.selectedLanguage)) {
            provider.relevanceScore = 0;
        }

        if (query.searchQuery !== "") {
            // Calculate the Levenshtein distance between the search query and the provider's first name and last name
            const firstNameDistance = levenshteinDistance(provider.firstName.toLowerCase(), query.searchQuery.toLowerCase());
            const lastNameDistance = levenshteinDistance(provider.lastName.toLowerCase(), query.searchQuery.toLowerCase());

            // Choose the minimum of the two distances as the name distance
            const nameDistance = Math.min(firstNameDistance, lastNameDistance);

            // Set a name threshold and calculate a name relevance score based on the distance
            const nameThreshold = 3;
            const nameRelevance = Math.max(0, (nameThreshold - nameDistance));

            // Add the name relevance score to the relevance score
            provider.relevanceScore += nameRelevance;
        }

        // Include the relevance score in the provider object and return it
        //provider._relevanceScore = relevanceScore;
        return provider;
    })
        // Filter out any providers with a relevance score of 0
        .filter((provider) => {
            return provider.relevanceScore > 0;
        })
        // Sort the remaining providers in descending order by relevance score
        .sort((a, b) => {
            return b.relevanceScore - a.relevanceScore;
        });

    // Call the displaySearchResults function and pass it the filtered providers
    displaySearchResults(filteredProviders);
};