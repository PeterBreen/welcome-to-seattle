var neighborhoodArray = [];
var currentNeighborhood;
var commentsArray = [];
var Hoods = {}
// Hoods.all = []

Hoods.pullData = function() {
  if (localStorage.rawData) {
    console.log("LocalStorage present");
    var localHoodData = JSON.parse(localStorage.rawData);
    localHoodData.forEach(function(hoodData) {
      new Neighborhooder(hoodData);
    }, this);
  } else {
    $.getJSON("data/hoods.json", function(data) {
      // Hoods.Neighborhood(data);
      var stringData = JSON.stringify(data);
      localStorage.setItem("rawData", stringData);
      data.forEach(function(hoodData) {
        new Neighborhooder(hoodData);
      }, this);
    })
  }
}; Hoods.pullData() //For some dumb reason I can't seem to put this in an IFFE

//places hoods on the place page
// Hoods.placeHoods = function() {
// var hoodNames = neighborhoodArray.map(function(a) {
//     return {
//       name: a.name,
//       pageLink: a.pageLink
//     };
//   })
//   hoodNames.forEach(function() {
//     // var aTag = $('a');
//     // aTag.attr('neighborhood.html?id=' + this.pageLink);
//     // var placeName = aTag.text(this.name);
//     $('#places-list').append('<p></p>').html("<a href='neighborhood.html?id=" + this.pageLink + "'>" + this.name + "</a>").addClass('places-list');//trying to link the hoods but couldn't get it.
//   }, this)
// }; Hoods.placeHoods()


function Neighborhooder(rawData) {
  this.name = rawData.name;
  this.characteristics = rawData.characteristics;
  this.map = rawData.map;
  this.blurb = rawData.blurb;
  this.pageLink = rawData.pageLink;
  this.factsList = rawData.factsList;
  this.pic = "images/" + rawData.pageLink + ".jpg";
  this.score = 0;
  neighborhoodArray.push(this);
}

function createUserArray(characteristic, value){
  var userChar = {
    characteristic: characteristic,
    value: value
  };
  userInputArray.push(userChar);
}

//QUERYSTRING STUFF
//based on css-tricks.com/snippets/javascript/get-url-variables/
function getQueryVariable(variable)
{
  var query = window.location.search.substring(1);
  var vars = query.split('&');
  var key, value;
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    key = pair[0];
    value = pair[1];
    console.log('key: ' + key);
    if( key === 'id' ){
      for (var i = 0; i < neighborhoodArray.length; i++){
        if (neighborhoodArray[i].pageLink === pair[1]){
          displayNeighborhood(neighborhoodArray[i]);
          return;
        }
      }
    }
  }
}

var neighborhoodCheck = $('#neighborhood-name');
if (neighborhoodCheck) {
  getQueryVariable('id');
}

//DISPLAY PAGE CONTENT FOR NEIGHBORHOOD.HTML
function displayNeighborhood(neighborhood){

  fetchCommentsFromLocal();

  var title = document.createElement('h1');
  title.textContent = neighborhood.name;
  $('#neighborhood-name').append(title);

  var mapImage = document.createElement('iframe');
  mapImage.src = neighborhood.map;
  $('#google-map').append(mapImage);

  var blurbContent = document.createElement('section');
  blurbContent.textContent = neighborhood.blurb;
  $('#info-box').append(blurbContent);

  currentNeighborhood = neighborhood.pageLink;

  var neighborhoodPhoto = "<img src='" + neighborhood.pic + "'>";
  $('#info-box').append(neighborhoodPhoto);

  var factsContent = document.createElement('ul');
  $('#info-box').append(factsContent);

  for (var i = 0; i < commentsArray.length; i++) {
    var userComment = document.createElement('p');
    var inputName = document.createElement('p');
    if (commentsArray[i].neighborhood === currentNeighborhood) {
      userComment.textContent = commentsArray[i].comment;
      inputName.textContent = commentsArray[i].username;
      $('#comments').append(inputName);
      $('#comments').append(userComment);
    }
  }

  for (var i = 0; i < neighborhood.factsList.length; i++){
    var facts = document.createElement('li');
    facts.textContent = neighborhood.factsList[i];
    factsContent.appendChild(facts);
  }
}

function displayPlaces() {
  var places = $('#places-list');
  var resultsHeader = document.createElement('h2');
  resultsHeader.textContent = 'List of Neighborhoods';
  places.append(resultsHeader);
  var formResultsOL = document.createElement('ul');
  places.append(formResultsOL);
  for (i = 0; i < neighborhoodArray.length; i++) {
    var formResultsLI = document.createElement('li');
    formResultsOL.appendChild(formResultsLI);
    var aTag = document.createElement('a');
    aTag.setAttribute('href', 'neighborhood.html?id=' + neighborhoodArray[i].pageLink);
    aTag.innerHTML = neighborhoodArray[i].name;
    formResultsLI.appendChild(aTag);
  };
}

//display page content for places.html - navigation backup page
var placesCheck = $('#places-list');
if (placesCheck) {
  displayPlaces();
}

//EVENT LISTENER FOR COMMENTS
$('#neighborhood-comment-form').on('submit', processComment);

function processComment(event){
  event.preventDefault();
  var userComment = document.createElement('p');
  userComment.setAttribute('class', currentNeighborhood);
  userComment.textContent = 'Comment: ' + event.target.comment.value;
  console.log(userComment);
  var inputName = document.createElement('p');
  inputName.setAttribute('class', currentNeighborhood);
  inputName.textContent = 'Name: ' + event.target.nameofuser.value;
  console.log(inputName);
  $('#comments').append(inputName);
  $('#comments').append(userComment);
  var commentObject = {
    neighborhood: currentNeighborhood,
    username: inputName.textContent,
    comment: userComment.textContent
  };
  commentsArray.push(commentObject);
  saveCommentsToLocal();
  commentForm.reset();
}

function saveCommentsToLocal(){
  localStorage.setItem('savedComments', JSON.stringify(commentsArray));
}

function fetchCommentsFromLocal(){
  var savedComments = JSON.parse(localStorage.getItem('savedComments'));
  if (savedComments){
    console.log('User has comments from last time.');
    commentsArray = savedComments; }
}

//EVENT LISTENER FOR FORM PAGE
$('#help-me-choose-form').on('submit', processUserAnswers);

//EVENT LISTENER FOR COMMENTS
var commentForm = $('#neighborhood-comment-form').on('submit', processComment);
