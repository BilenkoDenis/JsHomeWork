function Undershirt() {
  this.color = "black";
  this.size = "L";
  Object.defineProperty(this, "canBeWashed", {
    get: function () {
      return true;
    },
  });
}

function Tshirt() {
  this.color = "purple";
  this.brand = "Puma";
  this.print = "Animal";
}
Tshirt.prototype = new Undershirt();

function Shirt() {
  this.color = "green";
  this.brand = "Nike";
  this.collar = "classic";
  this.cuffinks = true;
}
Shirt.prototype = new Tshirt();

const pumaTshirt = new Tshirt();
const greenShirt = new Shirt();
