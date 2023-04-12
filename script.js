//VARIABLE DECLARATIONS

let allTitles = ["not defined", "NP", "DR", "PA"];
let departingStatus = ["not leaving yet", "leaving", "left"];
let allInsurances = ["not defined", "Medicare", "Aetna", "BCBS", "Cigna", "United Health Care", "Empire Plan", "Affinity, Archcare", "Centivo", "Connecticare", "CT Medicare", "Emblem GHI", "Emblem HIP", "Empire BCBS", "Empire State Plan", "Fidelis", "First Health", "Flume Health", "HealthPlus BCBS", "Magnacare", "Multiplan", "MVP commercial", "MVP Medicaid", "MVP Medicare", "NY Medicaid", "NT Medicare", "NYS Worker's Comp", "Oscar", "Oxford", "Wellcare"];
let allStates = ["not defined", "NY", "CT"];
let allGenders = ["not defined", "female", "male"];
let allSpecialties = ["not defined", "cardiology", "dermatology", "endocrinology", "gastroenterology", "internalmedicine", "nephrology", "neurology", "oncology", "physicaltherapy", "pulmonology", "rheumatology", "vascular", "weightmanagement", "chiropractics", "allergy", "bariatricsurgery", "podiatry", "urology"];
let allLocations = ["not defined", "rye", "whiteplains", "purchase", "yonkersbt", "yonkersrh", "newrochelle", "greenwich", "stamford"];
let allAgeGroups = ["not defined", "+18", "+3"];

//OBJECT DECLARATIONS

const provider = {
  allProviders: [],
  makeProvider(firstName = "none", lastName = "none", office = allLocations[0], specialty = allSpecialties[0], title = allTitles[0], acceptsNewPatients = false, onLeave = false, departing = departingStatus[0], insurances = allInsurances[0], gender = allGenders[0], fax = "000 000 0000", speaksSpanish = false, ageGroup = allAgeGroups[0]) {
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
      gender,
      fax,
      speaksSpanish,
      ageGroup,

      providerInfo() {
        return `Name: ${this.firstName}\nLast Name: ${this.lastName}\nOffice: ${this.office}\nSpecialty: ${this.specialty}\nTitle: ${this.title}\nAccepting: ${this.acceptsNewPatients}\nOn Leave: ${this.onLeave}\nDeparting: ${this.departing}\nInsurances: ${this.insurances}`;
      },
    };
    // Add the created provider to the allProviders Array
    this.allProviders.push(newProvider);

    return newProvider;
  },

};

//OBJECT INSTANCES
//makeProvider(firstName = "none", lastName = "none", office = allLocations[0], specialty = allSpecialties[0], title = allTitles[0], acceptsNewPatients = false, onLeave = false, departing = departingStatus[0], insurances = allInsurances[0], gender = allGenders[0])

/*let allTitles = ["not defined", "NP", "DR", "PA"];
let departingStatus = ["not defined", "leaving", "left"];
let allInsurances = ["not defined", "Medicare", "Aetna", "BCBS", "Cigna", "United Health Care", "Empire Plan"];
let allStates = ["not defined", "NY", "CT"];
let allGenders = ["not defined", "male", "female"];
let allSpecialties = ["not defined", "cardiology", "dermatology", "endocrinology", "gastroenterology", "internal medicine", "nephrology", "neurology", "oncology", "physicaltherapy", "pulmonology", "rheumatology", "vascular", "weightmanagement", "chiropractics"];
let allLocations = ["not defined", "rye", "whiteplains", "purchase", "yonkersbt", "yonkersrh", "newrochelle"];*/

//Internal Medicine
let agastinMichael = provider.makeProvider("Agastin", "Michael", [allLocations[6]], [allSpecialties[5]], allTitles[2], false, false, departingStatus[0], allInsurances[1], allGenders[2], "914 607 5821", false, allAgeGroups[1], "Do not send messages to this provider.");
let alyseChase = provider.makeProvider("Alyse", "Chase", [allLocations[3]], [allSpecialties[5]], allTitles[1], true, false, departingStatus[0], allInsurances[1], allGenders[1], "914 831 2901", true, allAgeGroups[1]);
let angelaShao = provider.makeProvider("Angela", "Shao", [allLocations[6]], [allSpecialties[5]], allTitles[2], true, false, departingStatus[0], allInsurances[1], allGenders[1], "914 607 5821", false, allAgeGroups[1]);
let anithaXavier = provider.makeProvider("Anitha", "Xavier", [allLocations[0]], [allSpecialties[5]], allTitles[1], false, false, departingStatus[0], allInsurances[1], allGenders[1], false, allAgeGroups[1]);
let arleeneSharpe = provider.makeProvider("Arleene", "Sharpe", [allLocations[5]], [allSpecialties[5]], allTitles[2], false, false, departingStatus[0], allInsurances[1], allGenders[1], "914 848 8062", false, allAgeGroups[1]);
let ashleyCardona = provider.makeProvider("Ashley", "Cardona", [allLocations[1], allLocations[2]], [allSpecialties[5]], allTitles[1], true, false, departingStatus[0], allInsurances[1], allGenders[1], ["914 848 8700", "914 848 8701"], true, allAgeGroups[1]);
let aznehanBatirbek = provider.makeProvider("Aznehan", "Batirbek", [allLocations[0]], [allSpecialties[5]], allTitles[1], true, false, departingStatus[0], allInsurances[1], allGenders[2], false, allAgeGroups[1]);
let barbaraYarwoodWishner = provider.makeProvider("Barbara", "Yarwood-Wishner", [allLocations[5]], [allSpecialties[5]], allTitles[2], false, false, departingStatus[0], allInsurances[1], allGenders[1], "914 848 8021", false, allAgeGroups[1]);
let barryFeuer = provider.makeProvider("Barry", "Feuer", [allLocations[3]], [allSpecialties[5]], allTitles[2], false, false, departingStatus[0], allInsurances[1], allGenders[2], "914 831 4101", false, allAgeGroups[1]);
let brendaSullivan = provider.makeProvider("Brenda", "Sullivan", [allLocations[5]], [allSpecialties[5]], allTitles[2], false, false, departingStatus[0], allInsurances[1], allGenders[1], "914 848 8062", false, allAgeGroups[1]);
let calvinYau = provider.makeProvider("Calvin", "Yau", [allLocations[2]], [allSpecialties[5]], allTitles[1], false, false, departingStatus[0], allInsurances[1], allGenders[2], "914 681 5260", false, allAgeGroups[1]);
let carlosTorres = provider.makeProvider("Carlos", "Torres", [allLocations[2]], [allSpecialties[5]], allTitles[2], false, false, departingStatus[0], allInsurances[1], allGenders[2], "914 681 5260", true, allAgeGroups[1]);
let davidHerzog = provider.makeProvider("David", "Herzog", [allLocations[1]], [allSpecialties[5]], allTitles[2], false, false, departingStatus[0], allInsurances[1], allGenders[2], "914 848 8701", false, allAgeGroups[1]);
let dianaArevalo = provider.makeProvider("Diana", "Arevalo", [allLocations[6]], [allSpecialties[5]], allTitles[2], false, false, departingStatus[0], allInsurances[1], allGenders[1], "914 607 5821", true, allAgeGroups[1]);
let eliotMoshman = provider.makeProvider("Eliot", "Moshman", [allLocations[2]], [allSpecialties[5]], allTitles[2], false, false, departingStatus[0], allInsurances[1], allGenders[2], "914 681 5260", false, allAgeGroups[1]);
let emilyLorch = provider.makeProvider("Emily", "Lorch", [allLocations[4]], [allSpecialties[5]], allTitles[2], true, false, departingStatus[0], allInsurances[1], allGenders[1], "914 848 8571", false, allAgeGroups[1]);
let ianYarett = provider.makeProvider("Ian", "yarett", [allLocations[1]], [allSpecialties[5]], allTitles[2], false, false, departingStatus[0], allInsurances[1], allGenders[2], "914 848 8701", false, allAgeGroups[1]);
let ireneJong = provider.makeProvider("Irene", "Jong", [allLocations[5]], [allSpecialties[5]], allTitles[2], false, false, departingStatus[0], allInsurances[1], allGenders[1], "914 848 8061", false, allAgeGroups[1]);
let irisSherman = provider.makeProvider("iris", "sherman", [allLocations[5]], [allSpecialties[5]], allTitles[2], false, false, departingStatus[0], allInsurances[1], allGenders[1], "914 607 4761", false, allAgeGroups[1]);
let jamesSamuel = provider.makeProvider("james", "Samuel", [allLocations[0]], [allSpecialties[5]], allTitles[2], true, false, departingStatus[0], allInsurances[1], allGenders[2], "203 845 4873", false, allAgeGroups[1]);
let jaronSchaumberg = provider.makeProvider("Jaron", "Schaumberg", [allLocations[5]], [allSpecialties[5]], allTitles[2], true, false, departingStatus[0], allInsurances[1], allGenders[2], "914 848 8061", false, allAgeGroups[1]);
let jeniferJohnson = provider.makeProvider("Jenifer", "Johnson", [allLocations[1]], [allSpecialties[5]], allTitles[2], false, false, departingStatus[0], allInsurances[1], allGenders[1], "914 848 8749", false, allAgeGroups[1]);
let jerryCampanella = provider.makeProvider("Jerry", "Campanella", [allLocations[5]], [allSpecialties[5]], allTitles[2], false, false, departingStatus[0], allInsurances[1], allGenders[2], "914 848 8061", false, allAgeGroups[1]);
let jillOstrager = provider.makeProvider("Jill", "Ostrager", [allLocations[6]], [allSpecialties[5]], allTitles[2], false, false, departingStatus[0], allInsurances[1], allGenders[1], "914 607 5821", false, allAgeGroups[1]);
let jonathanRie = provider.makeProvider("Jonathan", "Rie", [allLocations[3]], [allSpecialties[5]], allTitles[2], false, false, departingStatus[0], allInsurances[1], allGenders[2], "914 831 2901", false, allAgeGroups[1]);
let jordanGolubcowteglasi = provider.makeProvider("Jordan", "Golubcow-Teglasi", [allLocations[2]], [allSpecialties[5]], allTitles[2], true, false, departingStatus[0], allInsurances[1], allGenders[1], "914 681 5260", true, allAgeGroups[1]);
let kaylaAngelo = provider.makeProvider("Kayla", "Angelo", [allLocations[0]], [allSpecialties[5]], allTitles[1], true, false, departingStatus[0], allInsurances[1], allGenders[1], false, allAgeGroups[1]);
let lawrenceKraftowitz = provider.makeProvider("Lawrence", "Kraftowitz", [allLocations[2]], [allSpecialties[5]], allTitles[2], false, false, departingStatus[0], allInsurances[1], allGenders[2], "914 681 5260", false, allAgeGroups[1]);
let loriSaltzmanGabelman = provider.makeProvider("Lori", "Saltzman-Gabelman", [allLocations[2]], [allSpecialties[5]], allTitles[2], false, false, departingStatus[0], allInsurances[1], allGenders[1], "914 681 5260", false, allAgeGroups[1]);
let mandiraGharekhan = provider.makeProvider("Mandira", "Gharekhan", [allLocations[1]], [allSpecialties[5]], allTitles[2], false, false, departingStatus[0], allInsurances[1], allGenders[1], "914 848 8701", false, allAgeGroups[1]);
let margaretDaly = provider.makeProvider("Margaret", "Daly", [allLocations[5]], [allSpecialties[5]], allTitles[2], false, false, departingStatus[0], allInsurances[1], allGenders[1], "914 607 4771", false, allAgeGroups[1]);
let maryfrancesKokoska = provider.makeProvider("MaryFrances", "Kokoska", [allLocations[0]], [allSpecialties[5]], allTitles[1], true, false, departingStatus[0], allInsurances[1], allGenders[1], "203 845 4873", false, allAgeGroups[1]);
let michaelContillo = provider.makeProvider("Michael", "Contillo", [allLocations[5], [allLocations[3]]], [allSpecialties[5]], allTitles[2], false, false, departingStatus[0], allInsurances[1], allGenders[2], "914 697 4761", true, allAgeGroups[1]);
let michelleTyler = provider.makeProvider("Michelle", "Tyler", [allLocations[5]], [allSpecialties[5]], allTitles[1], true, false, departingStatus[0], allInsurances[1], allGenders[2], "914 848 8061", false, allAgeGroups[1]);
let mohsinQadri = provider.makeProvider("Mohsin", "Qadri", [allLocations[1]], [allSpecialties[5]], allTitles[2], true, false, departingStatus[0], allInsurances[1], allGenders[2], "914 848 8701", true, allAgeGroups[1]);
let monaZafar = provider.makeProvider("Monaa", "Zafar", [allLocations[3]], [allSpecialties[5]], allTitles[2], true, false, departingStatus[0], allInsurances[1], allGenders[1], "914 831 2901", false, allAgeGroups[1]);
let nabeelAli = provider.makeProvider("Nabeel", "Ali", [allLocations[3]], [allSpecialties[5]], allTitles[2], true, false, departingStatus[0], allInsurances[1], allGenders[2], "914 831 2901", false, allAgeGroups[1]);
let nicholasPantaleo = provider.makeProvider("Nicholas", "Pantaleo", [allLocations[4]], [allSpecialties[5]], allTitles[2], false, false, departingStatus[0], allInsurances[1], allGenders[2], "914 848 8571", false, allAgeGroups[1]);
let nicoleHadi = provider.makeProvider("Nicole", "Hadi", [allLocations[5]], [allSpecialties[5]], allTitles[2], false, false, departingStatus[0], allInsurances[1], allGenders[1], "914 848 8021", false, allAgeGroups[1]);
let paulBasch = provider.makeProvider("Paul", "Basch", [allLocations[2]], [allSpecialties[5]], allTitles[2], true, false, departingStatus[0], allInsurances[1], allGenders[2], "914 681 5260", false, allAgeGroups[1]);
let prestonLurie = provider.makeProvider("Preston", "Lurie", [allLocations[3]], [allSpecialties[5]], allTitles[2], false, false, departingStatus[0], allInsurances[1], allGenders[2], "914 831 4101", false, allAgeGroups[1]);
let radhikaBali = provider.makeProvider("Radhika", "Bali", [allLocations[5]], [allSpecialties[5]], allTitles[2], true, false, departingStatus[0], allInsurances[1], allGenders[1], "914 848 8061", true, allAgeGroups[1]);
let rajenMehta = provider.makeProvider("Rajen", "Bali", [allLocations[2]], [allSpecialties[5]], allTitles[2], false, false, departingStatus[0], allInsurances[1], allGenders[2], "914 681 5260", false, allAgeGroups[1]);
let richardHuntley = provider.makeProvider("Richard", "Huntley", [allLocations[0]], [allSpecialties[5]], allTitles[2], true, false, departingStatus[0], allInsurances[1], allGenders[2], "203 845 4861", false, allAgeGroups[1]);
let robertoCalderon = provider.makeProvider("Roberto", "Calderon", [allLocations[6]], [allSpecialties[5]], allTitles[2], true, false, departingStatus[0], allInsurances[1], allGenders[2], "914 607 5821", true, allAgeGroups[1]);
let ronaldDennett = provider.makeProvider("Ronald", "Dennett", [allLocations[5]], [allSpecialties[5]], allTitles[2], false, false, departingStatus[0], allInsurances[1], allGenders[2], "914 607 4771", false, allAgeGroups[1]);
let rupalChhabra = provider.makeProvider("Rupal", "Chhabra", [allLocations[2]], [allSpecialties[5]], allTitles[2], false, false, departingStatus[0], allInsurances[1], allGenders[1], "914 681 5260", false, allAgeGroups[1]);
let ruthSanchez = provider.makeProvider("Ruth", "Sanchez", [allLocations[2]], [allSpecialties[5]], allTitles[2], false, false, departingStatus[0], allInsurances[1], allGenders[1], "914 681 5260", true, allAgeGroups[1]);
let samNatarajan = provider.makeProvider("Sam", "Natarajan", [allLocations[3], allLocations[2]], [allSpecialties[5]], allTitles[2], true, false, departingStatus[0], allInsurances[1], allGenders[2], "914 683 6780", false, allAgeGroups[1]);
let sandyGeorge = provider.makeProvider("Sandy", "George", [allLocations[1]], [allSpecialties[5]], allTitles[2], false, false, departingStatus[0], allInsurances[1], allGenders[1], "914 848 8701", false, allAgeGroups[1]);
let shamsifani = provider.makeProvider("Shamsi", "Fani", [allLocations[0]], [allSpecialties[5]], allTitles[1], true, false, departingStatus[0], allInsurances[1], allGenders[1], "0000", true, allAgeGroups[1]);
let sharonGannot = provider.makeProvider("Sharon", "Gannot", [allLocations[0], allLocations[1]], [allSpecialties[5]], allTitles[2], false, false, departingStatus[0], allInsurances[1], allGenders[1], "203 210 2821", false, allAgeGroups[1]);
let shellaSteinberg = provider.makeProvider("Shella", "Steinberg", [allLocations[4]], [allSpecialties[5]], allTitles[2], true, false, departingStatus[0], allInsurances[1], allGenders[1], "914 848 8571", false, allAgeGroups[1]);
let shinePhilip = provider.makeProvider("Shine", "Philip", [allLocations[1]], [allSpecialties[5]], allTitles[1], true, false, departingStatus[0], allInsurances[1], allGenders[1], "914 848 8751", false, allAgeGroups[1]);
let shiraMarder = provider.makeProvider("Shira", "Marder", [allLocations[2]], [allSpecialties[5]], allTitles[2], true, false, departingStatus[0], allInsurances[1], allGenders[1], "914 681 5260", false, allAgeGroups[1]);
let steveDiCairano = provider.makeProvider("Steve", "DiCairano", [allLocations[5]], [allSpecialties[5]], allTitles[2], false, false, departingStatus[0], allInsurances[1], allGenders[2], "914 607 4761", false, allAgeGroups[1]);
let stevenKubersky = provider.makeProvider("Steven", "Kubersky", [allLocations[5]], [allSpecialties[5]], allTitles[2], false, false, departingStatus[0], allInsurances[1], allGenders[2], "914 607 4771", false, allAgeGroups[1]);
let susanHaas = provider.makeProvider("Susan", "Haas", [allLocations[2]], [allSpecialties[5]], allTitles[2], false, false, departingStatus[0], allInsurances[1], allGenders[1], "914 681 5260", false, allAgeGroups[1]);
let toddFriend = provider.makeProvider("Todd", "Friend", [allLocations[2]], [allSpecialties[5]], allTitles[2], false, false, departingStatus[0], allInsurances[1], allGenders[2], "914 681 5260", false, allAgeGroups[1]);
let tuvanaBain = provider.makeProvider("Tuvana", "Bain", [allLocations[5]], [allSpecialties[5]], allTitles[2], false, false, departingStatus[0], allInsurances[1], allGenders[1], "914 848 8061", false, allAgeGroups[1]);
let waqasSalam = provider.makeProvider("Waqas", "Salam", [allLocations[0]], [allSpecialties[5]], allTitles[2], true, false, departingStatus[0], allInsurances[1], allGenders[2], "203 845 4873", false, allAgeGroups[1]);
let williamMartimucci = provider.makeProvider("William", "Martimucci", [allLocations[1]], [allSpecialties[5]], allTitles[2], false, false, departingStatus[0], allInsurances[1], allGenders[2], "914 848 8701", false, allAgeGroups[1]);
let noaMicellota = provider.makeProvider("Noa", "Micellota", [allLocations[1]], [allSpecialties[5]], allTitles[2], false, false, departingStatus[0], allInsurances[1], allGenders[1]);
// Gastroenterology
let alissaMark = provider.makeProvider("Alissa", "Mark", [allLocations[3]], [allSpecialties[4]], allTitles[2], true, false, departingStatus[0], allInsurances[0], allGenders[1], "914 681 5222", false, allAgeGroups[1]);
let andrewFrancella = provider.makeProvider("Andrew", "Francella", [allLocations[3]], [allSpecialties[4]], allTitles[2], true, false, departingStatus[0], allInsurances[0], allGenders[2], "914 681 5222", false, allAgeGroups[1]);
let charlesKoczka = provider.makeProvider("Charles", "Koczka", [allLocations[5]], [allSpecialties[4]], allTitles[2], true, false, departingStatus[0], allInsurances[0], allGenders[2], "914 831 6821", false, allAgeGroups[1]);
let davidDiCaprio = provider.makeProvider("David", "DiCaprio", [allLocations[5]], [allSpecialties[4]], allTitles[2], true, false, departingStatus[0], allInsurances[0], allGenders[2], "914 831 6821", false, allAgeGroups[1]);
let emilyArduino = provider.makeProvider("Emily", "Arduino", [allLocations[3]], [allSpecialties[4]], allTitles[3], true, false, departingStatus[0], allInsurances[0], allGenders[1], "914 681 5222", false, allAgeGroups[1]);
let erikaTubridy = provider.makeProvider("Erika", "Tubridy", [allLocations[1], allLocations[3]], [allSpecialties[4]], allTitles[1], true, false, departingStatus[0], allInsurances[0], allGenders[1], "914 681 5222", false, allAgeGroups[1]);
let hashemHashem = provider.makeProvider("Hashem", "Hashem", [allLocations[3]], [allSpecialties[4]], allTitles[2], true, false, departingStatus[0], allInsurances[0], allGenders[2], "914 681 5222", false, allAgeGroups[1]);
let henryChiu = provider.makeProvider("Henry", "Chiu", [allLocations[5]], [allSpecialties[4]], allTitles[2], true, false, departingStatus[0], allInsurances[0], allGenders[2], "914 831 6821", true, allAgeGroups[1]);
let jaredMacklin = provider.makeProvider("Jared", "Macklin", [allLocations[3]], [allSpecialties[4]], allTitles[2], true, false, departingStatus[0], allInsurances[0], allGenders[2], "914 681 5222", false, allAgeGroups[1]);
let jonathanFinegold = provider.makeProvider("Jonathan", "Finegold", [allLocations[5]], [allSpecialties[4]], allTitles[2], true, false, departingStatus[0], allInsurances[0], allGenders[2], "914 831 6821", false, allAgeGroups[1]);
let katiGlockenberg = provider.makeProvider("Kati", "Glockenberg", [allLocations[3]], [allSpecialties[4]], allTitles[2], true, false, departingStatus[0], allInsurances[0], allGenders[1], "914 681 5222", false, allAgeGroups[1]);
let kavyaVanchipurakal = provider.makeProvider("Kavya", "Vanchipurakal", [allLocations[5]], [allSpecialties[4]], allTitles[1], true, false, departingStatus[0], allInsurances[0], allGenders[1], "914 831 6821", false, allAgeGroups[1]);
let mitchellAuerbach = provider.makeProvider("Mitchell", "Auerbach", [allLocations[1], allLocations[5]], [allSpecialties[4]], allTitles[2], true, false, departingStatus[0], allInsurances[0], allGenders[2], ["914 681 5222", "914 831 6821"], false, allAgeGroups[1]);
let richardFazio = provider.makeProvider("Richard", "Fazio", [allLocations[3]], [allSpecialties[4]], allTitles[2], true, false, departingStatus[0], allInsurances[0], allGenders[2], "914 681 5222", false, allAgeGroups[1]);
//Allergy
let aviDeener = provider.makeProvider("Avi", "Deener", [allLocations[1], allLocations[2]], [allSpecialties[15]], allTitles[2], true, false, departingStatus[0], allInsurances[0], allGenders[2], "914 681 5231", false, allAgeGroups[1]);
let cyrusNozad = provider.makeProvider("Cyrus", "Nozad", [allLocations[3]], [allSpecialties[15]], allTitles[2], true, false, departingStatus[0], allInsurances[0], allGenders[2], "914 848 8631", false, allAgeGroups[1]);
let joshuaGrossman = provider.makeProvider("Joshua", "Grossman", [allLocations[3], allLocations[4]], [allSpecialties[15]], allTitles[2], true, false, departingStatus[0], allInsurances[0], allGenders[2], "914 848 8631", false, allAgeGroups[1]);
let lauraMechanic = provider.makeProvider("Laura", "Mechanic", [allLocations[5]], [allSpecialties[15]], allTitles[2], true, false, departingStatus[0], allInsurances[0], allGenders[1], "914 848 8081", false, allAgeGroups[1]);
// Bariatric Surgery
let anthonyMaffei = provider.makeProvider("Anthony", "Maffei", [allLocations[3]], [allSpecialties[13], allSpecialties[16]], allTitles[2], true, false, departingStatus[0], allInsurances[0], allGenders[2], "833 418 2505", false, allAgeGroups[1]);
let ashutoshKaul = provider.makeProvider("Ashutosh", "Kaul", [allLocations[3]], [allSpecialties[13], allSpecialties[16]], allTitles[2], true, false, departingStatus[0], allInsurances[0], allGenders[2], "833 418 2505", false, allAgeGroups[1]);
let jonathanGiannone = provider.makeProvider("Jonathan", "Giannone", [allLocations[3]], [allSpecialties[13], allSpecialties[16]], allTitles[2], true, false, departingStatus[0], allInsurances[0], allGenders[2], "833 418 2505", false, allAgeGroups[1]);
// Chiropractic Medicine
let stevenKosterich = provider.makeProvider("Steven", "Kosterich", [allLocations[0]], [allSpecialties[14]]);
// Endocrinology
let kennethWeiser = provider.makeProvider("Kenneth", "Weiser", [allLocations[1]], [allSpecialties[3]], allTitles[2], true, false, departingStatus[0], allInsurances[0], allGenders[2], "914 831 4151", false, allAgeGroups[1]);
let lindaDo = provider.makeProvider("Linda", "Do", [allLocations[0]], [allSpecialties[3]], allTitles[1], true, false, departingStatus[0], allInsurances[0], allGenders[1], "", false, allAgeGroups[1]);
let randyStein = provider.makeProvider("Randy", "Stein", [allLocations[0]], [allSpecialties[3]], allTitles[2], true, false, departingStatus[0], allInsurances[0], allGenders[1], "", false, allAgeGroups[1]);
let rebeccaFenichel = provider.makeProvider("Rebecca", "Fenichel", [allLocations[3]], [allSpecialties[3]], allTitles[2], true, false, departingStatus[0], allInsurances[0], allGenders[1], "914 305 2719", false, allAgeGroups[1]);
let shellyIm = provider.makeProvider("Shelly", "Im", [allLocations[5]], [allSpecialties[3]], allTitles[1], true, false, departingStatus[0], allInsurances[0], allGenders[0], "914 848 8051", false, allAgeGroups[1]);
let zoraydaPretto = provider.makeProvider("Zorayda", "Pretto", [allLocations[2]], [allSpecialties[3]], allTitles[2], true, false, departingStatus[0], allInsurances[0], allGenders[1], "914 831 4151", false, allAgeGroups[1]);
// Weight Management
let jamieFeit = provider.makeProvider("Jamie", "Feit", [allLocations[3]], [allSpecialties[13]], allTitles[2], true, false, departingStatus[0], allInsurances[0], allGenders[1], "914 831 4101", false, allAgeGroups[1]);
let jenniferSchaeffer = provider.makeProvider("Jennifer", "Schaeffer", [allLocations[3]], [allSpecialties[13]], allTitles[2], true, false, departingStatus[0], allInsurances[0], allGenders[1], "914 831 4101", false, allAgeGroups[1]);
let madhuMathur = provider.makeProvider("Madhu", "Mathur", [allLocations[3]], [allSpecialties[13]], allTitles[2], true, false, departingStatus[0], allInsurances[0], allGenders[1], "914 831 4101", false, allAgeGroups[1]);
//Nephrology
let iosifKolbovsky = provider.makeProvider("Iosif", "Kolbovsky", [allLocations[0]], [allSpecialties[6]], allTitles[2], true, false, departingStatus[0], allInsurances[0], allGenders[2], "", false, allAgeGroups[1]);
let marianneMonahan = provider.makeProvider("Marianne", "Monahan", [allLocations[3], [[allLocations[1]]], allLocations[7]], [allSpecialties[6]], allTitles[2], false, false, departingStatus[0], allInsurances[0], allGenders[1], ["914 683 6780", "914 683 6780", "203 210 2801"], false, allAgeGroups[1]);
let richardGervasi = provider.makeProvider("Richard", "Gervasi", [allLocations[0]], [allSpecialties[6]], allTitles[2], true, false, departingStatus[0], allInsurances[0], allGenders[1], "203 845 4861", false, allAgeGroups[1]);
let shkendieVelia = provider.makeProvider("Shkendie", "Velia", [allLocations[3], allLocations[5]], [allSpecialties[6]], allTitles[2], true, false, departingStatus[0], allInsurances[0], allGenders[1], "914 305 2719", false, allAgeGroups[1]);
//Physical Therapy
let bhatkiPabrekar = provider.makeProvider("Bhatki", "Pabrekar", [allLocations[8]], [allSpecialties[9]], allTitles[2], true, false, departingStatus[0], allInsurances[0], allGenders[1], "203 210 2841", false, allAgeGroups[1]);
let christinaRosado = provider.makeProvider("Christina", "Rosado", [allLocations[8], allLocations[3]], [allSpecialties[9]], allTitles[2], true, false, departingStatus[0], allInsurances[1], allGenders[1], "203 210 2841", false, allAgeGroups[1]);
let ericMasbou = provider.makeProvider("Eric", "Masbou", [allLocations[8]], [allSpecialties[9]], allTitles[2], true, false, departingStatus[0], allInsurances[0], allGenders[2], "203 210 2841", false, allAgeGroups[1]);
let guyDisalvo = provider.makeProvider("Guy", "DiSalvo", [allLocations[3]], [allSpecialties[9]], allTitles[2], true, false, departingStatus[0], allInsurances[0], allGenders[2], "914 681 3115", false, allAgeGroups[1]);
let jenniferZagarino = provider.makeProvider("Jennifer", "Zagarino", [allLocations[8]], [allSpecialties[9]], allTitles[2], true, false, departingStatus[0], allInsurances[0], allGenders[1], "203 210 2841", false, allAgeGroups[1]);
let jonathanCorti = provider.makeProvider("Jonathan", "Corti", [allLocations[0]], [allSpecialties[9]], allTitles[2], true, false, departingStatus[0], allInsurances[0], allGenders[2], "", false, allAgeGroups[1]);
let kellyChase = provider.makeProvider("Kelly", "Chase", [allLocations[3]], [allSpecialties[9]], allTitles[2], true, false, departingStatus[0], allInsurances[0], allGenders[1], "914 681 3115", false, allAgeGroups[1]);
let leonidesCelino = provider.makeProvider("Leonides", "Celino", [allLocations[3]], [allSpecialties[9]], allTitles[2], true, false, departingStatus[0], allInsurances[0], allGenders[2], "914 681 3115", false, allAgeGroups[1]);
let nataliyaYatsevich = provider.makeProvider("Nataliya", "Yat", [allLocations[0]], [allSpecialties[9]], allTitles[2], true, false, departingStatus[0], allInsurances[0], allGenders[1], "", false, allAgeGroups[1]);
let patriciaCerbo = provider.makeProvider("Patricia", "Cerbo", [allLocations[3]], [allSpecialties[9]], allTitles[2], true, false, departingStatus[0], allInsurances[0], allGenders[1], "914 681 3115", false, allAgeGroups[1]);
let paulRobertson = provider.makeProvider("Paul", "Robertson", [allLocations[3]], [allSpecialties[9]], allTitles[2], true, false, departingStatus[0], allInsurances[0], allGenders[2], "914 681 3115", false, allAgeGroups[1]);
//Podiatry
let haroldGoldStein = provider.makeProvider("Harold", "Goldstein", [allLocations[2], allLocations[1]], [allSpecialties[17]], allTitles[2], true, false, departingStatus[0], allInsurances[0], allGenders[2], ["914 681 3115", "914 848 8751"], false, allAgeGroups[1]);
let ivanHerstik = provider.makeProvider("Ivan", "Herstik", [allLocations[3], allLocations[5]], [allSpecialties[17]], allTitles[2], true, false, departingStatus[0], allInsurances[0], allGenders[2], ["914 848 8071", "914 848 8751"], false, allAgeGroups[1]);
let josephValetta = provider.makeProvider("Joseph", "Valetta", [allLocations[2], allLocations[1]], [allSpecialties[17]], allTitles[2], true, false, departingStatus[0], allInsurances[0], allGenders[2], ["914 681 5260", "914 848 8751"], false, allAgeGroups[1]);
let scottHausen = provider.makeProvider("Scott", "Hausen", [allLocations[4], allLocations[6]], [allSpecialties[17]], allTitles[2], true, false, departingStatus[0], allInsurances[0], allGenders[2], "914 681 3115", false, allAgeGroups[1]);
//Pulmonary
let brunoDiCosmo = provider.makeProvider("Bruno", "DiCosmo", [allLocations[1], allLocations[3]], [allSpecialties[5], allSpecialties[10]], allTitles[2], true, false, departingStatus[0], allInsurances[0], allGenders[2], "914 848 8778", true, allAgeGroups[1]);
let emmanuelWurm = provider.makeProvider("Emmanuel", "Wurm", [allLocations[2]], [allSpecialties[10]], allTitles[2], true, false, departingStatus[0], allInsurances[0], allGenders[2], "914 681 5217", true, allAgeGroups[1]);
let jamesDoyle = provider.makeProvider("James", "Doyle", [allLocations[1]], [allSpecialties[5], allSpecialties[10]], allTitles[2], true, false, departingStatus[0], allInsurances[0], allGenders[2], "914 848 8778", false, allAgeGroups[1]);
let lisaYoukeles = provider.makeProvider("Lisa", "Youkeles", [allLocations[6]], [allSpecialties[5], allSpecialties[10]], allTitles[2], true, false, departingStatus[0], allInsurances[0], allGenders[1], "914 607 5821", false, allAgeGroups[1]);
let paulWeinstein = provider.makeProvider("Paul", "Weinstein", [allLocations[5]], [allSpecialties[5], allSpecialties[10]], allTitles[2], true, false, departingStatus[0], allInsurances[0], allGenders[2], "914 848 8051", true, allAgeGroups[1]);
let rossMazo = provider.makeProvider("Ross", "Mazo", [allLocations[2]], [allSpecialties[5], allSpecialties[10]], allTitles[2], true, false, departingStatus[0], allInsurances[0], allGenders[2], "914 681 5217", false, allAgeGroups[1]);
let samanthaDannunzio = provider.makeProvider("Samantha", "D'Annunzio", [allLocations[1]], [allSpecialties[5], allSpecialties[10]], allTitles[2], true, false, departingStatus[0], allInsurances[0], allGenders[1], "914 848 8778", false, allAgeGroups[1]);
let smithaNair = provider.makeProvider("Smitha", "Nair", [allLocations[3]], [allSpecialties[10]], allTitles[2], true, false, departingStatus[0], allInsurances[0], allGenders[1], "914 831 4101", false, allAgeGroups[1]);
let stevenMeixler = provider.makeProvider("Steven", "Meixler", [allLocations[2]], [allSpecialties[5], allSpecialties[10]], allTitles[2], true, false, departingStatus[0], allInsurances[0], allGenders[2], "914 681 5217", true, allAgeGroups[1]);
//Rheumatology
let dianaGoldenberg = provider.makeProvider("Diana", "Goldenberg", [allLocations[6]], [allSpecialties[11]], allTitles[2], true, false, departingStatus[0], allInsurances[0], allGenders[1], "914 607 5846", false, allAgeGroups[1]);
let janeWachs = provider.makeProvider("Jane", "Wachs", [allLocations[5]], [allSpecialties[11]], allTitles[2], true, false, departingStatus[0], allInsurances[0], allGenders[1], "914 848 8051", false, allAgeGroups[1]);
let mariaDynkin = provider.makeProvider("Maria", "Dynkin", [allLocations[6], allLocations[5]], [allSpecialties[11]], allTitles[2], true, false, departingStatus[0], allInsurances[0], allGenders[1], ["914 607 5846", "914 457 1195"], true, allAgeGroups[1]);
let svetlanaKrasnokutsky = provider.makeProvider("Svetlana", "Krasnokutsky", [allLocations[3]], [allSpecialties[11]], allTitles[2], true, false, departingStatus[0], allInsurances[0], allGenders[1], "914 607 6280", true, allAgeGroups[1]);
//Urology
let barryKimmel = provider.makeProvider("Barry", "Kimmel", [allLocations[5], allLocations[1], allLocations[3]], [allSpecialties[18]], allTitles[2], true, false, departingStatus[0], allInsurances[0], allGenders[2], ["914 848 8778", "914 848 8778", "914 607 6274"], true, allAgeGroups[1]);
let bryanBlair = provider.makeProvider("Bryan", "Blair", [allLocations[1], allLocations[2], allLocations[5]], [allSpecialties[18]], allTitles[2], true, false, departingStatus[0], allInsurances[0], allGenders[2], ["914 681 5264", "914 681 5264", "914 681 5264"], false, allAgeGroups[1]);
let juddBoczko = provider.makeProvider("Judd", "Boczko", [allLocations[1], allLocations[2], allLocations[6]], [allSpecialties[18]], allTitles[2], true, false, departingStatus[0], allInsurances[0], allGenders[2], ["914 681 5264", "914 681 5264", "914 681 5264"], false, allAgeGroups[1]);
let kellyAnnunziato = provider.makeProvider("Kelly", "Annunziato", [allLocations[2]], [allSpecialties[18]], allTitles[2], true, false, departingStatus[0], allInsurances[0], allGenders[1], "914 681 5264", true, allAgeGroups[1]);
let nicoleFleischmann = provider.makeProvider("Nicole", "Fleischmann", [allLocations[5], allLocations[3]], [allSpecialties[18]], allTitles[2], true, false, departingStatus[0], allInsurances[0], allGenders[1], ["914 607 6274", "914 607 6274"], false, allAgeGroups[1]);
let sethLerner = provider.makeProvider("Seth", "Lerner", [allLocations[3]], [allSpecialties[18]], allTitles[2], true, false, departingStatus[0], allInsurances[0], allGenders[1], "914 607 6274", false, allAgeGroups[1]);


//let georgePicorelli = provider.makeProvider("George", "Picorelli");
//let stevenDiCairano = provider.makeProvider("Steven", "DiCairano");
//let michaelAgastin = provider.makeProvider("Michael", "Agastin");
//let josephValetta = provider.makeProvider("Joseph", "Valetta");
//let hashemHashem = provider.makeProvider("Hashem", "Hashem");


//FUNCTION DECLARATIONS

//This is the leveshteinDistance function, it allows for fuzzy search. 
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

// Format Location Name

const formatLocationName = (location) => {
  const locationMap = {
    "rye": "Rye",
    "whiteplains": "White Plains",
    "purchase": "Purchase",
    "yonkersbt": "Yonkers Boyce Thompson",
    "yonkersrh": "Yonkers Ridge Hill",
    "newrochelle": "New Rochelle",
    "greenwich": "Greenwich",
    "stamford": "Stamford",
  };

  // Check if location is an array
  if (Array.isArray(location)) {
    // Map each location in the array to its formatted name using locationMap
    const formattedLocations = location.map(loc => locationMap[loc] || loc);
    // Join the formatted location names into a comma-separated string
    return formattedLocations.join(", ");
  }

  // If location is a string, format it using locationMap
  return locationMap[location] || location;
};

// Get Address from Location Name

const getLocationAddress = (location) => {
  const addressMap = {
    "rye": "1 Theall Road",
    "whiteplains": "210 Westchester Avenua",
    "purchase": "3030 Westchester Avenue",
    "yonkersbt": "1084 North Broadway",
    "yonkersrh": "73 Market Street",
    "newrochelle": "171 Huguenot Street",
    "greenwich": "644 West Putnam Avenue",
    "stamford": "1281 East Main Street",
  }

  // Check if location is an array
  if (Array.isArray(location)) {
    // Map each location in the array to its formatted name using addressMap
    const formattedLocations = location.map(loc => addressMap[loc] || loc);
    // Join the formatted location names into a comma-separated string
    //return formattedLocations.join(", ");
  };

  // If location is a string, format it using locationMap
  return addressMap[location] || location;
};


// Format Specialty Name

const formatSpecialtyName = (specialty) => {
  const specialtyMap = {
    "internalmedicine": "Internal Medicine",
    "allergy": "Allergy",
    "bariatricsurgery": "Bariatric Surgery",
    "cardiology": "Cardiology",
    "dermatology": "Dermatology",
    "endocrinology": "Endocrinology",
    "gastroenterology": "Gastroenterology",
    "nephrology": "Nephrology",
    "oncology": "Oncology",
    "pediatrics": "Pediatrics",
    "physicaltherapy": "Physical Therapy",
    "pulmonology": "Pulmonology",
    "rheumatology": "Rheumatology",
    "weightmanagement": "Weight Management",
    "chiropractics": "Chiropractics",
    "obgyn": "OBGYN",
  };

  // Check if specialty is an array
  if (Array.isArray(specialty)) {
    // Map each specialty in the array to its formatted name using specialtyMap
    const formattedSpecialties = specialty.map(spec => specialtyMap[spec] || spec);
    // Join the formatted specialty names into a comma-separated string
    return formattedSpecialties.join(", ");
  }

  // If location is a string, format it using locationMap
  return specialtyMap[specialty] || specialty;
};

// Get commot symptoms from specialty
const getCommonSymptoms = (specialty) => {
  console.log(specialty);
  const commonSymptomsMap = {
    "internalmedicine": "Fever, Cough, Shortness of Breath, Fatigue, Muscle Aches, Headache, Loss of Taste or Smell, Sore Throat, Diarrhea, Nausea, Vomiting",
    "allergy": "Itchy Eyes, Sneezing, Runny Nose, Cough, Shortness of Breath, Fatigue, Muscle Aches, Headache, Loss of Taste or Smell, Sore Throat, Diarrhea, Nausea, Vomiting",
    "bariatricsurgery": "Fever, Cough, Shortness of Breath, Fatigue, Muscle Aches, Headache, Loss of Taste or Smell, Sore Throat, Diarrhea, Nausea, Vomiting",
    "cardiology": "Chest Pain, Shortness of Breath, Fatigue, Muscle Aches, Headache, Loss of Taste or Smell, Sore Throat, Diarrhea, Nausea, Vomiting",
    "dermatology": "Itchy Skin, Rash, Fatigue, Muscle Aches, Headache, Loss of Taste or Smell, Sore Throat, Diarrhea, Nausea, Vomiting",
    "endocrinology": "Fever, Cough, Shortness of Breath, Fatigue, Muscle Aches, Headache, Loss of Taste or Smell, Sore Throat, Diarrhea, Nausea, Vomiting",
    "gastroenterology": "Diarrhea, Nausea, Vomiting, Fatigue, Muscle Aches, Headache, Loss of Taste or Smell, Sore Throat, Diarrhea, Nausea, Vomiting",
    "nephrology": "Fever, Cough, Shortness of Breath, Fatigue, Muscle Aches, Headache, Loss of Taste or Smell, Sore Throat, Diarrhea, Nausea, Vomiting",
    "oncology": "Fever, Cough, Shortness of Breath, Fatigue, Muscle Aches, Headache, Loss of Taste or Smell, Sore Throat, Diarrhea, Nausea, Vomiting",
    "pediatrics": "Fever, Cough, Shortness of Breath, Fatigue, Muscle Aches, Headache, Loss of Taste or Smell, Sore Throat, Diarrhea, Nausea, Vomiting",
    "physicaltherapy": "Fever, Cough, Shortness of Breath, Fatigue, Muscle Aches, Headache, Loss of Taste or Smell, Sore Throat, Diarrhea, Nausea, Vomiting",
    "pulmonology": "Cough, Shortness of Breath, Fatigue, Muscle Aches, Headache, Loss of Taste or Smell, Sore Throat, Diarrhea, Nausea, Vomiting",
    "rheumatology": "Fever, Cough, Shortness of Breath, Fatigue, Muscle Aches, Headache, Loss of Taste or Smell, Sore Throat, Diarrhea, Nausea, Vomiting",
    "weightmanagement": "Fever, Cough, Shortness of Breath, Fatigue, Muscle Aches, Headache, Loss of Taste or Smell, Sore Throat, Diarrhea, Nausea, Vomiting",
  };

  let commonSymptoms = "";
  if (Array.isArray(specialty)) {
    commonSymptoms = specialty.map(spec => commonSymptomsMap[spec] || spec)
  } else {
    commonSymptoms = commonSymptomsMap[specialty] || specialty;
  };

  return commonSymptoms;
};
// Display Results Function

const displaySearchResults = (results) => {
  const searchResults = document.getElementById("search-results");

  // Clear any previous search results
  searchResults.innerHTML = "";

  // If there are no results, display a message
  if (results.length === 0) {
    const noResultsMsg = document.createElement("div");
    noResultsMsg.classList.add("no-results");
    noResultsMsg.textContent = "No results found.";
    searchResults.appendChild(noResultsMsg);
  } else {
    // Otherwise, loop through the results and create a card for each provider
    results.forEach((provider) => {
      const providerCard = document.createElement("div");
      providerCard.classList.add("provider-card");

      // ICONS
      // Create Gender Icon
      var genderIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      if (provider.gender === "female") {
        genderIcon.setAttribute("width", "20");
        genderIcon.setAttribute("height", "20");
        genderIcon.setAttribute("viewBox", "0 0 20 20");

        const genderIconPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
        genderIconPath.setAttribute("fill", "green");
        genderIconPath.setAttribute("d", "M11 21v-2H9v-2h2v-2.1q-1.975-.35-3.238-1.888T6.5 9.45q0-2.275 1.613-3.862T12 4q2.275 0 3.888 1.588T17.5 9.45q0 2.025-1.263 3.563T13 14.9V17h2v2h-2v2h-2Zm1-8q1.45 0 2.475-1.025T15.5 9.5q0-1.45-1.025-2.475T12 6q-1.45 0-2.475 1.025T8.5 9.5q0 1.45 1.025 2.475T12 13Z");
        genderIcon.appendChild(genderIconPath);
      }
      else if (provider.gender === "male") {
        genderIcon.setAttribute("width", "20");
        genderIcon.setAttribute("height", "20");
        genderIcon.setAttribute("viewBox", "0 0 20 20");

        const genderIconPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
        genderIconPath.setAttribute("fill", "green");
        genderIconPath.setAttribute("d", "M20 4v6h-2V7.425l-3.975 3.95q.475.7.725 1.488T15 14.5q0 2.3-1.6 3.9T9.5 20q-2.3 0-3.9-1.6T4 14.5q0-2.3 1.6-3.9T9.5 9q.825 0 1.625.237t1.475.738L16.575 6H14V4h6ZM9.5 11q-1.45 0-2.475 1.025T6 14.5q0 1.45 1.025 2.475T9.5 18q1.45 0 2.475-1.025T13 14.5q0-1.45-1.025-2.475T9.5 11Z");
        genderIcon.appendChild(genderIconPath);
      };

      // Create location icon
      const locationIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      locationIcon.setAttribute("width", "24");
      locationIcon.setAttribute("height", "24");
      locationIcon.setAttribute("viewBox", "0 0 24 24");

      const locationIconPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
      locationIconPath.setAttribute("fill", "green");
      locationIconPath.setAttribute("d", "M12 12q.825 0 1.413-.588T14 10q0-.825-.588-1.413T12 8q-.825 0-1.413.588T10 10q0 .825.588 1.413T12 12Zm0 10q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2q3.175 0 5.588 2.225T20 10.2q0 2.5-1.988 5.438T12 22Z");
      locationIcon.appendChild(locationIconPath);

      const locationIconsArray = [];

      if (Array.isArray(provider.office)) {
        provider.office.forEach((office) => {
          const locationIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
          locationIcon.setAttribute("width", "24");
          locationIcon.setAttribute("height", "24");
          locationIcon.setAttribute("viewBox", "0 0 24 24");
          const locationIconPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
          locationIconPath.setAttribute("fill", "green");
          locationIconPath.setAttribute("d", "M12 12q.825 0 1.413-.588T14 10q0-.825-.588-1.413T12 8q-.825 0-1.413.588T10 10q0 .825.588 1.413T12 12Zm0 10q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2q3.175 0 5.588 2.225T20 10.2q0 2.5-1.988 5.438T12 22Z");
          locationIcon.appendChild(locationIconPath);
          locationIconsArray.push(locationIcon);
        })
      };

      // Create fax icon
      const faxIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      faxIcon.setAttribute("width", "24");
      faxIcon.setAttribute("height", "24");
      faxIcon.setAttribute("viewBox", "0 0 24 24");

      const faxIconPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
      faxIconPath.setAttribute("fill", "green");
      faxIconPath.setAttribute("d", "M8 20V4h10v5h1q1.25 0 2.125.875T22 12v8H8Zm-3.5 1q1.05 0 1.775-.725T7 18.5v-8q0-1.05-.725-1.775T4.5 8q-1.05 0-1.775.725T2 10.5v8q0 1.05.725 1.775T4.5 21ZM10 9h6V6h-6v3Zm6 5q.425 0 .713-.288T17 13q0-.425-.288-.713T16 12q-.425 0-.713.288T15 13q0 .425.288.713T16 14Zm3 0q.425 0 .713-.288T20 13q0-.425-.288-.713T19 12q-.425 0-.713.288T18 13q0 .425.288.713T19 14Zm-3 3q.425 0 .713-.288T17 16q0-.425-.288-.713T16 15q-.425 0-.713.288T15 16q0 .425.288.713T16 17Zm3 0q.425 0 .713-.288T20 16q0-.425-.288-.713T19 15q-.425 0-.713.288T18 16q0 .425.288.713T19 17Zm-9 0h4v-5h-4v5Z");
      faxIcon.appendChild(faxIconPath);
      faxIcon.style.display = "inline";

      const faxIconsArray = [];

      if (Array.isArray(provider.office)) {
        provider.office.forEach((office) => {
          const faxIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
          faxIcon.setAttribute("width", "24");
          faxIcon.setAttribute("height", "24");
          faxIcon.setAttribute("viewBox", "0 0 24 24");
          const faxIconPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
          faxIconPath.setAttribute("fill", "green");
          faxIconPath.setAttribute("d", "M8 20V4h10v5h1q1.25 0 2.125.875T22 12v8H8Zm-3.5 1q1.05 0 1.775-.725T7 18.5v-8q0-1.05-.725-1.775T4.5 8q-1.05 0-1.775.725T2 10.5v8q0 1.05.725 1.775T4.5 21ZM10 9h6V6h-6v3Zm6 5q.425 0 .713-.288T17 13q0-.425-.288-.713T16 12q-.425 0-.713.288T15 13q0 .425.288.713T16 14Zm3 0q.425 0 .713-.288T20 13q0-.425-.288-.713T19 12q-.425 0-.713.288T18 13q0 .425.288.713T19 14Zm-3 3q.425 0 .713-.288T17 16q0-.425-.288-.713T16 15q-.425 0-.713.288T15 16q0 .425.288.713T16 17Zm3 0q.425 0 .713-.288T20 16q0-.425-.288-.713T19 15q-.425 0-.713.288T18 16q0 .425.288.713T19 17Zm-9 0h4v-5h-4v5Z");
          faxIcon.appendChild(faxIconPath);
          faxIconsArray.push(faxIcon);
        })
      };

      // SPECIALTY ICONS
      // Unknown Specialty
      const UnknownSpecialtyIconSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      UnknownSpecialtyIconSvg.setAttribute("width", "24");
      UnknownSpecialtyIconSvg.setAttribute("height", "24");
      UnknownSpecialtyIconSvg.setAttribute("viewBox", "0 0 24 24");

      const UnknownSpecialtyIconPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
      UnknownSpecialtyIconPath.setAttribute("fill", "green");
      UnknownSpecialtyIconPath.setAttribute("d", "M12.025 16q-.6 0-1.012-.425t-.363-1q.075-1.05.5-1.825t1.35-1.6q1.025-.9 1.563-1.563t.537-1.512q0-1.025-.687-1.7T12 5.7q-.8 0-1.363.338t-.912.837q-.35.5-.862.675t-.988-.025q-.575-.25-.787-.825t.087-1.075Q7.9 4.5 9.125 3.75T12 3q2.625 0 4.038 1.462t1.412 3.513q0 1.25-.537 2.138t-1.688 2.012q-.85.8-1.2 1.3t-.475 1.15q-.1.625-.525 1.025t-1 .4ZM12 22q-.825 0-1.413-.588T10 20q0-.825.588-1.413T12 18q.825 0 1.413.588T14 20q0 .825-.588 1.413T12 22Z");
      UnknownSpecialtyIconSvg.appendChild(UnknownSpecialtyIconPath);

      const UnknownSpecialtyIcon = document.createElement("div");
      //UnknownSpecialtyIcon.appendChild(UnknownSpecialtyIconSvg);

      //// Internal Medicine
      const internalMedicineIconSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      internalMedicineIconSvg.setAttribute("width", "24");
      internalMedicineIconSvg.setAttribute("height", "24");
      internalMedicineIconSvg.setAttribute("viewBox", "0 0 24 24");

      const internalMedicineIconPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
      internalMedicineIconPath.setAttribute("fill", "green");
      internalMedicineIconPath.setAttribute("d", "M10.5 17h3v-2.5H16v-3h-2.5V9h-3v2.5H8v3h2.5V17ZM4 21V9l8-6l8 6v12H4Z");
      internalMedicineIconSvg.appendChild(internalMedicineIconPath);

      const internalMedicineIcon = document.createElement("div");
      internalMedicineIcon.appendChild(internalMedicineIconSvg);

      //// Allergy
      const allergyIconSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      allergyIconSvg.setAttribute("width", "24");
      allergyIconSvg.setAttribute("height", "24");
      allergyIconSvg.setAttribute("viewBox", "0 0 24 24");

      const allergyIconPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
      allergyIconPath.setAttribute("fill", "green");
      allergyIconPath.setAttribute("d", "M16 12.77a2 2 0 0 1-.14-2.65a5 5 0 0 0-2.82-8A5.74 5.74 0 0 0 12 2a5 5 0 0 0-5 5a5 5 0 0 0 1.11 3.12a2 2 0 0 1-.11 2.6a5.5 5.5 0 0 0 2.81 9.15A5.42 5.42 0 0 0 12 22a5.5 5.5 0 0 0 4-9.23M13 5a1 1 0 1 1-1 1a1 1 0 0 1 1-1m-2 13a1 1 0 1 1 1-1a1 1 0 0 1-1 1m1-3a1 1 0 1 1 1 1a1 1 0 0 1-1-1m2 4a1 1 0 1 1 1-1a1 1 0 0 1-1 1Z");
      allergyIconSvg.appendChild(allergyIconPath);

      const allergyIcon = document.createElement("div");
      allergyIcon.appendChild(allergyIconSvg);

      //// Bariatric surgery
      const bariatricSurgeryIconSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      bariatricSurgeryIconSvg.setAttribute("width", "24");
      bariatricSurgeryIconSvg.setAttribute("height", "24");
      bariatricSurgeryIconSvg.setAttribute("viewBox", "0 0 24 24");

      const bariatricSurgeryIconPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
      bariatricSurgeryIconPath.setAttribute("fill", "green");
      bariatricSurgeryIconPath.setAttribute("d", "M12.4 15.35L8.65 11.6l8.3-8.3q.3-.3.713-.3t.712.3L20.7 5.625q.3.3.3.713t-.3.712l-8.3 8.3ZM11 21l2-2h9v2H11Zm-5.925 0q-1.15 0-2.213-.45T1 19.3l6.625-6.6l2.6 2.6q.35.35.55.8t.2.95q0 .5-.2.962t-.55.813l-.475.475q-.8.8-1.862 1.25T5.675 21h-.6Z");
      bariatricSurgeryIconSvg.appendChild(bariatricSurgeryIconPath);

      const bariatricSurgeryIcon = document.createElement("div");
      bariatricSurgeryIcon.appendChild(bariatricSurgeryIconSvg);

      //// Gastroenterology
      const gastroenterologyIconSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      gastroenterologyIconSvg.setAttribute("width", "24");
      gastroenterologyIconSvg.setAttribute("height", "24");
      gastroenterologyIconSvg.setAttribute("viewBox", "0 0 24 24");

      const gastroenterologyIconPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
      gastroenterologyIconPath.setAttribute("fill", "green");
      gastroenterologyIconPath.setAttribute("d", "M3 22v-6q0-1.25.875-2.125T6 13h2q1.25 0 2.125-.875T11 10q0-.425-.288-.713T10 9q-.825 0-1.413-.588T8 7V2h6v2q2.925 0 4.963 2.038T21 11v1q0 2.925-2.038 4.963T14 19h-4q-.425 0-.713.288T9 20v2H3Z");
      gastroenterologyIconSvg.appendChild(gastroenterologyIconPath);

      const gastroenterologyIcon = document.createElement("div");
      gastroenterologyIcon.appendChild(gastroenterologyIconSvg);

      //// Neurology
      const neurologyIconSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      neurologyIconSvg.setAttribute("width", "24");
      neurologyIconSvg.setAttribute("height", "24");
      neurologyIconSvg.setAttribute("viewBox", "0 0 24 24");

      const neurologyIconPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
      neurologyIconPath.setAttribute("fill", "green");
      neurologyIconPath.setAttribute("d", "M14.25 21q-.325 0-.638-.063T13 20.75V3.25q.3-.125.613-.188T14.25 3q1.3 0 2.238.875t1.012 2.15q1.475.2 2.488 1.325T21 10q0 .55-.138 1.05t-.412.95q.275.45.413.963T21 14q0 1.55-1.012 2.663t-2.513 1.312q-.125 1.25-1.038 2.138T14.25 21Zm-4.5 0q-1.275 0-2.2-.888T6.5 17.976Q5 17.775 4 16.65T3 14q0-.525.138-1.037T3.55 12q-.275-.45-.412-.95T3 10q0-1.525 1-2.638T6.475 6.05Q6.55 4.775 7.5 3.887T9.75 3q.325 0 .638.075t.612.2V20.75q-.3.125-.613.188T9.75 21Z");
      neurologyIconSvg.appendChild(neurologyIconPath);

      const neurologyIcon = document.createElement("div");
      neurologyIcon.appendChild(neurologyIconSvg);

      //// Pulmonology
      const pulmonologyIconSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      pulmonologyIconSvg.setAttribute("width", "24");
      pulmonologyIconSvg.setAttribute("height", "24");
      pulmonologyIconSvg.setAttribute("viewBox", "0 0 24 24");

      const pulmonologyIconPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
      pulmonologyIconPath.setAttribute("fill", "green");
      pulmonologyIconPath.setAttribute("d", "M5 21q-1.275 0-2.138-.863T2 18v-4.175L4.625 6.8q.3-.825 1.05-1.312T7.3 5q.65 0 1.225.325t.95.875V9l-2.55 2.55L8 12.6l3-3V2h2v7.6l3 3l1.05-1.05L14.5 9V6.2q.375-.55.95-.875T16.675 5q.875 0 1.613.488T19.35 6.8l2.625 7.025V18q0 1.275-.875 2.138T18.975 21h-3q-1.25 0-2.112-.863T13 18v-2l.375-3.175l-1.375-1.4l-1.4 1.4L11 16v2q0 1.275-.875 2.138T8 21H5Z");
      pulmonologyIconSvg.appendChild(pulmonologyIconPath);

      pulmonologyIcon = document.createElement("div");
      pulmonologyIcon.appendChild(pulmonologyIconSvg);

      //// Physical Therapy
      const physicalTherapyIconSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      physicalTherapyIconSvg.setAttribute("width", "24");
      physicalTherapyIconSvg.setAttribute("height", "24");
      physicalTherapyIconSvg.setAttribute("viewBox", "0 0 24 24");

      const physicalTherapyIconPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
      physicalTherapyIconPath.setAttribute("fill", "green");
      physicalTherapyIconPath.setAttribute("d", "M16 17H9.375q-.575 0-.938.35t-.437.8q-.075.45.138.875t.762.625l5.725 2.275q.25.1.488.063t.437-.163q.2-.125.325-.337T16 21v-4ZM10 2q1.65 0 2.825 1.175T14 6q0 1.65-1.175 2.825T10 10q-1.65 0-2.825-1.175T6 6q0-1.65 1.175-2.825T10 2Zm9.225 9q.725 0 1.25.488T21 12.7q0 .575-.325 1.05t-.875.675L18 15H9.375q-1.425 0-2.4.975T6 18.375q0 .45.125.863T6.45 20H3v-4q0-2.075 1.463-3.538T8 11h11.225Z");
      physicalTherapyIconSvg.appendChild(physicalTherapyIconPath);

      const physicalTherapyIcon = document.createElement("div");
      physicalTherapyIcon.appendChild(physicalTherapyIconSvg);

      //// podiatry
      const podiatryIconSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      podiatryIconSvg.setAttribute("width", "24");
      podiatryIconSvg.setAttribute("height", "24");
      podiatryIconSvg.setAttribute("viewBox", "0 0 24 24");

      const podiatryIconPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
      podiatryIconPath.setAttribute("fill", "green");
      podiatryIconPath.setAttribute("d", "M4 20q-.825 0-1.413-.588T2 18v-1q0-.825.588-1.413T4 15q.825 0 1.413.588T6 17v1q0 .825-.588 1.413T4 20Zm17.05 0H19.5q-.25 0-.4-.188t-.1-.437l.275-1.075q.05-.2.2-.313t.35-.062l1.35.2q.35.05.588.313t.237.612q0 .4-.275.675T21.05 20Zm-3.7-.35l-2.85-.95q-.2-.075-.3-.275t0-.4l.75-1.725q.1-.2.313-.288t.412.038l2.4 1.4q.15.075.213.225T18.3 18l-.3 1.3q-.05.2-.25.313t-.4.037ZM12.7 17.9l-1.95-.5q-.35-.1-.55-.363t-.2-.612V15.5q0-.575.2-1.075t.675-.8q.125-.075.25-.088t.25.063l2.55 1.4q.175.1.238.287t-.013.363l-.875 1.975q-.075.175-.238.25t-.337.025ZM7.45 17q-.2 0-.325-.113t-.15-.287q-.175-1.125-1.012-1.863T4 14h-.5q-.2 0-.35-.15T3 13.5q0-.2.15-.35T3.5 13h.9q.5 0 .95-.125t.875-.4q.125-.075.275-.075t.275.075q.5.3 1.075.413T9 13q.3 0 .425.313t-.075.612q-.225.35-.287.75T9 15.5v1q0 .2-.15.35T8.5 17H7.45Zm-3-5q-1.05 0-1.75-.688T2 9.6q0-.475.175-.925t.525-.8l1.3-1.3V4h5v2.575l1.3 1.3q.35.35.525.788t.175.912q0 1.025-.7 1.725t-1.75.7q-.475 0-.9-.2t-.775-.5q-.1-.075-.175-.138t-.2-.062q-.175 0-.375.2q-.35.3-.787.487T4.45 12Z");
      podiatryIconSvg.appendChild(podiatryIconPath);

      const podiatryIcon = document.createElement("div");
      podiatryIcon.appendChild(podiatryIconSvg);



      //// Endocrinology
      const endocrinologyIconSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      endocrinologyIconSvg.setAttribute("width", "24");
      endocrinologyIconSvg.setAttribute("height", "24");
      endocrinologyIconSvg.setAttribute("viewBox", "0 0 24 24");

      const endocrinologyIconPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
      endocrinologyIconPath.setAttribute("fill", "green");
      endocrinologyIconPath.setAttribute("d", "m2.3 20.95l-.625-1.9q1.05-.35 1.688-1.225T4 15.85V5.4Q3.4 4.75 2.912 4t-.837-1.6l1.85-.8q1.05 2.45 3.238 3.925T12 7q2.65 0 4.838-1.475T20.075 1.6l1.85.8q-.35.85-.85 1.6T20 5.4v10.45q0 1.1.625 1.975T22.3 19.05l-.625 1.9q-1.65-.55-2.662-1.95T18 15.85v-8.7q-1.325.875-2.838 1.363T12 9q-1.65 0-3.175-.488T6 7.15v8.7Q6 17.6 4.975 19T2.3 20.95ZM10 19q-1.25 0-2.125-.875T7 16V9.725l1.35.325q1.15.275 2.087.963T12 12.65q.625-.95 1.563-1.638t2.087-.962L17 9.725V16q0 1.25-.875 2.125T14 19q-.575 0-1.088-.213T12 18.226q-.4.35-.913.563T10 19Z");
      endocrinologyIconSvg.appendChild(endocrinologyIconPath);

      const endocrinologyIcon = document.createElement("div");
      endocrinologyIcon.appendChild(endocrinologyIconSvg);

      //// Rheumatology
      const rheumatologyIconSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      rheumatologyIconSvg.setAttribute("width", "24");
      rheumatologyIconSvg.setAttribute("height", "24");
      rheumatologyIconSvg.setAttribute("viewBox", "0 0 24 24");

      const rheumatologyIconPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
      rheumatologyIconPath.setAttribute("fill", "green");
      rheumatologyIconPath.setAttribute("d", "M7 22v-4.35l-2.075-2.1q-.4-.425-.625-.937t-.275-1.038q.575.675 1.388 1.05T7.125 15q.775 0 1.463-.275T10 13.85q.05-.05.125-.1t.125-.075q.05.025.138.075t.137.1q.725.6 1.412.875t1.438.275q.925 0 1.737-.375t1.388-1.05q-.05.55-.275 1.063t-.625.912l-2.1 2.1V22H7Zm11.7-6.05q-.375-.125-.575-.5t-.075-.75q.15-.425.513-.613t.762-.037l3 1q.4.125.588.488t.037.787q-.125.375-.487.563t-.763.062l-3-1ZM19 13q-.425 0-.712-.288T18 12q0-.425.288-.713T19 11h3q.425 0 .713.288T23 12q0 .425-.288.713T22 13h-3Zm.325-3.05q-.4.125-.775-.05t-.5-.575q-.125-.425.063-.788t.587-.487l3-1q.4-.125.763.063t.487.587q.125.375-.05.75t-.575.5l-3 1ZM7.125 14q-1.3 0-2.212-.913T4 10.876q0-.65.25-1.213t.675-.987L7 6.575V2h6.5v4.55l2.1 2.1q.425.425.663 1t.237 1.225q0 1.3-.9 2.212T13.375 14q-.825 0-1.338-.313t-.862-.612q-.375-.3-.588-.362t-.337-.063q-.225 0-.463.15t-.437.275q-.35.3-.863.613T7.125 14Z");
      rheumatologyIconSvg.appendChild(rheumatologyIconPath);

      const rheumatologyIcon = document.createElement("div");
      rheumatologyIcon.appendChild(rheumatologyIconSvg);

      //// Cardiology
      const cardiologyIconSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      cardiologyIconSvg.setAttribute("width", "24");
      cardiologyIconSvg.setAttribute("height", "24");
      cardiologyIconSvg.setAttribute("viewBox", "0 0 24 24");

      const cardiologyIconPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
      cardiologyIconPath.setAttribute("fill", "green");
      cardiologyIconPath.setAttribute("d", "m10.7 12.725l-.85-1.275q-.125-.2-.35-.325T9.025 11h-6.55Q2.2 10.35 2.1 9.75T2 8.5q0-2.35 1.575-3.925T7.5 3q1.3 0 2.475.55T12 5.1q.85-1 2.025-1.55T16.5 3q2.35 0 3.925 1.575T22 8.5q0 .65-.1 1.25T21.525 11h-5.95L13.85 8.45q-.15-.225-.387-.338T12.95 8q-.325 0-.562.188t-.338.487l-1.35 4.05ZM12 21.35l-1.45-1.3q-2.625-2.35-4.3-4.025T3.625 13h4.8l1.725 2.55q.15.225.388.338t.512.112q.325 0 .563-.188t.337-.487l1.35-4.075l.875 1.3q.125.2.35.325T15 13h5.375q-.95 1.35-2.625 3.025t-4.3 4.025L12 21.35Z");
      cardiologyIconSvg.appendChild(cardiologyIconPath);

      const cardiologyIcon = document.createElement("div");
      cardiologyIcon.appendChild(cardiologyIconSvg)

      //// Dermatology
      const dermatologyIconSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      dermatologyIconSvg.setAttribute("width", "24");
      dermatologyIconSvg.setAttribute("height", "24");
      dermatologyIconSvg.setAttribute("viewBox", "0 0 24 24");

      const dermatologyIconPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
      dermatologyIconPath.setAttribute("fill", "green");
      dermatologyIconPath.setAttribute("d", "M2 21v-9q0-.825.588-1.413T4 10h5v2q0 1.25.875 2.125T12 15q1.25 0 2.125-.875T15 12v-2h5q.825 0 1.413.588T22 12v9H2Zm10-8q-.425 0-.713-.288T11 12q0-2.725.625-5.375T14.35 2.25q.325-.275.725-.238t.675.363q.275.325.238.725t-.363.675q-1.75 1.475-2.188 3.7T13 12q0 .425-.288.713T12 13Zm-6.25 2.5q.325 0 .537-.213t.213-.537q0-.325-.213-.537T5.75 14q-.325 0-.537.213T5 14.75q0 .325.213.537t.537.213Zm1 2.5q.325 0 .537-.213t.213-.537q0-.325-.213-.537T6.75 16.5q-.325 0-.537.213T6 17.25q0 .325.213.537T6.75 18Zm11.5-2.5q.325 0 .537-.213T19 14.75q0-.325-.213-.537T18.25 14q-.325 0-.537.213t-.213.537q0 .325.213.537t.537.213Z");
      dermatologyIconSvg.appendChild(dermatologyIconPath);

      const dermatologyIcon = document.createElement("div");
      dermatologyIcon.appendChild(dermatologyIconSvg);

      //// Nephrology
      const nephrologyIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      nephrologyIcon.setAttribute("width", "24");
      nephrologyIcon.setAttribute("height", "24");
      nephrologyIcon.setAttribute("viewBox", "0 0 24 24");

      const nephrologyIconPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
      nephrologyIconPath.setAttribute("fill", "green");
      nephrologyIconPath.setAttribute("d", "M9 21v-4.175q-.25.1-.488.138T8 17q-2.5 0-4.25-1.75T2 11V9q0-2.5 1.75-4.25T8 3q1.25 0 2.125.875T11 6q0 1.25-.875 2.125T8 9v2q1.25 0 2.125.875T11 14v7H9Zm4 0v-7q0-1.25.875-2.125T16 11V9q-1.25 0-2.125-.875T13 6q0-1.25.875-2.125T16 3q2.5 0 4.25 1.75T22 9v2q0 2.5-1.75 4.25T16 17q-.275 0-.513-.038T15 16.825V21h-2Z");
      nephrologyIcon.appendChild(nephrologyIconPath);

      //// Weigth Management
      const weightManagementIconSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      weightManagementIconSvg.setAttribute("width", "24");
      weightManagementIconSvg.setAttribute("height", "24");
      weightManagementIconSvg.setAttribute("viewBox", "0 0 24 24");

      const weightManagementIconPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
      weightManagementIconPath.setAttribute("fill", "green");
      weightManagementIconPath.setAttribute("d", "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 9c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3z");
      weightManagementIconSvg.appendChild(weightManagementIconPath);

      const weightManagementIcon = document.createElement("div");
      weightManagementIcon.appendChild(weightManagementIconSvg);


      //// Vascular
      const vascularIconSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      vascularIconSvg.setAttribute("width", "24");
      vascularIconSvg.setAttribute("height", "24");
      vascularIconSvg.setAttribute("viewBox", "0 0 24 24");

      const vascularIconPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
      vascularIconPath.setAttribute("fill", "green");
      vascularIconPath.setAttribute("d", "M4 24h10M44 8c-3.284.464-8.955 2.783-14.776 8.348C23.902 21.436 17.433 23.768 14 24m0 0c3.284.464 8.955 2.783 14.776 8.348C34.098 37.436 40.567 39.768 44 40");
      vascularIconSvg.appendChild(vascularIconPath);

      const vascularIcon = document.createElement("div");
      vascularIcon.appendChild(vascularIconSvg);



      const specialtyIconsArray = [internalMedicineIcon, gastroenterologyIcon, neurologyIcon, pulmonologyIcon, physicalTherapyIcon, endocrinologyIcon, rheumatologyIcon, cardiologyIcon, dermatologyIcon, nephrologyIcon, vascularIcon, allergyIcon, weightManagementIcon, , bariatricSurgeryIcon];

      specialtyIconsArray.forEach((provider) => {
        provider.classList.add("icon-wrap");
      })

      //
      const getSpecialtyIcon = (specialty) => {
        const specilatyMap = {
          "internalmedicine": internalMedicineIcon,
          "gastroenterology": gastroenterologyIcon,
          "neurology": neurologyIcon,
          "pulmonology": pulmonologyIcon,
          "physicaltherapy": physicalTherapyIcon,
          "endocrinology": endocrinologyIcon,
          "rheumatology": rheumatologyIcon,
          "cardiology": cardiologyIcon,
          "dermatology": dermatologyIcon,
          "nephrology": nephrologyIcon,
          "vascular": vascularIcon,
          "allergy": allergyIcon,
          "weightmanagement": weightManagementIcon,
          "bariatricsurgery": bariatricSurgeryIcon,
          "chiropractics": internalMedicineIcon,
          "podiatry": podiatryIcon,
          "urology": internalMedicineIcon,
        };
        return specilatyMap[specialty];
      }
      //

      var acceptanceIcon = "";
      // Create a green icon if the provider accepts new patients
      if (provider.acceptsNewPatients) {
        acceptanceIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        acceptanceIcon.setAttribute("width", "24");
        acceptanceIcon.setAttribute("height", "24");
        acceptanceIcon.setAttribute("viewBox", "0 0 24 24");

        let acceptanceIconPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
        acceptanceIconPath.setAttribute("fill", "green");
        acceptanceIconPath.setAttribute("d", "M19 17v2H7v-2s0-4 6-4s6 4 6 4m-3-9a3 3 0 1 0-3 3a3 3 0 0 0 3-3m3.2 5.06A5.6 5.6 0 0 1 21 17v2h3v-2s0-3.45-4.8-3.94M18 5a2.91 2.91 0 0 0-.89.14a5 5 0 0 1 0 5.72A2.91 2.91 0 0 0 18 11a3 3 0 0 0 0-6M8 10H5V7H3v3H0v2h3v3h2v-3h3Z");
        acceptanceIcon.appendChild(acceptanceIconPath);
        acceptanceIcon.style.marginLeft = "10px"; // add margin to the left of the icon
      }

      // Create a red icon if the provider does not accept new patients
      else if (provider.acceptsNewPatients === false) {
        acceptanceIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        acceptanceIcon.setAttribute("width", "24");
        acceptanceIcon.setAttribute("height", "24");
        acceptanceIcon.setAttribute("viewBox", "0 0 24 24");

        let acceptanceIconPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
        acceptanceIconPath.setAttribute("fill", "red");
        acceptanceIconPath.setAttribute("d", "M19 17v2H7v-2s0-4 6-4s6 4 6 4m-3-9a3 3 0 1 0-3 3a3 3 0 0 0 3-3m3.2 5.06A5.6 5.6 0 0 1 21 17v2h3v-2s0-3.45-4.8-3.94M18 5a2.91 2.91 0 0 0-.89.14a5 5 0 0 1 0 5.72A2.91 2.91 0 0 0 18 11a3 3 0 0 0 0-6M8 10H0v2h8Z");
        acceptanceIcon.appendChild(acceptanceIconPath);
        acceptanceIcon.style.marginLeft = "10px"; // add margin to the left of the icon
      }
      // Create an Icon for the additional language of the provider
      const languageIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      languageIcon.setAttribute("width", "24");
      languageIcon.setAttribute("height", "24");
      languageIcon.setAttribute("viewBox", "0 0 24 24");

      const languageIconPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
      languageIconPath.setAttribute("fill", "green");
      languageIconPath.setAttribute("d", "M10 8h8V6h-8v2Zm0 3h8V9h-8v2Zm0 3h5v-2h-5v2ZM7 8q.425 0 .713-.288T8 7q0-.425-.288-.713T7 6q-.425 0-.713.288T6 7q0 .425.288.713T7 8Zm0 3q.425 0 .713-.288T8 10q0-.425-.288-.713T7 9q-.425 0-.713.288T6 10q0 .425.288.713T7 11Zm0 3q.425 0 .713-.288T8 13q0-.425-.288-.713T7 12q-.425 0-.713.288T6 13q0 .425.288.713T7 14Zm-5 8V4q0-.825.588-1.413T4 2h16q.825 0 1.413.588T22 4v12q0 .825-.588 1.413T20 18H6l-4 4Z");
      languageIcon.appendChild(languageIconPath);


      // DISPLAY HEADER
      // Create a div for the card header
      const cardHeader = document.createElement("div");
      cardHeader.classList.add("card-header");
      providerCard.appendChild(cardHeader);

      // Create ROW ONE for the header
      const cardHeaderRow1 = document.createElement("div");
      cardHeaderRow1.classList.add("header-row-one");
      cardHeader.appendChild(cardHeaderRow1);

      // Display previously created gender Icon before the provider's name
      cardHeaderRow1.appendChild(genderIcon);

      // Create a heading for the provder's title
      const providerTitle = document.createElement("h2")
      providerTitle.textContent = provider.title;
      cardHeaderRow1.appendChild(providerTitle);

      // Create a heading for the provider's first name
      const providerName = document.createElement("h2");
      providerName.textContent = provider.firstName;
      cardHeaderRow1.appendChild(providerName);

      // Create a heading for the provider's last name
      const providerLastName = document.createElement("h2");
      providerLastName.textContent = provider.lastName;
      cardHeaderRow1.appendChild(providerLastName);

      // Display the acceptance icon
      cardHeaderRow1.appendChild(acceptanceIcon);

      // Display age group
      const providerAgeGroup = document.createElement("h2");
      providerAgeGroup.classList.add("age-group");
      providerAgeGroup.textContent = provider.ageGroup;
      cardHeaderRow1.appendChild(providerAgeGroup);


      // Create a ROW TWO for the header where the specialty items  will be located
      const cardHeaderRow2 = document.createElement("div");
      cardHeaderRow2.classList.add("header-row-two");
      cardHeader.appendChild(cardHeaderRow2);

      // Create a specialty item for each specialty the provider has
      console.log(provider.specialty);
      console.log(provider.firstName);
      provider.specialty.forEach((specialty) => {
        const specialtyItem = document.createElement("p");
        specialtyItem.classList.add("specialty");

        const providerSpecialty = document.createElement("p");
        providerSpecialty.textContent = formatSpecialtyName(specialty);

        const commonSymptoms = document.createElement("p");
        commonSymptoms.classList.add("common-symptoms");
        //commonSymptoms.textContent = getCommonSymptoms(specialty);
        //console.log(commonSymptoms.textContent);


        specialtyItem.appendChild(getSpecialtyIcon(specialty));
        specialtyItem.appendChild(providerSpecialty);
        cardHeaderRow2.appendChild(specialtyItem);
      });

      // Create a deployable ROW THREE for the common symptoms of each specialty, so it shows when the user clicks on the specialty
      const cardHeaderRow3 = document.createElement("div");
      cardHeaderRow3.classList.add("header-row-three");
      cardHeader.appendChild(cardHeaderRow3);

      // Create a common symptoms item for each specialty the provider has
      provider.specialty.forEach((specialty) => {
        const commonSymptomsItem = document.createElement("p");
        commonSymptomsItem.classList.add("common-symptoms");
        commonSymptomsItem.textContent = getCommonSymptoms(specialty);
        cardHeaderRow3.appendChild(commonSymptomsItem);
      });
      
      // DISPLAY INFO
      // Create a div for the information card
      const providerInfo = document.createElement("div");
      providerInfo.classList.add("information-card");
      providerCard.appendChild(providerInfo);

      //// DISPLAY LOCATION
      //// Create a separate row for the locations
      const locationRow = document.createElement("div");
      locationRow.classList.add("location-row");
      providerInfo.appendChild(locationRow);

      if (Array.isArray(provider.office)) {
        provider.office.forEach((office, index) => {
          //// Create a div for the location information
          const providerLocationInformation = document.createElement("div");
          locationRow.appendChild(providerLocationInformation);
          //// Display previously created location icon
          providerLocationInformation.appendChild(locationIconsArray[index]);
          //// Create a paragraph for the provider's location
          const providerLocation = document.createElement("p");
          providerLocation.textContent = formatLocationName(provider.office[index]);
          providerLocationInformation.appendChild(providerLocation);
          //// Create a paragraph for the provider's location address
          const providerLocationAddress = document.createElement("p");
          providerLocationAddress.textContent = getLocationAddress(provider.office[index]);
          providerLocationInformation.appendChild(providerLocationAddress);
        })
      }
      else {
        //// Create a div for the location information
        const providerLocationInformation = document.createElement("div");
        locationRow.appendChild(providerLocationInformation);
        //// Display previously created location icon
        providerLocationInformation.appendChild(locationIcon);
        //// Create a paragraph for the provider's location
        const providerLocation = document.createElement("p");
        providerLocation.textContent = formatLocationName(provider.office);
        providerLocationInformation.appendChild(providerLocation);
        //// Create a paragraph for the provider's location address
        const providerLocationAddress = document.createElement("p");
        providerLocationAddress.textContent = getLocationAddress(provider.office);
         providerLocationInformation.appendChild(providerLocationAddress);
      };
      //// DISPLAY FAX
      // Create a separate row for the fax numbers
      const faxRow = document.createElement("div");
      faxRow.classList.add("fax-row");
      providerInfo.appendChild(faxRow);

      if (Array.isArray(provider.fax)) {
        provider.fax.forEach((fax, index) => {
          //// Create a div for the fax information
          const providerFaxInformation = document.createElement("div");
          faxRow.appendChild(providerFaxInformation);
          //// Display previously created Fax icon
          providerFaxInformation.appendChild(faxIconsArray[index]);
          //// Create a paragraph for the provider's fax
          const providerFax = document.createElement("p");
          providerFax.textContent = provider.fax[index];
          providerFaxInformation.appendChild(providerFax);
        })
      }
      else {
        //// Create a div for the Fax information
        const providerFaxInformation = document.createElement("div");
        faxRow.appendChild(providerFaxInformation);
        //// Display previously created Fax icon
        providerFaxInformation.appendChild(faxIcon);
        //// Create a paragraph for the provider's fax
        const providerFax = document.createElement("p");
        providerFax.textContent = provider.fax;
        providerFaxInformation.appendChild(providerFax);
      };

      if (provider.speaksSpanish) {
        //// Create a div for the laguage information
        const providerLanguageInformation = document.createElement("div");
        //// Display previously created language icon
        providerLanguageInformation.appendChild(languageIcon);
        //// Create a paragraph for the name of the language
        const providerLanguage = document.createElement("p");
        providerLanguage.textContent = "Spanish";
        providerLanguageInformation.appendChild(providerLanguage);
        providerInfo.appendChild(providerLanguageInformation);
      }

      // Add the provider card to the search results div
      searchResults.appendChild(providerCard);
    });
  }
};

// SEARCH LOGIC

const runSearch = (event) => {
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
    selectedLanguage: document.getElementById("speaks-spanish").checked,
  };

  // Map over the array of all providers and create a new array of objects
  // that includes the original provider objects and a relevanceScore property
  const filteredProviders = provider.allProviders.map((provider) => {
    // Initialize the relevance score to 0
    let relevanceScore = 0;

    // Calculate the relevance score for each filter that matches the search criteria
    if (query.selectedSpecialty !== "" && provider.specialty.includes(query.selectedSpecialty)) {
      relevanceScore += 1;
    }

    if (query.selectedLocation !== "" && provider.office.includes(query.selectedLocation)) {
      relevanceScore += 1;
    }

    if (query.selectedGender !== "" && provider.gender === query.selectedGender) {
      relevanceScore += 1;
    }

    if (query.selectedInsurance !== "" && provider.insurances.includes(query.selectedInsurance)) {
      relevanceScore += 1;
    }

    if (query.selectedTitle !== "" && provider.title === query.selectedTitle) {
      relevanceScore += 1;
    }

    if (query.selectedAcceptance && provider.acceptsNewPatients === true) {
      relevanceScore += 1;
    }

    if (query.selectedLanguage && provider.speaksSpanish === true) {
      relevanceScore += 1;
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
      relevanceScore += nameRelevance;
    }

    // Include the relevance score in the provider object and return it
    return { ...provider, relevanceScore };
  })
    // Filter out any providers with a relevance score of 0
    .filter((provider) => {
      return provider.relevanceScore > 0;
    })
    // Sort the remaining providers in descending order by relevance score
    .sort((a, b) => {
      return b.relevanceScore - a.relevanceScore;
    });

  // Display the filtered providers in the user interface
  console.log(filteredProviders);
  displaySearchResults(filteredProviders);
};
//runSearch();
displaySearchResults(provider.allProviders);
