const empty = document.querySelector(".empty");
const searchBox = document.querySelector(".search input"); 
const btn = document.querySelector("button");
const weather = document.querySelector(".weather");
const error = document.querySelector(".error")
const apiKey = "e88af854c032ca0905dcffb2c2232b84";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric&q=`;

async function checkWeather(city){
    const response = await fetch(apiUrl + city);
    var data = await response.json();
    console.log(response.status)


    if(response.status == 404){
        error.style.display = "inline-block";
        weather.style.display = "none";
        empty.style.display = "none";
    }

    else if(response.status === 400){
        empty.style.display = "inline-block";
        error.style.display = "none";
        weather.style.display = "none";
    }


    else{
    document.querySelector(".city").innerHTML =data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
    document.querySelector(".humidity").innerHTML = Math.round(data.main.humidity) +"%";
    document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) +" km/h";
    
    if(data.weather[0].main == "Smoke"){
        document.querySelector(".weather-icon").src = "./images/mist.png"
    }

    else if(data.weather[0].main == "Clouds"){
        document.querySelector(".weather-icon").src = "./images/clouds.png"
    }


    else if(data.weather[0].main == "Clear"){
        document.querySelector(".weather-icon").src = "./images/clear.png"
    }

    else if(data.weather[0].main == "Drizzle"){
        document.querySelector(".weather-icon").src = "./images/drizzle.png"
    }

    else if(data.weather[0].main == "Snow"){
        document.querySelector(".weather-icon").src = "./images/snow.png"
    }

    else if(data.weather[0].main == "Rain"){
        document.querySelector(".weather-icon").src = "./images/rain.png"
    }
    weather.style.display = "inline-block";
    error.style.display = "none";
    empty.style.display = "none";
}

}




btn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
   
});

