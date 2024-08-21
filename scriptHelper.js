// Write your helper functions here!

require("cross-fetch/polyfill");

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  let missionTarget = document.getElementById("missionTarget");
  missionTarget.innerHTML = `<h2>Mission Destination</h2>
  <ol>
      <li>Name: ${name}</li>
      <li>Diameter: ${diameter}</li>
      <li>Star: ${star}</li>
      <li>Distance from Earth: ${distance}</li>
      <li>Number of Moons: ${moons}</li>
  </ol>
  <img src="${imageUrl}">`;
  return;
}

// FORM VALIDATION FUNCTION
function validateInput(testInput) {
  if (testInput === "") {
    return "Empty";
  } else if (!isNaN(testInput)) {
    return "Is a Number";
  } else {
    return "Not a Number";
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
  if (
    validateInput(pilot) === "Empty" ||
    validateInput(copilot) === "Empty" ||
    validateInput(fuelLevel) === "Empty" ||
    validateInput(cargoMass) === "Empty"
  ) {
    return alert("All fields are required!");
  }

  if (
    validateInput(pilot) !== "Not a Number" ||
    validateInput(copilot) !== "Not a Number"
  ) {
    return alert("Pilot and Co-pilot names must be valid strings.");
  }

  if (
    validateInput(fuelLevel) !== "Is a Number" ||
    validateInput(cargoMass) !== "Is a Number"
  ) {
    return alert("Fuel Level and Cargo Mass must be valid numbers.");
  }

  document.getElementById(
    "pilotStatus"
  ).innerHTML = `Pilot ${pilot} is ready for launch`;
  document.getElementById(
    "copilotStatus"
  ).innerHTML = `Co-pilot ${copilot} is ready for launch`;

  let launchStatus = document.getElementById("launchStatus");
  let faultyItems = document.getElementById("faultyItems");

  if (Number(fuelLevel) < 10000) {
    document.getElementById("fuelStatus").innerHTML =
      `Fuel level too low for launch`;
    launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
    faultyItems.style.visibility = "visible";
    launchStatus.style.color = "red";
  } else if (Number(fuelLevel) >= 10000) {
    document.getElementById("fuelStatus").innerHTML =
      `Fuel level high enough for launch`;
  }

  if (Number(cargoMass) > 10000) {
    document.getElementById("cargoStatus").innerHTML =
      `Cargo mass too heavy for launch`;
    launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
    faultyItems.style.visibility = "visible";
    launchStatus.style.color = "red";
  } else if (Number(cargoMass) <= 10000) {
    document.getElementById("cargoStatus").innerHTML =
      `Cargo mass low enough for launch`;
  }

  if (Number(fuelLevel) >= 10000 && Number(cargoMass) <= 10000) {
    launchStatus.innerHTML = `Shuttle is Ready for Launch`;
    faultyItems.style.visibility = "visible";
    launchStatus.style.color = "green";
  } else {
  }
}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch(
    "https://handlers.education.launchcode.org/static/planets.json"
  ).then(function (response) {
    return response.json();
  });

  return planetsReturned;
}

function pickPlanet(planets) {
  randomPlanet = planets[Math.floor(Math.random() * planets.length)];
  return randomPlanet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
