// glopal scope(convertFahrenheitToCelsius, value)
//   local scope(Fahrenheit, celsius)
//      local scope (isFreezing)

let convertFahrenheitToCelsius = function (Fahrenheit) {
  let celsius = ((Fahrenheit - 32) * 5) / 9;

  if (celsius <= 0) {
    let isfreezing = true;
  }

  return celsius;
};

let value = convertFahrenheitToCelsius(32);
console.log(value);

console.log(convertFahrenheitToCelsius(68));
