// callback
const getDataCallback = (callback) => {
  setTimeout(() => {
    callback(undefined, "this is the data");
    callback(undefined, "this is the data");
  }, 2000);
};

getDataCallback((err, data) => {
  if (err) {
  } else {
    console.log(data);
  }
});

// promise

const getDataPromise = (data) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`this is the promise data: ${data}`);
      // reject("this is my promise error");
      // reject("this is my promise error");
    }, 2000);
  });

const myPromise = getDataPromise(123);

myPromise.then(
  (data) => {
    console.log(data);
  },
  (err) => {
    console.log(err);
  }
);
