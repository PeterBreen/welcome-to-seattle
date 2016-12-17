'use strict';

var neighborhoodArray = [];
var currentNeighborhood;
var commentsArray = [];

function Neighborhood (neighborhood) {
  for (let keys in neighborhood) {
    this[keys] = neighborhood[keys];
  }
  this.score = 0;
}

Neighborhood.instantiateHoods = function(dataObjects) {
  dataObjects.forEach(function(ele) {
    neighborhoodArray.push(new Neighborhood(ele));
  })
};

Neighborhood.getData = function() {
  if(localStorage.hoodData) {
    var lsData = JSON.parse(localStorage.getItem('hoodData'));
    Neighborhood.instantiateHoods(lsData);
  } else {
    $.getJSON('data/neighborhoodData.json')
    .done(function(data) {
      console.log(data);
      Neighborhood.instantiateHoods(data);
      localStorage.setItem('hoodData', JSON.stringify(data));
    })
  }
};

Neighborhood.getData();

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

    if( key === 'id' ){
      for (var i = 0; i < neighborhoodArray.length; i++){
        if (neighborhoodArray[i].pageLink === pair[1]){
          Neighborhood.renderAll(neighborhoodArray[i]);
          return;
        }
      }
    }
  }
}

var neighborhoodCheck = document.getElementById('neighborhood-name');
if (neighborhoodCheck) {
  getQueryVariable('id');
}


//create toHtml function to compile Handlebars template in neighborhood.HTML -MM
Neighborhood.prototype.toHtml = function() {
  var htmlTemp = Handlebars.compile($('#handlesbarsTemplate').html());
  $('#handlebars-neighborhood').append(htmlTemp(this));
}

//create renderAll function to append neighborhoodArray to template -MM
Neighborhood.renderAll = function(inputData) {
    Neighborhood.neighborhoodArray.forEach(function(neighborhoodArray) {
      $('#handlebars-neighborhood').append(neighborhoodArray.toHtml());
    })
  }
  fetchCommentsFromLocal();


Neighborhood.fetchAll = function() {
    if (localStorage.neighborhoodData) {
      var neighborhoodData = JSON.parse(localStorage.getItem('neighborhoodData'));
      Neighborhood.loadAll(neighborhoodData);
      Neighborhood.renderAll(neighborhoodData);
    } else {
      $.getJSON('data/neighborhoodData.json', function(data) {
        localStorage.setItem('neighborhoodData', JSON.stringify(data));
        var neighborhoodData = JSON.parse(localStorage.getItem('neighborhoodData'));
        Portfolio.loadAll(neighborhoodData);
        Portfolio.renderAll(neighborhoodData);
      });
    }
  };

  Neighborhood.fetchAll();

function displayPlaces() {
  var places = document.getElementById('places-list');
  var resultsHeader = document.createElement('h2');
  resultsHeader.textContent = 'List of Neighborhoods';
  places.appendChild(resultsHeader);
  var formResultsOL = document.createElement('ul');
  places.appendChild(formResultsOL);
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
var placesCheck = document.getElementById('places-list');
if (placesCheck) {
  displayPlaces();
}

//EVENT LISTENER FOR COMMENTS
var commentForm = document.getElementById('neighborhood-comment-form');
commentForm.addEventListener('submit', processComment);

function processComment(event){
  event.preventDefault();
  var userComment = document.createElement('p');
  userComment.setAttribute('class', currentNeighborhood);
  userComment.textContent = 'Comment: ' + event.target.comment.value;

  var inputName = document.createElement('p');
  inputName.setAttribute('class', currentNeighborhood);
  inputName.textContent = 'Name: ' + event.target.nameofuser.value;

  document.getElementById('comments').appendChild(inputName);
  document.getElementById('comments').appendChild(userComment);
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

    commentsArray = savedComments; }
}

//EVENT LISTENER FOR FORM PAGE
var getUserAnswers = document.getElementById('help-me-choose-form');
getUserAnswers.addEventListener('submit', processUserAnswers);

//EVENT LISTENER FOR COMMENTS
var commentForm = document.getElementById('neighborhood-comment-form');
commentForm.addEventListener('submit', processComment);
