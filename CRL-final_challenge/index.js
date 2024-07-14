const toggleBtn = document.querySelector('.nav-toggle-btn');
const state = toggleBtn.querySelector('.toggle-container').classList;
const nav_state = document.querySelector(".nav").classList;

toggleBtn.addEventListener('click', ()=>{
    state.toggle('toggle-container--open');
    nav_state.toggle('nav--visible');
});


