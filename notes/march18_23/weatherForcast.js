// fetch("https://api.tomorrow.io/v4/weather/forecast?location=atlanta&apikey=wYjHKiqlOQW0v0wzQbqlK3BQrQvyBhfc")

//     .then((response) => response.json())

//     .then((data) => {

//             let weatherDataAll = []
//             weatherDataAll.push(data)
//             let weatherData = []
        
//         for(i = 0; i < weatherDataAll[0].timelines.length; i++) {
//             let days = {
//                 high: weatherDataAll[0].timelines.daily[i].values.temperatureMax,

//             }
//             weatherData.push(days);
//         }
//         console.log(weatherData)
//     }
//     );
function buttonClick() {
console.log("button click")
fetch("https://api.open-meteo.com/v1/forecast?latitude=33.749&longitude=-84.388&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch")

// best practice to have return statement  

.then((response) => response.json())

     .then((data) => {

            let weatherDataAll = []
            weatherDataAll.push(data)
            let weatherData = []
            
            for(i = 0; i < 7; i++) {
                let days = {
                    date: weatherDataAll[0].daily.time[i],
                    high: weatherDataAll[0].daily.temperature_2m_max[i],
                    low: weatherDataAll[0].daily.temperature_2m_min[i],
                    rainChance: weatherDataAll[0].daily.precipitation_probability_max[i],
                    windSpeed: weatherDataAll[0].daily.wind_speed_10m_max[i],      
                }
                        weatherData.push(days)

                        let forecast = document.getElementById("weatherInfo");
                        let forecastDay =document.createElement("div");
                        forecastDay.classList.add("fDay")

                        let city = document.createElement("p");
                        city.innerText = "Atlanta";

                        let date = document.createElement("p");
                        date.innerText = "Date: " + weatherData[i].date;

                        let high = document.createElement("p");
                        high.innerText = "High: " + weatherData[i].high;
                        
                        let low = document.createElement("p");
                        low.innerText = "Low: " + weatherData[i].low;
                        
                        let rainChance = document.createElement("p");
                        rainChance.innerText = "Chance of Rain: " + weatherData[i].rainChance + "%";

                        let windSpeed = document.createElement("p");
                        windSpeed.innerText = "Wind Speed: " + weatherData[i].windSpeed;

                        let picture = document.createElement("img");
                        picture.src = "myClass/notes/march18_23/image (3).png"
                
                        forecastDay.appendChild(city);
                        forecastDay.appendChild(date);
                        forecastDay.appendChild(high);
                        forecastDay.appendChild(low);
                        forecastDay.appendChild(rainChance);
                        forecastDay.appendChild(windSpeed);
                        forecast.appendChild(forecastDay);
            }
        
    }
    )
}

// buttonClick();

// create an image tag 

let weatehrImage = document.createElement("img");
if(currentWeather.condition === "sunny") {
    weatehrImage.src = "../../assests/sun.png"
} else if( currentWeather.condition === "cloudy") {
    weatehrImage.src = "../../assests/cloudy.png"
}

// connect image to HTML
document.body.appendChild(weatherImage);


/* this works on every attribute that has a tag.

*/
let randomIndex = Math.ceil(Math.random() * 10);
    console.log(randomIndex);
    console.log(response.results[randomIndex]);