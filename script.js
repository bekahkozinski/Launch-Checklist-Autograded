// Write your JavaScript code here!

window.addEventListener("load", function () {
  let form = document.querySelector("form");
  let pilotNameInput = document.querySelector("input[name='pilotName']");
  let copilotNameInput = document.querySelector("input[name='copilotName']");
  let fuelLevelInput = document.querySelector("input[name='fuelLevel']");
  let cargoMassInput = document.querySelector("input[name='cargoMass']");
  let faultyItems = document.getElementById("faultyItems");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    formSubmission(
      document,
      faultyItems,
      pilotNameInput.value,
      copilotNameInput.value,
      fuelLevelInput.value,
      cargoMassInput.value
    );
  });

  let listedPlanets;
  let listedPlanetsResponse = myFetch();
  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
    })
    .then(function () {
      let selectedPlanet = pickPlanet(listedPlanets);
      addDestinationInfo(
        document,
        selectedPlanet.name,
        selectedPlanet.diameter,
        selectedPlanet.star,
        selectedPlanet.distance,
        selectedPlanet.moons,
        selectedPlanet.image
      );
    });
});
