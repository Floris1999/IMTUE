//Form validation
var formValid;

function validateForm() {
	//set initial value of formValid to true
	formValid = 1;
	resetErrors();
	// //validate select menu
	// var z = document.forms["myForm"]["favcity"].value;
	// if (z == 0) {
	// 	applyError("favcity","&nbsp;You must choose a favorite city."); 
	// }
	// //validate radio buttons
	// if(validateGroup("shipping")==false) {
	// 	document.getElementById("shippingLegendError").style.padding = "0 5px";
	// 	applyError("shippingLegend","Please pick a shipping method.");
	// }
	// //validate checkboxes
	// if(validateGroup('toppings')==false) {
	// 	document.getElementById("toppingsLegendError").style.padding = "0 5px";
	// 	applyError("toppingsLegend","You must pick at least one topping.");
	// }

	//validate input fields
	var a = document.forms["myForm"]["fname"].value;
	if (a == "") {
		document.getElementById("fnameErrorHidden").innerHTML = "Verplicht om een voornaam op te geven.";
		applyError("fname", "&nbsp;Verplicht om een voornaam op te geven.");
	} else if (a.length > 40) {
		document.getElementById("fnameErrorHidden").innerHTML = "Er mogen niet meer dan 40 letters zijn bij de voornaam.";
		applyError("fname", "&nbsp;Er mogen niet meer dan 40 letters zijn bij de voornaam.");
	}

	var b = document.forms["myForm"]["insertion"].value;
	if (b.length > 10) {
		document.getElementById("fnameErrorHidden").innerHTML = "Er mogen niet meer dan 10 letters zijn bij het tussenvoegsel.";
		applyError("fname", "&nbsp;Er mogen niet meer dan 10 letters zijn bij het tussenvoegsel.");
	}

	var c = document.forms["myForm"]["lname"].value;
	if (c == "") {
		document.getElementById("lnameErrorHidden").innerHTML = "Verplicht om een achternaam op te geven.";
		applyError("lname", "&nbsp;Verplicht om een achternaam op te geven.");
	} else if (c.length > 40) {
		document.getElementById("lnameErrorHidden").innerHTML = "Er mogen niet meer dan 40 letters zijn bij de achternaam.";
		applyError("lname", "&nbsp;Er mogen niet meer dan 40 letters zijn bij de achternaam.");
	}

	var d = document.forms["myForm"]["strName"].value;
	if (d == "") {
		document.getElementById("strNameErrorHidden").innerHTML = "Verplicht om een straat op te geven.";
		applyError("strName", "&nbsp;Verplicht om een straat op te geven.");
	} else if (d.length > 40) {
		document.getElementById("strNameErrorHidden").innerHTML = "Er mogen niet meer dan 40 letters zijn bij de straatnaam.";
		applyError("strName", "&nbsp;Er mogen niet meer dan 40 letters zijn bij de straatnaam.");
	}

	var e = document.forms["myForm"]["strNumb"].value;
	if (e == "") {
		document.getElementById("strNumbErrorHidden").innerHTML = "Verplicht om een straatnummer op te geven.";
		applyError("strNumb", "&nbsp;Verplicht om een straatnummer op te geven.");
	} else if (e.length > 40) {
		document.getElementById("strNumbErrorHidden").innerHTML = "Er mogen niet meer dan 10 cijfers zijn bij de straatnummer.";
		applyError("strNumb", "&nbsp;Er mogen niet meer dan 10 cijfers zijn bij de straatnummer.");
	}

	var f = document.forms["myForm"]["postalCode"].value;
	if (f == "") {
		document.getElementById("postalCodeErrorHidden").innerHTML = "Verplicht om een postcode op te geven.";
		applyError("postalCode", "&nbsp;Verplicht om een postcode op te geven.");
	} else if (f.length > 8) {
		document.getElementById("postalCodeErrorHidden").innerHTML = "Er mogen niet meer dan 8 cijfers zijn bij de postcode.";
		applyError("postalCode", "&nbsp;Er mogen niet meer dan 8 cijfers zijn bij de postcode.");
	}
	var g = document.forms["myForm"]["city"].value;
	if (g == "") {
		document.getElementById("cityErrorHidden").innerHTML = "Verplicht om een woonplaats op te geven.";
		applyError("city", "&nbsp;Verplicht om een woonplaats op te geven.");
	} else if (g.length > 40) {
		document.getElementById("cityErrorHidden").innerHTML = "Er mogen niet meer dan 40 cijfers zijn bij de woonplaats.";
		applyError("city", "&nbsp;Er mogen niet meer dan 40 cijfers zijn bij de woonplaats.");
	}

	var h = document.forms["myForm"]["phone"].value;
	if (h == "") {
		document.getElementById("phoneErrorHidden").innerHTML = "Verplicht om een telefoonnummer op te geven.";
		applyError("phone", "&nbsp;Verplicht om een woonplaats op te geven.");
	} else if (h.length > 12) {
		document.getElementById("phoneErrorHidden").innerHTML = "Er mogen niet meer dan 12 cijfers zijn bij het telefoonnummer.";
		applyError("phone", "&nbsp;Er mogen niet meer dan 12 cijfers zijn bij het telefoonnummer.");
	}

	var i = document.forms["myForm"]["email"].value;
	if (i == "") {
		document.getElementById("emailErrorHidden").innerHTML = "Verplicht om een emailadres op te geven.";
		applyError("email", "&nbsp;Verplicht om een emailadres op te geven.");
	} else if (i.length > 50) {
		document.getElementById("emailErrorHidden").innerHTML = "Er mogen niet meer dan 50 cijfers zijn bij het emailadres.";
		applyError("email", "&nbsp;Er mogen niet meer dan 50 cijfers zijn bij het emailadres.");
	}

	var j = document.forms["myForm"]["adult"].value;
	if (j == "") {
		document.getElementById("adultErrorHidden").innerHTML = "Verplicht om om het aantal volwassenen op te geven.";
		applyError("adult", "&nbsp;Verplicht om het aantal volwassenen op te geven.");
	} else if (j.length > 3) {
		document.getElementById("adultErrorHidden").innerHTML = "Er mogen niet meer dan 3 cijfers zijn bij de volwassenen.";
		applyError("adult", "&nbsp;Er mogen niet meer dan 3 cijfers zijn bij de volwassenen.");
	}

	var k = document.forms["myForm"]["child"].value;
	if (k == "") {
		document.getElementById("childErrorHidden").innerHTML = "Verplicht om om het aantal kinderen op te geven.";
		applyError("child", "&nbsp;Verplicht om het aantal kinderen op te geven.");
	} else if (k.length > 3) {
		document.getElementById("childErrorHidden").innerHTML = "Er mogen niet meer dan 3 cijfers zijn bij de kinderen.";
		applyError("child", "&nbsp;Er mogen niet meer dan 50 cijfers zijn bij de kinderen.");
	}

	var l = document.forms["myForm"]["pet"].value;
	if (l == "") {
		document.getElementById("petErrorHidden").innerHTML = "Verplicht om om het aantal huisdieren op te geven.";
		applyError("pet", "&nbsp;Verplicht om het aantal huisdieren op te geven.");
	} else if (l.length > 50) {
		document.getElementById("petErrorHidden").innerHTML = "Er mogen niet meer dan 3 cijfers zijn bij de huisdieren.";
		applyError("pet", "&nbsp;Er mogen niet meer dan 50 cijfers zijn bij de huisdieren.");
	}

	var m = document.forms["myForm"]["car"].value;
	if (m == "") {
		document.getElementById("carErrorHidden").innerHTML = "Verplicht om om het aantal auto's op te geven.";
		applyError("car", "&nbsp;Verplicht om het aantal auto's op te geven.");
	} else if (m.length > 50) {
		document.getElementById("carErrorHidden").innerHTML = "Er mogen niet meer dan 3 cijfers zijn bij de auto's.";
		applyError("car", "&nbsp;Er mogen niet meer dan 50 cijfers zijn bij de auto's.");
	}

	var n = document.forms["myForm"]["nmbrPlate"].value;
	console.log(n);
	if (n == "") {
		document.getElementById("nmbrPlateErrorHidden").innerHTML = "Verplicht om om een kenteken op te geven.";
		applyError("nmbrPlate", "&nbsp;Verplicht om een kenteken op te geven.");
	} else if (n.length > 50) {
		document.getElementById("nmbrPlateErrorHidden").innerHTML = "Er mogen niet meer dan 3 cijfers zijn bij de auto's.";
		applyError("nmbrPlate", "&nbsp;Er mogen niet meer dan 50 cijfers zijn bij de auto's.");
	}

	//validate radio buttons
	if (validateGroup("gender") == false) {
		document.getElementById("genderLegendError").style.padding = "0 5px";
		applyError("genderLegend", "Kies een geslacht uit.");
	}

	if (validateGroup("size") == false) {
		document.getElementById("sizeLegendError").style.padding = "0 5px";
		applyError("sizeLegend", "Kies een campingplek grootte uit.");
	}

	if (validateGroup("electric") == false) {
		document.getElementById("electricLegendError").style.padding = "0 5px";
		applyError("electricLegend", "Kies uit of u elekticiteit wilt.");
	}

	if (validateGroup("water") == false) {
		document.getElementById("waterLegendError").style.padding = "0 5px";
		applyError("waterLegend", "Kies uit of u water wilt");
	}
	
	// validate checkboxes
	if (validateGroup('facilities') == false) {
		document.getElementById("facilitiesLegendError").style.padding = "0 5px";
		applyError("facilitiesLegend", "Je moet tenminste een faciliteit kiezen.");
	}

	//Validatie van de date input
	var arriveDate = document.forms["myForm"]["arriveDate"].value;
	if (arriveDate == "") {
		document.getElementById("arriveDateHidden").innerHTML = "Verplicht om een aankomst datum op te geven.";
		applyError("arriveDate", "&nbsp;Verplicht om een aankomst datum op te geven.");
	}

	var leaveDate = document.forms["myForm"]["leaveDate"].value;
	if (leaveDate == "") {
		document.getElementById("leaveDateHidden").innerHTML = "Verplicht om een vertrek datum op te geven.";
		applyError("leaveDate", "&nbsp;Verplicht om een vertrek datum op te geven.");
	}

	// if (validateGroup("shipping") == false) {
	// 	document.getElementById("shippingLegendError").style.padding = "0 5px";
	// 	applyError("shippingLegend", "Please pick a shipping method.");
	// }

	// //validate checkboxes
	// if (validateGroup('toppings') == false) {
	// 	document.getElementById("toppingsLegendError").style.padding = "0 5px";
	// 	applyError("toppingsLegend", "You must pick at least one topping.");
	// }

	//if a form field is not valid, do not submit form
	if (formValid == 0) {

		return false;
	}
}

//Validates Instruments custom select menu


//Appends error message to label, puts focus on field with error message
function applyError(errorFieldId, errorMessage) {
	var errorMessageId = errorFieldId + "Error";
	document.getElementById(errorMessageId).innerHTML = errorMessage; //puts error in span tag
	document.getElementById(errorFieldId).focus(); //puts focus on field with error
	formValid = 0; //sets global formValid variable to false
}

//validates grouped form fields like checkboxes or radio buttons. Accepts the name of the group to be validated.
function validateGroup(groupName) {
	var group = document.getElementsByName(groupName);
	var groupCount = 0;
	for (var i = 0; i < group.length; i++) {
		if (group[i].checked) {
			groupCount++;
		}
	}
	if (groupCount < 1) {
		return false;
	}
	return true;
}

//resets error messages so they are turned off
function resetErrors() {
	document.getElementById("fnameError").innerHTML = "";
	document.getElementById("insertionError").innerHTML = "";
	document.getElementById("lnameError").innerHTML = "";
	document.getElementById("genderLegendError").innerHTML = "";
	document.getElementById("strNameError").innerHTML = "";
	document.getElementById("strNumbError").innerHTML = "";
	document.getElementById("postalCodeError").innerHTML = "";
	document.getElementById("cityError").innerHTML = "";
	document.getElementById("phoneError").innerHTML = "";
	document.getElementById("emailError").innerHTML = "";
	document.getElementById("adultError").innerHTML = "";
	document.getElementById("childError").innerHTML = "";
	document.getElementById("petError").innerHTML = "";
	document.getElementById("carError").innerHTML = "";
	document.getElementById("nmbrPlateError").innerHTML = "";
	document.getElementById("arriveDateError").innerHTML = "";
	document.getElementById("leaveDateError").innerHTML = "";
	document.getElementById("electricLegendError").innerHTML = "";
	document.getElementById("sizeLegendError").innerHTML = "";
	document.getElementById("facilitiesLegendError").innerHTML = "";
}