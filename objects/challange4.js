let isValidPassword = function (password) {
  password = password.toLowerCase();
  return password.length > 8 && !password.includes("password");
};

console.log(isValidPassword("asdfp"));
console.log(isValidPassword("kblncfjn#@$^&#3"));
console.log(isValidPassword("asdfpasswordpasdfp"));
