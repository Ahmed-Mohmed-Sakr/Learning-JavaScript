const getPuzzle = async (wordCount) => {
  const response = await fetch(
    `https://puzzle.mead.io/puzzle?wordCount=${wordCount}`
  );

  if (response.status === 200) {
    const data = await response.json();
    return data.puzzle;
  } else {
    throw new Error("Unable to fetch puzzel");
  }
};

const getPuzzleOld = (wordCount) => {
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

const getContryName = async (contryCode) => {
  const response = await fetch("https://restcountries.com/v2/all");

  if (response.status === 200) {
    const data = await response.json();

    const myCountry = data.find((country) => country.alpha2Code === contryCode);
    return myCountry.name;
  } else {
    throw new Error("An error occure");
  }
};

const getLocation = async () => {
  const response = await fetch("https://ipinfo.io/json?token=f79414fa8704a8");

  if (response.status === 200) {
    const data = await response.json();
    return data;
  } else {
    throw new Error("An error occure");
  }
};
