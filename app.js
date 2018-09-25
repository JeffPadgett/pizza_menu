// Declare and devine UI variables
const form = document.querySelector('#entire-form');
// let selectedPizza = document.getElementsByClassName('pizza-choice');
// let selectedCheese = document.querySelector('input[name="optcheese"]:checked');
// let selectedSauce = document.querySelector('input[name="optsinputauce"]:checked');
// let selectedCrust = document.querySelector('input[name="optcrust"]:checked');
// let selectedMeats = document.querySelectorAll('input[name="meatTopping"]:checked');
// let selectedVeggies = document.querySelectorAll('input[name="veggieTopping"]:checked');
const makePizzaBtn = document.getElementById('make-pizza');
const cancelBtn = document.getElementById('clear-button');
let selectedPizzaFinal;
let selectedCheeseFinal;
let selectedCrustFinal;
let selectedSauceFinal;
var sizePrice;
var cheesePrice;
var crustPrice;
var fullPrice;
var selectedVeggieFinal;
var selectedMeatFinal;
var selectedVeggieFinal;
var toppingsFinal = '';




makePizzaBtn.onclick = function(){
    getSelectedPizza();
    getSelectedCheese();
    getSelectedCrust();
    getSelectedSauce();
    getSelectedMeat();
    getSelectedVeggies();
    document.getElementById('toppings-price').value = `${toppingsFinal}`;
    getFullPrice();

}
cancelBtn.onclick = function()
{
    clearInput();
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
    
    
    switch(selectedPizzaFinal){
        
        
        
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
        console.log(sizePrice);
    }
    
    document.getElementById('size-reciept').value = `${selectedPizzaFinal} price: - $${sizePrice}`;

   
}

function getSelectedCheese(){

    var selectedCheese = document.getElementsByClassName('cheese-choice');

    for (var i = 0, length = selectedCheese.length; i < length; i++)
    {
    
            if (selectedCheese[i].checked) 
            {
             selectedCheeseFinal = selectedCheese[i].value;    
            
             break;
            }
    }

    
    switch(selectedCheeseFinal){
        
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
    
    document.getElementById('cheese-reciept').value = `${selectedCheeseFinal} price: - $${cheesePrice}`;

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


    
    switch(selectedCrustFinal){
        
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

    document.getElementById('crust-reciept').value = `${selectedCrustFinal} price: - $${crustPrice}`;


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

    var saucePrice;
    
    switch(selectedSauceFinal){
        
        case "Marinara Sauce":
        saucePrice = 0.00 ;
        break;
        
        case "White Sauce":
        saucePrice = 0.00;   
        break;
        
        case "Barbeque Sauce":
        saucePrice = 0.00;
        break;

        case "No Sauce":
        saucePrice = 0.00;


        
        
    }

    document.getElementById('sauce-reciept').value = `${selectedSauceFinal} price: - $${saucePrice}`;

    return saucePrice;


}

function getSelectedMeat()
{
    var selectedMeat = document.getElementsByClassName('meat-choice');

    var selectedMeatFinal = '';
    
    for (i = 0; i < 6; i++) {
        
        if (selectedMeat[i].checked === true ) {
            selectedMeatFinal += selectedMeat[i].value + " - ";
            
        }
    }
    toppingsFinal += selectedMeatFinal;
    
    
    
    
}

function getSelectedVeggies()
{
    var selectedVeggie = document.getElementsByClassName('veggie-choice');
    console.log(selectedVeggie);
    
    var selectedVeggieFinal = '';
    
    for (i = 0; i < 8; i++) {
        
        if (selectedVeggie[i].checked === true ) {
            selectedVeggieFinal += selectedVeggie[i].value + " - ";
            
        }
    }
    
    toppingsFinal += selectedVeggieFinal;
    
    
}

function getFullPrice() //Not finished
{
    fullPrice = sizePrice + cheesePrice + crustPrice;
    
    document.getElementById('total-price').value = `$${fullPrice}`;
}

function clearInput(){
    // var clear = document.querySelectorAll("input[type='text']")

    // for (i =0; i < clear.length; i++ )
    // {
    //     clear[i].value = '';

    // }

    //Better way
    document.querySelectorAll("input[type='text']").forEach(function(el){
        el.value=''
    });



}



