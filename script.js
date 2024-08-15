// Write your JavaScript code here!

window.addEventListener("load", function() {
    let form = document.querySelector("#launchForm form");
    let pilotNameInput = document.querySelector("#pilotName");
    let copilotNameInput = document.querySelector("#copilotName");
    let fuelLevelInput = document.querySelector("#fuelLevel");
    let cargoMassInput = document.querySelector("#cargoMass");
    let faultyItems = document.getElementById("faultyItems");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        console.log("Hello");
        formSubmission(document, faultyItems, pilotNameInput.value, copilotNameInput.value, fuelLevelInput.value, cargoMassInput.value);
    });

    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        let listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Call the appropriate helper functions here
    });
});
