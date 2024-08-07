
const apiKey="0036ebaf063967ad58052c14e2693634";
        
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox=document.querySelector(".search input");

const searchbtn=document.querySelector(".search button");

const weatherIcon=document.querySelector(".weather-icon")

async function checkweather(city) {
    const response = await fetch(apiUrl+ city+`&appid=${apiKey}`);

    if(response.status==404){
      document.querySelector(".invalid").style.display="block";
      document.querySelector(".weather").style.display="none";
    }

    
    else{

      var data = await response.json();
    
      console.log(data);
      
      document.querySelector(".city").innerHTML=data.name;
      
      document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
      
      document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
      
      document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";
      
      const weatherCondition = data.weather[0].main.charAt(0).toUpperCase() + data.weather[0].main.slice(1).toLowerCase();
      console.log(`Weather condition: ${weatherCondition}`); // For debugging
      
      // Update weather icon based on weather condition
      switch(weatherCondition) {
        case "Clouds":
          weatherIcon.src = "images/clouds.png";
          break;
          case "Clear":
            weatherIcon.src = "images/clear.png";
            break;
            case "Rain":
              weatherIcon.src = "images/rain.png";
              break;
              case "Mist":
                weatherIcon.src = "images/mist.png";
                break;
                case "Drizzle":
                  weatherIcon.src = "images/drizzle.png";
                  break;
                  case "Snow":
                    weatherIcon.src = "images/snow.png";
                    break;
                    default:
                      weatherIcon.src = "images/default.png"; // Fallback image
                      break;
                    }
                    document.querySelector(".invalid").style.display="none";
                    document.querySelector(".weather").style.display="block";
                  }

}

searchbtn.addEventListener("click", ()=>{
    let city=searchbox.value;
    checkweather(city);
}
);