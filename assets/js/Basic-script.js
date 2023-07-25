var country = "US"

var currentDate = dayjs();
$("#currentDay").text(currentDate.format('dddd, MMMM D YYYY, h:mm:ss a'));
console.log(currentDate);

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
  fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=ac7cbe64d8841fa5ae6093c5853d6268")
    // fetch(currentWeatherUrl)
    .then(response => {
      // console.log(response);
      return response.json();
    })
    .then(function (data) {
      // console.log(data)

      // console.log(data.main);


      // var temp = data.main.temp;
      // console.log(data.main.temp);
      // console.log(temp);


      // var humidity = data.main.humidity;
      // console.log(humidity);


      // var wind = data.wind.speed;
      // console.log(wind);

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
      console.log(data);

      //Day 1
      var Day1ElementTemp1 = querySelector("#temp1");
      var Day1ElementHumidity1 = querySelector("#humidity1");
      var Day1ElementWind1 = querySelector("#wind1");
      var Day1ElementNum1 = querySelector("#date1");

      var Day1Temp = data.list[0].main.temp;
      var Day1Humidity = data.list[0].main.humidity;
      var Day1Wind = data.list[0].wind.speed;
      // I dont think date is correct becasue I don't think it would be in wind folder - Note to recheck
      // var dateNum1 = data.list[0].wind.dt;
      // console.log(data.list[0].main.temp);
      // console.log(Day1Temp);
      // console.log(Day1humidity);
      // console.log(Day1wind);

      // Day1ElementTemp1.value = Day1Temp
      //or
      Day1ElementTemp1.textContent = Day1Temp
      Day1ElementTemp1.textContent = Day1Humidity
      Day1ElementTemp1.textContent = Day1Wind
      // Day1ElementTemp1.textContent = dateNum1


      //Day2
      var Day2Temp2 = data.list[1].main.temp;
      var Day2Humidity2 = data.list[1].main.humidity;
      var Day2Wind2 = data.list[1].wind.speed;
      // var Day2dateNum2 = data.list[1].wind.dt;

      //Day3
      var Day3Temp3 = data.list[2].main.temp;
      var Day3Humidity3 = data.list[2].main.humidity;
      var Day3Wind3 = data.list[2].wind.speed;
      // var Day3dateNum3 = data.list[2].wind.dt;

      //Day4
      var Day4Temp4 = data.list[3].main.temp;
      var Day4humidity4 = data.list[3].main.humidity;
      var Day4wind4 = data.list[3].wind.speed;
      // var Day4dateNum4 = data.list[3].wind.dt;



      //Day5
      var Day5Temp5 = data.list[4].main.temp;
      var Day5humidity5 = data.list[4].main.humidity;
      var Day5wind5 = data.list[4].wind.speed;
      // var Day5dateNum5 = data.list[4].wind.dt;

    })
};


