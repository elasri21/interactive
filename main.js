// get the form element
const form = document.forms[0];
const formContainer = document.querySelector(".form");
const completed = document.querySelector(".completed");
const backHome = document.querySelector(".completed button");
const fields = Array.from(document.querySelectorAll(".required"));

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const cardNumber = form.elements.cardnumber;
    const month = form.elements.month;
    const year = form.elements.year;
    const cvc = form.elements.cvc;
    if(isNaN(cardNumber.value) || cardNumber.value == "") {
        e.preventDefault();
        cardNumber.nextElementSibling.style.display = "block";
    } else {
        cardNumber.nextElementSibling.style.display = "none";
    }
    if(month.value == "") {
        e.preventDefault();
        month.nextElementSibling.style.display = "block";
    } else {
        month.nextElementSibling.style.display = "non";
    }
    if(year.value == "") {
        e.preventDefault();
        year.nextElementSibling.style.display = "block";
    } else {
        year.nextElementSibling.style.display = "none";
    }
    if(cvc.value == "") {
        e.preventDefault();
        cvc.nextElementSibling.style.display = "block";
    } else {
        cvc.nextElementSibling.style.display = "none";
        formContainer.style.display = "none";
        completed.style.display = "block";
    }
    

});

backHome.addEventListener("click", function(){
    window.location.reload();
});
// remove error message


for(let field of fields) {
    field.addEventListener("blur", function(){
        if(field.value == "") {
            this.nextElementSibling.textContent = "Can't be empty";
        } else if(isNaN(field.value)) {
            this.nextElementSibling.textContent = "Wrong format, numbers only";
        } else {
            this.nextElementSibling.textContent = "";
        }
        // if(this.nextElementSibling.style.display) {
        //     this.nextElementSibling.style.display = "none";
        // }
    });
}



// for now it doesn't work/
/*
function checkFields(arr) {
    let bool = false;
    for(let field of arr) {
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
    return true;

}
*/

