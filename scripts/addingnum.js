let userNum1 = document.getElementById("userNum1");
let userNum2 = document.getElementById("userNum2");
let enterbtn = document.getElementById("enterbtn");
let result = document.getElementById("result");


enterbtn.addEventListener('click', function(){
    if(parseInt(userNum1.value) && (parseInt(userNum2.value))){
                getData(userNum1.value, userNum2.value);
            }else{
                result.textContent= "Has to be a number!";
            }
            
        });


function getData(num1, num2){
    fetch(`https://magpantayjallforoneapi.azurewebsites.net/MiniChallenge/MiniCh2/${num1}/${num2}`)
    .then(response => response.text())
    .then(data => {
        result.textContent = data;
        console.log(data)
        
    })
}