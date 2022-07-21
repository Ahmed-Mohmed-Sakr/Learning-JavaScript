let resterant = {
  name: "ASB",
  guestCapasity: 75,
  guestCount: 0,
  checkAvailability: function (partySize) {
    let seatsLeft = this.guestCapasity - this.guestCount;
    return partySize <= seatsLeft;
  },
  seatParty: function (partySize) {
    this.guestCount = this.guestCount + partySize;
  },
  removeParty: function (partySize) {
    this.guestCount = this.guestCount - partySize;
  },
};

resterant.seatParty(72);
console.log(resterant.checkAvailability(5));
resterant.removeParty(4);
console.log(resterant.checkAvailability(5));
