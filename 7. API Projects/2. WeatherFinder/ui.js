class UI {
    constructor() {
       this.location = document.getElementById('w-location'); 
       this.desc = document.getElementById('w-desc'); 
       this.string = document.getElementById('w-string'); 
       this.details = document.getElementById('w-details'); 
       this.icon = document.getElementById('w-icon'); 
       this.humidity = document.getElementById('w-humidity'); 
       this.feelsKike = document.getElementById('w-feels-like'); 
       this.dewpoint = document.getElementById('w-dewpoint'); 
       this.wind = document.getElementById('w-wind'); 
    }

    paint(weather) {
        this.location.textContent = weather.country;
        this.desc.textContent = weather.stationID;
        this.humidity.textContent = `Relative Humidity: ${weather.humidity}`;
        this.dewpoint.textContent = `DevPoint: ${weather.dewpt}`;
        this.feelsKike.textContent = `Wind Speed: ${weather.windSpeed}`;
    }
}