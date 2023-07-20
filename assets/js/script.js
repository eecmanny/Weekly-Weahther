// var geocodeURL = "https://api.openweathermap.org/geo/1.0/direct?q=" + city + "," + state + ",US&limit=5&appid=ac7cbe64d8841fa5ae6093c5853d6268"
var geocodeURL = "https://api.openweathermap.org/geo/1.0/direct?q=Durham,Connecticut,US&limit=5&appid=ac7cbe64d8841fa5ae6093c5853d6268"


// var currentWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=ac7cbe64d8841fa5ae6093c5853d6268"
var currentWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?lat=41.4817647&lon=-72.6812059&appid=ac7cbe64d8841fa5ae6093c5853d6268"


// var forcastWeatherUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=ac7cbe64d8841fa5ae6093c5853d6268"
var forcastWeatherUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=41.4817647&lon=-72.6812059&appid=ac7cbe64d8841fa5ae6093c5853d6268'

var country = "US"
//var state = document.querySelector("#state");
var state = document.getElementById("state");
var pickedState = "";
//var city = document.querySelector("#city");
var city = document.getElementById("city");
var pickedCity = "";


var todayWeather = document.querySelector(".currentWeather");
var weatherDay1 = document.querySelector("#Day1");
var weatherDay2 = document.querySelector("#Day2");
var weatherDay3 = document.querySelector("#Day3");
var weatherDay4 = document.querySelector("#Day4");
var weatherDay5 = document.querySelector("#Day5");

var submit = document.querySelector(".btn");

// submit =addEventListener("click", LatandLonFetching);


// function weatherFetching() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(success);
//   }

submit = addEventListener("click", chooseLocation());

function chooseLocation(){
  //state.textContent = pickedCity.value
  //console.log(pickedCity);
  var pickedState = state.id;
  var geoFunctionState = pickedState;
  console.log(geoFunctionState);
  
  var pickedCity = city.id;
  var geoFunctionCity = pickedCity;
  console.log(geoFunctionCity);
  LatandLonFetching();
}



LatandLonFetching();

function LatandLonFetching() {

  fetch(geocodeURL)
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data)

    })
  forcastWeather();
  currentWeather();
};



// CurrentWeather API
// This function should fetch grabs the fetched latitude and longitude and fetched the data for that days weather. 
function currentWeather() {
  // var lat = position.coords.latitude;
  // var lon = position.coords.longitude;
  fetch(currentWeatherUrl)
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data)
    });
}

//forcastWeather API
//This function should fetch grabs the fetched latitude and longitude and fetched the data for that days weather. 
function forcastWeather() {
  // //   // var lat = position.coords.latitude;
  // //   // var lon = position.coords.longitude;

  fetch(forcastWeatherUrl)
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data)
    })
};


  //   //Using browser location
  //   // var lat = GeoLatplaceholder;
  //   // var lon = GeoLonplaceholder;
  //   fetch("https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=ac7cbe64d8841fa5ae6093c5853d6268")
  //       .then(response => {
  //         return response.json();
  //       });
  //     }

