// require ('dotenv').config()

// const apiKey = process.env.APP_API_KEY

function getWeather(city) {
    const apiKey = "32a6fbf12bf54a93934163455221605"
    fetch("http://api.weatherapi.com/v1/current.json?key=" 
        + apiKey 
        + "&q="
        + city
        + "&aqi=no"
        ).then(response => response.json())
        .then(data => displayWeather(data))
    function displayWeather (data) {
        const { name, region } = data.location;
        const { temp_f, wind_mph, precip_in, cloud } = data.current;
        const { icon, text } = data.current.condition;
        document.querySelector(".city").innerText = `${name}, ${region}`;
        document.querySelector(".temp").innerText = `${temp_f}°F`;
        document.querySelector(".icon").src = icon;
        document.querySelector(".description").innerText = `${text}`;
        document.querySelector(".wind").innerText = `Wind speed: ${wind_mph} mph`;
        document.querySelector(".cloud").innerText = `Cloud coverage: ${cloud}%`;
        document.querySelector(".precipitation").innerText = `Precipation: ${precip_in}%`;
    }
    function search(city) {
        document.addEventListener("click", function () {
            var city = document.querySelector(".search-bar").value
            getWeather(city)
            document.querySelector('.search-bar').value = '';
          });
    }
    search(city)
}

getWeather("Tulsa");