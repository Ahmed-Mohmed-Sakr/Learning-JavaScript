let convertFahrenheitToCelsius = function (Fahrenheit) {
  let celsius = ((Fahrenheit - 32) * 5) / 9;
  return celsius;
};

let value = convertFahrenheitToCelsius(32);
console.log(value);

console.log(convertFahrenheitToCelsius(68));
