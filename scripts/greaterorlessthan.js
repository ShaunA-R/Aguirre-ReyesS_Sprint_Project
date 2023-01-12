let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let submitbtn = document.getElementById('submitbtn');
let result = document.getElementById('result');


submitbtn.addEventListener('click', function(){
    if(parseInt(num1.value) && (parseInt(num2.value))){
        getData(num1, num2);
    }else{
        result.textContent="Enter in a whole number!";
    }
    
});

