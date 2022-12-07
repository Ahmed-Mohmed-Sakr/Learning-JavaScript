const createCount = () => {
  let count = 0;

  return {
    intcrement() {
      count++;
    },
    decrement() {
      count--;
    },
    get() {
      return count;
    },
  };
};

const counter = createCount();

counter.intcrement();
counter.decrement();
counter.decrement();
console.log(counter.get());

// Adder
const createAdder = (a) => {
  return (b) => {
    return a + b;
  };
};

const add10 = createAdder(10);

console.log(add10(-2));
console.log(add10(5));
console.log(add10(20));

const createTipper = (baseTip) => {
  return (amount) => {
    return amount * baseTip;
  };
};

const tip15 = createTipper(0.15);
const tip30 = createTipper(0.3);

console.log(tip15(100));
console.log(tip30(100));
