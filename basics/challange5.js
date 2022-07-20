let isGuestOneVegan = true;
let isGuestTwoVegan = false;

if (isGuestOneVegan && isGuestTwoVegan) {
  console.log("Only offer vegan dishes");
} else if (isGuestOneVegan || isGuestTwoVegan) {
  console.log("make sure to offer up some vegan dishes");
} else {
  console.log("Offer anything on the menu");
}
