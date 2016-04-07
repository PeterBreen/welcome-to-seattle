var userInputArray = [];
var questionArray = [];

function Question () {
  this.question = '';
  this.name = '';
}

var nightLifeQuestion = new Question ();
nightLifeQuestion.question = 'Is it important for you to have good nightlife in your neighborhood?';
nightLifeQuestion.name = 'nightLifeQuestion';
questionArray.push(nightLifeQuestion);

var transitQuestion = new Question ();
transitQuestion.question = 'Do you need public transit?';
transitQuestion.name = 'transitQuestion';
questionArray.push(transitQuestion);

var parksQuestion = new Question ();
parksQuestion.question = 'Do you need to be close to a park?';
parksQuestion.name = 'parksQuestion';
questionArray.push(parksQuestion);

var singleFamilyHousingQuestion = new Question ();
singleFamilyHousingQuestion.question = 'Is it important to have single family housing in your neighborhood?';
singleFamilyHousingQuestion.name = 'singleFamilyHousingQuestion';
questionArray.push(singleFamilyHousingQuestion);

var rentableAptQuestion = new Question ();
rentableAptQuestion.question = 'Do you want to be in a neighborhood with mostly apartments?';
rentableAptQuestion.name = 'rentableAptQuestion';
questionArray.push(rentableAptQuestion);

var walkabilityQuestion = new Question ();
walkabilityQuestion.question = 'Do you need to be able to walk to a main shopping district?';
walkabilityQuestion.name = 'walkabilityQuestion';
questionArray.push(walkabilityQuestion);

var urbanQuestion = new Question ();
urbanQuestion.question = 'Do you want to live in a more crowded urban environment?';
urbanQuestion.name = 'urbanQuestion';
questionArray.push(urbanQuestion);

var restaurantQuestion = new Question ();
restaurantQuestion.question = 'Is it important for you to have good restaurants in the neighborhood?';
restaurantQuestion.name = 'restaurantQuestion';
questionArray.push(restaurantQuestion);

var artsQuestion = new Question ();
artsQuestion.question = 'Do you enjoy having a lively arts scene in your neighborhood?';
artsQuestion.name = 'artsQuestion';
questionArray.push(artsQuestion);

var hipsterQuestion = new Question ();
hipsterQuestion.question = 'Do you like hipsters?';
hipsterQuestion.name = 'hipsterQuestion';
questionArray.push(hipsterQuestion);

for (var i = 0; i < questionArray.length; i++){
  var aquestion = document.createElement('label');
  aquestion.setAttribute('class', 'questionCSS');
  var space = document.createElement('br');
  var input1 = document.createElement('input');
  var yes = document.createElement('p');
  input1.type = 'radio';
  input1.value = 'true';
  input1.name = questionArray[i].name;
  input1.setAttribute('class', 'answerCSS');
  yes.textContent = 'YES';
  yes.setAttribute('class', 'answerCSS');
  var input2 = document.createElement('input');
  var no = document.createElement('p');
  input2.type = 'radio';
  input2.value = 'false';
  input2.name = questionArray[i].name;
  input2.setAttribute('class', 'answerCSS');
  no.textContent = 'NO';
  no.setAttribute('class', 'answerCSS');
  aquestion.textContent = questionArray[i].question;
  document.getElementById('question-space').appendChild(aquestion);
  document.getElementById('question-space').appendChild(yes);
  document.getElementById('question-space').appendChild(input1);
  document.getElementById('question-space').appendChild(no);
  document.getElementById('question-space').appendChild(input2);
  document.getElementById('question-space').appendChild(space);
}

function scoreAssignment(neighborhood){
  for (var i = 0; i < userInputArray.length; i++){
    if (destringify(userInputArray[i].value) === neighborhood.characteristics[i].value){
      neighborhood.score++;
    }
  }
}

function assignNeighborhoodScores(){
  for(var i = 0; i < neighborhoodArray.length; i++){
    scoreAssignment(neighborhoodArray[i]);
    console.log(neighborhoodArray[i]);
  }
}

function destringify(string){
  if(string === 'true'){
    string = true;
  }
  else if(string === 'false'){
    string = false;
  }
  return string;
}

function sortResults(){
  neighborhoodArray.sort(function (a, b) {
    if (a.score > b.score){
      return -1;
    }
    if (b.score > a.score){
      return 1;
    } return 0;
  });
}

function processUserAnswers(event){
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
