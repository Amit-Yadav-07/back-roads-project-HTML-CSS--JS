// toggle menu

let linkContainer = document.querySelector('.link-container');
let toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.addEventListener('click', () => {

    linkContainer.classList.toggle('active');
    toggleBtn.firstElementChild.classList.toggle('fa-xmark')


})


//  footer date js

let dateElement = document.querySelector('.year');

let currentDate = new Date().getFullYear();
dateElement.innerHTML = currentDate;
