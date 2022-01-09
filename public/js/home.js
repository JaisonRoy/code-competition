var email =document.getElementById("usermail");
var err = document.getElementById("error");

function validate(){

    var regexMail= /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{1,3})([.a-zA-Z]{2,10})$/

if(regexMail.test(email.value)){
    err.innerHTML="valid";
    err.style.color="green"; 

}
else{
    err.innerHTML="enter valid email";
    err.style.color="red";
}





}