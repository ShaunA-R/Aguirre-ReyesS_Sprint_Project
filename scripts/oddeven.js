let num = document.getElementById('num');
let submitbtn = document.getElementById('submitbtn');
let result = document.getElementById('result');

submitbtn.addEventListener('click', function(){
    if(parseInt(num.value)){
        getData();
    }else{
        result.textContent ="Enter in a whole number!";
    }
    
});


