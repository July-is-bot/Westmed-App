

// Define an Icon class, with a constructor method that takes a name and a path as arguments, and creates a svg element with the given name and path.
class Icon {
  constructor(name = "current color", path) {
    // Add the name and path properties to the instance
    this._name = name;
    // Create a path element with the given path, and add it to the instance
    this._path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    this._path.setAttribute("fill", name);
    this._path.setAttribute("d", path);
    // Create a svg element with the given name and path, and add it to the instance
    this._svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    this._svg.setAttribute("viewBox", "0 0 24 24");
    this.svg.setAttribute("width", "24");
    this._svg.setAttribute("height", "24");
    // Add the path element to the svg element
    this._svg.appendChild(this._path);
    this._icon = document.createElement("div");
    this._icon.classList.add("icon");
    this._icon.appendChild(this._svg);
  }

  get name() {
    return this._name;
  }

  get path() {
    return this._path;
  }

  get svg() {
    return this._svg;
  }

  get icon() {
    return this._icon;
  }

  static createIcon(name, path) {
    return new Icon(name, path);
  }
}




// Define a Provider class
class Provider {
  // Declare a static property `allProviders` to store all instances of the class
  static allProviders = [];
  // Define a constructor method
  constructor(firstName, lastName, title, gender, specialty, acceptsNewPatients, office, fax, emergencyLine, languages, insurances, onLeave, departing, ageGroup) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._title = title;
    this._gender = gender;
    this._specialty = specialty || [];
    this._acceptsNewPatients = acceptsNewPatients;
    this._office = office || [];
    this._fax = fax || [];
    this._emergencyLine = emergencyLine || [];
    this._languages = languages || [];
    this._insurances = insurances || [];
    this._onLeave = onLeave;
    this._departing = departing;
    this._ageGroup = ageGroup;

    // Add the new instance to the `allProviders` array
    Provider.allProviders.push(this);
  }

  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get office() {
    return this._office;
  }

  get specialty() {
    return this._specialty;
  }

  get title() {
    return this._title;
  }

  get acceptsNewPatients() {
    return this._acceptsNewPatients;
  }

  get onLeave() {
    return this._onLeave;
  }

  get departing() {
    return this._departing;
  }

  get insurances() {
    return this._insurances;
  }

  get gender() {
    return this._gender;
  }

  get fax() {
    return this._fax;
  }

  get languages() {
    return this._languages;
  }

  get ageGroup() {
    return this._ageGroup;
  }

  get emergencyLine() {
    return this._emergencyLine;
  }

  getAddress() {
    const addressMap = {
      "whiteplains": "210 Westchester Ave, White Plains, NY 10601",
      "rye": "1 theall Rd, Rye, NY 10580",
      "purchase": "3030 Westchester ave, Purchase, NY 10577",
      "yonkersbt": ""
    };
  }

  getGenderIcon() {
    if (this._gender === "male") {
      return maleIcon.icon.cloneNode(true);
    } else if (this._gender === "female") {
      return femaleIcon.icon.cloneNode(true);
    } else {
      return undefined;
    }
  }

  // Define a method `getAcceptsNewPatientsIcon` to return the accepts new patients icon if the provider accepts new patients, and the not accepts new patients icon if the provider does not accept new patients.
  getAcceptsNewPatientsIcon() {
    if (this.acceptsNewPatients) {
      return acceptsNewPatientsIcon.icon.cloneNode(true);
    } else {
      return notAcceptsNewPatientsIcon.icon.cloneNode(true);
    }
  }

  // Define a method `getAgeGroupIcon` to return the age group icon based on the age group of the provider.
  getAgeGroupIcon() {
    if (this._ageGroup === "+18") {
      return overEighteenIcon.icon;
    } else if (this._ageGroup === "+3") {
      return overThreeIcon.icon.cloneNode(true);
    }
  }

  // Define a method `getOnLeaveIcon` to return the on leave icon if the provider is on leave, and the not on leave icon if the provider is not on leave.
  getOnLeaveIcon() {
    if (this._onLeave === true) {
      return onLeaveIcon.icon.cloneNode(true);
    }
  }

  // Define a method `getDepartingIcon` to return the departing icon if the provider is departing, and the not departing icon if the provider is not departing.
  getDepartingIcon() {
    if (this._departing === true) {
      return departingIcon.icon.cloneNode(true);
    }
  }

  // Define a method `getSpecialtyIcon` to return the specialty icon based on the specialty of the provider.
  getSpecialtyIcon() {
    const specialtyMap = {
      "internalmedicine": internalMedicineIcon.icon.cloneNode(true),
      "gastroenterology": gastroenterologyIcon.icon.cloneNode(true),
      "allergy": allergyIcon.icon.cloneNode(true).cloneNode(true),
      "neurology": neurologyIcon.icon.cloneNode(true),
      "podiatry": podiatryIcon.icon.cloneNode(true),
      "pulmonology": pulmonologyIcon.icon.cloneNode(true),
      "physicaltherapy": physicalTherapyIcon.icon.cloneNode(true),
      "endocrinology": endocrinologyIcon.icon.cloneNode(true),
      "rheumatology": rheumatologyIcon.icon.cloneNode(true),
      "cardiology": cardiologyIcon.icon.cloneNode(true),
      "dermatology": dermatologyIcon.icon.cloneNode(true),
      "nephrology": nephrologyIcon.icon.cloneNode(true),
      "vascular": vascularIcon.icon.cloneNode(true),
      "oncology": oncologyIcon.icon.cloneNode(true),
      "weightmanagement": weightManagementIcon.icon.cloneNode(true),
      "orthopedics": orthopedicsIcon.icon.cloneNode(true),
      "urology": urologyIcon.icon.cloneNode(true),
      "ophthalmology": ophthalmologyIcon.icon.cloneNode(true),
    }
    let specialtyIcon = this._specialty.map(specialty => specialtyMap[specialty]);
    return specialtyIcon;
  }

  // Define a static method `createProviderCard` to create a provider card, and append it to the DOM, using the data from the instance. This method should be called in the `displaySearchResults` function.
  providerCard() {
    // Create a div element with the class `provider-card`.
    let providerCard = document.createElement("div");
    providerCard.classList.add("provider-card");
    
    // Create a div element with the class `card-header`.
    let cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    
    // Create a div element with the class `card-header-title-row`.
    let cardHeaderTitleRow = document.createElement("div");
    cardHeaderTitleRow.classList.add("card-header-title-row");
    cardHeader.appendChild(cardHeaderTitleRow);
    
    // Append the gender icon to the card header title row.
    cardHeaderTitleRow.appendChild(this.getGenderIcon());
    
    // Create a h1 element with the class `card-header-provider-title`.
    let cardHeaderProviderTitle = document.createElement("h1");
    cardHeaderProviderTitle.classList.add("card-header-provider-title");
    cardHeaderProviderTitle.textContent = this.title;
    cardHeaderTitleRow.appendChild(cardHeaderProviderTitle);
    
    // Create a h1 element with the class `card-header-provider-first-name`.
    let cardHeaderProviderFirstName = document.createElement("h1");
    cardHeaderProviderFirstName.classList.add("card-header-provider-first-name");
    cardHeaderProviderFirstName.textContent = this.firstName;
    cardHeaderTitleRow.appendChild(cardHeaderProviderFirstName);
    
    // Create a h1 element with the class `card-header-provider-last-name`.
    let cardHeaderProviderLastName = document.createElement("h1");
    cardHeaderProviderLastName.classList.add("card-header-provider-last-name");
    cardHeaderProviderLastName.textContent = this.lastName;
    cardHeaderTitleRow.appendChild(cardHeaderProviderLastName);
    
    // Create a div element containing the provider's Badge Icons.
    let badgeIconsSection = document.createElement("div");
    badgeIconsSection.classList.add("badge-icons-section");
    badgeIconsSection.appendChild(this.getAcceptsNewPatientsIcon());
    cardHeaderTitleRow.appendChild(badgeIconsSection);
    
    // Create a div element with the class `card-header-specialties-row`.
    let CardHeaderSpecialtiesRow = document.createElement("div");
    CardHeaderSpecialtiesRow.classList.add("card-header-specialties-row");
    cardHeader.appendChild(CardHeaderSpecialtiesRow);
    
    // Create a button for each provider's specialty. The button contains the specialty icon, and the specialty name.
    this.specialty.forEach((specialty, index) => {
      console.log(specialty);
      let specialtyButton = document.createElement("button");
      specialtyButton.classList.add("specialty-button");
      specialtyButton.appendChild(this.getSpecialtyIcon()[index]);
      
      // Create a span element with the class `specialty-name`.
      let specialtyName = document.createElement("span");
      specialtyName.classList.add("specialty-name");
      specialtyName.textContent = specialty;
      specialtyButton.appendChild(specialtyName);
      
      CardHeaderSpecialtiesRow.appendChild(specialtyButton);
    });
    
    // Create a div element with the class `card-body`.
    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    // Create a left side for the card body.
    let cardBodyLeftSide = document.createElement("div");
    cardBodyLeftSide.classList.add("card-body-left-side");

    // Create a right side for the card body.
    let cardBodyRightSide = document.createElement("div");
    cardBodyRightSide.classList.add("card-body-right-side");

    // Create a div that contains the provider's address, with the respective fax number.
    let locationGroup = document.createElement("div");
    locationGroup.classList.add("location-group");
    this.office.forEach((office, index) => {
      let location = document.createElement("div");
      location.classList.add("location");
      location.textContent = office.address;
    });

    cardBody.appendChild(locationGroup);


    // Append the card header to the provider card.
    providerCard.appendChild(cardHeader);
    
    // Append the card body to the provider card.
    providerCard.appendChild(cardBody);
    
    // Append the provider card to the DOM.
    return providerCard;
  }



  // This is a ist of the class used in the "providerCard" method:
  // provider-card
  // card-header
  // card-header-title-row
  // card-header-provider-title
  // card-header-provider-first-name
  // card-header-provider-last-name
  // badge-icons-section
  // card-header-specialties-row
  // specialty-button
  // specialty-name
  // card-body
  //////////////////////////


  // This is an explanation of the "providerCard" method:
  // The method creates a div element with the class `provider-card`.
  // The method creates a div element with the class `card-header`.
  // The method creates a div element with the class `card-header-title-row`.

  static getAllProviders() {
    return Provider.allProviders;
  }
}

// Create Icon instances, and store them in variables. These variables will be used to create the provider cards. 
const maleIcon = Icon.createIcon("green", "M20 4v6h-2V7.425l-3.975 3.95q.475.7.725 1.488T15 14.5q0 2.3-1.6 3.9T9.5 20q-2.3 0-3.9-1.6T4 14.5q0-2.3 1.6-3.9T9.5 9q.825 0 1.625.237t1.475.738L16.575 6H14V4h6ZM9.5 11q-1.45 0-2.475 1.025T6 14.5q0 1.45 1.025 2.475T9.5 18q1.45 0 2.475-1.025T13 14.5q0-1.45-1.025-2.475T9.5 11Z");
const femaleIcon = Icon.createIcon("green", "M11 21v-2H9v-2h2v-2.1q-1.975-.35-3.238-1.888T6.5 9.45q0-2.275 1.613-3.862T12 4q2.275 0 3.888 1.588T17.5 9.45q0 2.025-1.263 3.563T13 14.9V17h2v2h-2v2h-2Zm1-8q1.45 0 2.475-1.025T15.5 9.5q0-1.45-1.025-2.475T12 6q-1.45 0-2.475 1.025T8.5 9.5q0 1.45 1.025 2.475T12 13Z");
const OfficeIcon = Icon.createIcon("green", "M12 12q.825 0 1.413-.588T14 10q0-.825-.588-1.413T12 8q-.825 0-1.413.588T10 10q0 .825.588 1.413T12 12Zm0 10q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2q3.175 0 5.588 2.225T20 10.2q0 2.5-1.988 5.438T12 22Z");
const faxIcon = Icon.createIcon("green", "M8 20V4h10v5h1q1.25 0 2.125.875T22 12v8H8Zm-3.5 1q1.05 0 1.775-.725T7 18.5v-8q0-1.05-.725-1.775T4.5 8q-1.05 0-1.775.725T2 10.5v8q0 1.05.725 1.775T4.5 21ZM10 9h6V6h-6v3Zm6 5q.425 0 .713-.288T17 13q0-.425-.288-.713T16 12q-.425 0-.713.288T15 13q0 .425.288.713T16 14Zm3 0q.425 0 .713-.288T20 13q0-.425-.288-.713T19 12q-.425 0-.713.288T18 13q0 .425.288.713T19 14Zm-3 3q.425 0 .713-.288T17 16q0-.425-.288-.713T16 15q-.425 0-.713.288T15 16q0 .425.288.713T16 17Zm3 0q.425 0 .713-.288T20 16q0-.425-.288-.713T19 15q-.425 0-.713.288T18 16q0 .425.288.713T19 17Zm-9 0h4v-5h-4v5Z");
// Bagde Icons
const acceptsNewPatientsIcon = Icon.createIcon("green", "M19 17v2H7v-2s0-4 6-4s6 4 6 4m-3-9a3 3 0 1 0-3 3a3 3 0 0 0 3-3m3.2 5.06A5.6 5.6 0 0 1 21 17v2h3v-2s0-3.45-4.8-3.94M18 5a2.91 2.91 0 0 0-.89.14a5 5 0 0 1 0 5.72A2.91 2.91 0 0 0 18 11a3 3 0 0 0 0-6M8 10H5V7H3v3H0v2h3v3h2v-3h3Z");
const notAcceptsNewPatientsIcon = Icon.createIcon("green", "M19 17v2H7v-2s0-4 6-4s6 4 6 4m-3-9a3 3 0 1 0-3 3a3 3 0 0 0 3-3m3.2 5.06A5.6 5.6 0 0 1 21 17v2h3v-2s0-3.45-4.8-3.94M18 5a2.91 2.91 0 0 0-.89.14a5 5 0 0 1 0 5.72A2.91 2.91 0 0 0 18 11a3 3 0 0 0 0-6M8 10H0v2h8Z");
const overEighteenIcon = Icon.createIcon("green", "M18 5h1v1a1 1 0 0 0 2 0V5h1a1 1 0 0 0 0-2h-1V2a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2ZM7 7v10a1 1 0 0 0 2 0V7a1 1 0 0 0-2 0Zm14.6 2a1 1 0 0 0-.78 1.18a9 9 0 1 1-7-7a1 1 0 1 0 .4-2A10.8 10.8 0 0 0 12 1a11 11 0 1 0 11 11a10.8 10.8 0 0 0-.22-2.2A1 1 0 0 0 21.6 9ZM11 9v1a3 3 0 0 0 .78 2a3 3 0 0 0-.78 2v1a3 3 0 0 0 3 3h1a3 3 0 0 0 3-3v-1a3 3 0 0 0-.78-2a3 3 0 0 0 .78-2V9a3 3 0 0 0-3-3h-1a3 3 0 0 0-3 3Zm5 6a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1Zm0-6v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1Z");
const overThreeIcon = Icon.createIcon("green", "M7.92 7.54c-.8-.34-1.14-1.33-.66-2.05C8.23 4.05 9.85 3 11.99 3c2.35 0 3.96 1.07 4.78 2.41c.7 1.15 1.11 3.3.03 4.9c-1.2 1.77-2.35 2.31-2.97 3.45c-.15.27-.24.49-.3.94c-.09.73-.69 1.3-1.43 1.3c-.87 0-1.58-.75-1.48-1.62c.06-.51.18-1.04.46-1.54c.77-1.39 2.25-2.21 3.11-3.44c.91-1.29.4-3.7-2.18-3.7c-1.17 0-1.93.61-2.4 1.34c-.35.57-1.08.75-1.69.5zM14 20c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2s2 .9 2 2z");
const onLeaveIcon = Icon.createIcon("green", "M22 16v-2l-8.5-5V3.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5V9L2 14v2l8.5-2.5V19L8 20.5V22l4-1l4 1v-1.5L13.5 19v-5.5L22 16z");
const departingIcon = Icon.createIcon("green", "M15 13h1.5v2.82l2.44 1.41l-.75 1.3L15 16.69V13m4-5H5v11h4.67c-.43-.91-.67-1.93-.67-3a7 7 0 0 1 7-7c1.07 0 2.09.24 3 .67V8M5 21a2 2 0 0 1-2-2V5c0-1.11.89-2 2-2h1V1h2v2h8V1h2v2h1a2 2 0 0 1 2 2v6.1c1.24 1.26 2 2.99 2 4.9a7 7 0 0 1-7 7c-1.91 0-3.64-.76-4.9-2H5m11-9.85A4.85 4.85 0 0 0 11.15 16c0 2.68 2.17 4.85 4.85 4.85A4.85 4.85 0 0 0 20.85 16c0-2.68-2.17-4.85-4.85-4.85Z");
const retiredIcon = Icon.createIcon("green", "M19 19H5V8h14m0-5h-1V1h-2v2H8V1H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M9.31 17l2.44-2.44L14.19 17l1.06-1.06l-2.44-2.44l2.44-2.44L14.19 10l-2.44 2.44L9.31 10l-1.06 1.06l2.44 2.44l-2.44 2.44L9.31 17Z");
// Specialty Icons
const internalMedicineIcon = Icon.createIcon("green", "M10.5 17h3v-2.5H16v-3h-2.5V9h-3v2.5H8v3h2.5V17ZM4 21V9l8-6l8 6v12H4Z");
const allergyIcon = Icon.createIcon("green", "M16 12.77a2 2 0 0 1-.14-2.65a5 5 0 0 0-2.82-8A5.74 5.74 0 0 0 12 2a5 5 0 0 0-5 5a5 5 0 0 0 1.11 3.12a2 2 0 0 1-.11 2.6a5.5 5.5 0 0 0 2.81 9.15A5.42 5.42 0 0 0 12 22a5.5 5.5 0 0 0 4-9.23M13 5a1 1 0 1 1-1 1a1 1 0 0 1 1-1m-2 13a1 1 0 1 1 1-1a1 1 0 0 1-1 1m1-3a1 1 0 1 1 1 1a1 1 0 0 1-1-1m2 4a1 1 0 1 1 1-1a1 1 0 0 1-1 1Z");
const bariatricSurgeryIcon = Icon.createIcon("green", "M12.4 15.35L8.65 11.6l8.3-8.3q.3-.3.713-.3t.712.3L20.7 5.625q.3.3.3.713t-.3.712l-8.3 8.3ZM11 21l2-2h9v2H11Zm-5.925 0q-1.15 0-2.213-.45T1 19.3l6.625-6.6l2.6 2.6q.35.35.55.8t.2.95q0 .5-.2.962t-.55.813l-.475.475q-.8.8-1.862 1.25T5.675 21h-.6Z");
const gastroenterologyIcon = Icon.createIcon("green", "M3 22v-6q0-1.25.875-2.125T6 13h2q1.25 0 2.125-.875T11 10q0-.425-.288-.713T10 9q-.825 0-1.413-.588T8 7V2h6v2q2.925 0 4.963 2.038T21 11v1q0 2.925-2.038 4.963T14 19h-4q-.425 0-.713.288T9 20v2H3Z");
const neurologyIcon = Icon.createIcon("green", "M14.25 21q-.325 0-.638-.063T13 20.75V3.25q.3-.125.613-.188T14.25 3q1.3 0 2.238.875t1.012 2.15q1.475.2 2.488 1.325T21 10q0 .55-.138 1.05t-.412.95q.275.45.413.963T21 14q0 1.55-1.012 2.663t-2.513 1.312q-.125 1.25-1.038 2.138T14.25 21Zm-4.5 0q-1.275 0-2.2-.888T6.5 17.976Q5 17.775 4 16.65T3 14q0-.525.138-1.037T3.55 12q-.275-.45-.412-.95T3 10q0-1.525 1-2.638T6.475 6.05Q6.55 4.775 7.5 3.887T9.75 3q.325 0 .638.075t.612.2V20.75q-.3.125-.613.188T9.75 21Z");
const pulmonologyIcon = Icon.createIcon("green", "M5 21q-1.275 0-2.138-.863T2 18v-4.175L4.625 6.8q.3-.825 1.05-1.312T7.3 5q.65 0 1.225.325t.95.875V9l-2.55 2.55L8 12.6l3-3V2h2v7.6l3 3l1.05-1.05L14.5 9V6.2q.375-.55.95-.875T16.675 5q.875 0 1.613.488T19.35 6.8l2.625 7.025V18q0 1.275-.875 2.138T18.975 21h-3q-1.25 0-2.112-.863T13 18v-2l.375-3.175l-1.375-1.4l-1.4 1.4L11 16v2q0 1.275-.875 2.138T8 21H5Z");
const physicalTherapyIcon = Icon.createIcon("green", "M16 17H9.375q-.575 0-.938.35t-.437.8q-.075.45.138.875t.762.625l5.725 2.275q.25.1.488.063t.437-.163q.2-.125.325-.337T16 21v-4ZM10 2q1.65 0 2.825 1.175T14 6q0 1.65-1.175 2.825T10 10q-1.65 0-2.825-1.175T6 6q0-1.65 1.175-2.825T10 2Zm9.225 9q.725 0 1.25.488T21 12.7q0 .575-.325 1.05t-.875.675L18 15H9.375q-1.425 0-2.4.975T6 18.375q0 .45.125.863T6.45 20H3v-4q0-2.075 1.463-3.538T8 11h11.225Z");
const podiatryIcon = Icon.createIcon("green", "M4 20q-.825 0-1.413-.588T2 18v-1q0-.825.588-1.413T4 15q.825 0 1.413.588T6 17v1q0 .825-.588 1.413T4 20Zm17.05 0H19.5q-.25 0-.4-.188t-.1-.437l.275-1.075q.05-.2.2-.313t.35-.062l1.35.2q.35.05.588.313t.237.612q0 .4-.275.675T21.05 20Zm-3.7-.35l-2.85-.95q-.2-.075-.3-.275t0-.4l.75-1.725q.1-.2.313-.288t.412.038l2.4 1.4q.15.075.213.225T18.3 18l-.3 1.3q-.05.2-.25.313t-.4.037ZM12.7 17.9l-1.95-.5q-.35-.1-.55-.363t-.2-.612V15.5q0-.575.2-1.075t.675-.8q.125-.075.25-.088t.25.063l2.55 1.4q.175.1.238.287t-.013.363l-.875 1.975q-.075.175-.238.25t-.337.025ZM7.45 17q-.2 0-.325-.113t-.15-.287q-.175-1.125-1.012-1.863T4 14h-.5q-.2 0-.35-.15T3 13.5q0-.2.15-.35T3.5 13h.9q.5 0 .95-.125t.875-.4q.125-.075.275-.075t.275.075q.5.3 1.075.413T9 13q.3 0 .425.313t-.075.612q-.225.35-.287.75T9 15.5v1q0 .2-.15.35T8.5 17H7.45Zm-3-5q-1.05 0-1.75-.688T2 9.6q0-.475.175-.925t.525-.8l1.3-1.3V4h5v2.575l1.3 1.3q.35.35.525.788t.175.912q0 1.025-.7 1.725t-1.75.7q-.475 0-.9-.2t-.775-.5q-.1-.075-.175-.138t-.2-.062q-.175 0-.375.2q-.35.3-.787.487T4.45 12Z");
const endocrinologyIcon = Icon.createIcon("green", "m2.3 20.95l-.625-1.9q1.05-.35 1.688-1.225T4 15.85V5.4Q3.4 4.75 2.912 4t-.837-1.6l1.85-.8q1.05 2.45 3.238 3.925T12 7q2.65 0 4.838-1.475T20.075 1.6l1.85.8q-.35.85-.85 1.6T20 5.4v10.45q0 1.1.625 1.975T22.3 19.05l-.625 1.9q-1.65-.55-2.662-1.95T18 15.85v-8.7q-1.325.875-2.838 1.363T12 9q-1.65 0-3.175-.488T6 7.15v8.7Q6 17.6 4.975 19T2.3 20.95ZM10 19q-1.25 0-2.125-.875T7 16V9.725l1.35.325q1.15.275 2.087.963T12 12.65q.625-.95 1.563-1.638t2.087-.962L17 9.725V16q0 1.25-.875 2.125T14 19q-.575 0-1.088-.213T12 18.226q-.4.35-.913.563T10 19Z");
const rheumatologyIcon = Icon.createIcon("green", "M7 22v-4.35l-2.075-2.1q-.4-.425-.625-.937t-.275-1.038q.575.675 1.388 1.05T7.125 15q.775 0 1.463-.275T10 13.85q.05-.05.125-.1t.125-.075q.05.025.138.075t.137.1q.725.6 1.412.875t1.438.275q.925 0 1.737-.375t1.388-1.05q-.05.55-.275 1.063t-.625.912l-2.1 2.1V22H7Zm11.7-6.05q-.375-.125-.575-.5t-.075-.75q.15-.425.513-.613t.762-.037l3 1q.4.125.588.488t.037.787q-.125.375-.487.563t-.763.062l-3-1ZM19 13q-.425 0-.712-.288T18 12q0-.425.288-.713T19 11h3q.425 0 .713.288T23 12q0 .425-.288.713T22 13h-3Zm.325-3.05q-.4.125-.775-.05t-.5-.575q-.125-.425.063-.788t.587-.487l3-1q.4-.125.763.063t.487.587q.125.375-.05.75t-.575.5l-3 1ZM7.125 14q-1.3 0-2.212-.913T4 10.876q0-.65.25-1.213t.675-.987L7 6.575V2h6.5v4.55l2.1 2.1q.425.425.663 1t.237 1.225q0 1.3-.9 2.212T13.375 14q-.825 0-1.338-.313t-.862-.612q-.375-.3-.588-.362t-.337-.063q-.225 0-.463.15t-.437.275q-.35.3-.863.613T7.125 14Z");
const cardiologyIcon = Icon.createIcon("green", "m10.7 12.725l-.85-1.275q-.125-.2-.35-.325T9.025 11h-6.55Q2.2 10.35 2.1 9.75T2 8.5q0-2.35 1.575-3.925T7.5 3q1.3 0 2.475.55T12 5.1q.85-1 2.025-1.55T16.5 3q2.35 0 3.925 1.575T22 8.5q0 .65-.1 1.25T21.525 11h-5.95L13.85 8.45q-.15-.225-.387-.338T12.95 8q-.325 0-.562.188t-.338.487l-1.35 4.05ZM12 21.35l-1.45-1.3q-2.625-2.35-4.3-4.025T3.625 13h4.8l1.725 2.55q.15.225.388.338t.512.112q.325 0 .563-.188t.337-.487l1.35-4.075l.875 1.3q.125.2.35.325T15 13h5.375q-.95 1.35-2.625 3.025t-4.3 4.025L12 21.35Z");
const dermatologyIcon = Icon.createIcon("green", "M2 21v-9q0-.825.588-1.413T4 10h5v2q0 1.25.875 2.125T12 15q1.25 0 2.125-.875T15 12v-2h5q.825 0 1.413.588T22 12v9H2Zm10-8q-.425 0-.713-.288T11 12q0-2.725.625-5.375T14.35 2.25q.325-.275.725-.238t.675.363q.275.325.238.725t-.363.675q-1.75 1.475-2.188 3.7T13 12q0 .425-.288.713T12 13Zm-6.25 2.5q.325 0 .537-.213t.213-.537q0-.325-.213-.537T5.75 14q-.325 0-.537.213T5 14.75q0 .325.213.537t.537.213Zm1 2.5q.325 0 .537-.213t.213-.537q0-.325-.213-.537T6.75 16.5q-.325 0-.537.213T6 17.25q0 .325.213.537T6.75 18Zm11.5-2.5q.325 0 .537-.213T19 14.75q0-.325-.213-.537T18.25 14q-.325 0-.537.213t-.213.537q0 .325.213.537t.537.213Z");
const pediatricsIcon = Icon.createIcon("green", "M8 7q-.425 0-.713-.288T7 6q0-.425.288-.713T8 5h3V3q0-.425.288-.713T12 2q.425 0 .713.288T13 3v2h3q.425 0 .713.288T17 6q0 .425-.288.713T16 7H8Zm1 15q-.825 0-1.413-.588T7 20v-2h4q.425 0 .713-.288T12 17q0-.425-.288-.713T11 16H7v-2h4q.425 0 .713-.288T12 13q0-.425-.288-.713T11 12H7v-1q0-1.25.875-2.125T10 8h4q1.25 0 2.125.875T17 11v9q0 .825-.588 1.413T15 22H9Z");
const nephrologyIcon = Icon.createIcon("green", "M9 21v-4.175q-.25.1-.488.138T8 17q-2.5 0-4.25-1.75T2 11V9q0-2.5 1.75-4.25T8 3q1.25 0 2.125.875T11 6q0 1.25-.875 2.125T8 9v2q1.25 0 2.125.875T11 14v7H9Zm4 0v-7q0-1.25.875-2.125T16 11V9q-1.25 0-2.125-.875T13 6q0-1.25.875-2.125T16 3q2.5 0 4.25 1.75T22 9v2q0 2.5-1.75 4.25T16 17q-.275 0-.513-.038T15 16.825V21h-2Z");
const urologyIcon = Icon.createIcon("green", "M9 23v-2.025q-.625-.125-1.075-.563t-.575-1.087l-.325-2q-.15-.925.45-1.625T9 15v-1.175q-.25.1-.488.138T8 14q-2.5 0-4.25-1.75T2 8V7q0-2.5 1.75-4.25T8 1q1.25 0 2.125.875T11 4q0 1.25-.875 2.125T8 7H6V5h2q.425 0 .713-.288T9 4q0-.425-.288-.713T8 3Q6.35 3 5.175 4.175T4 7v1q0 1.65 1.175 2.825T8 12q.425 0 .713-.288T9 11q0-.425-.288-.713T8 10H6V8h2q1.25 0 2.125.875T11 11v4h2v-4q0-1.25.875-2.125T16 8h2v2h-2q-.425 0-.713.288T15 11q0 .425.288.713T16 12q1.65 0 2.825-1.175T20 8V7q0-1.65-1.175-2.825T16 3q-.425 0-.713.287T15 4q0 .425.288.713T16 5h2v2h-2q-1.25 0-2.125-.875T13 4q0-1.25.875-2.125T16 1q2.5 0 4.25 1.75T22 7v1q0 2.5-1.75 4.25T16 14q-.275 0-.513-.038T15 13.825V15q.925 0 1.525.7t.45 1.625l-.325 2q-.125.65-.575 1.088T15 20.975V23h-2v-2h-2v2H9Z");
const ophthalmologyIcon = Icon.createIcon("green", "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3z");
const orthopedicsIcon = Icon.createIcon("green", "M12 19q0-2.5-1.75-4.25T6 13q0 2.5 1.75 4.25T12 19Zm0-5.05q.65 0 1.1-.45t.45-1.1v-.15q.2.15.412.225t.488.075q.65 0 1.1-.45T16 11q0-.5-.238-.875T15.1 9.6q.425-.15.663-.525T16 8.2q0-.65-.45-1.1t-1.1-.45q-.275 0-.487.075t-.413.225V6.8q0-.65-.45-1.1T12 5.25q-.65 0-1.1.45t-.45 1.1v.15q-.2-.15-.412-.225T9.55 6.65q-.65 0-1.1.45T8 8.2q0 .5.238.875T8.9 9.6q-.425.15-.662.525T8 11q0 .65.45 1.1t1.1.45q.275 0 .488-.075t.412-.225v.15q0 .65.45 1.1t1.1.45Zm0-2.8q-.65 0-1.1-.438T10.45 9.6q0-.65.45-1.1t1.1-.45q.65 0 1.1.45t.45 1.1q0 .675-.45 1.113t-1.1.437ZM12 19q2.5 0 4.25-1.75T18 13q-2.5 0-4.25 1.75T12 19Zm-8 3q-.825 0-1.413-.588T2 20V4q0-.825.588-1.413T4 2h16q.825 0 1.413.588T22 4v16q0 .825-.588 1.413T20 22H4Z");
const otolaryngologyIcon = Icon.createIcon("green", "M12 19q0-2.5-1.75-4.25T6 13q0 2.5 1.75 4.25T12 19Zm0-5.05q.65 0 1.1-.45t.45-1.1v-.15q.2.15.412.225t.488.075q.65 0 1.1-.45T16 11q0-.5-.238-.875T15.1 9.6q.425-.15.663-.525T16 8.2q0-.65-.45-1.1t-1.1-.45q-.275 0-.487.075t-.413.225V6.8q0-.65-.45-1.1T12 5.25q-.65 0-1.1.45t-.45 1.1v.15q-.2-.15-.412-.225T9.55 6.65q-.65 0-1.1.45T8 8.2q0 .5.238.875T8.9 9.6q-.425.15-.662.525T8 11q0 .65.45 1.1t1.1.45q.275 0 .488-.075t.412-.225v.15q0 .65.45 1.1t1.1.45Zm0-2.8q-.65 0-1.1-.438T10.45 9.6q0-.65.45-1.1t1.1-.45q.65 0 1.1.45t.45 1.1q0 .675-.45 1.113t-1.1.437ZM12 19q2.5 0 4.25-1.75T18 13q-2.5 0-4.25 1.75T12 19Zm-8 3q-.825 0-1.413-.588T2 20V4q0-.825.588-1.413T4 2h16q.825 0 1.413.588T22 4v16q0 .825-.588 1.413T20 22H4Z");
const oncologyIcon = Icon.createIcon("green", "m21.575 23l-2.55-2.55q-.45.275-.95.413T17 21q-1.65 0-2.825-1.175T13 17q0-1.65 1.175-2.825T17 13q1.65 0 2.825 1.175T21 17q0 .575-.15 1.088t-.425.962l2.55 2.55l-1.4 1.4ZM17 19q.825 0 1.413-.588T19 17q0-.825-.588-1.413T17 15q-.825 0-1.413.588T15 17q0 .825.588 1.413T17 19ZM3 22v-6q0-1.25.875-2.125T6 13h2q1.25 0 2.125-.875T11 10q0-.425-.288-.713T10 9q-.825 0-1.413-.588T8 7V2h6v2q2.925 0 4.963 2.038T21 11v1.525q-.825-.725-1.85-1.125T17 11q-2.5 0-4.25 1.75T11 17q0 .525.088 1.025t.262.975H10q-.425 0-.713.288T9 20v2H3Z");
const weightManagementIcon = Icon.createIcon("green", "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 9c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3z");
const plasticSurgeryIcon = Icon.createIcon("green", "M12 19q0-2.5-1.75-4.25T6 13q0 2.5 1.75 4.25T12 19Zm0-5.05q.65 0 1.1-.45t.45-1.1v-.15q.2.15.412.225t.488.075q.65 0 1.1-.45T16 11q0-.5-.238-.875T15.1 9.6q.425-.15.663-.525T16 8.2q0-.65-.45-1.1t-1.1-.45q-.275 0-.487.075t-.413.225V6.8q0-.65-.45-1.1T12 5.25q-.65 0-1.1.45t-.45 1.1v.15q-.2-.15-.412-.225T9.55 6.65q-.65 0-1.1.45T8 8.2q0 .5.238.875T8.9 9.6q-.425.15-.662.525T8 11q0 .65.45 1.1t1.1.45q.275 0 .488-.075t.412-.225v.15q0 .65.45 1.1t1.1.45Zm0-2.8q-.65 0-1.1-.438T10.45 9.6q0-.65.45-1.1t1.1-.45q.65 0 1.1.45t.45 1.1q0 .675-.45 1.113t-1.1.437ZM12 19q2.5 0 4.25-1.75T18 13q-2.5 0-4.25 1.75T12 19Zm-8 3q-.825 0-1.413-.588T2 20V4q0-.825.588-1.413T4 2h16q.825 0 1.413.588T22 4v16q0 .825-.588 1.413T20 22H4Z");
const vascularIcon = Icon.createIcon("green", "M4 24h10M44 8c-3.284.464-8.955 2.783-14.776 8.348C23.902 21.436 17.433 23.768 14 24m0 0c3.284.464 8.955 2.783 14.776 8.348C34.098 37.436 40.567 39.768 44 40");
const generalSurgeryIcon = Icon.createIcon("green", "M12 19q0-2.5-1.75-4.25T6 13q0 2.5 1.75 4.25T12 19Zm0-5.05q.65 0 1.1-.45t.45-1.1v-.15q.2.15.412.225t.488.075q.65 0 1.1-.45T16 11q0-.5-.238-.875T15.1 9.6q.425-.15.663-.525T16 8.2q0-.65-.45-1.1t-1.1-.45q-.275 0-.487.075t-.413.225V6.8q0-.65-.45-1.1T12 5.25q-.65 0-1.1.45t-.45 1.1v.15q-.2-.15-.412-.225T9.55 6.65q-.65 0-1.1.45T8 8.2q0 .5.238.875T8.9 9.6q-.425.15-.662.525T8 11q0 .65.45 1.1t1.1.45q.275 0 .488-.075t.412-.225v.15q0 .65.45 1.1t1.1.45Zm0-2.8q-.65 0-1.1-.438T10.45 9.6q0-.65.45-1.1t1.1-.45q.65 0 1.1.45t.45 1.1q0 .675-.45 1.113t-1.1.437ZM12 19q2.5 0 4.25-1.75T18 13q-2.5 0-4.25 1.75T12 19Zm-8 3q-.825 0-1.413-.588T2 20V4q0-.825.588-1.413T4 2h16q.825 0 1.413.588T22 4v16q0 .825-.588 1.413T20 22H4Z");


// Create dummy provider instances
const provider1 = new Provider(
  "John",
  "Doe",
  "MD",
  "male",
  ["cardiology", "internalmedicine"],
  true,
  "Main Office",
  "555-123-4567",
  "555-987-6543",
  ["English", "Spanish"],
  ["Insurance A", "Insurance B"],
  false,
  false,
  "Adults"
);

const provider2 = new Provider(
  "Jane",
  "Smith",
  "DO",
  "female",
  ["dermatology", "internalmedicine"],
  false,
  "Downtown Office",
  "555-456-7890",
  "555-654-3210",
  ["English", "French"],
  ["Insurance C", "Insurance D"],
  false,
  false,
  "All Ages"
);

const provider3 = new Provider(
  "Alice",
  "Johnson",
  "NP",
  "female",
  ["allergy"],
  true,
  "Uptown Office",
  "555-789-0123",
  "555-321-0987",
  ["English"],
  ["Insurance A", "Insurance B", "Insurance C"],
  true,
  false,
  "Children"
);

console.log(provider1);

// Display Results Function
// This function will be called when the search form is submitted
// It will take the results from the search function and display them on the page
// If there are no results, it will display a message
// Otherwise, it will loop through the results and create a card for each provider using the static ProviderCard method
// It will then append the card to the search-results div
function displaySearchResults(results) {
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
    results.forEach((provider) => {
      searchResults.appendChild(provider.providerCard());
    });
  }
}

displaySearchResults([provider1, provider2, provider3]);


//This is a list of the classes added to the DOM elements in the HTML file:
//search-results
//provider-card


