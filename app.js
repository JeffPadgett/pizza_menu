//Declare variables for the form
const pizzaSelection = document.querySelector('.pizza-selection');


//Listen for submit click button
document.getElementById('entire-form').addEventListener('submit',calculatePrice);

//Calculate Price
function calculatePrice(e){
    var total=0.0;
    var toppingMultiplyer = 1;
    //selects the actual pizza size from the radio buttons. 
    var pizzaSize = document.querySelector('input[name="optradio"]:checked').value;
    //a variable that holds an array and selects ALL the items checked
    var meatToppings = document.querySelectorAll('input[name="meatTopping"]:checked');
    // a veriable that holds an array of all the items checked in veggies
    var veggieToppings = document.querySelectorAll('input[name="veggieTopping"]:checked');
    //a If loop that will ensure that the price is correct. 
    if (meatToppings.length > 0) {
        total += meatToppings.length - 1;
    
    }

    //An if looop that will ensure the price is correct for the veggie side box. 
    if (veggieToppings.length > 0) {
        total += veggieToppings.length - 1;
    }



    //If statement is designed to keep the user from not selecting a pizza size
    if(pizzaSize.value == '') {
        alert('Please select a pizza size');
    }


    
//brought the recept variable that will hold value of the actual recept.
    var recieptToppings = "";

//Calls get recept
  getReciept();  


  e.preventDefault();
}
//A function that sets the empty input value to the value of the selected pizza size.
function getReciept(){
    document.getElementById("pizza-price").value = document.querySelector('input[name="optradio"]:checked').value;
}



