// Define a method `createProviderCard` to create a provider card, and append it to the DOM, using the data from the instance. This method should be called in the `displaySearchResults` function.
export function providerCard() {
    // Create a div element with the class `provider-card`.
    let providerCard = document.createElement("div");
    providerCard.classList.add("provider-card");

    // Create a div element for the tabs section.
    let tabsSection = document.createElement("div");
    tabsSection.classList.add("tabs-section");

    // Create a button for the Provider Info tab.
    let providerInfoTab = document.createElement("button");
    providerInfoTab.classList.add("tab");
    providerInfoTab.textContent = "Provider Info";
    tabsSection.appendChild(providerInfoTab);

    // Create a button for the Calendar tab.
    let calendarTab = document.createElement("button");
    calendarTab.classList.add("tab");
    calendarTab.textContent = "Calendar";
    tabsSection.appendChild(calendarTab);

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

    // Create a div for the provider's languages.
    let providerLanguage = document.createElement("div");
    providerLanguage.classList.add("provider-language");
    providerLanguage.appendChild(languageIcon.icon.cloneNode(true));

    let providerLanguageText = document.createElement("p");
    providerLanguageText.classList.add("provider-language-text");
    providerLanguageText.textContent = this.getLanguages();

    providerLanguage.appendChild(providerLanguageText);
    cardHeaderTitleRow.appendChild(providerLanguage);

    // Create a div for the provider's Age Group
    let cardHeaderProviderAgeGroup = document.createElement("h2");
    cardHeaderProviderAgeGroup.classList.add("age-group");
    cardHeaderProviderAgeGroup.textContent = this.getAgeGroup();
    cardHeaderTitleRow.appendChild(cardHeaderProviderAgeGroup);

    // Create a div element containing the provider's Badge Icons.
    let badgeIconsSection = document.createElement("div");
    badgeIconsSection.classList.add("badge-icons-section");
    badgeIconsSection.appendChild(this.getAcceptsNewPatientsIcon());
    this.onLeave ? badgeIconsSection.appendChild(this.getOnLeaveIcon()) : null;
    this.departing ? badgeIconsSection.appendChild(departingIcon.icon) : null;
    this.departing ? badgeIconsSection.appendChild(this.getDepartingText()) : null;
    this.retired ? badgeIconsSection.appendChild(this.getRetiredIcon()) : null;
    this.insurances.includes("workerscomp") ? badgeIconsSection.appendChild(workersCompIcon.icon.cloneNode(true)) : null;
    cardHeaderTitleRow.appendChild(badgeIconsSection);

    // Create a div element with the class `card-header-specialties-row`.
    let CardHeaderSpecialtiesRow = document.createElement("div");
    CardHeaderSpecialtiesRow.classList.add("card-header-specialties-row");
    cardHeader.appendChild(CardHeaderSpecialtiesRow);

    // Create a button for each provider's specialty. The button contains the specialty icon, and the specialty name.
    this.specialty.forEach((specialty, index) => {
        let specialtyButton = document.createElement("button");
        specialtyButton.classList.add("specialty-button");
        specialtyButton.appendChild(this.getSpecialtyIcon()[index]);

        // Create a span element with the class `specialty-name`.
        let specialtyName = document.createElement("span");
        specialtyName.classList.add("specialty-name");
        specialtyName.textContent = this.getSpecialtyName()[index];
        specialtyButton.appendChild(specialtyName);

        CardHeaderSpecialtiesRow.appendChild(specialtyButton);
    });

    // Create a div for the Common Visit Reasons row. This row contains the common visit reasons for the specialty selected in the specialty row.
    let commonVisitReasonsRow = document.createElement("div");
    commonVisitReasonsRow.classList.add("common-visit-reasons-row");
    this.specialty.forEach((specialty, index) => {
        let commotVisitReasonParagraph = document.createElement("p");
        commotVisitReasonParagraph.classList.add("common-visit-reasons-paragraph");
        commotVisitReasonParagraph.textContent = this.getCommonVisitReasons()[index];

        commonVisitReasonsRow.appendChild(commotVisitReasonParagraph);
        cardHeader.appendChild(commonVisitReasonsRow);
    });

    // Create a div for the "important information" row. This row contains the important information for the provider.
    if (this.importantInfo !== "none" && this.importantInfo !== "") {
        let importantInfoRow = document.createElement("div");
        importantInfoRow.classList.add("important-info-row");
        importantInfoRow.appendChild(importantIcon.icon.cloneNode(true));


        let importantInfo = document.createElement("p");
        importantInfo.textContent = this.importantInfo;
        importantInfo.classList.add("important-info");
        importantInfoRow.appendChild(importantInfo);
        cardHeader.appendChild(importantInfoRow);

    };

    // Create a div element with the class `card-body`.
    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    // Create a left side for the card body.
    let cardBodyLeftSide = document.createElement("div");
    cardBodyLeftSide.classList.add("card-body-left-side");

    // Create a right side for the card body.
    let cardBodyRightSide = document.createElement("div");
    cardBodyRightSide.classList.add("card-body-right-side");



    this.office.forEach((office, index) => {
        // Create a div that contains the provider's address, with the respective fax number.
        let locationGroup = document.createElement("div");
        locationGroup.classList.add("location-group");

        locationGroup.appendChild(officeIcon.icon.cloneNode(true))

        let location = document.createElement("p");
        location.classList.add("location");
        // location.textContent = this.office[index];
        location.textContent = this.getAddress()[index];
        locationGroup.appendChild(location);

        locationGroup.appendChild(faxIcon.icon.cloneNode(true));

        let fax = document.createElement("p");
        fax.classList.add("fax");
        fax.textContent = this.fax[index];
        locationGroup.appendChild(fax);

        locationGroup.appendChild(emergencyLineIcon.icon.cloneNode(true));

        let emergencyLine = document.createElement("p");
        emergencyLine.classList.add("emergency-line");
        emergencyLine.textContent = this.emergencyLine[index];
        locationGroup.appendChild(emergencyLine);

        cardBody.appendChild(locationGroup);
    });

    // Append the tabs section to the provider card.
    providerCard.appendChild(tabsSection);

    // Append the card header to the provider card.
    providerCard.appendChild(cardHeader);

    // Append the card body to the provider card.
    providerCard.appendChild(cardBody);

    // Append the provider card to the DOM.
    return providerCard;
}