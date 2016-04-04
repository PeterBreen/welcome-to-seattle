function Neighborhood (name) {
  this.name = name;
  this.characteristics = [];
  this.map = '';
  this.blurb = '';
  this.score = 0;
}

Neighborhood.prototype.addCharacteristic = function(characteristic, value) {
  var char = {
    characteristic: characteristic,
    value: value
  };
  this.characteristics.push(char);
};

Neighborhood.prototype.addMap = function(url) {
  this.map = url;
};

Neighborhood.prototype.addBlurb = function(blurb) {
  this.blurb = blurb;
};

var ballard = new Neighborhood ('Ballard');
ballard.addCharacteristic('nightLife', true);

var capitolHill = new Neighborhood ('Capitol Hill');
