const data = {
  locations: [],
  get location() {
    return this._location;
  },
  set location(value) {
    this._location = value.trim();
    this.locations.push(this._location);
  },
};

// code that use the data object
data.location = "   cairo    ";
data.location = "  giza";
console.log(data);
