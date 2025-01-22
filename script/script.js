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




