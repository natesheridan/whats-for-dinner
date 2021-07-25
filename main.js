var formElement = document.querySelector('#radios');
var letsCookButton = document.querySelector('#letsCookButton');
var radioValue = document.forms.dishchoice.elements.option.value;
var radioValueLC = "";

var results = document.querySelector('#results');
var resultsIMG = document.querySelector('#resultsIMG')


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
        radioValueLC = "empty";
    }
}


function pushLoadingSrcn(){
    resultsIMG.src = "http://thememyxbox.net/images/loading.gif";
    results.classList.add('hidden');
    resultsIMG.classList.remove('hidden');
    resultsIMG.classList.add('visible')
    setTimeout(function(){
            results.classList.remove('hidden');
            results.classList.add('visible');
            resultsIMG.classList.add('hidden')
            resultIMG.classList.remove('visible')
    }, 1500);
}


function pushRandomSide(){
    pushLoadingSrcn();
    var randomSideIndex = getRandomIndex(sides);
    var randomSide = sides[randomSideIndex];
    console.log(randomSide)
    results.innerHTML = `
    <span class = "make-text">You should make:</span>
    <img class = "results-img" alt="${randomSide.name}"src="${randomSide.img}">
    <span class = "results-text">${randomSide.name}</span>
    <a href="${randomSide.link}" class = "find-recipe-button"><img src="https://static.thenounproject.com/png/2434646-200.png">Find a Recipe</a>
    `
}
// LINK NOT BEING PUSHED
function pushRandomMain(){
    pushLoadingSrcn();
    var randomMainIndex = getRandomIndex(mains);
    var randomMain = mains[randomMainIndex];
    results.innerHTML = `
    <span class = "make-text">You should make:</span>
    <img class = "results-img" alt="${randomMain.name}"src="${randomMain.img}">
    <span class = "results-text">${randomMain.name}</span>
    <a href="${randomMain.link}" class = "find-recipe-button"><img src="https://static.thenounproject.com/png/2434646-200.png">Find a Recipe</a>
    `
}

function pushRandomDessert(){
    pushLoadingSrcn();
    var randomDessertIndex = getRandomIndex(desserts);
    var randomDessert = desserts[randomDessertIndex];
    results.innerHTML = `
    <span class = "make-text">You should make:</span>
    <img class = "results-img" alt="${randomDessert.name}"src="${randomDessert.img}">
    <span class = "results-text">${randomDessert.name}</span>
    <a href="${randomDessert.link}" class = "find-recipe-button"><img src="https://static.thenounproject.com/png/2434646-200.png">Find a Recipe</a>
    
    `
}

function pushRandomMeal(){
    pushLoadingSrcn();
    var randomSideIndex = getRandomIndex(sides);
    var randomSide = sides[randomSideIndex];
    var randomMainIndex = getRandomIndex(mains);
    var randomMain = mains[randomMainIndex];
    var randomDessertIndex = getRandomIndex(desserts);
    var randomDessert = desserts[randomDessertIndex];
    results.innerHTML = `
    <span class = "meal-title">A good meal for you:</span>
    <div class = "entire-meal-flex">
        <div class ="meal-item">
        <img class = "meal-img" alt="${randomSide.name}" src="${randomSide.img}">
        <span class = "meal-text">${randomSide.name}</span>
        <a href="${randomSide.link}"><img class = "meal-recipe-btn" src="https://static.thenounproject.com/png/2434646-200.png"></a>
      </div>
        <div class ="meal-item">
        <img class = "meal-img" alt="${randomMain.name}" src="${randomMain.img}">
        <span class = "meal-text">${randomMain.name}</span>
        <a href="${randomMain.link}"><img class = "meal-recipe-btn" src="https://static.thenounproject.com/png/2434646-200.png"></a>
      </div>
        <div class ="meal-item">
          <img class = "meal-img" alt="${randomDessert.name}" src="${randomDessert.img}">
          <span class = "meal-text">${randomDessert.name}</span>
          <a href="${randomDessert.link}"><img class = "meal-recipe-btn" src="https://static.thenounproject.com/png/2434646-200.png"></a>
        </div>
    </div>`
}

function pushErrorBalloon(){
    resultsIMG.src = "http://thememyxbox.net/images/loading.gif";
    results.classList.add('hidden');
    resultsIMG.classList.remove('hidden');
    setTimeout(function(){
            results.classList.remove('hidden');
            resultsIMG.classList.add('hidden')
    }, 700);

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
    else if (radioValueLC === "entire"){
        pushRandomMeal() 
    }
    else if (radioValueLC === "empty")
        pushErrorBalloon()
})


formElement.addEventListener('click', updateRadioValue)