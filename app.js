// Declare and devine UI variables
const form = document.querySelector('#entire-form');
const selectedPizza = document.querySelector('input[name="pizzachoice"]:checked');
const selectedCheese = document.querySelector('input[name="optcheese"]:checked');
const selectedSauce = document.querySelector('input[name="optsauce"]:checked');
const selectedCrust = document.querySelector('input[name="optcrust"]:checked');
const selectedMeats = document.querySelectorAll('input[name="meatTopping"]:checked');
const selectedVeggies = document.querySelectorAll('input[name="veggieTopping"]:checked');
const makePizzaBtn = document.querySelector('#make-pizza');
const cancenBtn = document.querySelector('.my-button');

//Runs all the event listeners
function loadEventListeners() {

    makePizzaBtn.addEventListener('submit', getPizzaSizeValue);


}




//Gets the price of pizza and stores it in a variable
function getPizzaSizeValue() {

    

    if (selectedPizza.value == "Personal"){
        
        pizzaCost = 6
    } else {
        alert('Please select a pizza')
    }


    console.log(pizzaCost);
}










