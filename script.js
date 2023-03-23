//VARIABLE DECLARATIONS

let allTitles = ["none", "NP", "DR", "PA"];
let departingStatus = ["none", "leaving", "left"];
let allInsurances = ["none", "Medicare", "Aetna", "BCBS", "Cigna", "United Health Care", "Empire Plan"];
let allStates = ["none", "NY", "CT"];
let allSpecialties = ["none"];
let allLocations = ["none"];

//WESTMED OBJECTS


    const provider = {
        allProviders: [],
        makeProvider (firstName="none", lastName="none", office=allLocations[0], specialty= allSpecialties[0], title=allTitles[0], acceptsNewPatients=false, onLeave=false, departing=departingStatus[0], insurances=allInsurances[0], male=false, female=false) {
            const newProvider = {
                firstName,
                lastName,
                office,
                specialty,
                title,
                acceptsNewPatients,
                onLeave,
                departing,
                insurances,
                male,
                female,

                providerInfo() {
                    return `Name: ${this.firstName}\nLast Name: ${this.lastName}\nOffice: ${this.office}\nSpecialty: ${this.specialty}\nTitle: ${this.title}\nAccepting: ${this.acceptsNewPatients}\nOn Leave: ${this.onLeave}\nDeparting: ${this.departing}\nInsurances: ${this.insurances}`;
                },
            };
            // Add the created provider to the allProviders Array
            this.allProviders.push(newProvider);

            return newProvider;
        },
       
    };
    location = {
        state: allStates[0],
        isLab: false,
    }

//Object Call

let noaMicellota = provider.makeProvider("Noa", "Micellota", allLocations[0], allSpecialties[0], allTitles[1], true, false, departingStatus[0], allInsurances[1]);
let georgePicorelli = provider.makeProvider("George", "Picorelli", allLocations[0], allSpecialties[0], allTitles[1], true, false, departingStatus[0], allInsurances[1]);
let stevenDiCairano = provider.makeProvider("Steven", "DiCairano", allLocations[0], allSpecialties[0], allTitles[1], true, false, departingStatus[0], allInsurances[1]);
let michaelAgastin = provider.makeProvider("Michael", "Agastin", allLocations[0], allSpecialties[0], allTitles[1], true, false, departingStatus[0], allInsurances[1]);
let josephValetta = provider.makeProvider("Joseph", "Valetta", allLocations[0], allSpecialties[0], allTitles[1], true, false, departingStatus[0], allInsurances[1]);
let hashemHashem = provider.makeProvider("Hashem", "Hashem", allLocations[0], allSpecialties[0], allTitles[1], true, false, departingStatus[0], allInsurances[1]);
//console.log(NOA_MICCELOTA);
console.log(provider.allProviders);

const runSearch = (query) => {

}