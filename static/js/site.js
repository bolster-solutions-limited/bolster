// Mobile nav

let toggleNav = document.getElementById('toggleNav');
let navOpen = document.querySelectorAll('.site-nav');

toggleNav.onclick = () => { 
  for(let x of navOpen) {
    x.classList.toggle('nav-open');
  };
};

// Preloader

const preloader = document.querySelector('.preloader');

window.addEventListener('load', () => {
  preloader.style.opacity = '0';
});

window.addEventListener('load', () => {
  var $recaptcha = document.querySelector('#g-recaptcha-response');

  if($recaptcha) {
      $recaptcha.setAttribute('required', 'required');
  }
});
