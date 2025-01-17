const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
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


const pagebody = document.getElementsByTagName('body')[0];
const togglebtn = document.getElementById('theme');
const pageSection = document.getElementsByTagName('section')[0];
const textelement = document.querySelectorAll('.lightmode');
const headlogo = document.querySelector('.logo-darkmode');

togglebtn.addEventListener('click', (e) => {
    pagebody.classList.toggle('lightmode');
})


// turning bread and butter


// scroll CSS animation

