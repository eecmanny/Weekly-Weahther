
var geocodeURL = 'https://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid=ac7cbe64d8841fa5ae6093c5853d6268'
var forcastWeatherUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=ac7cbe64d8841fa5ae6093c5853d6268'
var currentWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=ac7cbe64d8841fa5ae6093c5853d6268"
var movieUrl = 'https://api.themoviedb.org/3/movie/now_playing'
var country = "US"
var state = document.querySelector(".state"); "";
var town = document.querySelector("#");= "";


var todayWeather = document.querySelector(".currentWeather");
var weatherDay1 = document.querySelector(".Day1");
var weatherDay2 = document.querySelector(".Day2");
var weatherDay3 = document.querySelector(".Day3");
var weatherDay4 = document.querySelector(".Day4");
var weatherDay5 = document.querySelector(".Day5");



function weatherFetching() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success);
  }

//Geo API
  //This function should fetch a latitude and longitude by adding a country, state, and town 
  function success(position) {
var state = "";
var town = "";

    fetch("https://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid=ac7cbe64d8841fa5ae6093c5853d6268")
        .then(response => {
          return response.json();
          };
  
          
  //forcastWeather API
    //This function should fetch grabs the fetched latitude and longitude and fetched the data for that days weather. 
  function success(position) {
    // var lat = position.coords.latitude;
    // var lon = position.coords.longitude;
  
    //Using browser location
    // var lat = GeoLatplaceholder;
    // var lon = GeoLonplaceholder;
    fetch('https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=ac7cbe64d8841fa5ae6093c5853d6268')
        .then(response => {
          return response.json();
        };

          
  //CurrentWeather API
    //This function should fetch grabs the fetched latitude and longitude and fetched the data for that days weather. 
  function success(position) {
    // var lat = position.coords.latitude;
    // var lon = position.coords.longitude;
  
    //Using browser location
    // var lat = GeoLatplaceholder;
    // var lon = GeoLonplaceholder;
    fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=ac7cbe64d8841fa5ae6093c5853d6268")
        .then(response => {
          return response.json();
        };
