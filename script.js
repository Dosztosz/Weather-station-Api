// ACCESSING ALL THE HTML COMPONENTS REQUIRED TO PERFORM ACTIONS ON.
let button = document.querySelector('.button')
let inputvalue = document.querySelector('.inputValue')
let nameVal = document.querySelector('.name');
let temp = document.querySelector('.temp');
let desc = document.querySelector('.desc');
let humidity = document.querySelector('.humidity');
let feelslike = document.querySelector('.feelslike');
let image = document.querySelector('img')


// ADDING EVENT LISTENER TO SEARCH BUTTON  
function showWeather(){

    // Fection data from open weather API
    fetch(`http://api.weatherapi.com/v1/current.json?key=5bc8c728be8d4178ba2123115230709&q=Bochnia&aqi=no`)
    .then(response => response.json())
    .then(
        displayData)
    .catch(err => alert('Wrong City name')); 

}

// Function to diplay weather on html document
const displayData=(weather)=>{
    temp.innerText=`${weather.current.temp_c}°C`
    feelslike.innerText=`${weather.current.feelslike_c}°C`
    humidity.innerText=`${weather.current.humidity}%`
    image.src=`${weather.current.condition.icon}`
    

}

    
showWeather()