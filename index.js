const cats = ["Milo", "Otis", "Garfield"]

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

  function destructivelyAppendCat () {
    cats.push("Ralph")
  }

  function destructivelyPrependCat() {
    cats.unshift("Bob")
  }

  function destructivelyRemoveLastCat() {
    cats.pop ("Garfield")
  }
  
  function destructivelyRemoveFirstCat() {
    cats.shift("Milo")
  }

  function appendCat() {
    appendCat = "Bruce"
  }