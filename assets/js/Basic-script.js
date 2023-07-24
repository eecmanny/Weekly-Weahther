var country = "US"

//var city = document.querySelector("#city");
var city = document.getElementById("city");


var todayWeather = document.querySelector(".currentWeather");
var weatherDay1 = document.querySelector("#Day1");
var weatherDay2 = document.querySelector("#Day2");
var weatherDay3 = document.querySelector("#Day3");
var weatherDay4 = document.querySelector("#Day4");
var weatherDay5 = document.querySelector("#Day5");

var submit = document.querySelector(".btn");


document.addEventListener("DOMContentLoaded", function () {
  submit = addEventListener("submit", chooseLocation);

  function chooseLocation(event) {
    event.preventDefault();

    // console.log(document.getElementById("city").value);
    const selectedCity = document.getElementById("city").value;
    // textPickedCity.push(selectedCity);

    // Console logging the selected city
    console.log(selectedCity);

    //Pass the selected City to your function
    LatandLonFetching(selectedCity);


  }
});


// LatandLonFetching();

function LatandLonFetching(city) {
  //console.log the city to make sure it was passed correctly
  console.log(city);
  fetch("https://api.openweathermap.org/geo/1.0/direct?q=" + city + ",US&limit=5&appid=ac7cbe64d8841fa5ae6093c5853d6268")
    // fetch(geocodeURL)
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      // console.log(data[0].lat)
      // console.log(data[0].lon)

      var lat = data[0].lat;
      var lon = data[0].lon;
      console.log(lat);
      console.log(lon);

      forcastWeather(lat, lon);
      currentWeather(lat, lon);
    })
};


// // // CurrentWeather API
// // // This function should fetch grabs the fetched latitude and longitude and fetched the data for that days weather. 
function currentWeather(lat, lon) {
//   // var lat = position.coords.latitude;
//   // var lon = position.coords.longitude;
fetch( "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=ac7cbe64d8841fa5ae6093c5853d6268")
  // fetch(currentWeatherUrl)
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data)
    });
}

// // //forcastWeather API
// // //This function should fetch grabs the fetched latitude and longitude and fetched the data for that days weather. 
function forcastWeather(lat, lon) {
// //   // //   // var lat = position.coords.latitude;
// //   // //   // var lon = position.coords.longitude;

fetch("https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=ac7cbe64d8841fa5ae6093c5853d6268")
  // fetch(forcastWeatherUrl)
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data)
    })
};


