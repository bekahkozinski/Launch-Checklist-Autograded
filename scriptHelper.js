// Write your helper functions here!

require('cross-fetch/polyfill');

// Establishing variables
// let form = document.querySelector("form");
// let pilotNameInput = document.querySelector("#pilotName");
// let copilotNameInput = document.querySelector("#copilotName");
// let fuelLevelInput = document.querySelector("#fuelLevel");
// let cargoMassInput = document.querySelector("#cargoMass");
// let faultyItems = document.getElementById("faultyItems");


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }
 
 // FORM VALIDATION FUNCTION
 function validateInput(testInput) {
    if (testInput === "") {
       return "Empty";
    } else if (typeof testInput === "number") {
        return "Is a Number";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    }
 };

 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    
    let document = document.querySelector(".launchForm");
    let pilot = document.getElementById("pilotName");
    let copilot = document.querySelector(".copilotName");
    let fuelLevel = document.querySelector(".fuelLevel");
    let cargoLevel = document.querySelector(".cargoMass");

    // Validate that all fields are filled
    if (validateInput(pilot) === "Empty" || 
        validateInput(copilot) === "Empty" || 
        validateInput(fuelLevel) === "Empty" || 
        validateInput(cargoLevel) === "Empty") {
        alert("All fields are required!");
        return;
    }

    // Validate that pilot and copilot are strings
    if (validateInput(pilot) !== "Not a Number" || validateInput(copilot) !== "Not a Number") {
        alert("Pilot and Co-pilot names must be valid strings.");
        return;
    }

    // Validate that fuelLevel and cargoMass are numbers
    if (validateInput(fuelLevel) !== "Is a Number" || validateInput(cargoLevel) !== "Is a Number") {
        alert("Fuel Level and Cargo Mass must be valid numbers.");
        return;
    }

    // Update pilot and copilot status
    document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
    document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;

    // Check fuel level and cargo mass, then update launch status
    let launchStatus = document.getElementById("launchStatus");
    list.style.visibility = "visible";

    if (Number(fuelLevel) < 10000) {
        document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";
    } else if (Number(cargoLevel) > 10000) {
        document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";
    } else {
        // If everything is good, update the status to ready for launch
        launchStatus.innerHTML = "Shuttle is Ready for Launch";
        launchStatus.style.color = "green";
        list.style.visibility = "hidden";
    }
}    
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;