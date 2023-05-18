phoneNumRegEx = /n[0-9]{3}\s*[0-9]{3}\s*[0-9]+n/g;
dateRegEx = /d(janu[ary]?|febr?u?a?rk?y?|marc?h?|apri?l?|may|june?|july?|augu?s?t?|sept?e?m?b?e?r?|octo?b?e?r?|nove?m?b?e?r?|dece?m?b?e?r?|[0-9]{2})\s?0*[1-9]+\s?\d?\d?\d{2}d$/



abbrRxRegEx = /rx\W?$/;
abbrPtRegEx = /pt\W?$/;
abbrPlsRegEx = /pls\W?$/i;
abbrBcRegEx = /bc\W?$/i;
abbrCbRegEx = /cb\W?$/i;
abbrResRegEx = /resc?h?e?d?u?l?e?\W?$/;

macroRegEx = /macro:(callback|refill)/
nameRegEx = /name:\w+/;
doctorRegEx = /dr:\w+/;
nameRegEx = /name:\w+/;
callRegEx = /call:\d{10}/

const formatMonth = (num) => {
  messageArray[num] = messageArray[num].replace(/janu?a?r?y?/, "01")
  messageArray[num] = messageArray[num].replace(/febr?u?a?r?y?/, "02")
  messageArray[num] = messageArray[num].replace(/marc?h?/, "03")
  messageArray[num] = messageArray[num].replace(/apri?l?/, "04")
  messageArray[num] = messageArray[num].replace(/may/, "05")
  messageArray[num] = messageArray[num].replace(/june?/, "06")
  messageArray[num] = messageArray[num].replace(/july?/, "07")
  messageArray[num] = messageArray[num].replace(/augu?s?t?/, "08")
  messageArray[num] = messageArray[num].replace(/sept?e?m?b?e?r?/, "09")
  messageArray[num] = messageArray[num].replace(/octo?b?e?r?/, "10")
  messageArray[num] = messageArray[num].replace(/nove?m?b?e?r?/, "11")
  messageArray[num] = messageArray[num].replace(/dece?m?b?e?r?/, "12")
}

const findLayout = (array, num) => {
    if (array[num].match(/macro:callback/)) {
      array[num] = "";
      return "callback";
    }
}
const formatMessage = (message) => {
  message = document.getElementById("inputMessage").value;
  let formatedMessage = "";
  let nameOfTheCaller = "NAME OF THE CALLER: ";
  let nameOfTheDoctor = "NAME OF THE DOCTOR/PROVIDER: ";
  let callBackNumber = "CALLBACK NUMBER: ";
  let layoutType = "callback";

//These lines prepare the text before it being divided for each word.
  message = message.replace(/:\s/g, ":");  //This line removes the space after the colons, without this, delcarations inside the text can´t be read if there is a space after the colon
  messageArray = message.split(" ");  //This line splits each word in the message into an array.

  for (let i = 0; i < messageArray.length; i++) {//For loop that loops through every word inside the messageArray looking for specific patterns that need to be changed.

    //phone numbers should have the following format: 123 456 7890 instead of 1234567890.
    if (messageArray[i].match(phoneNumRegEx)) {//format numbers so they have the correct space between carachters
      messageArray[i] = messageArray[i].replace(/n/g, "");
      messageArray[i] = messageArray[i].substring(0,3) + " " + messageArray[i].substring(3,6) + " " + messageArray[i].substring(6);
    }

    //dates must have the following format: 12081999, tis is equal to 12/8/1999 or dec/8/1999.
    if (messageArray[i].match(dateRegEx)) { //changes literal months to their respective numbers.
      formatMonth(i);
    }

    //the following "if" statements change common abbreviations to their extended versions.
    if (messageArray[i].match(abbrRxRegEx)) {//format rx abbreviation to prescription.
      messageArray[i] = "prescription";
    }
    if (messageArray[i].match(abbrPtRegEx)) {//format pt abbreviation to patient.
      messageArray[i] = "the patient";
    }
    if (messageArray[i].match(abbrPlsRegEx)) {//format pls abbreviation to please.
      messageArray[i] = "please";
    }
    if (messageArray[i].match(abbrBcRegEx)) {//format bc abbreviation to becacuse.
      messageArray[i] = "because";
    }
    if (messageArray[i].match(abbrCbRegEx)) {//format cb abbreviation to callback.
      messageArray[i] = "callback";
    }
    if (messageArray[i].match(abbrResRegEx)) {//format res abbreviation to reschedule.
      messageArray[i] = "reschedule";
    }

    //the follwoing lines detect a macro declaration inside the message and sets the layout of the message.
    if (messageArray[i].match(macroRegEx)) {
       layoutType = findLayout(messageArray, i);
    }
    //The following lines detect a name of caller declaration and set the nameOfTheCaller variable to is.
    if (messageArray[i].match(nameRegEx)) {
      nameOfTheCaller += messageArray[i].replace(/name:/, "");
      messageArray[i] = "";
    }
    //The following lines detect a name of dr declaration and set the nameOfTheDoctor variable to is.
    if (messageArray[i].match(doctorRegEx)) {
      nameOfTheDoctor += messageArray[i].replace(/dr:/, "Dr. ");
      messageArray[i] = "";
    }
    if (messageArray[i].match(nameRegEx)) {
      nameOfTheCaller += messageArray[i].replace(/name:/, "");
      messageArray[i] = "";
    }
    if (messageArray[i].match(callRegEx)) {
      callBackNumber += messageArray[i].replace(/call:/, "");
      messageArray[i] = "";
    }
  };

  messageArray = messageArray.join(" ");

  if (layoutType === "callback") {
    formatedMessage = `${nameOfTheCaller}\n${nameOfTheDoctor}\nREASON FOR THE CALL: ${messageArray} \n${callBackNumber}`
  }
  document.getElementById("outputDisplay").innerHTML = formatedMessage;
}
