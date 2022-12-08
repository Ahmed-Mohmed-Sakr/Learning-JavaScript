// const getPuzzle = (wordCount) =>
//   new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener("readystatechange", (e) => {
//       if (e.target.readyState === 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.responseText);
//         resolve(data.puzzle);
//       } else if (e.target.readyState === 4) {
//         reject("An error occured");
//       }
//     });

//     request.open("GET", `https://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
//     request.send();
//   });

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

// const getContryName = (contryCode) =>
//   new Promise((resolve, reject) => {
//     const countries = new XMLHttpRequest();

//     countries.addEventListener("readystatechange", (e) => {
//       if (e.target.readyState === 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.responseText);
//         const myCountry = data.find(
//           (country) => country.alpha2Code === contryCode
//         );
//         resolve(myCountry.name);
//       } else if (e.target.readyState === 4) {
//         reject("an error happend");
//       }
//     });
//     countries.open("GET", "https://restcountries.com/v2/all");
//     countries.send();
//   });

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
