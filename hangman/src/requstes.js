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

const getContryName = async (contryCode) => {
  const response = await fetch("https://restcountries.com/v2/all");

  if (response.status === 200) {
    const data = await response.json();

    return data.find((country) => country.alpha2Code === contryCode);
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

const getCurrentCountry = async () => {
  const location = await getLocation();
  return getContryName(location.country);
};

export { getPuzzle as default };
