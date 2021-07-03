// Mobile nav

let toggleNav = document.getElementById('toggleNav');
let navOpen = document.querySelectorAll('.site-nav');

toggleNav.onclick = function () { 
    for(let x of navOpen) {
      x.classList.toggle('nav-open');
    };
  };

// Preloader

const preloader = document.querySelector('.preloader');

window.addEventListener('load', function(){
    preloader.style.opacity = '0';
});