
function possibleIngredientList() {
    return [ingredientFirstLetter, ingredientLastLetter, ingredientNumbers, ingredientLetter];
}

function generatePassword() {
    clearRecipe();
    unusedIngredients = possibleIngredientList();
    for(i = 1; i < 4; i++) {
        addToRecipe(makeIntoSentence(generateIngredient(), i))
    }

}

function ingredientFirstLetter() {
    if(randomIntFromInterval(1, 2) == 1) {
        return "the <span class='high'>first letter</span> of the site's name"
    } else {
        return "the <span class='high'>first two letters</span> of the site's name"
    }
}

function ingredientLastLetter() {
    if(randomIntFromInterval(1, 2)  == 1) {
        return "the <span class='high'>last letter</span> of the site's name"
    } else {
        return "the <span class='high'>last two letters</span> of the site's name"
    }
}

function ingredientNumbers() {
    return "the number <span class='high'>" + randomIntFromInterval(10, 99) + "</span>"
}

function ingredientLetter() {
    var possible = "ABCDEFGHJKLMNOPQRSTUVWXYZ";
    return "the letter <span class='high'>" + possible.charAt(Math.floor(Math.random() * possible.length)) + "</span>"
}

function generateIngredient() {
    var indexChosen = Math.floor(Math.random()*unusedIngredients.length);
    var ingredient = unusedIngredients[indexChosen];
    unusedIngredients.splice(indexChosen, 1);

    return ingredient();
}

function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

function makeIntoSentence(text, number) {
    if(number == 1) {
        return "1. Start with " + text
    } else {
        return number + ". Add " + text
    }
}

function addToRecipe(text) {
    $("#password-area").append("<div class='panel panel-default'> <div class='panel-body panel-ingredient'>" + text + "</div> </div>")
}

function clearRecipe() {
    $("#password-area").html("");
}

$(function() {
    generatePassword()
});