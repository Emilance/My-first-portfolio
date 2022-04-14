//selector
var  hambuger = document.querySelector(".rbody >img");
var navBar   = document.querySelector(".nav-bar");
const  pContainer = [...document.querySelectorAll(".pbox")];
const  preBtn = [...document.querySelectorAll(".pre-btn")];
const nxtBtn =[...document.querySelectorAll(".nxt-btn")];
var   input =document.querySelectorAll(".form >  input");
var    textArea = document.querySelectorAll(".form > textarea");
var    formButton = document.querySelector(".rform > button");
var     formSuccess = document.querySelector('.formsuccess');
var     typingWord = document.querySelector(".home > h3");
var   nameInput = document.getElementById("name");
var   phoneInput = document.getElementById("phone");
var   emailInput = document.getElementById("email");
var   messageInput = document.getElementById("message");
var    form =document.querySelector(".rform");
var    errorElement = document.getElementById("error");

const    cFore = [...document.querySelectorAll(".cfore")];
const     cBack = [...document.querySelectorAll(".cback")];
const    cOk = document.querySelector(".ce");
const    viewCertification = document.querySelector(".certification")
const     checkCert = document.querySelector(".aboutme > button")

const     certContainer = [...document.querySelectorAll(".cert")]




//addevent listener
var i = 0 ;
text ="A  Website Developer, Digital Marketer, Email Marketer, Social Media marketer and marketing strategy";

function typing(){
    if(i<text.length){
        typingWord.innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 50)
    }
}

typing();

 checkCert.addEventListener('click', () => {
    viewCertification.style.display = "flex";
 })
 cOk.addEventListener("click", () => {
    viewCertification.style.display = "none";
 })
hambuger.addEventListener("click", function(){
   navBar.classList.toggle("toggle");
   this.classList.toggle("hambuggertoggle")
})


window.addEventListener('scroll', function(){
    navBar.classList.remove("toggle");
    hambuger.classList.remove("hambuggertoggle");
})


certContainer.forEach((item, i) => {
    let cContainer = item.getBoundingClientRect();
    let cCContainer = cContainer.width;

    cFore[i].addEventListener('click', () => {
        item.scrollLeft -= cCContainer;
    })

    cBack[i].addEventListener('click', () => {
        item.scrollLeft += cCContainer;
    })
})

pContainer.forEach((item, i) => {
    let  containerD = item.getBoundingClientRect();
    let  containerW = containerD.width;

    nxtBtn[i].addEventListener('click', ()=> {
        item.scrollLeft += containerW;
    })

    preBtn[i].addEventListener('click', ()=> {
        item.scrollLeft -= containerW;
    })
})


//form Validation

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    alertInfo = [];

   

    if (nameInput.value ==="" || nameInput.value === null){
        alertInfo.push("name is required")
    }

    if (!emailInput.value.includes("@") ){
        alertInfo.push("enter valid Email Address")
    }

    errorElement.innerHTML = alertInfo.join(", ");
      


} )


function isNumberKey(){
    var charCode=(evt.which) ? evt.which : evt.keyCode;
    if(charCode > 31 && (charCode < 48 || charCode > 57)){
       return false;}
       return true;
}
/*
formButton.addEventListener('click', function(){
    let inputvalue = input.value;
    let textvalue = textArea.value;
    
    formSuccess.style.display = "flex";
       }
)

formSuccess.addEventListener('click', function(){
    this.style.display = "none";
})
*/