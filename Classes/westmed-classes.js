import { isDataCompatible, setClassSuffix } from "../Functions/import-data-functions.js";

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
    this._relevanceScore = 0;
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

// Create Icon instances, and store them in variables. These variables will be used to create the provider cards. 
const maleIcon = Icon.createIcon("green", "M20 4v6h-2V7.425l-3.975 3.95q.475.7.725 1.488T15 14.5q0 2.3-1.6 3.9T9.5 20q-2.3 0-3.9-1.6T4 14.5q0-2.3 1.6-3.9T9.5 9q.825 0 1.625.237t1.475.738L16.575 6H14V4h6ZM9.5 11q-1.45 0-2.475 1.025T6 14.5q0 1.45 1.025 2.475T9.5 18q1.45 0 2.475-1.025T13 14.5q0-1.45-1.025-2.475T9.5 11Z");
maleIcon.icon.classList.add("gender-icon");
const femaleIcon = Icon.createIcon("green", "M11 21v-2H9v-2h2v-2.1q-1.975-.35-3.238-1.888T6.5 9.45q0-2.275 1.613-3.862T12 4q2.275 0 3.888 1.588T17.5 9.45q0 2.025-1.263 3.563T13 14.9V17h2v2h-2v2h-2Zm1-8q1.45 0 2.475-1.025T15.5 9.5q0-1.45-1.025-2.475T12 6q-1.45 0-2.475 1.025T8.5 9.5q0 1.45 1.025 2.475T12 13Z");
femaleIcon.icon.classList.add("gender-icon");
const officeIcon = Icon.createIcon("green", "M12 12q.825 0 1.413-.588T14 10q0-.825-.588-1.413T12 8q-.825 0-1.413.588T10 10q0 .825.588 1.413T12 12Zm0 10q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2q3.175 0 5.588 2.225T20 10.2q0 2.5-1.988 5.438T12 22Z");
const faxIcon = Icon.createIcon("green", "M8 20V4h10v5h1q1.25 0 2.125.875T22 12v8H8Zm-3.5 1q1.05 0 1.775-.725T7 18.5v-8q0-1.05-.725-1.775T4.5 8q-1.05 0-1.775.725T2 10.5v8q0 1.05.725 1.775T4.5 21ZM10 9h6V6h-6v3Zm6 5q.425 0 .713-.288T17 13q0-.425-.288-.713T16 12q-.425 0-.713.288T15 13q0 .425.288.713T16 14Zm3 0q.425 0 .713-.288T20 13q0-.425-.288-.713T19 12q-.425 0-.713.288T18 13q0 .425.288.713T19 14Zm-3 3q.425 0 .713-.288T17 16q0-.425-.288-.713T16 15q-.425 0-.713.288T15 16q0 .425.288.713T16 17Zm3 0q.425 0 .713-.288T20 16q0-.425-.288-.713T19 15q-.425 0-.713.288T18 16q0 .425.288.713T19 17Zm-9 0h4v-5h-4v5Z");
const emergencyLineIcon = Icon.createIcon("green", "M5 20v-2h1.6l1.975-6.575q.2-.65.738-1.038T10.5 10h3q.65 0 1.188.388t.737 1.037L17.4 18H19v2H5Zm6-12V3h2v5h-2Zm5.95 2.475L15.525 9.05l3.55-3.525l1.4 1.4l-3.525 3.55ZM18 15v-2h5v2h-5ZM7.05 10.475l-3.525-3.55l1.4-1.4l3.55 3.525l-1.425 1.425ZM1 15v-2h5v2H1Z");
const importantIcon = Icon.createIcon("orangered", "M13.425 21.45q-.3.3-.663.438t-.762.137q-.4 0-.763-.137t-.662-.438L2.55 13.425q-.3-.3-.437-.663T1.975 12q0-.4.138-.763t.437-.662l8.025-8.025q.3-.3.663-.437T12 1.975q.4 0 .763.138t.662.437l8.025 8.025q.3.3.438.663t.137.762q0 .4-.137.763t-.438.662l-8.025 8.025ZM12 13q.425 0 .713-.287T13 12V8q0-.425-.288-.713T12 7q-.425 0-.713.288T11 8v4q0 .425.288.713T12 13Zm0 3q.425 0 .713-.288T13 15q0-.425-.288-.713T12 14q-.425 0-.713.288T11 15q0 .425.288.713T12 16Z");
const languageIcon = Icon.createIcon("green", "M9 2a8.002 8.002 0 0 1 7.934 6.965l2.25 3.539c.148.233.118.58-.225.728L17 14.07V17a2 2 0 0 1-2 2h-1.999L13 22H4v-3.694c0-1.18-.436-2.297-1.244-3.305A8 8 0 0 1 9 2Zm12.154 16.102l-1.665-1.11A8.959 8.959 0 0 0 21 12a8.958 8.958 0 0 0-1.51-4.993l1.664-1.11A10.948 10.948 0 0 1 23 12c0 2.258-.68 4.356-1.846 6.102Z");
// Bagde Icons
const acceptsNewPatientsIcon = Icon.createIcon("green", "M19 17v2H7v-2s0-4 6-4s6 4 6 4m-3-9a3 3 0 1 0-3 3a3 3 0 0 0 3-3m3.2 5.06A5.6 5.6 0 0 1 21 17v2h3v-2s0-3.45-4.8-3.94M18 5a2.91 2.91 0 0 0-.89.14a5 5 0 0 1 0 5.72A2.91 2.91 0 0 0 18 11a3 3 0 0 0 0-6M8 10H5V7H3v3H0v2h3v3h2v-3h3Z");
const notAcceptsNewPatientsIcon = Icon.createIcon("red", "M19 17v2H7v-2s0-4 6-4s6 4 6 4m-3-9a3 3 0 1 0-3 3a3 3 0 0 0 3-3m3.2 5.06A5.6 5.6 0 0 1 21 17v2h3v-2s0-3.45-4.8-3.94M18 5a2.91 2.91 0 0 0-.89.14a5 5 0 0 1 0 5.72A2.91 2.91 0 0 0 18 11a3 3 0 0 0 0-6M8 10H0v2h8Z");
const overEighteenIcon = Icon.createIcon("green", "M18 5h1v1a1 1 0 0 0 2 0V5h1a1 1 0 0 0 0-2h-1V2a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2ZM7 7v10a1 1 0 0 0 2 0V7a1 1 0 0 0-2 0Zm14.6 2a1 1 0 0 0-.78 1.18a9 9 0 1 1-7-7a1 1 0 1 0 .4-2A10.8 10.8 0 0 0 12 1a11 11 0 1 0 11 11a10.8 10.8 0 0 0-.22-2.2A1 1 0 0 0 21.6 9ZM11 9v1a3 3 0 0 0 .78 2a3 3 0 0 0-.78 2v1a3 3 0 0 0 3 3h1a3 3 0 0 0 3-3v-1a3 3 0 0 0-.78-2a3 3 0 0 0 .78-2V9a3 3 0 0 0-3-3h-1a3 3 0 0 0-3 3Zm5 6a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1Zm0-6v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1Z");
const overThreeIcon = Icon.createIcon("green", "M7.92 7.54c-.8-.34-1.14-1.33-.66-2.05C8.23 4.05 9.85 3 11.99 3c2.35 0 3.96 1.07 4.78 2.41c.7 1.15 1.11 3.3.03 4.9c-1.2 1.77-2.35 2.31-2.97 3.45c-.15.27-.24.49-.3.94c-.09.73-.69 1.3-1.43 1.3c-.87 0-1.58-.75-1.48-1.62c.06-.51.18-1.04.46-1.54c.77-1.39 2.25-2.21 3.11-3.44c.91-1.29.4-3.7-2.18-3.7c-1.17 0-1.93.61-2.4 1.34c-.35.57-1.08.75-1.69.5zM14 20c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2s2 .9 2 2z");
const onLeaveIcon = Icon.createIcon("orange", "M22 16v-2l-8.5-5V3.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5V9L2 14v2l8.5-2.5V19L8 20.5V22l4-1l4 1v-1.5L13.5 19v-5.5L22 16z");
const departingIcon = Icon.createIcon("darkorange", "M15 13h1.5v2.82l2.44 1.41l-.75 1.3L15 16.69V13m4-5H5v11h4.67c-.43-.91-.67-1.93-.67-3a7 7 0 0 1 7-7c1.07 0 2.09.24 3 .67V8M5 21a2 2 0 0 1-2-2V5c0-1.11.89-2 2-2h1V1h2v2h8V1h2v2h1a2 2 0 0 1 2 2v6.1c1.24 1.26 2 2.99 2 4.9a7 7 0 0 1-7 7c-1.91 0-3.64-.76-4.9-2H5m11-9.85A4.85 4.85 0 0 0 11.15 16c0 2.68 2.17 4.85 4.85 4.85A4.85 4.85 0 0 0 20.85 16c0-2.68-2.17-4.85-4.85-4.85Z");
const retiredIcon = Icon.createIcon("red", "M19 19H5V8h14m0-5h-1V1h-2v2H8V1H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M9.31 17l2.44-2.44L14.19 17l1.06-1.06l-2.44-2.44l2.44-2.44L14.19 10l-2.44 2.44L9.31 10l-1.06 1.06l2.44 2.44l-2.44 2.44L9.31 17Z");
// const workersCompIcon = Icon.createIcon("green", "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m-1-5h2v2h-2v-2m0-8h2v6h-2V7Z");
const workersCompIcon = Icon.createIcon("green", "M12 15c-4.42 0-8 1.79-8 4v2h16v-2c0-2.21-3.58-4-8-4M8 9a4 4 0 0 0 4 4a4 4 0 0 0 4-4m-4.5-7c-.3 0-.5.21-.5.5v3h-1V3s-2.25.86-2.25 3.75c0 0-.75.14-.75 1.25h10c-.05-1.11-.75-1.25-.75-1.25C16.25 3.86 14 3 14 3v2.5h-1v-3c0-.29-.19-.5-.5-.5h-1Z");
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


// Define a Provider class
class Provider {
  // Declare a static property `allProviders` to store all instances of the class
  static allProviders = [];

  // Specialty Map used to convert the specialty key to a human readable string
  // also used to create the specialty icons
  // also used to check the imported data for errors

  //test specialty map
  /*specialtyMapTest = {
    "internalmedicine": { readableName: "Internal Medicine", icon: internalMedicineIcon.icon.cloneNode(true), comonVisitReasons: ["Annual Physical", "Internal Medicine Follow Up", "New Patient"] },
    "gastroenterology": { readableName: "Gastroenterology", icon: gastroenterologyIcon.icon.cloneNode(true), comonVisitReasons: ["Colon Cancer Screening", "Colonoscopy Consultation"] },
    "allergy": { readableName: "Allergy", icon: allergyIcon.icon.cloneNode(true), comonVisitReasons: ["Allergy Consultation", "Allergy Follow Up", "Allergy Shots"] },
    "neurology": { readableName: "Neurology", icon: neurologyIcon.icon.cloneNode(true), comonVisitReasons: ["Neurology Consultation", "Neurology Follow Up"] },
    "podiatry": { readableName: "Podiatry", icon: podiatryIcon.icon.cloneNode(true), comonVisitReasons: ["Foot Consultation", "Foot Follow Up"] },
    "pulmonology": { readableName: "Pulmonology", icon: pulmonologyIcon.icon.cloneNode(true), comonVisitReasons: ["Pulmonary Function Testing", "Pulmonology Consultation", "Pulmonology Follow Up"] },
    "physicaltherapy": { readableName: "Physical Therapy", icon: physicalTherapyIcon.icon.cloneNode(true), comonVisitReasons: ["Physical Therapy Consultation", "Physical Therapy Follow Up"] },
    "endocrinology": { readableName: "Endocrinology", icon: endocrinologyIcon.icon.cloneNode(true), comonVisitReasons: ["Diabetes Consultation", "Diabetes Follow Up", "Endocrinology Consultation", "Endocrinology Follow Up"] },
    "rheumatology": { readableName: "Rheumatology", icon: rheumatologyIcon.icon.cloneNode(true), comonVisitReasons: ["Arthritis", "Joint Pain", "Rheumatology Consultation", "Rheumatology Follow Up"] },
    "cardiology": { readableName: "Cardiology", icon: cardiologyIcon.icon.cloneNode(true), comonVisitReasons: ["Cardiology Consultation", "Cardiology Follow Up", "Echocardiogram", "Stress Test"] },
    "dermatology": { readableName: "Dermatology", icon: dermatologyIcon.icon.cloneNode(true), comonVisitReasons: ["Dermatology Consultation", "Dermatology Follow Up"] },
    "nephrology": { readableName: "Nephrology", icon: nephrologyIcon.icon.cloneNode(true), comonVisitReasons: ["Kidney Stones", "Nephrology Consultation", "Nephrology Follow Up"] },
    "vascular": { readableName: "Vascular", icon: vascularIcon.icon.cloneNode(true), comonVisitReasons: ["Vascular Consultation", "Vascular Follow Up"] },
    "oncology": { readableName: "Oncology", icon: oncologyIcon.icon.cloneNode(true), comonVisitReasons: ["Oncology Consultation", "Oncology Follow Up"] },
    "weightmanagement": { readableName: "Weight Management", icon: weightManagementIcon.icon.cloneNode(true), comonVisitReasons: ["Weight Loss Consultation", "Weight Loss Follow Up"] },
    "orthopedics": { readableName: "Orthopedics", icon: orthopedicsIcon.icon.cloneNode(true), comonVisitReasons: ["Orthopedic Consultation", "Orthopedic Follow Up"] },
    "urology": { readableName: "Urology", icon: urologyIcon.icon.cloneNode(true), comonVisitReasons: ["Urology Consultation", "Urology Follow Up"] },
    "ophthalmology": { readableName: "Ophthalmology", icon: ophthalmologyIcon.icon.cloneNode(true), comonVisitReasons: ["Eye Consultation", "Eye Follow Up"] },
  };
  */

  // Address Map used to convert the office key to a human readable string, which includes the address
  // also used to check the imported data for errors
  addressMap = {
    "whiteplains": "210 Westchester Ave, White Plains, NY 10601",
    "rye": "1 Theall Rd, Rye, NY 10580",
    "purchase": "3030 Westchester ave, Purchase, NY 10577",
    "yonkersbt": "1084 North Broadway, Yonkers, NY 10701",
    "yonkersnr": "74 Market Street, Yonkers, NY 10701",
  };

  // Define a constructor method
  constructor(firstName = "Julio César", lastName = "Correa", title = "Dr", gender = "male", specialty = ["physicaltherapy"], acceptsNewPatients = true, office = ["whiteplains"], fax = ["123456789"], emergencyLine = ["123"], languages = "english", insurances = [], onLeave = false, departing = false, departingDate, retired = false, ageGroup = "+18", importantInfo = "MISSING INFORMATION") {
    // Assign the input values to the respective properties of the instance
    this.firstName = firstName;
    this.lastName = lastName;
    this.title = title;
    this.gender = gender;
    this.specialty = specialty || [];
    this.acceptsNewPatients = acceptsNewPatients;
    this.office = office || [];
    this.fax = fax || [];
    this.emergencyLine = emergencyLine || [];
    this.languages = languages;
    this.insurances = insurances || [];
    this.onLeave = onLeave;
    this.departing = departing;
    this.departingDate = departingDate;
    this.retired = retired;
    this.ageGroup = ageGroup;
    this.importantInfo = importantInfo;
    this._errors;

    // // Data Compatibility Values
    // this._firstNameCompatible = false;
    // this._lastNameCompatible = false;
    // this._titleCompatible = false;
    // this._genderCompatible = false;
    // this._specialtyCompatible = false;
    // this._acceptsNewPatientsCompatible = false;
    // this._officeCompatible = false;
    // this._faxCompatible = false;
    // this._emergencyLineCompatible = false;
    // this._languagesCompatible = false;
    // this._insurancesCompatible = false;
    // this._onLeaveCompatible = false;
    // this._departingCompatible = false;
    // this._departingDateCompatible = false;
    // this._retiredCompatible = false;
    // this._ageGroupCompatible = false;
    // this._importantInfoCompatible = false;

    // Add the new instance to the `allProviders` array
    Provider.allProviders.push(this);
  }

  // Gether Methods
  // Getter for the firstName property
  get firstName() {
    return this._firstName;
  }

  // Getter for the lastName property
  get lastName() {
    return this._lastName;
  }

  // Getter for the office property
  get office() {
    return this._office;
  }

  // Getter for the specialty property
  get specialty() {
    return this._specialty;
  }

  // Getter for the title property
  get title() {
    return this._title;
  }

  // Getter for the acceptsNewPatients property
  get acceptsNewPatients() {
    return this._acceptsNewPatients;
  }

  // Getter for the onLeave property
  get onLeave() {
    return this._onLeave;
  }

  // Getter for the departing property
  get departing() {
    return this._departing;
  }

  // Getter for the departingDate property
  get departingDate() {
    return this._departingDate;
  }

  // Getter for the retired property
  get retired() {
    return this._retired;
  }

  // Getter for the insurances property
  get insurances() {
    return this._insurances;
  }

  // Getter for the gender property
  get gender() {
    return this._gender;
  }

  // Getter for the fax property
  get fax() {
    return this._fax;
  }

  // Getter for the languages property
  get languages() {
    return this._languages;
  }

  // Getter for the ageGroup property
  get ageGroup() {
    return this._ageGroup;
  }

  // Getter for the emergencyLine property
  get emergencyLine() {
    return this._emergencyLine;
  }

  // Getter for the importantInfo property
  get importantInfo() {
    return this._importantInfo;
  }

  // Getter for the relevanceScore property
  get relevanceScore() {
    return this._relevanceScore;
  }

  // Getter for the errors property
  get errors() {
    return this._errors;
  }

  // Setter Methods
  // Setter for the firstName property
  set firstName(name) {
    console.log("Setting firstName to " + name)
    this._firstName = name;
    if (isDataCompatible("firstName", name)) {
      this._firstNameCompatible = true;
    } else {
      this._firstNameCompatible = false;
    }
  }

  // Setter for the lastName property
  set lastName(name) {
    console.log("Setting lastName to " + name)
    this._lastName = name;
    if (isDataCompatible("lastName", name)) {
      this._lastNameCompatible = true;
    } else {
      this._lastNameCompatible = false;
    }
  }

  // Setter for the title property
  set title(title) {
    console.log("Setting title to " + title + " for " + this.firstName + " " + this.lastName)
    this._title = title;
    if (isDataCompatible("title", title)) {
      this._titleCompatible = true;
    } else {
      this._titleCompatible = false;
    }
  }

  // Setter for the gender property
  set gender(gender) {
    console.log("setting gender to " + gender + " for " + this.firstName + " " + this.lastName + "")
    this._gender = gender[0];
    if (isDataCompatible("gender", gender)) {
      this._genderCompatible = true;
    } else {
      this._genderCompatible = false;
    }
  }

  // Setter for the specialty property
  set specialty(specialty) {
    console.log("setting specialty to " + specialty + " for " + this.firstName + " " + this.lastName + "")
    this._specialty = specialty;
    if (isDataCompatible("specialty", specialty)) {
      this._specialtyCompatible = true;
    } else {
      this._specialtyCompatible = false;
    }
  }

  // Setter for the acceptsNewPatients property
  set acceptsNewPatients(acceptsNewPatients) {
    console.log("setting acceptsNewPatients to " + acceptsNewPatients + " for " + this.firstName + " " + this.lastName + "")
    this._acceptsNewPatients = acceptsNewPatients;
    if (isDataCompatible("acceptsNewPatients", acceptsNewPatients)) {
      this._acceptsNewPatientsCompatible = true;
    } else {
      this._acceptsNewPatientsCompatible = false;
    }
  }

  // Setter for the office property
  set office(office) {
    console.log("setting office to " + office + " for " + this.firstName + " " + this.lastName + "")
    this._office = office;
    if (isDataCompatible("office", office)) {
      this._officeCompatible = true;
    } else {
      this._officeCompatible = false;
    }
  }

  // Setter for the fax property
  set fax(fax) {
    console.log("setting fax to " + fax + " for " + this.firstName + " " + this.lastName + "")
    this._fax = fax;
    if (isDataCompatible("fax", fax)) {
      this._faxCompatible = true;
    } else {
      this._faxCompatible = false;
    }
  }

  // Setter for the emergencyLine property
  set emergencyLine(emergencyLine) {
    console.log("setting emergencyLine to " + emergencyLine + " for " + this.firstName + " " + this.lastName + "")
    this._emergencyLine = emergencyLine;
    if (isDataCompatible("emergencyLine", emergencyLine)) {
      this._emergencyLineCompatible = true;
    } else {
      this._emergencyLineCompatible = false;
    }
  }

  // Setter for the languages property
  set languages(languages) {
    console.log("setting languages to " + languages + " for " + this.firstName + " " + this.lastName + "")
    this._languages = languages;
    if (isDataCompatible("languages", languages)) {
      this._languagesCompatible = true;
    } else {
      this._languagesCompatible = false;
    }
  }

  // Setter for the insurances property
  set insurances(insurances) {
    console.log("setting insurances to " + insurances + " for " + this.firstName + " " + this.lastName + "")
    this._insurances = insurances;
    if (isDataCompatible("insurances", insurances)) {
      this._insurancesCompatible = true;
    } else {
      this._insurancesCompatible = false;
    }
  }

  // Setter for the onLeave property
  set onLeave(onLeave) {
    console.log("setting onLeave to " + onLeave + " for " + this.firstName + " " + this.lastName + "")
    this._onLeave = onLeave;
    if (isDataCompatible("onLeave", onLeave)) {
      this._onLeaveCompatible = true;
    } else {
      this._onLeaveCompatible = false;
    }
  }

  // Setter for the departing property
  set departing(departing) {
    console.log("setting departing to " + departing + " for " + this.firstName + " " + this.lastName + "")
    this._departing = departing;
    if (isDataCompatible("departing", departing)) {
      this._departingCompatible = true;
    } else {
      this._departingCompatible = false;
    }
  }

  // Setter for the departingDate property
  set departingDate(departingDate) {
    console.log("setting departingDate to " + departingDate + " for " + this.firstName + " " + this.lastName + "")
    this._departingDate = departingDate;
    if (isDataCompatible("departingDate", departingDate)) {
      this._departingDateCompatible = true;
    } else {
      this._departingDateCompatible = false;
    }
  }

  // Setter for the retired property
  set retired(retired) {
    console.log("setting retired to " + retired + " for " + this.firstName + " " + this.lastName + "")
    this._retired = retired;
    if (isDataCompatible("retired", retired)) {
      this._retiredCompatible = true;
    } else {
      this._retiredCompatible = false;
    }
  }

  // Setter for the ageGroup property
  set ageGroup(ageGroup) {
    console.log("setting ageGroup to " + ageGroup + " for " + this.firstName + " " + this.lastName + "")
    this._ageGroup = ageGroup;
    if (isDataCompatible("ageGroup", ageGroup)) {
      this._ageGroupCompatible = true;
    } else {
      this._ageGroupCompatible = false;
    }
  }

  // Setter for the importantInfo property
  set importantInfo(importantInfo) {
    console.log("setting importantInfo to " + importantInfo + " for " + this.firstName + " " + this.lastName + "")
    this._importantInfo = importantInfo;
    if (isDataCompatible("importantInfo", importantInfo)) {
      this._importantInfoCompatible = true;
    } else {
      this._importantInfoCompatible = false;
    }
  }

  // Setter for the relevanceScore property
  set relevanceScore(score) {
    this._relevanceScore = score;
  }

  // Setter for the error property
  set errors(error) {
    this._errors = error;
  }

  static getAllProviders() {
    return Provider.allProviders;
  }

  // Define a method getLanguages to return the languages spoken by the provider, with the first letter of each language capitalized
  getLanguages() {
    // Helper function to capitalize the first letter of a string
    const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    // Check if the _languages property is an array
    if (Array.isArray(this._languages)) {
      // Capitalize the first letter of each language and join them with commas
      return this._languages.map(capitalizeFirstLetter).join(", ");
    } else {
      // Capitalize the first letter of the single language
      return capitalizeFirstLetter(this._languages);
    }
  }

  // Define a method getAgeGroup to return the age group of th e provider
  getAgeGroup() {
    const ageMap = {
      "Adults": "+18",
      "18": "+18",
      "allages": "All Ages",
    }

    return ageMap[this.ageGroup] || this.ageGroup;
  }

  // Define a method getAddress to return the addresses of the provider's offices
  getAddress() {
    // Create a map of office names to their corresponding addresses
    const addressMap = {
      "whiteplains": "210 Westchester Ave, White Plains, NY 10601",
      "rye": "1 Theall Rd, Rye, NY 10580",
      "purchase": "3030 Westchester ave, Purchase, NY 10577",
      "yonkersbt": "1084 North Broadway, Yonkers, NY 10701",
      "yonkersnr": "74 Market Street, Yonkers, NY 10701",
    };
    // Map the provider's offices to their addresses using the addressMap
    return this._office.map((office) => addressMap[office]);
  }

  // Icon Getters
  // Define a method getGenderIcon to return the appropriate gender icon based on the provider's gender
  getGenderIcon() {
    // Check if the provider's gender is male
    if (this._gender === "male") {
      // Return a clone of the male icon
      return maleIcon.icon.cloneNode(true);
    } else if (this._gender === "female") {
      // Return a clone of the female icon
      return femaleIcon.icon.cloneNode(true);
    } else {
      // Return undefined if the gender is not male or female
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

  // Define a method `getOnLeaveIcon` to return the on leave icon if the provider is on leave, and the not on leave icon if the provider is not on leave.
  getOnLeaveIcon() {
    if (this._onLeave) {
      return onLeaveIcon.icon.cloneNode(true);
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
    return onLeaveIcon.icon.cloneNode(true);
  }

  // Define a method 'getRetiredIcon' to return the retired icon if the provider is retired, and the not retired icon if the provider is not retired.
  getRetiredIcon() {
    return retiredIcon.icon.cloneNode(true);
  }

  // Define a method `getDepartingIcon` to return the departing icon if the provider is departing, and the not departing icon if the provider is not departing.
  getDepartingText() {
    if (this._departing) {
      let departingDateText = document.createElement("p");
      departingDateText.classList.add("departing-date");
      departingDateText.innerText = this._departingDate;
      console.log(this._departingDate);
      // departingIcon.icon.appendChild(departingDateText);

      // return departingIcon.icon.cloneNode(true);
      return departingDateText;
    }
  }

  // Define a method `getSpecialtyIcon` to return the specialty icon based on the specialty of the provider.
  getSpecialtyIcon() {
    const specialtyMap = {
      "internalmedicine": internalMedicineIcon.icon.cloneNode(true),
      "gastroenterology": gastroenterologyIcon.icon.cloneNode(true),
      "allergy": allergyIcon.icon.cloneNode(true),
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
    console.log(`This is the specialty ${this.specialty}`)
    let specialtyIcon = this.specialty.map(specialty => specialtyMap[specialty]);
    return specialtyIcon;
  }


  // Define a method "getCommonVisitReasons" to return the common visit reasons of each specialty.
  getCommonVisitReasons() {
    const specialtyMap = {
      "internalmedicine": "Common Visit Reasons: Cold, Flu, Fever, Cough, Sinus",
      "gastroenterology": "Common Visit Reasons: Stomach Pain, Stomach Ulcer, Stomach Cancer, Stomach Bleeding, Stomach Infection, Stomach Flu, Stomach Virus, Stomach Bacteria, Stomach Parasite",
      "allergy": "Common Visit Reasons: Allergy, Asthma, Sinus, Cold, Flu, Fever, Cough",
      "neurology": "Common Visit Reasons: Headache, Migraine, Dizziness, Seizure, Stroke, Numbness, Tingling, Weakness",
      "podiatry": "Common Visit Reasons: Foot Pain, Foot Injury, Foot Infection, Foot Ulcer, Foot Tumor, Foot Fracture, Foot Sprain, Foot Strain, Foot Arthritis, Foot Bursitis, Foot Tendonitis, Foot Tendonosis, Foot Tendinosis, Foot Tendinopathy",
      "pulmonology": "Common Visit Reasons: Asthma, COPD, Emphysema, Bronchitis, Lung Cancer, Lung Infection",
      "physicaltherapy": "Common Visit Reasons: Back Pain, Neck Pain, Shoulder Pain, Knee Pain, Ankle Pain, Foot Pain, Elbow Pain, Wrist Pain, Hand Pain, Hip Pain, Back Injury, Neck Injury, Shoulder Injury, Knee Injury, Ankle Injury, Foot Injury, Elbow Injury, Wrist Injury, Hand Injury, Hip Injury, Back Strain, Neck Strain, Shoulder Strain, Knee Strain, Ankle Strain, Foot Strain, Elbow Strain, Wrist Strain, Hand Strain, Hip Strain, Back Sprain, Neck Sprain, Shoulder Sprain, Knee Sprain, Ankle Sprain, Foot Sprain, Elbow Sprain, Wrist Sprain, Hand Sprain, Hip Sprain, Back Arthritis, Neck Arthritis, Shoulder Arthritis, Knee Arthritis, Ankle Arthritis, Foot Arthritis, Elbow Arthritis, Wrist Arthritis, Hand Arthritis, Hip Arthritis, Back Bursitis, Neck Bursitis, Shoulder Bursitis, Knee Bursitis, Ankle Bursitis, Foot Bursitis, Elbow Bursitis, Wrist Bursitis, Hand Bursitis, Hip Bursitis, Back Tendonitis, Neck Tendonitis, Shoulder Tendonitis, Knee Tendonitis, Ankle Tendonitis, Foot Tendonitis, Elbow Tendonitis, Wrist Tendonitis, Hand Tendonitis, Hip Tendonitis, Back Tendonosis, Neck Tendonosis, Shoulder Tendonosis, Knee Tendonosis, Ankle Tendonosis, Foot Tendonosis, Elbow Tendonosis, Wrist Tendonosis, Hand Tendonosis, Hip Tendonosis, Back Tendinosis, Neck Tendinosis, Shoulder Tendinosis, Knee Tendinosis, Ankle Tendinosis, Foot Tendinosis, Elbow Tendinosis, Wrist Tendinosis, Hand Tendinosis, Hip Tendinosis, Back Tendinopathy, Neck Tendinopathy, Shoulder Tendinopathy, Knee Tendinopathy, Ankle Tendinopathy, Foot Tendinopathy, Elbow Tendinopathy, Wrist Tendinopathy, Hand Tendinopathy, Hip Tendinopathy, Back Degeneration, Neck Degeneration, Shoulder Degeneration, Knee Degeneration",
      "endocrinology": "Common Visit Reasons: Diabetes, Thyroid, Adrenal, Pituitary, Osteoporosis, Metabolic Syndrome, Obesity, Weight Management, Weight Loss, Weight Gain, Insulin Resistance, Insulin Deficiency, Insulin Overproduction",
      "rheumatology": "Common Visit Reasons: Arthritis, Osteoarthritis, Rheumatoid Arthritis, Gout, Osteoporosis, Fibromyalgia, Lupus, Sjogren's, Scleroderma, Psoriatic Arthritis, Ankylosing Spondylitis, Polymyalgia Rheumatica, Vasculitis, Sarcoidosis, Spondyloarthritis, Systemic Lupus Erythematosus, Systemic Sclerosis",
      "cardiology": "Common Visit Reasons: Heart Attack, Heart Failure",
      "dermatology": "Common Visit Reasons: Acne, Eczema, Psoriasis, Rosacea, Skin Cancer, Skin Infection, Skin Tumor",
      "nephrology": "Common Visit Reasons: Kidney Function Follow Up",
      "vascular": "Common Visit Reasons: Varicose Veins, Peripheral Arterial Disease, Peripheral Vascular Disease, Carotid Artery Disease, Carotid Artery Stenosis, Carotid Artery Blockage, Carotid Artery Aneurysm, Carotid Artery Dissection, Carotid Artery Occlusion, Carotid Artery Thrombosis, Carotid Artery Stenosis, Carotid Artery Blockage, Carotid Artery Aneurysm, Carotid Artery Dissection, Carotid Artery Occlusion, Carotid Artery Thrombosis, Carotid Artery Stenosis, Carotid Artery Blockage, Carotid Artery Aneurysm, Carotid Artery Dissection, Carotid Artery Occlusion, Carotid Artery Thrombosis, Carotid Artery Stenosis, Carotid Artery Blockage, Carotid Artery Aneurysm, Carotid Artery Dissection, Carotid Artery Occlusion, Carotid Artery Thrombosis, Carotid Artery Stenosis, Carotid Artery Blockage, Carotid Artery Aneurysm, Carotid Artery Dissection, Carotid Artery Occlusion, Carotid Artery Thrombosis, Carotid Artery Stenosis, Carotid Artery Blockage, Carotid Artery Aneurysm, Carotid Artery Dissection, Carotid Artery Occlusion, Carotid Artery Thrombosis, Carotid Artery Stenosis, Carotid Artery Blockage, Carotid Artery Aneurysm, Carotid Artery Dissection, Carotid Artery Occlusion, Carotid Artery Thrombosis, Carotid Artery Stenosis, Carotid Artery Blockage, Carotid Artery Aneurysm, Carotid Artery Dissection, Carotid Artery Occlusion, Carotid Artery Thrombosis, Carotid Artery Stenosis, Carotid Artery Blockage, Carotid Artery Aneurysm, Carotid Artery Dissection, Carotid Artery Occlusion",
      "oncology": "Common Visit Reasons: Cancer Follow Up, Cancer Treatment Follow Up, Cancer Screening",
      "weightmanagement": "lol no",
      "orthopedics": "Common Visit Reasons: Knee Pain, Knee Injury, Knee Arthritis, Knee Replacement, Knee Surgery, Knee Sprain, Knee Strain, Knee Fracture, Knee Dislocation, Knee Tendonitis, Knee Bursitis, Knee Tendinitis, Knee Tendon Tear, Knee Tendon Rupture, Knee Tendon Strain, Knee Tendon Sprain, Knee Tendonitis, Knee Bursitis, Knee Tendinitis, Knee Tendon Tear, Knee Tendon Rupture, Knee Tendon Strain, Knee Tendon Sprain, Knee Tendonitis, Knee Bursitis, Knee Tendinitis, Knee Tendon Tear, Knee Tendon Rupture, Knee Tendon Strain, Knee Tendon Sprain, Knee Tendonitis, Knee Bursitis, Knee Tendinitis, Knee Tendon Tear, Knee Tendon Rupture, Knee Tendon Strain, Knee Tendon Sprain, Knee Tendonitis, Knee Bursitis, Knee Tendinitis, Knee Tendon Tear, Knee Tendon Rupture, Knee Tendon Strain, Knee Tendon Sprain, Knee Tendonitis, Knee Bursitis, Knee Tendinitis, Knee Tendon Tear, Knee Tendon Rupture, Knee Tendon Strain, Knee Tendon Sprain, Knee Tendonitis, Knee Bursitis, Knee Tendinitis, Knee Tendon Tear, Knee Tendon Rupture, Knee Tendon Strain, Knee Tendon Sprain, Knee Tendonitis, Knee Bursitis, Knee Tendinitis, Knee Tendon Tear, Knee Tendon Rupture, Knee Tendon Strain, Knee Tendon Sprain, Knee Tendonitis, Knee Bursitis, Knee Tendinitis, Knee Tendon Tear, Knee Tendon Rupture, Knee Tendon Strain, Knee Tendon Sprain, Knee Tendonitis, Knee Bursitis, Knee Tendinitis, Knee Tendon Tear, Knee Tendon Rupture, Knee Tendon Strain, Knee Tendon Sprain, Knee Tendonitis, Knee Bursitis, Knee Tendinitis, Knee Tendon Tear, Knee Tendon Rupture, Knee Tendon Strain, Knee Tendon Sprain, Knee Tendonitis, Knee Bursitis, Knee Tendinitis, Knee Tendon Tear, Knee Tendon",
      "urology": "Common Visit Reasons: Urology Consult, Urology Follow Up, Urology Screening, Urology Treatment, Urology Surge",
      "ophthalmology": "Common Visit Reasons: Eye Exam, Eye Consult, Eye Follow Up, Eye Screening, Eye Treatment, Eye Surgery",
    };

    return this.specialty.map((specialty) => specialtyMap[specialty]);
  }

  // Define a static method `getSpecialtyName` to return the specialty name from the specialty code. 
  getSpecialtyName() {
    let specialtyMap = {
      "internalmedicine": "Internal Medicine",
      "gastroenterology": "Gastroenterology",
      "allergy": "Allergy",
      "neurology": "Neurology",
      "podiatry": "Podiatry",
      "pulmonology": "Pulmonology",
      "physicaltherapy": "Physical Therapy",
      "endocrinology": "Endocrinology",
      "rheumatology": "Rheumatology",
      "cardiology": "Cardiology",
      "dermatology": "Dermatology",
      "nephrology": "Nephrology",
      "vascular": "Vascular",
      "oncology": "Oncology",
      "weightmanagement": "Weight Management",
      "orthopedics": "Orthopedics",
      "urology": "Urology",
      "ophthalmology": "Ophthalmology"
    };
    return this.specialty.map((specialty) => specialtyMap[specialty]);
  }

  checkImportedData(type) {
    const compatibleOfficeData = ["whiteplains", "rye", "purchase", "yonkersbt", "yonkersrh", "newrochelle"];
    const compatibleSpecialtyData = ["internalmedicine", "gastroenterology", "allergy", "neurology", "podiatry", "pulmonology", "physicaltherapy", "endocrinology", "rheumatology", "cardiology", "dermatology", "nephrology", "vascular", "oncology", "weightmanagement", "orthopedics", "urology", "ophthalmology"];

    console.log("Data type: " + type);
    if (type === "office") {
      console.log(this.office);
      if (this.office.every((data) => compatibleOfficeData.includes(data))) {
        return "-compatible";
      } else {
        console.log(`non-compatible: "${this.office}"`);
        return "-non-compatible";
      }
    } else if (type === "specialty") {
      console.log(this.specialty);
      if (this.specialty.every((data) => compatibleSpecialtyData.includes(data))) {
        return "-compatible";
      } else {
        console.log(`non-compatible: "${this.specialty}"`);
        return "-non-compatible";
      }
    }
  }


  static providerTable(providers = this.allProviders) {
    
    // Create error counter

    // Create the table
    let providerTable = document.createElement("table");
    providerTable.classList.add("provider-table");

    // Create the table header
    let providerTableHeader = document.createElement("tr");
    providerTableHeader.classList.add("provider-table-header");

    // Create Table Caption
    let providerTableCaption = document.createElement("caption");
    providerTableCaption.classList.add("provider-table-caption");
    providerTableCaption.textContent = "Provider Data Preview";
    providerTable.appendChild(providerTableCaption);

    // First Name
    let providerTableHeaderFirstName = document.createElement("th");
    providerTableHeaderFirstName.classList.add("provider-table-header-first-name");
    providerTableHeaderFirstName.textContent = "First Name";

    // Last Name
    let providerTableHeaderLastName = document.createElement("th");
    providerTableHeaderLastName.classList.add("provider-table-header-last-name");
    providerTableHeaderLastName.textContent = "Last Name";

    // Title
    let providerTableHeaderTitle = document.createElement("th");
    providerTableHeaderTitle.classList.add("provider-table-header-title");
    providerTableHeaderTitle.textContent = "Title";

    // Gender 
    let providerTableHeaderGender = document.createElement("th");
    providerTableHeaderGender.classList.add("provider-table-header-gender");
    providerTableHeaderGender.textContent = "Gender";

    // Specialty
    let providerTableHeaderSpecialty = document.createElement("th");
    providerTableHeaderSpecialty.classList.add("provider-table-header-specialty");
    providerTableHeaderSpecialty.textContent = "Specialty";

    // Acceptance
    let providerTableHeaderAcceptance = document.createElement("th");
    providerTableHeaderAcceptance.classList.add("provider-table-header-acceptance");
    providerTableHeaderAcceptance.textContent = "Accepts New Patients";

    // Location
    let providerTableHeaderOffice = document.createElement("th");
    providerTableHeaderOffice.classList.add("provider-table-header-office");
    providerTableHeaderOffice.textContent = "Office";

    // Fax
    let providerTableHeaderFax = document.createElement("th");
    providerTableHeaderFax.classList.add("provider-table-header-fax");
    providerTableHeaderFax.textContent = "Fax";

    // Emeregency Line
    let providerTableHeaderEmergency = document.createElement("th");
    providerTableHeaderEmergency.classList.add("provider-table-header-emergency");
    providerTableHeaderEmergency.textContent = "Emergency Line";

    // Language
    let providerTableHeaderLanguage = document.createElement("th");
    providerTableHeaderLanguage.classList.add("provider-table-header-language");
    providerTableHeaderLanguage.textContent = "Languages";

    // Insurances
    let providerTableHeaderInsurances = document.createElement("th");
    providerTableHeaderInsurances.classList.add("provider-table-header-insurances");
    providerTableHeaderInsurances.textContent = "Insurances";

    // On Leave
    let providerTableHeaderOnLeave = document.createElement("th");
    providerTableHeaderOnLeave.classList.add("provider-table-header-on-leave");
    providerTableHeaderOnLeave.textContent = "On Leave";

    // Departing
    let providerTableHeaderDeparting = document.createElement("th");
    providerTableHeaderDeparting.classList.add("provider-table-header-departing");
    providerTableHeaderDeparting.textContent = "Departing";

    // Departing Date
    let providerTableHeaderDepartingDate = document.createElement("th");
    providerTableHeaderDepartingDate.classList.add("provider-table-header-departing-date");
    providerTableHeaderDepartingDate.textContent = "Departing Date";

    // Retired
    let providerTableHeaderRetired = document.createElement("th");
    providerTableHeaderRetired.classList.add("provider-table-header-retired");
    providerTableHeaderRetired.textContent = "Retired";

    // Age Group
    let providerTableHeaderAgeGroup = document.createElement("th");
    providerTableHeaderAgeGroup.classList.add("provider-table-header-age-group");
    providerTableHeaderAgeGroup.textContent = "Age Group";

    // Important Information
    let providerTableHeaderImportantInformation = document.createElement("th");
    providerTableHeaderImportantInformation.classList.add("provider-table-header-important-information");
    providerTableHeaderImportantInformation.textContent = "Important Information";

    // Availability
    let providerTableHeaderAvailability = document.createElement("th");
    providerTableHeaderAvailability.classList.add("provider-table-header-availability");
    providerTableHeaderAvailability.textContent = "Availability";

    providerTableHeader.appendChild(providerTableHeaderFirstName);
    providerTableHeader.appendChild(providerTableHeaderLastName);
    providerTableHeader.appendChild(providerTableHeaderTitle);
    providerTableHeader.appendChild(providerTableHeaderGender);
    providerTableHeader.appendChild(providerTableHeaderSpecialty);
    providerTableHeader.appendChild(providerTableHeaderAcceptance);
    providerTableHeader.appendChild(providerTableHeaderOffice);
    providerTableHeader.appendChild(providerTableHeaderFax);
    providerTableHeader.appendChild(providerTableHeaderEmergency);
    providerTableHeader.appendChild(providerTableHeaderLanguage);
    providerTableHeader.appendChild(providerTableHeaderInsurances);
    providerTableHeader.appendChild(providerTableHeaderOnLeave);
    providerTableHeader.appendChild(providerTableHeaderDeparting);
    providerTableHeader.appendChild(providerTableHeaderDepartingDate);
    providerTableHeader.appendChild(providerTableHeaderRetired);
    providerTableHeader.appendChild(providerTableHeaderAgeGroup);
    providerTableHeader.appendChild(providerTableHeaderImportantInformation);
    providerTableHeader.appendChild(providerTableHeaderAvailability);
    providerTable.appendChild(providerTableHeader);

    providers.forEach((provider) => {
      providerTable.appendChild(provider.providerTableRow());
    });
    return providerTable;
  }

  providerTableRow() {
    let providerTableRow = document.createElement("tr");
    providerTableRow.classList.add("provider-table-row");

    let providerTableRowFirstName = document.createElement("td");
    providerTableRowFirstName.classList.add(`provider-table-row-cell${setClassSuffix(this._firstNameCompatible)}`);
    providerTableRowFirstName.textContent = this.firstName;

    let providerTableRowLastName = document.createElement("td");
    providerTableRowLastName.classList.add(`provider-table-row-cell${setClassSuffix(this._lastNameCompatible)}`);
    providerTableRowLastName.textContent = this.lastName;


    let providerTableRowTitle = document.createElement("td");
    providerTableRowTitle.classList.add(`provider-table-row-cell${setClassSuffix(this._titleCompatible)}`);
    providerTableRowTitle.textContent = this.title;

    let providerTableRowGender = document.createElement("td");
    providerTableRowGender.classList.add(`provider-table-row-cell${setClassSuffix(this._genderCompatible)}`);
    providerTableRowGender.textContent = this.gender;

    let providerTableRowSpecialty = document.createElement("td");
    console.log("This specialty: " + this.specialty)
    providerTableRowSpecialty.classList.add(`provider-table-row-cell${setClassSuffix(this._specialtyCompatible)}`);
    providerTableRowSpecialty.textContent = this.specialty;

    let providerTableRowAcceptance = document.createElement("td");
    providerTableRowAcceptance.classList.add("provider-table-row-cell");
    providerTableRowAcceptance.textContent = this.acceptsNewPatients;

    let providerTableRowOffice = document.createElement("td");
    // providerTableRowOffice.classList.add("provider-table-row-office");
    providerTableRowOffice.classList.add(`provider-table-row-cell${setClassSuffix(this._officeCompatible)}`);
    providerTableRowOffice.textContent = this.office;

    let providerTableRowFax = document.createElement("td");
    providerTableRowFax.classList.add(`provider-table-row-cell${setClassSuffix(this._faxCompatible)}`);
    providerTableRowFax.textContent = this.fax;

    let providerTableRowEmergency = document.createElement("td");
    providerTableRowEmergency.classList.add(`provider-table-row-cell${setClassSuffix(this._emergencyLineCompatible)}`);
    providerTableRowEmergency.textContent = this.emergencyLine;

    let providerTableRowLanguages = document.createElement("td");
    providerTableRowLanguages.classList.add(`provider-table-row-cell${setClassSuffix(this._languagesCompatible)}`);
    providerTableRowLanguages.textContent = this.languages;

    let providerTableRowInsurances = document.createElement("td");
    providerTableRowInsurances.classList.add(`provider-table-row-cell${setClassSuffix(this._insurancesCompatible)}`);
    providerTableRowInsurances.textContent = this.insurances;

    let providerTableRowOnLeave = document.createElement("td");
    providerTableRowOnLeave.classList.add(`provider-table-row-cell${setClassSuffix(this._onLeaveCompatible)}`);
    providerTableRowOnLeave.textContent = this.onLeave;

    let providerTableRowDeparting = document.createElement("td");
    providerTableRowDeparting.classList.add(`provider-table-row-cell${setClassSuffix(this._departingCompatible)}`);
    providerTableRowDeparting.textContent = this.departing;

    let providerTableRowDepartingDate = document.createElement("td");
    providerTableRowDepartingDate.classList.add(`provider-table-row-cell${setClassSuffix(this._departingDateCompatible)}`);
    providerTableRowDepartingDate.textContent = this.departingDate;

    let providerTableRowRetired = document.createElement("td");
    providerTableRowRetired.classList.add(`provider-table-row-cell${setClassSuffix(this._retiredCompatible)}`);
    providerTableRowRetired.textContent = this.retired;

    let providerTableRowAgeGroup = document.createElement("td");
    providerTableRowAgeGroup.classList.add(`provider-table-row-cell${setClassSuffix(this._ageGroupCompatible)}`);
    providerTableRowAgeGroup.textContent = this.ageGroup;

    let providerTableRowImportantInformation = document.createElement("td");
    providerTableRowImportantInformation.classList.add(`provider-table-row-cell${setClassSuffix(this._importantInfoCompatible)}`);
    providerTableRowImportantInformation.textContent = this.importantInfo;

    let providerTableRowAvailability = document.createElement("td");
    providerTableRowAvailability.classList.add(`provider-table-row-cell${setClassSuffix(this._availabilityCompatible)}`);
    providerTableRowAvailability.textContent = this.availability;

    providerTableRow.appendChild(providerTableRowFirstName);
    providerTableRow.appendChild(providerTableRowLastName);
    providerTableRow.appendChild(providerTableRowTitle);
    providerTableRow.appendChild(providerTableRowGender);
    providerTableRow.appendChild(providerTableRowSpecialty);
    providerTableRow.appendChild(providerTableRowAcceptance);
    providerTableRow.appendChild(providerTableRowOffice);
    providerTableRow.appendChild(providerTableRowFax);
    providerTableRow.appendChild(providerTableRowEmergency);
    providerTableRow.appendChild(providerTableRowLanguages);
    providerTableRow.appendChild(providerTableRowInsurances);
    providerTableRow.appendChild(providerTableRowOnLeave);
    providerTableRow.appendChild(providerTableRowDeparting);
    providerTableRow.appendChild(providerTableRowDepartingDate);
    providerTableRow.appendChild(providerTableRowRetired);
    providerTableRow.appendChild(providerTableRowAgeGroup);
    providerTableRow.appendChild(providerTableRowImportantInformation);
    providerTableRow.appendChild(providerTableRowAvailability);

    return providerTableRow;
  }

  // Define a method `createProviderCard` to create a provider card, and append it to the DOM, using the data from the instance. This method should be called in the `displaySearchResults` function.
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
  // common-visit-reasons-row
  // card-body-left-side
  // card-body-right-side
  // card-body
  // location-group
  // location
  // fax
  //////////////////////////


}



export { Provider };
export { Icon }; 