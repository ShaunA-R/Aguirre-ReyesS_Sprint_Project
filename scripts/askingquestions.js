let response1 = document.getElementById('response1'),
    name1 = document.getElementById('name1'),
    time1 = document.getElementById('time1');


let output;


name1.addEventListener('click', function(e){
    if (e.key === 'Enter' && name1.value != "" && time1.value != "") 
    {
        getDataURL();
        setTimeout(()=>{
            response1.textContent = output;
        },300)
    }
    else
    {
        response1.textContent = "NAME AND TIME";
    }
});
time1.addEventListener('click', function(e){
    if (e.key === 'Enter' && name1.value != "" && time1.value != "") 
    {
        getDataURL();
        setTimeout(()=>{
            response1.textContent = output;
        },300)
    }
    else
    {
        response1.textContent = "NAME AND TIME";
    }
});