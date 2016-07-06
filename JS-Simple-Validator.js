
//Phone Number
var userPhonenumber = prompt("Enter phone number with Dashes. Example: xxx-xxx-xxxx")

if (userPhonenumber.charAt(3, 7) === '-' && userPhonenumber.length === 12) {
	alert("This phone number is Valid.");
}
else {
	alert("This phone number is NOT Valid.")
}


//Birth date
var userBirthdate = prompt("Please enter your birthday. Example: xx/xx/xx/")

if (userBirthdate.charAt(2,5) === "/" && userBirthdate.length === 8) {
	alert("This date is Valid.");
}
else {
	alert("This date is NOT Valid.")
}

//Postal Code
var userPostalcode = prompt("Please enter your Postal Code. Example: xxxxx-xxxx")

if (userPostalcode.charAt(5) === "-" && userPostalcode.length === 10) {
	alert("This code is Valid.");
}
else {
	alert("This code is NOT Valid.")
}

// State Abbreviation

var userState = prompt("Please enter your State. Example: TX, OK, FL, CA")

if (userState.toUpperCase() && userState.length === 2) {
	alert("This State is Valid.");
}
else {
	alert("This State is NOT Valid")
}

//Married

var userMarried = prompt("Are you married? YES or NO?")

if (userMarried === "YES" || "NO")
	alert("Thank you for your time.");
else {
	alert("Please state whether you are married or not.")
}