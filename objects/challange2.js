let convertFahrenheitToCelsius = function (Fahrenheit) {
  let celsius = ((Fahrenheit - 32) * 5) / 9;
  let kelvin = celsius + 273.15;

  return {
    celsius: celsius,
    kelvin: kelvin,
    Fahrenheit: Fahrenheit,
  };
};

let value = convertFahrenheitToCelsius(32);
console.log(value.Fahrenheit);
console.log(value.celsius);
console.log(value.kelvin);
