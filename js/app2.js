var userInputArray = [];
var neighborhoodArray = [];

// function Neighborhood (name) {
//   this.name = name;
//   this.characteristics = [];
//   this.map = '';
//   this.blurb = '';
//   this.score = 0;
//   this.pageLink = '';
// }
//
// Neighborhood.prototype.addCharacteristic = function(characteristic, value) {
//   var char = {
//     characteristic: characteristic,
//     value: value
//   };
//   this.characteristics.push(char);
// };
//
// //THESE DON'T WORK!!
// // Neighborhood.prototype.addMap = function(url) {
// //   this.map = url;
// // };
// //
// // Neighborhood.prototype.addBlurb = function(blurb) {
// //   this.blurb = blurb;
// // };
//
// var ballard = new Neighborhood ('Ballard');
// ballard.addCharacteristic('nightLife', true);
// ballard.addCharacteristic('transitAccess', false);
// ballard.addCharacteristic('parks', false);
// ballard.addCharacteristic('singleFamily', false);
// ballard.addCharacteristic('rentApt', true);
// ballard.addCharacteristic('walkability', true);
// ballard.map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42981.60533212787!2d-122.42219963318377!3d47.67761592236304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549015d57a5da881%3A0xd07680ac0ad3f49c!2sBallard%2C+Seattle%2C+WA!5e0!3m2!1sen!2sus!4v1459889721120';
// //API KEY FROM GOOGLE:  AIzaSyCHi1phlSzHRo-cQ8rUb3yBHxNrPcga62M
// ballard.blurb = 'Once you come here you can\'t leave, because no roads lead out of Ballard. Also, Scandinavian pride!';
// ballard.pageLink = 'ballard';
// neighborhoodArray.push(ballard);
//
// var fremont = new Neighborhood ('Fremont');
// fremont.addCharacteristic('nightLife', true);
// fremont.addCharacteristic('transitAccess', true);
// fremont.addCharacteristic('parks', true);
// fremont.addCharacteristic('singleFamily', false);
// fremont.addCharacteristic('rentApt', true);
// fremont.addCharacteristic('walkability', true);
// fremont.map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21498.552535918265!2d-122.35198462623549!3d47.65879771802664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54901457beb77743%3A0x3352f3c14438fcbe!2sWallingford%2C+Seattle%2C+WA!5e0!3m2!1sen!2sus!4v1459890399833';
// fremont.blurb = 'Fremont and Wallingford are where you go when you are a programmer who wishes they were cool and fun instead of an Amazon employee. Also, beer.';
// fremont.pageLink = 'fremont';
// neighborhoodArray.push(fremont);
//
// var wedgwood = new Neighborhood ('Wedgwood');
// wedgwood.addCharacteristic('nightLife', false);
// wedgwood.addCharacteristic('transitAccess', false);
// wedgwood.addCharacteristic('parks', true);
// wedgwood.addCharacteristic('singleFamily', true);
// wedgwood.addCharacteristic('rentApt', false);
// wedgwood.addCharacteristic('walkability', false);
// wedgwood.map = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d21489.249844857597!2d-122.3054952!3d47.6813858!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490139296838881%3A0xc07fc60562efdeb2!2sWedgwood%2C+Seattle%2C+WA+98115!5e0!3m2!1sen!2sus!4v1459890441788';
// wedgwood.blurb = 'Wedgwood has a Top Pot. And some houses. Well, that\'s it.';
// wedgwood.pageLink = 'wedgwood';
// neighborhoodArray.push(wedgwood);
//
// var universityDistrict = new Neighborhood ('University District');
// universityDistrict.addCharacteristic('nightLife', true);
// universityDistrict.addCharacteristic('transitAccess', true);
// universityDistrict.addCharacteristic('parks', false);
// universityDistrict.addCharacteristic('singleFamily', false);
// universityDistrict.addCharacteristic('rentApt', true);
// universityDistrict.addCharacteristic('walkability', true);
// universityDistrict.map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21497.699773564327!2d-122.3218460762309!3d47.660868668035604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490148c0b84130f%3A0x4d2cfb91a6c76626!2sUniversity+District%2C+Seattle%2C+WA!5e0!3m2!1sen!2sus!4v1459889900124';
// universityDistrict.blurb = 'The U-District has a million restaraunts and only two are good. Also a university, which means undergrads, which means loud parties and broken beer bottles.';
// universityDistrict.pageLink = 'universityDistrict';
// neighborhoodArray.push(universityDistrict);
//
// var northgate = new Neighborhood ('Northgate');
// northgate.addCharacteristic('nightLife', false);
// northgate.addCharacteristic('transitAccess', true);
// northgate.addCharacteristic('parks', false);
// northgate.addCharacteristic('singleFamily', true);
// northgate.addCharacteristic('rentApt', true);
// northgate.addCharacteristic('walkability', false);
// northgate.map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42956.08300560333!2d-122.35909688290492!3d47.7085902729062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549013fdf9b04609%3A0x6e358615536e06a2!2sNorthgate%2C+Seattle%2C+WA!5e0!3m2!1sen!2sus!4v1459889979594';
// northgate.blurb = 'Northgate is Seattle\'s shield against the danger of Shoreline. Haha sorry actually it\'s just a boring place with a really good bus route to downtown.';
// northgate.pageLink = 'northgate';
// neighborhoodArray.push(northgate);
//
// var magnolia = new Neighborhood ('Magnolia');
// magnolia.addCharacteristic('nightLife', false);
// magnolia.addCharacteristic('transitAccess', false);
// magnolia.addCharacteristic('parks', true);
// magnolia.addCharacteristic('singleFamily', true);
// magnolia.addCharacteristic('rentApt', false);
// magnolia.addCharacteristic('walkability', false);
// magnolia.map = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d21502.066033919975!2d-122.4178286!3d47.6502644!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490158eb496d123%3A0x6c16c045cca07825!2sMagnolia%2C+Seattle%2C+WA!5e0!3m2!1sen!2sus!4v1459890035509';
// magnolia.blurb = 'Magnolia is where rich people live, and you know what that means. Look on the bright side - their multimillion mansions are likely to slide off the cliff into the Sound someday.';
// magnolia.pageLink = 'magnolia';
// neighborhoodArray.push(magnolia);
//
// var queenAnne = new Neighborhood ('Queen Anne');
// queenAnne.addCharacteristic('nightLife', true);
// queenAnne.addCharacteristic('transitAccess', true);
// queenAnne.addCharacteristic('parks', false);
// queenAnne.addCharacteristic('singleFamily', true);
// queenAnne.addCharacteristic('rentApt', true);
// queenAnne.addCharacteristic('walkability', true);
// queenAnne.map = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d43012.004286089155!2d-122.3887881!3d47.6407033!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490156ba01b4e4b%3A0xde5bdfe9498e9df5!2sQueen+Anne%2C+Seattle%2C+WA!5e0!3m2!1sen!2sus!4v1459890062326';
// queenAnne.blurb = 'Queen Anne is where you go to have the best quads in the entire city. CLIMB THAT HILL, CITIZEN.';
// queenAnne.pageLink = 'queenAnne';
// neighborhoodArray.push(queenAnne);
//
// var southLakeUnion = new Neighborhood ('South Lake Union');
// southLakeUnion.addCharacteristic('nightLife', false);
// southLakeUnion.addCharacteristic('transitAccess', true);
// southLakeUnion.addCharacteristic('parks', false);
// southLakeUnion.addCharacteristic('singleFamily', false);
// southLakeUnion.addCharacteristic('rentApt', true);
// southLakeUnion.addCharacteristic('walkability', true);
// southLakeUnion.map = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10755.872698696478!2d-122.3462894!3d47.6267499!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490153bc67a5d5b%3A0xa91e9c10a999a3be!2sSouth+Lake+Union%2C+Seattle%2C+WA!5e0!3m2!1sen!2sus!4v1459890108270';
// southLakeUnion.blurb = 'Watch out for "Amazombies" who are ruining the neighborhood ... which used to be a pile of condemned warehouses.';
// southLakeUnion.pageLink = 'southLakeUnion';
// neighborhoodArray.push(southLakeUnion);
//
// var downtown = new Neighborhood ('Downtown');
// downtown.addCharacteristic('nightLife', false);
// downtown.addCharacteristic('transitAccess', true);
// downtown.addCharacteristic('parks', false);
// downtown.addCharacteristic('singleFamily', false);
// downtown.addCharacteristic('rentApt', true);
// downtown.addCharacteristic('walkability', true);
// downtown.map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43041.078709006615!2d-122.37055658383359!3d47.60537872112048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906ab6b122572d%3A0x4cc65f51348e1d43!2sDowntown%2C+Seattle%2C+WA!5e0!3m2!1sen!2sus!4v1459890138313';
// downtown.blurb = 'Hello? Does anyone live here? I\'m stuck in the Chipotle on 3rd, send help...';
// downtown.pageLink = 'downtown';
// neighborhoodArray.push(downtown);
//
// var capitolHill = new Neighborhood ('Capitol Hill');
// capitolHill.addCharacteristic('nightLife', true);
// capitolHill.addCharacteristic('transitAccess', true);
// capitolHill.addCharacteristic('parks', true);
// capitolHill.addCharacteristic('singleFamily', false);
// capitolHill.addCharacteristic('rentApt', true);
// capitolHill.addCharacteristic('walkability', true);
// capitolHill.map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21511.287199795017!2d-122.33332167630465!3d47.62786321789353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490152857c86161%3A0xef487dc6bbc25185!2sCapitol+Hill%2C+Seattle%2C+WA!5e0!3m2!1sen!2sus!4v1459890163504';
// capitolHill.blurb = '"This place is getting ruined by new transplants," say last year\'s crop of transplants';
// capitolHill.pageLink = 'capitolHill';
// neighborhoodArray.push(capitolHill);
//
// var centralDistrict = new Neighborhood ('Central District');
// centralDistrict.addCharacteristic('nightLife', false);
// centralDistrict.addCharacteristic('transitAccess', true);
// centralDistrict.addCharacteristic('parks', false);
// centralDistrict.addCharacteristic('singleFamily', false);
// centralDistrict.addCharacteristic('rentApt', true);
// centralDistrict.addCharacteristic('walkability', false);
// centralDistrict.map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43042.57134845259!2d-122.33315538384988!3d47.60356467108971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906add4f876051%3A0x5aa3698cad106fba!2sCentral+District%2C+Seattle%2C+WA!5e0!3m2!1sen!2sus!4v1459890196416';
// centralDistrict.blurb = 'Seattle\'s best kept secret: A place you might want to live, with rent you might be able to afford! Makes you wonder what the catch is.';
// centralDistrict.pageLink = 'centralDistrict';
// neighborhoodArray.push(centralDistrict);
//
// var westSeattle = new Neighborhood ('West Seattle');
// westSeattle.addCharacteristic('nightLife', false);
// westSeattle.addCharacteristic('transitAccess', false);
// westSeattle.addCharacteristic('parks', true);
// westSeattle.addCharacteristic('singleFamily', true);
// westSeattle.addCharacteristic('rentApt', false);
// westSeattle.addCharacteristic('walkability', false);
// westSeattle.map = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d43078.83839249203!2d-122.4144111!3d47.5594721!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54904104d638618b%3A0x4a6b33b54023f871!2sWest+Seattle%2C+Seattle%2C+WA!5e0!3m2!1sen!2sus!4v1459890228619';
// westSeattle.blurb = 'And you thought Ballard was hard to get in and out of. Most West Seattle residents would be prefectly fine with WS magically turning into an island, because then you can\'t go there.';
// westSeattle.pageLink = 'westSeattle';
// neighborhoodArray.push(westSeattle);
//
// var delridge = new Neighborhood ('Delridge');
// delridge.addCharacteristic('nightLife', false);
// delridge.addCharacteristic('transitAccess', false);
// delridge.addCharacteristic('parks', false);
// delridge.addCharacteristic('singleFamily', true);
// delridge.addCharacteristic('rentApt', false);
// delridge.addCharacteristic('walkability', false);
// delridge.map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43086.79239722844!2d-122.38714583433305!3d47.54979767018751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549041a435d7a96d%3A0xa6d4695b2fcf828e!2sDelridge%2C+Seattle%2C+WA!5e0!3m2!1sen!2sus!4v1459890254235';
// delridge.blurb = 'I didn\'t even know this was a neighborhood until today. Rent is still probably stratospheric.';
// delridge.pageLink = 'delridge';
// neighborhoodArray.push(delridge);
//
// var georgetown = new Neighborhood ('Georgetown');
// georgetown.addCharacteristic('nightLife', true);
// georgetown.addCharacteristic('transitAccess', false);
// georgetown.addCharacteristic('parks', false);
// georgetown.addCharacteristic('singleFamily', false);
// georgetown.addCharacteristic('rentApt', true);
// georgetown.addCharacteristic('walkability', false);
// georgetown.map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43094.880446457166!2d-122.35209893442145!3d47.53995867002443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490418d0563a897%3A0xae40817516315950!2sGeorgetown%2C+Seattle%2C+WA!5e0!3m2!1sen!2sus!4v1459890281392';
// georgetown.blurb = 'Do you like airplanes, repurposed old brick buildings, and breweries? Have I got the place for you!';
// georgetown.pageLink = 'georgetown';
// neighborhoodArray.push(georgetown);
//
// var beaconHill = new Neighborhood ('Beacon Hill');
// beaconHill.addCharacteristic('nightLife', false);
// beaconHill.addCharacteristic('transitAccess', true);
// beaconHill.addCharacteristic('parks', false);
// beaconHill.addCharacteristic('singleFamily', true);
// beaconHill.addCharacteristic('rentApt', true);
// beaconHill.addCharacteristic('walkability', false);
// beaconHill.map = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d43082.49127214013!2d-122.3377812!3d47.5550293!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549041e094683b21%3A0x61090fa06d3e8c16!2sBeacon+Hill%2C+Seattle%2C+WA!5e0!3m2!1sen!2sus!4v1459890313448';
// beaconHill.blurb = 'Has a light rail station.';
// beaconHill.pageLink = 'beaconHill';
// neighborhoodArray.push(beaconHill);
//
// var rainier = new Neighborhood ('Rainier-Seward Park');
// rainier.addCharacteristic('nightLife', false);
// rainier.addCharacteristic('transitAccess', true);
// rainier.addCharacteristic('parks', true);
// rainier.addCharacteristic('singleFamily', true);
// rainier.addCharacteristic('rentApt', false);
// rainier.addCharacteristic('walkability', false);
// rainier.map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86184.18691236117!2d-122.34077429029506!3d47.54334917975777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549069ff2c41cc23%3A0xa0c3ca7d3fbb1c04!2sRainier+Valley%2C+Seattle%2C+WA!5e0!3m2!1sen!2sus!4v1459890340990';
// rainier.blurb = 'Seward Park is pretty cool. Also lots of people are afraid of being south of the domes, so take advantage of their ignorance!';
// rainier.pageLink = 'rainier';
// neighborhoodArray.push(rainier);
//
// function createUserArray(characteristic, value){
//   var userChar = {
//     characteristic: characteristic,
//     value: value
//   };
//   userInputArray.push(userChar);
// }
//
// function scoreAssignment(neighborhood){
//   for (var i = 0; i < userInputArray.length; i++){
//     if (destringify(userInputArray[i].value) === neighborhood.characteristics[i].value){
//       neighborhood.score++;
//     }
//   }
// }
//
// function assignNeighborhoodScores(){
//   for(var i = 0; i < neighborhoodArray.length; i++){
//     scoreAssignment(neighborhoodArray[i]);
//     console.log(neighborhoodArray[i]);
//   }
// }
//
// function destringify(string){
//   if(string === 'true'){
//     string = true;
//   }
//   else if(string === 'false'){
//     string = false;
//   }
//   return string;
// }
//
// function sortResults(){
//   neighborhoodArray.sort(function (a, b) {
//     if (a.score > b.score){
//       return -1;
//     }
//     if (b.score > a.score){
//       return 1;
//     } return 0;
//   });
// }
//
// function processUserAnswers(event){
//   event.preventDefault();
//   var nightLifeQuestion = event.target.nightlifequestion.value;
//   console.log('nightlife: ', event.target.nightlifequestion.value);
//   createUserArray('nightLife', nightLifeQuestion);
//   var transitQuestion = event.target.transitquestion.value;
//   console.log('transit: ', event.target.transitquestion.value);
//   createUserArray('transitAccess', transitQuestion);
//   var parksQuestion = event.target.parksquestion.value;
//   console.log('parks: ', event.target.parksquestion.value);
//   createUserArray('parks', parksQuestion);
//   var singleFamilyHousingQuestion = event.target.singlefamilyhousingquestion.value;
//   console.log('single family housing question: ', event.target.singlefamilyhousingquestion.value);
//   createUserArray('singleFamily', singleFamilyHousingQuestion);
//   var rentableAptQuestion = event.target.rentableaptquestion.value;
//   console.log('rentable apartment question: ', event.target.rentableaptquestion.value);
//   createUserArray('rentApt', rentableAptQuestion);
//   var walkabilityQuestion = event.target.walkabilityquestion.value;
//   console.log('walkability question: ', event.target.walkabilityquestion.value);
//   createUserArray('walkability', walkabilityQuestion);
//
//   assignNeighborhoodScores();
//   sortResults();
//   appendResultList();
// }
// //CREATE RANKED LIST AFTER FORM RESULTS
// function appendResultList() {
//   var formResults = document.getElementById('form-results');
//   var resultsHeader = document.createElement('h2');
//   resultsHeader.textContent = 'Neighborhoods that best match your criteria';
//   formResults.appendChild(resultsHeader);
//   var formResultsOL = document.createElement('ol');
//   formResults.appendChild(formResultsOL);
//   for (i = 0; i < neighborhoodArray.length; i++) {
//     var formResultsLI = document.createElement('li');
//     formResultsOL.appendChild(formResultsLI);
//     var aTag = document.createElement('a');
//     aTag.setAttribute('href', 'neighborhood.html?id=' + neighborhoodArray[i].pageLink);
//     aTag.innerHTML = neighborhoodArray[i].name;
//     formResultsLI.appendChild(aTag);
//   }
// }
//
// //QUERYSTRING STUFF
// //based on css-tricks.com/snippets/javascript/get-url-variables/
// function getQueryVariable(variable)
// {
//   var query = window.location.search.substring(1);
//   var vars = query.split('&');
//   var key, value;
//   for (var i = 0; i < vars.length; i++) {
//     var pair = vars[i].split('=');
//     key = pair[0];
//     value = pair[1];
//     console.log('key: ' + key);
//     if( key === 'id' ){
//       for (var i = 0; i < neighborhoodArray.length; i++){
//         if (neighborhoodArray[i].pageLink === pair[1]){
//           displayNeighborhood(neighborhoodArray[i]);
//           return;
//         }
//       }
//     }
//       // displayNeighborhood(window[pair[1]]);
//       // console.log('pair1: ' + pair[1]);
//   }
// }
//
// var neighborhoodCheck = document.getElementById('neighborhood-name');
// if (neighborhoodCheck) {
//   getQueryVariable('id');
// }
//
// //DISPLAY PAGE CONTENT FOR NEIGHBORHOOD.HTML
// function displayNeighborhood(neighborhood){
//   var title = document.createElement('h1');
//   title.textContent = neighborhood.name;
//   document.getElementById('neighborhood-name').appendChild(title);
//
//   var mapImage = document.createElement('iframe');
//   mapImage.src = neighborhood.map;
//   document.getElementById('google-map').appendChild(mapImage);
//
//   var blurbContent = document.createElement('section');
//   blurbContent.textContent = neighborhood.blurb;
//   document.getElementById('info-box').appendChild(blurbContent);
// }
//
// function displayPlaces() {
//   var places = document.getElementById('places-list');
//   var resultsHeader = document.createElement('h2');
//   resultsHeader.textContent = 'List of Neighborhoods';
//   places.appendChild(resultsHeader);
//   var formResultsOL = document.createElement('ol');
//   places.appendChild(formResultsOL);
//   for (i = 0; i < neighborhoodArray.length; i++) {
//     var formResultsLI = document.createElement('li');
//     formResultsOL.appendChild(formResultsLI);
//     var aTag = document.createElement('a');
//     aTag.setAttribute('href', 'neighborhood.html?id=' + neighborhoodArray[i].pageLink);
//     aTag.innerHTML = neighborhoodArray[i].name;
//     formResultsLI.appendChild(aTag);
//   };
// }
//
// //display page content for places.html - navigation backup page
// var placesCheck = document.getElementById('places-list');
// if (placesCheck) {
//   displayPlaces();
// }
//
// //EVENT LISTENER FOR FORM PAGE
// var getUserAnswers = document.getElementById('help-me-choose-form');
// getUserAnswers.addEventListener('submit', processUserAnswers);

//EVENT LISTENER FOR COMMENTS
var commentForm = document.getElementById('neighborhood-comment-form');
commentForm.addEventListener('submit', processComment);

function processComment(event){
  event.preventDefault();
  var userComment = document.createElement('p');
  // userComment.setAttribute('id', neighborhood.name);
  userComment.textContent = event.target.comment.value;
  console.log(userComment);
  document.getElementById('comments').appendChild(userComment);
}

// function rendeCommentToPage (location){
//   var locationHeading = createHeader(location);
//   var locationTable = createTable(location);
//   document.getElementById('all-store-data').appendChild(locationHeading);
//   document.getElementById('all-store-data').appendChild(locationTable);
// }
