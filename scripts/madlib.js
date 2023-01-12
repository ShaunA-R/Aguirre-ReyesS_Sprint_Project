let adjective = document.getElementById('adjective'); 
let animal = document.getElementById('animal');
let action1 = document.getElementById('action1');
let verb = document.getElementById('verb');
let food = document.getElementById('food');
let color = document.getElementById('color');
let verb2 = document.getElementById('verb2');
let item = document.getElementById('item');
let number = document.getElementById('number');
let animal1 = document.getElementById('nanimal');
let feeling = document.getElementById('feeling')
let submitbtn = document.getElementById('submitbtn');
let result = document.getElementById('result');

submitbtn.addEventListener('click',function(){

    let miniCh5Model = {
        adjective: adjective.value,
        animal: animal.value,
        action1: action1.value,
        verb: verb.value,
        food: food.value,
        color: color.value,
        item: item.value,
        number: number.value,
        animal1: animal1.value,
        feeling: feeling.value
    };
    modelMethod(miniCh5Model);
});

