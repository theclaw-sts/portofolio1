const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');
const active = document.querySelector('.active');

burger.addEventListener('click', function() {
    navbar.classList.toggle('active');
    this.classList.toggle('active');
});

active.addEventListener('click', function() {
    navbar.classList.remove('active');
    burger.classList.remove('active');
});