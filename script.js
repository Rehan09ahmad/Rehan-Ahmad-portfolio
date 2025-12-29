// side bar 
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');

// open sidebar
menu.addEventListener("click", () => {
  sideBar.classList.add("open");
});

// close sidebar
closeIcon.addEventListener("click", () => {
  sideBar.classList.remove("open");
});



// -----------------------//
const form = document.getElementById('contactForm');
const thankYou = document.getElementById('thankYouMessage');

form.addEventListener('submit', function(event){
    event.preventDefault(); // page reload rokta hai

    const formData = new FormData(form);

    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
    })
    .then(response => {
        if(response.ok){
            thankYou.style.display = 'block'; // show thank you message
            form.reset(); // clear all form fields
        } else {
            alert('Oops! Something went wrong.');
        }
    })
    .catch(error => {
        alert('Oops! Error: ' + error);
    });
});
