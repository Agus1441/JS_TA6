function convertToCelsius(temp) {
    let valor = (temp-32)*(5/9);
    console.log(Math.round(valor*10)/10)
}

convertToCelsius(100)

function  convertToFahrenheit(temp) {
    let valor = (temp*9/5) +32;
    console.log(Math.round(valor*10)/10)
}

convertToFahrenheit(37)
