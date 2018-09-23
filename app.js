// Declare and devine UI variables
console.log("loading js file")
const form = document.querySelector('#entire-form');
let selectedPizza = document.getElementsByClassName('pizza-choice');
let selectedCheese = document.querySelector('input[name="optcheese"]:checked');
let selectedSauce = document.querySelector('input[name="optsauce"]:checked');
let selectedCrust = document.querySelector('input[name="optcrust"]:checked');
let selectedMeats = document.querySelectorAll('input[name="meatTopping"]:checked');
let selectedVeggies = document.querySelectorAll('input[name="veggieTopping"]:checked');
const makePizzaBtn = document.getElementById('make-pizza');
const cancenBtn = document.querySelector('.my-button');
let selectedPizzaFinal;
let selectedCheeseFinal;
let selectedCrustFinal;
let selectedSauceFinal;


makePizzaBtn.onclick = function(){
    getSelectedPizza();
    getSelectedCheese();
    getSelectedCrust();
    getSelectedSauce();

}
function getSelectedPizza(){
    var selectedPizza = document.getElementsByClassName('pizza-choice');

    for (var i = 0, length = selectedPizza.length; i < length; i++)
    {
     if (selectedPizza[i].checked)
     {
         selectedPizzaFinal = selectedPizza[i].value;    
         
         
         break;
        }
    }
    
    var sizePrice;
    
    switch(selectedPizzaFinal){
        default: sizePrice = 1.00;
        break;
        
        case "Personal":
        sizePrice = 6.00;
        break;
        
        case "Medium":
        sizePrice = 10.00;
        break;
        
        case "Large":
        sizePrice = 14.00;
        break;
        
        case "Extra Large":
        sizePrice = 16.00;
        break;
    }
    
    document.getElementById('size-reciept').value = `${selectedPizzaFinal} price: $${sizePrice}`;
}

function getSelectedCheese(){

    var selectedCheese = document.getElementsByClassName('cheese-choice');

    for (var i = 0, length = selectedCheese.length; i < length; i++)
    {
        if (selectedCheese[i].checked)
        {
            document.getElementById('cheese-reciept').value = selectedCheese[i].value;

            selectedCheeseFinal = selectedCheese[i].value;

            break;
        }
    }

    var cheesePrice;
    
    switch(selectedCheeseFinal){
        default: cheesePrice = 1.00;
        break;
        
        case "Regular Cheese":
        cheesePrice = 0.00;
        break;
        
        case "No Cheese":
        cheesePrice = 0.00;   //may be an issue when it comes to creating the CreatePrice Function
        break;
        
        case "Extra Cheese":
        cheesePrice = 3.00;
        break;
        
    }
    
    document.getElementById('cheese-reciept').value = `${selectedCheeseFinal} price: $${cheesePrice}`;

}

function getSelectedCrust(){

    var selectedCrust = document.getElementsByClassName('crust-choice');

    for (var i = 0, length = selectedCrust.length; i < length; i++)
    {
        if (selectedCrust[i].checked)
        {
            document.getElementById('crust-reciept').value = selectedCrust[i].value;

            selectedCrustFinal = selectedCrust[i].value;

            break;
        }
    }

    var crustPrice;
    
    switch(selectedCrustFinal){
        default: crustPrice = 1.00;
        break;
        
        case "Plain Crust":
        crustPrice = 0.00 ;
        break;
        
        case "Garlic Butter Crust":
        crustPrice = 3.00;   
        break;
        
        case "Cheese Stuffed Crust":
        crustPrice = 3.00;
        break;

        case "Spicy Crust":
        crustPrice = 3.00;

        case "House Special Crust":
        crustPrice = 3.00;
        
    }

    document.getElementById('crust-reciept').value = `${selectedCrustFinal} price: $${crustPrice}`;


}

function getSelectedSauce(){

    var selectedSauce = document.getElementsByClassName('sauce-choice');

    for (var i = 0, length = selectedSauce.length; i < length; i++)
    {
        if (selectedSauce[i].checked)
        {
            document.getElementById('sauce-reciept').value = selectedSauce[i].value;

            selectedSauceFinal = selectedSauce[i].value;

            break;
        }
    }

    var crustPrice;
    
    switch(selectedCrustFinal){
        default: crustPrice = 1.00;
        break;
        
        case "Plain Crust":
        crustPrice = 0.00 ;
        break;
        
        case "Garlic Butter Crust":
        crustPrice = 3.00;   
        break;
        
        case "Cheese Stuffed Crust":
        crustPrice = 3.00;
        break;

        case "Spicy Crust":
        crustPrice = 3.00;

        case "House Special Crust":
        crustPrice = 3.00;
        
    }

    document.getElementById('crust-reciept').value = `${selectedCrustFinal} price: $${crustPrice}`;



}