'use strict'

//wybranie pól
const number1 = document.querySelectorAll('input')[0];
const number2 = document.querySelectorAll('input')[1];
const score = document.querySelector('#score');


console.log(number1, number2);

    // przycisk dodawania
    const plus = document.querySelector('#plus');
    
    function add_numbers() {
        score.innerHTML = parseFloat(number1.value) + parseFloat(number2.value);
    }
    plus.addEventListener('click', add_numbers);




// przycisk odejmowania
const minus = document.querySelector('#minus');
function odd_numbers() {
    score.innerHTML = parseFloat(number1.value) - parseFloat(number2.value);
}
minus.addEventListener('click', odd_numbers);

