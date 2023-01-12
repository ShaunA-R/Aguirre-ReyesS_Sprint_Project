let numOne = document.getElementById('numOne');
let newWord = document.getElementById('newWord');
let submitbtn1 = document.getElementById('submitbtn1');
let submitbtn2 = document.getElementById('submitbtn2');
let result = document.getElementById('result');
let result2 = document.getElementById('result2');

submitbtn.addEventListener('click',function(){
    if(parseInt(numOne.value)){
        getData();
    }else{
        result.textContent="Enter in a whole number!";
    }
    
});


submitbtn2.addEventListener('click',function(e){
            getData1();
});


