class Climate {
    constructor(name, weather) {
        this.name = name;
        this._weather = weather;
    }

    set weather(value) {
      this._weather = value;
    }

    get weather() {
        return `The weather is ${this._weather}`;
    }

    printMessage() {
        console.log(`Hello ${this.name}, the weather is ${this._weather}`);
    }
}


const climate = new Climate('Chucks', 'Sunny');
climate.printMessage(); // Hello chucks, the weather is Sunny

climate.weather = 'Cloudy';
climate.printMessage(); // Hello Chucks, the weather is Cloudy

console.log(climate.weather); // The weather is Cloudy