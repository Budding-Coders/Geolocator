const myLocation = document.getElementById("lc");
const Country = document.getElementById("user1")
const City = document.getElementById("user2")
const Lattitude = document.getElementById("user3")
const Longitude = document.getElementById("user4")
const idQuery = document.getElementById("IPaddress")
const btn = document.getElementById("choose");

var query = "http://ip-api.com/json/";

function example() {
  let giveApi = document.querySelector("#inputNumber").value;
  const query1 = query + giveApi
  return query1
};
const locationID = async () => {
  const response = await fetch(example());
  const place = await response.json();
  console.log(place)
  Country.innerHTML = place.country
  City.innerHTML = place.city
  Lattitude.innerHTML = place.lat
  Longitude.innerHTML = place.lon
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    myLocation.innerHTML = "Geolocation is not supported by this browser.";
  }
}
function showPosition(position) {
  myLocation.innerHTML = "<strong>Latitude: " + position.coords.latitude +
    "&ensp;&ensp;&ensp;&ensp;&ensp;<strong>Longitude: " + position.coords.longitude + "</strong>";
}

