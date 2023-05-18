export function createCalendarTable(providerData, year, month) {

    // Create the calendar table
    const calendarTable = document.createElement("table");
    calendarTable.classList.add("calendar-table");

    // Create the calendar table head
    const calendarTableHead = document.createElement("thead");
    calendarTableHead.classList.add("calendar-table-head");

    // Create the calendar table body
    const calendarTableBody = document.createElement("tbody");
    calendarTableBody.classList.add("calendar-table-body");

    // Create the calendar table foot
    const calendarTableFoot = document.createElement("tfoot");
    calendarTableFoot.classList.add("calendar-table-foot");

    // Create the days of the week
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const daysRow = document.createElement("tr");

    daysOfWeek.forEach(day => {
        const dayElement = document.createElement("th");
        dayElement.innerText = day;
        daysRow.appendChild(dayElement);
    });

    calendarTableHead.appendChild(daysRow);

    // Get the first day of the month
    let firstDay = (new Date(year, month)).getDay();

    // Get the number of days in the month
    let daysInMonth = 32 - new Date(year, month, 32).getDate();

    // Parse availability data from providerData
    let availability = JSON.parse(providerData.availability);
    console.log(availability);


    // Generate rows and cells
    for (let i = 0; i < 6; i++) { // for 6 weeks
        let weekRow = document.createElement("tr");

        for (let j = 0; j < 7; j++) { // for 7 days
            let dateCell = document.createElement("td");

            if (i === 0 && j < firstDay) {
                dateCell.innerText = "";
            } else if (i * 7 + j - firstDay + 1 > daysInMonth) {
                dateCell.innerText = "";
            } else {
                let day = i * 7 + j - firstDay + 1;
                dateCell.innerText = day;

                // Check if provider is available on this date
                let dateStr = `${year}-${month + 1}-${day < 10 ? '0' + day : day}`;  // format date as YYYY-MM-DD
                availability.forEach(slot => {
                    let slotDate = new Date(slot.start).toISOString().split('T')[0];  // format slot date as YYYY-MM-DD
                    console.log(slotDate, dateStr)
                    if (slotDate === dateStr) {
                        dateCell.classList.add('available');
                    }
                });
            }

            weekRow.appendChild(dateCell);
        }

        calendarTableBody.appendChild(weekRow);
    }

    // Append the table head, body, and foot to the table
    calendarTable.appendChild(calendarTableHead);
    calendarTable.appendChild(calendarTableBody);
    calendarTable.appendChild(calendarTableFoot);

    return calendarTable;
}

export function calendar(providerData, year, month) {

    // Create the calendar wrapper
    const calendarWrapper = document.createElement("div");
    calendarWrapper.classList.add("calendar-wrapper");

    // Create the calendar controls
    const calendarControls = document.createElement("div");
    calendarControls.classList.add("calendar-controls");

    // Create the previous month button
    const prevButton = document.createElement("button");
    prevButton.classList.add("calendar-prev");
    prevButton.innerText = "Previous Month";
    calendarControls.appendChild(prevButton);

    // Create the next month button
    const nextButton = document.createElement("button");
    nextButton.classList.add("calendar-next");
    nextButton.innerText = "Next Month";
    calendarControls.appendChild(nextButton);

    // Create the calendar table
    let calendarTable = createCalendarTable(providerData, year, month);
    calendarWrapper.appendChild(calendarTable);

    // Append the controls to the calendar wrapper
    calendarWrapper.appendChild(calendarControls);
    // Append the table to the calendar wrapper    
    calendarWrapper.appendChild(calendarTable);

    prevButton.addEventListener('click', () => {
        if (month === 0) {
            month = 11;
            year--;
        } else {
            month--;
        }
        const newCalendarTable = createCalendarTable(providerData, year, month);
        calendarWrapper.replaceChild(newCalendarTable, calendarTable);
    });

    nextButton.addEventListener('click', () => {
        if (month === 11) {
            month = 0;
            year++;
        } else {
            month++;
        }
        const newCalendarTable = createCalendarTable(providerData, year, month);
        calendarWrapper.replaceChild(newCalendarTable, calendarTable);
    });

    return calendarWrapper;
}