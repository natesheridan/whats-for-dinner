var formElement = document.querySelector('#radios');
var letsCookButton = document.querySelector('#letsCookButton');
var radioValue = document.forms.dishchoice.elements.option.value;
var radioValueLC = "";

var results = document.querySelector('#results');


function updateRadioValue(){
    radioValue = document.forms.dishchoice.elements.option.value
    if (radioValue === "Main Dish" || radioValue === "Entire Meal"){
        var allWords = radioValue.split(" ");
        var firstWord = allWords[0]
        radioValue = firstWord
        radioValueLC = radioValue.toLowerCase();
    }
    else if (radioValue === "Side" || radioValue === "Dessert"){
        radioValueLC = radioValue.toLowerCase();
    }
    else if (radioValue === ""){
        radioValueLC = "";
    }
}

function pushRandomSide(){
    var randomSideIndex = getRandomIndex(sides);
    var randomSide = sides[randomSideIndex];
    results.innerHTML = `
    <span class = "make-text">You should make:</span>
    <img class = "results-img" src="${randomSide.img}">
    <span class = "results-text">${randomSide.name}</span>
    <a href="${randomSide.link}" class = "find-recipe-button"><img src="https://static.thenounproject.com/png/2434646-200.png">Find a Recipe</a>
    `
}

function pushRandomMain(){
    var randomMainIndex = getRandomIndex(mains);
    var randomMain = mains[randomMainIndex];
    results.innerHTML = `
    <span class = "make-text">You should make:</span>
    <img class = "results-img" src="${randomMain.img}">
    <span class = "results-text">${randomMain.name}</span>
    <a href="${randomMain.link}" class = "find-recipe-button"><img src="https://static.thenounproject.com/png/2434646-200.png">Find a Recipe</a>
    `
}

function pushRandomDessert(){
    var randomDessertIndex = getRandomIndex(desserts);
    var randomDessert = desserts[randomDessertIndex];
    results.innerHTML = `
    <span class = "make-text">You should make:</span>
    <img class = "results-img" src="${randomDessert.img}">
    <span class = "results-text">${randomDessert.name}</span>
    <a href="${randomDessert.link}" class = "find-recipe-button"><img src="https://static.thenounproject.com/png/2434646-200.png">Find a Recipe</a>
    
    `

}


function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }
  
  
  

letsCookButton.addEventListener('click', function(){
    updateRadioValue();
    if (radioValueLC === "side"){
        pushRandomSide()
    }
    else if (radioValueLC === "main"){
        pushRandomMain()
    }
    else if (radioValueLC === "dessert"){
        pushRandomDessert()
    }
})

formElement.addEventListener('click', updateRadioValue)