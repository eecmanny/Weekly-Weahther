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
    // console.log(selectedCity);

    //Pass the selected City to your function
    LatandLonFetching(selectedCity);

    addLocationToLocalStorage(selectedCity);
    // displaysLocationFromLocalStorage(selectedCity);
    displaysLocationFromLocalStorage();
  }


});


// LatandLonFetching();

function LatandLonFetching(city) {
  //console.log the city to make sure it was passed correctly
  console.log(city);
  fetch("https://api.openweathermap.org/geo/1.0/direct?q=" + city + ",US&limit=5&appid=ac7cbe64d8841fa5ae6093c5853d6268")
    // fetch(geocodeURL)
    .then(response => {
      // console.log(response);
      return response.json();
    })
    .then(function (data) {
      // console.log(data)
      // console.log(data[0].lat)
      // console.log(data[0].lon)

      var lat = data[0].lat;
      var lon = data[0].lon;
      // console.log(lat);
      // console.log(lon);

      forcastWeather(lat, lon);
      currentWeather(lat, lon);

      // If I want to intergrate the states I will just use lat and lon  
      // addLocationtoLocalStorage(lat, lon)
      // displaysLocationFromLocalStorag(lat, lon)
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

      // console.log(data);

      var Day1ElementTemp = document.querySelector("#tempCurrent");
      var Day1ElementWeather = document.querySelector("#weatherDescriptionCurrent");
      var Day1ElementHumidity = document.querySelector("#humidityCurrent");
      var Day1ElementWind = document.querySelector("#windCurrent");

      var Day1Temp = data.main.temp;
      var Day1Weather = data.weather[0].description;
      var Day1Humidity = data.main.humidity;
      var Day1Wind = data.wind.speed;
      // console.log(data.list[0].main.temp);
      // console.log(Day1Temp);
      // console.log(data.list[0].weather[0]);
      // console.log(Day1dateNum);

      // console.log(Day1humidity);
      // console.log(Day1wind);
      // console.log(Day1dateNum);

      Day1ElementTemp.textContent = Day1Temp;
      Day1ElementHumidity.textContent = Day1Humidity
      Day1ElementWeather.textContent = Day1Weather;
      Day1ElementWind.textContent = Day1Wind;


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
      // console.log(response);
      return response.json();
    })
    .then(function (data) {
      // console.log(data);

      //Day 1
      var Day1ElementTemp = document.querySelector("#temp1");
      var Day1ElementWeather = document.querySelector("#weatherDescription1");
      var Day1ElementHumidity = document.querySelector("#humidity1");
      var Day1ElementWind = document.querySelector("#wind1");
      var Day1ElementNum = document.querySelector("#date1");

      var Day1Temp = data.list[0].main.temp;
      var Day1Weather = data.list[0].weather[0].description;
      var Day1Humidity = data.list[0].main.humidity;
      var Day1Wind = data.list[0].wind.speed;
      var Day1dateNum = data.list[0].dt_txt;
      // console.log(data.list[0].main.temp);
      // console.log(Day1Temp);
      // console.log(data.list[0].weather[0]);
      // console.log(Day1dateNum);

      // console.log(Day1humidity);
      // console.log(Day1wind);
      // console.log(Day1dateNum);

      Day1ElementTemp.textContent = Day1Temp;
      Day1ElementHumidity.textContent = Day1Humidity
      Day1ElementWeather.textContent = Day1Weather;
      Day1ElementWind.textContent = Day1Wind;
      Day1ElementNum.textContent = Day1dateNum


      //Day2
      var Day2Temp = data.list[1].main.temp;
      var Day2Weather = data.list[1].weather[0].description;
      var Day2Humidity = data.list[1].main.humidity;
      var Day2Wind = data.list[1].wind.speed;
      var Day2dateNum = data.list[1].dt_txt;

      var Day2ElementTemp = document.querySelector("#temp2");
      var Day2ElementWeather = document.querySelector("#weatherDescription2");
      var Day2ElementHumidity = document.querySelector("#humidity2");
      var Day2ElementWind = document.querySelector("#wind2");
      var Day2ElementNum = document.querySelector("#date2");

      Day2ElementTemp.textContent = Day2Temp
      Day2ElementHumidity.textContent = Day2Humidity
      Day2ElementWeather.textContent = Day2Weather
      Day2ElementWind.textContent = Day2Wind
      Day2ElementNum.textContent = Day2dateNum

      //Day3
      var Day3Temp = data.list[2].main.temp;
      var Day3Weather = data.list[2].weather[0].description;
      var Day3Humidity = data.list[2].main.humidity;
      var Day3Wind = data.list[2].wind.speed;
      var Day3dateNum = data.list[2].dt_txt;

      var Day3ElementTemp = document.querySelector("#temp3");
      var Day3ElementWeather = document.querySelector("#weatherDescription3");
      var Day3ElementHumidity = document.querySelector("#humidity3");
      var Day3ElementWind = document.querySelector("#wind3");
      var Day3ElementNum = document.querySelector("#date3");

      Day3ElementTemp.textContent = Day3Temp
      Day3ElementHumidity.textContent = Day3Humidity
      Day3ElementWeather.textContent = Day3Weather
      Day3ElementWind.textContent = Day3Wind
      Day3ElementNum.textContent = Day3dateNum

      //Day4
      var Day4Temp = data.list[3].main.temp;
      var Day4Weather = data.list[3].weather[0].description;
      var Day4Humidity = data.list[3].main.humidity;
      var Day4Wind = data.list[3].wind.speed;
      var Day4dateNum = data.list[3].dt_txt;

      var Day4ElementTemp = document.querySelector("#temp4");
      var Day4ElementWeather = document.querySelector("#weatherDescription4");
      var Day4ElementHumidity = document.querySelector("#humidity4");
      var Day4ElementWind = document.querySelector("#wind4");
      var Day4ElementNum = document.querySelector("#date4");

      Day4ElementTemp.textContent = Day4Temp
      Day4ElementHumidity.textContent = Day4Humidity
      Day4ElementWeather.textContent = Day4Weather
      Day4ElementWind.textContent = Day4Wind
      Day4ElementNum.textContent = Day4dateNum

      //Day5
      var Day5Temp = data.list[4].main.temp;
      var Day5Weather = data.list[4].weather[0].description;
      var Day5Humidity = data.list[4].main.humidity;
      var Day5Wind = data.list[4].wind.speed;
      var Day5dateNum = data.list[4].dt_txt;

      var Day5ElementTemp = document.querySelector("#temp5");
      var Day5ElementWeather = document.querySelector("#weatherDescription5");
      var Day5ElementHumidity = document.querySelector("#humidity5");
      var Day5ElementWind = document.querySelector("#wind5");
      var Day5ElementNum = document.querySelector("#date5");

      Day5ElementTemp.textContent = Day5Temp
      Day5ElementHumidity.textContent = Day5Humidity
      Day5ElementWeather.textContent = Day5Weather
      Day5ElementWind.textContent = Day5Wind
      Day5ElementNum.textContent = Day5dateNum

    })
};

function addLocationToLocalStorage(selectedCity) {
  // console.log(selectedCity);
  var stringifiedCity = localStorage.setItem("City", JSON.stringify(selectedCity));
  // console.log(stringifiedCity);
  displaysLocationFromLocalStorage(stringifiedCity);
}


function displaysLocationFromLocalStorage() {
  var searchedCities = JSON.parse(localStorage.getItem("City"));

  // Check if there are any past searched cities in local storage
  if (searchedCities && searchedCities.length > 0) {
    var searchedCityElement = document.getElementById("searchedCity");
    searchedCityElement.innerHTML = "";

    // Loop through the array of past searched cities
    for (var i = 0; i < searchedCities.length; i++) {
      var pastSearch = searchedCities[i];

      var ul = document.createElement("ul");
      ul.textContent = pastSearch;
      ul.setAttribute("data-index", i);

      var button = document.createElement("button");
      button.textContent = searchedCities[i];
      

      // Append the button to the ul element
      ul.appendChild(button);

      // Append the ul element to the searchedCity element
      searchedCityElement.appendChild(ul);
    }
  }
}
