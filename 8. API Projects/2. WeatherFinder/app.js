const weather = new Weather();
const ui = new UI();

//Get weather when DOM load
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
    weather.getWeather()
        .then(wData => ui.paint(wData[0]))
        .catch(err => console.log(err));
}


