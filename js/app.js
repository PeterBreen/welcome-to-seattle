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
ballard.addCharacteristic('transitAccess', false);
ballard.addCharacteristic('parks', false);
ballard.addCharacteristic('singleFamily', false);
ballard.addCharacteristic('rentApt', true);
ballard.addCharacteristic('walkability',true);

var fremont = new Neighborhood ('Fremont');
fremont.addCharacteristic('nightLife', true);
fremont.addCharacteristic('transitAccess', true);
fremont.addCharacteristic('parks', true);
fremont.addCharacteristic('singleFamily', false);
fremont.addCharacteristic('rentApt', true);
fremont.addCharacteristic('walkability',true);

var wedgewood = new Neighborhood ('Wedgewood');
wedgewood.addCharacteristic('nightLife', ?);
wedgewood.addCharacteristic('transitAccess', ?);
wedgewood.addCharacteristic('parks', ?);
wedgewood.addCharacteristic('singleFamily', ?);
wedgewood.addCharacteristic('rentApt', ?);
wedgewood.addCharacteristic('walkability',?);

var universityDistrict = new Neighborhood ('University District');
universityDistrict.addCharacteristic('nightLife', ?);
universityDistrict.addCharacteristic('transitAccess', ?);
universityDistrict.addCharacteristic('parks', ?);
universityDistrict.addCharacteristic('singleFamily', ?);
universityDistrict.addCharacteristic('rentApt', ?);
universityDistrict.addCharacteristic('walkability',?);

var northgate = new Neighborhood ('Northgate');
northgate.addCharacteristic('nightLife', ?);
northgate.addCharacteristic('transitAccess', ?);
northgate.addCharacteristic('parks', ?);
northgate.addCharacteristic('singleFamily', ?);
northgate.addCharacteristic('rentApt', ?);
northgate.addCharacteristic('walkability',?);

var magnolia = new Neighborhood ('Magnolia');
magnolia.addCharacteristic('nightLife', ?);
magnolia.addCharacteristic('transitAccess', ?);
magnolia.addCharacteristic('parks', ?);
magnolia.addCharacteristic('singleFamily', ?);
magnolia.addCharacteristic('rentApt', ?);
magnolia.addCharacteristic('walkability',?);

var queenAnne = new Neighborhood ('Queen Anne');
queenAnne.addCharacteristic('nightLife', ?);
queenAnne.addCharacteristic('transitAccess', ?);
queenAnne.addCharacteristic('parks', ?);
queenAnne.addCharacteristic('singleFamily', ?);
queenAnne.addCharacteristic('rentApt', ?);
queenAnne.addCharacteristic('walkability',?);

var southLakeUnion = new Neighborhood ('South Lake Union');
southLakeUnion.addCharacteristic('nightLife', ?);
southLakeUnion.addCharacteristic('transitAccess', ?);
southLakeUnion.addCharacteristic('parks', ?);
southLakeUnion.addCharacteristic('singleFamily', ?);
southLakeUnion.addCharacteristic('rentApt', ?);
southLakeUnion.addCharacteristic('walkability',?);

var downtown = new Neighborhood ('Downtown');
downtown.addCharacteristic('nightLife', ?);
downtown.addCharacteristic('transitAccess', ?);
downtown.addCharacteristic('parks', ?);
downtown.addCharacteristic('singleFamily', ?);
downtown.addCharacteristic('rentApt', ?);
downtown.addCharacteristic('walkability',?);

var capitolHill = new Neighborhood ('Capitol Hill');
capitolHill.addCharacteristic('nightLife', ?);
capitolHill.addCharacteristic('transitAccess', ?);
capitolHill.addCharacteristic('parks', ?);
capitolHill.addCharacteristic('singleFamily', ?);
capitolHill.addCharacteristic('rentApt', ?);
capitolHill.addCharacteristic('walkability',?);

var centralDistrict = new Neighborhood ('Central District');
centralDistrict.addCharacteristic('nightLife', ?);
centralDistrict.addCharacteristic('transitAccess', ?);
centralDistrict.addCharacteristic('parks', ?);
centralDistrict.addCharacteristic('singleFamily', ?);
centralDistrict.addCharacteristic('rentApt', ?);
centralDistrict.addCharacteristic('walkability',?);

var westSeattle = new Neighborhood ('West Seattle');
westSeattle.addCharacteristic('nightLife', ?);
westSeattle.addCharacteristic('transitAccess', ?);
westSeattle.addCharacteristic('parks', ?);
westSeattle.addCharacteristic('singleFamily', ?);
westSeattle.addCharacteristic('rentApt', ?);
westSeattle.addCharacteristic('walkability',?);

var delridge = new Neighborhood ('Delridge');
delridge.addCharacteristic('nightLife', ?);
delridge.addCharacteristic('transitAccess', ?);
delridge.addCharacteristic('parks', ?);
delridge.addCharacteristic('singleFamily', ?);
delridge.addCharacteristic('rentApt', ?);
delridge.addCharacteristic('walkability',?);

var georgetown = new Neighborhood ('Georgetown');
georgetown.addCharacteristic('nightLife', ?);
georgetown.addCharacteristic('transitAccess', ?);
georgetown.addCharacteristic('parks', ?);
georgetown.addCharacteristic('singleFamily', ?);
georgetown.addCharacteristic('rentApt', ?);
georgetown.addCharacteristic('walkability',?);

var beaconHill = new Neighborhood ('Beacon Hill');
beaconHill.addCharacteristic('nightLife', ?);
beaconHill.addCharacteristic('transitAccess', ?);
beaconHill.addCharacteristic('parks', ?);
beaconHill.addCharacteristic('singleFamily', ?);
beaconHill.addCharacteristic('rentApt', ?);
beaconHill.addCharacteristic('walkability',?);

var rainier = new Neighborhood ('Rainier-Seward Park');
rainier.addCharacteristic('nightLife', ?);
rainier.addCharacteristic('transitAccess', ?);
rainier.addCharacteristic('parks', ?);
rainier.addCharacteristic('singleFamily', ?);
rainier.addCharacteristic('rentApt', ?);
rainier.addCharacteristic('walkability',?);
