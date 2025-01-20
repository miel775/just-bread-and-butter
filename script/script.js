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
const pagep = document.querySelectorAll('p');
const togglebtn = document.getElementById('theme');

// Add click event listener for the toggle button
togglebtn.addEventListener('click', (e) => {
    // Toggle the lightmode class on the body
    pagebody.classList.toggle('lightmode');

    // Toggle lightmode class on all paragraphs
    pagep.forEach((p) => {
        p.classList.toggle('lightmode');
    });

    // Optionally, save the current mode in localStorage
    if (pagebody.classList.contains('lightmode')) {
        localStorage.setItem('theme', 'lightmode');
    } else {
        localStorage.setItem('theme', 'darkmode');
    }
});

// turning bread and butter


// scroll CSS animation

