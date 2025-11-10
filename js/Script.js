
const hamburger = document.querySelector('.hamburguer');
const nav = document.querySelector('.nav');

hamburger.addEventListener('click', () => nav.classList.toggle("active"));

window.addEventListener('scroll', function(){
    console.log("passei");
    const header = document.querySelector(".header");
    const bannerheight = this.document.querySelector(".banner").offsetHeight;

    if (window.scrollY > bannerheight) { 
        console.log("passei");

    header.classList.add('scrolled');
  } else {
    console.log("passei");
    header.classList.remove('scrolled');
  }
});
