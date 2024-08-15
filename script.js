// Write your JavaScript code here!

window.addEventListener("load", function() {
    let form = document.querySelector("#form");
    let pilotNameInput = document.querySelector("#pilotName");
    let copilotNameInput = document.querySelector("#copilotName");
    let fuelLevelInput = document.querySelector("#fuelLevel");
    let cargoMassInput = document.querySelector("#cargoMass");
    let faultyItems = document.getElementById("faultyItems");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting the default way
        formSubmission(document, faultyItems, pilotNameInput.value, copilotNameInput.value, fuelLevelInput.value, cargoMassInput.value);
    });

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })
    
 });