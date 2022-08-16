// get the form element
const numberOfCard = document.querySelector(".card-num p");
const nameOfCard = document.querySelector(".name p");
const dateOfCard = document.querySelector(".date p");
const cvcOfCard = document.querySelector(".zeros p");
const form = document.forms[0];
const formContainer = document.querySelector(".form");
const completed = document.querySelector(".completed");
const backHome = document.querySelector(".completed button");
const fields = Array.from(document.querySelectorAll(".required"));

form.addEventListener("submit", function(e) {
    const cardName = form.elements.cardholder;
    const cardNumber = form.elements.cardnumber;
    const month = form.elements.month;
    const year = form.elements.year;
    const cvc = form.elements.cvc;
    if(cardNumber.value.length != 16) {
        e.preventDefault();
        cardNumber.nextElementSibling.textContent = "Check length!";

    } else if(month.value.toString().length != 2) {
        cardNumber.nextElementSibling.textContent = "";
        e.preventDefault();
        month.nextElementSibling.textContent = "Check length!";
    } else if(year.value.toString().length != 2) {
        month.nextElementSibling.textContent = "";
        e.preventDefault();
        year.nextElementSibling.textContent = "Check length!";
    } else if(cvc.value.toString().length != 3) {
        year.nextElementSibling.textContent = "";
        e.preventDefault();
        cvc.nextElementSibling.textContent = "Check length!";
    } else {
        cvc.nextElementSibling.textContent = "";
        formContainer.style.display = "none";
        completed.style.display = "block";
        nameOfCard.textContent = cardName.value;
        numberOfCard.textContent = cardNumber.value;
        dateOfCard.textContent = month.value + "/" + year.value;
        cvcOfCard.textContent = cvc.value;
        console.log(cardName.value.length, cardNumber.value.length, month.value.length + "/" + year.value.length, cvc.value.length);
    }
    e.preventDefault();
    
    

});

backHome.addEventListener("click", function(){
    window.location.reload();
});
// remove error message


for(let field of fields) {
    field.addEventListener("change", function(){
        if(field.value == "") {
            this.nextElementSibling.textContent = "Can't be empty";
        } else if(isNaN(field.value)) {
            this.nextElementSibling.textContent = "Wrong format, numbers only";
        } else {
            this.nextElementSibling.textContent = "";
        }
    });
}




