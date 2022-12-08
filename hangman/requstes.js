const getPuzzle = (wordCount) => {
  return fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("Unable to fetch puzzel");
      }
    })
    .then((data) => {
      return data.puzzle;
    });
};

const getContryName = (contryCode) => {
  return fetch("https://restcountries.com/v2/all")
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("An error occure");
      }
    })
    .then((data) => {
      const myCountry = data.find(
        (country) => country.alpha2Code === contryCode
      );

      return myCountry.name;
    });
};

const getLocation = () => {
  return fetch("https://ipinfo.io/json?token=f79414fa8704a8").then(
    (response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("An error occure");
      }
    }
  );
};
