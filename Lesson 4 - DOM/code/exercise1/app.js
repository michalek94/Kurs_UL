window.addEventListener('DOMContentLoaded', function () {
    //When the page structure is loaded...
    var submitButton = document.getElementById("submit");
    var oddNumber = document.getElementById("oddnumber");
    var evenNumber = document.getElementById("evennumber");    
    
    submitButton.addEventListener("click", function () {
        validate(oddNumber, 1);
        validate(evenNumber, 0);    
    }, false);
});

function validate (editText, mod) {
    var value = +editText.value;  
    
    if(value%2 == mod){
        editText.classList.remove("invalid");
        editText.classList.add("valid");
    }else{
        editText.classList.remove("valid");
        editText.classList.add("invalid");
    }  
};
