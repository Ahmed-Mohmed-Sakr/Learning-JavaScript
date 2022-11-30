const getPuzzle = (wordCount, callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText);
      callback(undefined, data.puzzle);
    } else if (e.target.readyState === 4) {
      callback("An error has occured", undefined);
    }
  });

  request.open("GET", `https://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
  request.send();
};

const getContryName = (contryCode, callback) => {
  const countries = new XMLHttpRequest();

  countries.addEventListener("readystatechange", (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText);
      const myCountry = data.find(
        (country) => country.alpha2Code === contryCode
      );
      callback(undefined, myCountry.name);
    } else if (e.target.readyState === 4) {
      callback("an error happend");
    }
  });
  countries.open("GET", "https://restcountries.com/v2/all");
  countries.send();
};
