const celsiusEl = document.getElementById("celsius");
const FahreneitEl = document.getElementById("Fahreneit");
const kelvinEl = document.getElementById("Kelvin");


function computeTemp(){
    const currentvalue = +event.target.value;

    switch (event.target.name) {
        case "celsius":
            kelvinEl.value = currentvalue + 273.15;
            FahreneitEl.value = currentvalue * 1.8 + 32;
            break;

            case "Fahreneit":
            celsiusEl.value = currentvalue - 32 / 1.8;
            kelvinEl.value = (currentvalue - 32) / 1.8 + 273.15;
            break;

            case "Kelvin":
            celsiusEl.value = currentvalue - 273.15;
            FahreneitEl.value = (currentvalue - 273.15) * 1.8 + 32;
            break;
    
    
    
        default:
            break;
    }
}