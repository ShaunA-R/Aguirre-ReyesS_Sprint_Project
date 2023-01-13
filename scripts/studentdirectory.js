let namebtn =  document.getElementById('namebtn');
let lastbtn = document.getElementById('lastbtn');

let slackbtn = document.getElementById('slackbtn');

let emailbtn = document.getElementById('emailbtn');
;

let result = document.getElementById('result');

let nameInput = document.getElementById('nameInput');

namebtn.addEventListener('click', function(){
    let StudentListModel = {
        firstName: nameInput.value
    };
    newMethod(directory8firstNameURL, StudentListModel);
});


lastbtn.addEventListener('click',function(){
    let StudentListModel = {
        lastName: nameInput.value
    }
    newMethod(directory8lastNameURL, StudentListModel);
});
emailbtn.addEventListener('click',function(){
    let StudentListModel ={
        email: nameInput.value
    };
    newMethod(directory8emailURL, StudentListModel);
});


slackbtn.addEventListener('click',function(){
    let StudentListModel ={
        slackName: nameInput.value
    }
    newMethod(directory8slackNameURL, StudentListModel);
});




