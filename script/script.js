const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
        entry.target.classList.add('show');
    } 
    else {
        entry.target.classList.remove('show');
    }
    });
});

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el));

const togglebtn = document.getElementById('theme');
const togglebtnmbl = document.querySelector('.togglebttn');


togglebtn.addEventListener('click', () => {
    const allElements = document.querySelectorAll('*');

    allElements.forEach((element) => {
        element.classList.toggle('lightmode');
    });

    const body = document.body;
    if (body.classList.contains('lightmode')) {
        localStorage.setItem('theme', 'lightmode');
    } else {
        localStorage.setItem('theme', 'darkmode');
    }
});

togglebtnmbl.addEventListener('click', () => {
    const allElements = document.querySelectorAll('*');

    allElements.forEach((element) => {
        element.classList.toggle('lightmode');
    });

    const body = document.body;
    if (body.classList.contains('lightmode')) {
        localStorage.setItem('theme', 'lightmode');
    } else {
        localStorage.setItem('theme', 'darkmode');
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const csszonesbttn = document.getElementById('zones');
    const grayscalebttn = document.getElementById('grayscale'); 
    const bodyElement = document.body; 

    csszonesbttn.addEventListener('click', () => {
        bodyElement.classList.toggle('zones');
    });

    grayscalebttn.addEventListener('click', () => {
        bodyElement.classList.toggle('grayscale');
    });
});

    


const emailInput = document.getElementById("email");
const invalidMsg = document.getElementById("invalid");
const successMsg = document.getElementById("success");
const form = document.querySelector(".email");

function validateEmail(emailValue) {
    let value = /\S+@\S+\.\S+/;
    return value.test(emailValue);
}

emailInput.addEventListener("invalid", function (e) {
    let inputValue = e.target;
    console.log(inputValue.validity);
    if (inputValue.validity.typeMismatch || inputValue.validity.valueMissing) {
      inputValue.setCustomValidity(" ");
      invalidMsg.classList.add("active");
      successMsg.classList.remove("active");
      this.classList.add("invalid");
    } else {
      invalidMsg.classList.remove("active");
      successMsg.classList.add("active");
      this.classList.remove("invalid");
    }
  });
  emailInput.addEventListener("input", function () {
    invalidMsg.classList.remove("active");
    this.classList.remove("invalid");
  });



emailInput.addEventListener("invalid", function (e) {
    let inputValue = e.target;
    if (inputValue.validity.typeMismatch || inputValue.validity.valueMissing) {
        inputValue.setCustomValidity(" ");
        invalidMsg.classList.add("invalid")
    }
} )



