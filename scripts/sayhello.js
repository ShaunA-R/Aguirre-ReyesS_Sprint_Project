let nameInput = document.getElementById("nameInput");

let helloReturn = document.getElementById("helloReturn");

let helloSubBtn = document.getElementById("helloSubBtn");

let savedInput ="";
let sayHelloUrl = "";


helloSubBtn.addEventListener('click', function(){
    helloApi(nameInput)
});

function urlCall(url){
    fetch(url).then(
    response => response.text()
    ).then(
        data => 
        {
            helloReturn.textContent = data
            console.log(data)
        }
    )
}

