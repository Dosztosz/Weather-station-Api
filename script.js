// ACCESSING ALL THE HTML COMPONENTS REQUIRED TO PERFORM ACTIONS ON.
let button = document.querySelector('.button')
let inputvalue = document.querySelector('.inputValue')
let nameVal = document.querySelector('.name');
let temp = document.querySelector('.temp');
let desc = document.querySelector('.desc');
let humidity = document.querySelector('.humidity');
let feelslike = document.querySelector('.feelslike');
let image = document.querySelector('img');
let futureWeather = document.querySelector('.forecast');
var tbody = document.getElementById('tbody');
let articlesNum = '';
const newHour = {};



// ADDING EVENT LISTENER TO SEARCH BUTTON  
function showWeather(){

    // Fection data from open weather API
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=5bc8c728be8d4178ba2123115230709&q&q&q&q=Bochnia&days=1&aqi=yes&alerts=yes`)
    .then(response => response.json())
    .then(displayData);

}


function showInformations(){
    fetch(`https://newsapi.org/v2/top-headlines?country=pl&category=business&apiKey=2f9453099bc64564afee30ad1cb5d245`)
    .then(response => response.json())
    .then(displayInfo);
}

// Function to diplay weather on html document
const displayData=(weather)=>{
    temp.innerText=`${weather.current.temp_c}°C`
    feelslike.innerText=`${weather.current.feelslike_c}°C`
    humidity.innerText=`${weather.current.humidity}%`
    image.src=`${weather.current.condition.icon}`
    for(i = 0; i<=23; i++){
        newHour[i] = {
            hour: weather.forecast.forecastday[0].hour[i].time,
            temp: weather.forecast.forecastday[0].hour[i].feelslike_c,
            weather: weather.forecast.forecastday[0].hour[i].condition.text,
            rain: weather.forecast.forecastday[0].hour[i].chance_of_rain

        }
        
    }
    var k = '<tbody>'
    for(i = 0;i <= 23 ; i = i+2){
        k+= '<tr>';
        k+= '<td>' + newHour[i].hour.substring(10) + '</td>';
        k+= '<td>' + newHour[i].temp + '°C</td>';
        k+= '<td>' + newHour[i].weather + '</td>';
        k+= '<td>' + newHour[i].rain + '%</td>';
        k+= '</tr>';
    }
    k+='</tbody>';
    document.getElementById('tableData').innerHTML = k;
}

// Function to display information on html document

const displayInfo=(articles)=>{
    for(let j = 0; j <= 19; j++){
        articlesNum += `<a href="${articles.articles[j].url}"><p>`;
        articlesNum += articles.articles[j].title;
        articlesNum += '</p></a>';
    }
    document.getElementById('headline').innerHTML = articlesNum;


}

    
showWeather()
showInformations()