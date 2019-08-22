class Weather {
    constructor() {
        this.apiKey = '8618ab8d36cd47ab98ab8d36cda7abc7';
    }

    async getWeather() {
        const response = await fetch(`https://api.weather.com/v2/pws/observations/current?stationId=KMAHANOV10&format=json&units=e&apiKey=${this.apiKey}`);
        const responseData = await response.json();
        return responseData.observations;        
    }
}