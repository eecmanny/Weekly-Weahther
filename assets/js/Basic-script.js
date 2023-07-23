var variableGeocodeURL = "https://api.openweathermap.org/geo/1.0/direct?q=" + textPickedCity +",US&limit=5&appid=ac7cbe64d8841fa5ae6093c5853d6268"
// var geocodeURL = "https://api.openweathermap.org/geo/1.0/direct?q=Durham,US&limit=5&appid=ac7cbe64d8841fa5ae6093c5853d6268"


var variableCurrentWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=ac7cbe64d8841fa5ae6093c5853d6268"
// var currentWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?lat=41.4817647&lon=-72.6812059&appid=ac7cbe64d8841fa5ae6093c5853d6268"


var variableForcastWeatherUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=ac7cbe64d8841fa5ae6093c5853d6268"
// var forcastWeatherUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=41.4817647&lon=-72.6812059&appid=ac7cbe64d8841fa5ae6093c5853d6268'

var country = "US"

//var city = document.querySelector("#city");
var city = document.getElementById("city");
var textPickedCity = [];
console.log(textPickedCity);

var lat = [];
var lon = [];


var todayWeather = document.querySelector(".currentWeather");
var weatherDay1 = document.querySelector("#Day1");
var weatherDay2 = document.querySelector("#Day2");
var weatherDay3 = document.querySelector("#Day3");
var weatherDay4 = document.querySelector("#Day4");
var weatherDay5 = document.querySelector("#Day5");

var submit = document.querySelector(".btn");


document.addEventListener("DOMContentLoaded", function () {
submit = addEventListener("click", chooseLocation);

function chooseLocation(){
  // event.preventDefault();

  // console.log(document.getElementById("city").value);
  selectedCity = document.getElementById("city").value;
  textPickedCity.push(selectedCity);


  console.log(selectedCity);

  LatandLonFetching();
}
});


// LatandLonFetching();

function LatandLonFetching() {

  fetch(variableGeocodeURL)
  // fetch(geocodeURL)
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


// // currentWeather();
// // // CurrentWeather API
// // // This function should fetch grabs the fetched latitude and longitude and fetched the data for that days weather. 
// function currentWeather() {
// //   // var lat = position.coords.latitude;
// //   // var lon = position.coords.longitude;
// fetch(variableCurrentWeatherUrl)
//   // fetch(currentWeatherUrl)
//     .then(response => {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data)
//     });
// }

// // //forcastWeather API
// // //This function should fetch grabs the fetched latitude and longitude and fetched the data for that days weather. 
// function forcastWeather() {
// //   // //   // var lat = position.coords.latitude;
// //   // //   // var lon = position.coords.longitude;

// fetch(variableForcastWeatherUrl)
//   // fetch(forcastWeatherUrl)
//     .then(response => {
//       // console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       // console.log(data)
//     })
// };


  //   //Using browser location
  //   // var lat = GeoLatplaceholder;
  //   // var lon = GeoLonplaceholder;
  //   fetch("https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=ac7cbe64d8841fa5ae6093c5853d6268")
  //       .then(response => {
  //         return response.json();
  //       });
  //     }

