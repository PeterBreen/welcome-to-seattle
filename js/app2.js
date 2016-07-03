var userInputArray = [];
var ques = [];

function Question(questionObj) {
  this.question = questionObj.question;
  this.name = questionObj.name;
}

var questionObj = [{
  question: 'Is it important for you to have good nightlife in your neighborhood?',
  name: 'nightLifeQuestion'
}, {
  question: 'Do you need public transit?',
  name: 'transitQuestion'
}, {
  question: 'Do you need to be close to a park?',
  name: 'parksQuestion'
}, {
  question: 'Is it important to have single family housing in your neighborhood?',
  name: 'singleFamilyHousingQuestion'
}, {
  question: 'Do you want to be in a neighborhood with mostly apartments?',
  name: 'rentableAptQuestion'
}, {
  question: 'Do you need to be able to walk to a main shopping district?',
  name: 'walkabilityQuestion'
}, {
  question: 'Do you want to live in a more crowded urban environment?',
  name: 'urbanQuestion'
}, {
  question: 'Is it important for you to have good restaurants in the neighborhood?',
  name: 'restaurantQuestion'
}, {
  question: 'Do you enjoy having a lively arts scene in your neighborhood?',
  name: 'artsQuestion'
}, {
  question: 'Do you like hipsters?',
  name: 'hipsterQuestion'
}]

questionObj.toHtml = function(ques) {
  var source = $('#question-template').html();
  var template = Handlebars.compile(source);
  var store = template(ques);
  return store;
}

questionObj.forEach(function(el) {
  ques.push(new Question(el));
})

ques.forEach(function(el) {
  $('#question-space').append(questionObj.toHtml(el));
})

function scoreAssignment(neighborhood) {
  for (var i = 0; i < userInputArray.length; i++) {
    if (destringify(userInputArray[i].value) === neighborhood.characteristics[i].value) {
      neighborhood.score++;
    }
  }
}

function removeForm() {
  document.getElementById('form-selection').style.display = 'none';
}

function assignNeighborhoodScores() {
  for (var i = 0; i < neighborhoodArray.length; i++) {
    scoreAssignment(neighborhoodArray[i]);
    console.log(neighborhoodArray[i]);
  }
}

function destringify(string) {
  if (string === 'true') {
    string = true;
  } else if (string === 'false') {
    string = false;
  }
  return string;
}

function sortResults() {
  neighborhoodArray.sort(function(a, b) {
    if (a.score > b.score) {
      return -1;
    }
    if (b.score > a.score) {
      return 1;
    }
    return 0;
  });
}

function processUserAnswers(event) {
  event.preventDefault();
  console.log(event.target);

  for (var i = 0; i < questionArray.length; i++) {
    var questionName = questionArray[i].name;
    var userAnswer = event.target[questionName].value;
    console.log(userAnswer);
    createUserArray(questionName, userAnswer);
  }
  assignNeighborhoodScores();
  sortResults();
  removeForm();
  appendResultList();
}
//CREATE RANKED LIST AFTER FORM RESULTS
function appendResultList() {
  var formResults = document.getElementById('form-results');
  var resultsHeader = document.createElement('h2');
  resultsHeader.textContent = 'Here are the neighborhoods that meet your needs in order from best to worst:';
  formResults.appendChild(resultsHeader);
  var formResultsOL = document.createElement('ol');
  formResults.appendChild(formResultsOL);
  for (i = 0; i < neighborhoodArray.length; i++) {
    var formResultsLI = document.createElement('li');
    formResultsOL.appendChild(formResultsLI);
    var aTag = document.createElement('a');
    aTag.setAttribute('href', 'neighborhood.html?id=' + neighborhoodArray[i].pageLink);
    aTag.innerHTML = neighborhoodArray[i].name;
    formResultsLI.appendChild(aTag);
  }
}

//EVENT LISTENER FOR FORM PAGE
var getUserAnswers = document.getElementById('help-me-choose-form');
getUserAnswers.addEventListener('submit', processUserAnswers);

questionObj.toHtml(questionObj);
