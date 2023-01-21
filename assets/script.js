let weather = {
    apiKey: "e5b4acfc6d86de0eb7656fdc7bed7c0d",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city 
            + "&units=imperial&appid="
            + this.apiKey  
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data))
    },
    displayWeather: (data) => {
        const { name } = data;
        const { icon, description } = data.weather
        const { temp } = data.main
        console.log(name, icon, description, temp)
        document.querySelector(".city").innerHTML = "weather in " + city
        document.querySelector(".icon").src =
            "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".temp").innerHTML = temp + "°F";
        document.querySelector('.description')
       
        
    },
    search: function() {
        this.fetchWeather(document.querySelector(".searchbar").value);
    }
};

document.querySelector('.temp-today').addEventListener("click", function () {
    weather.search();
});

document.querySelector('.temp-today').addEventListener('keyup', function (event) {
    if (event.key = 'enter') {
        weather.search()
    }
})

weather.fetchWeather('Houston')

let hotCoffee  {

}

document.querySelector('.hot').addEventListener("click", function () {
    hotCoffee.random();
});

let icedCoffee {
    
}

document.querySelector('.iced').addEventListener("click", function () {
    icedCoffee.random();
});