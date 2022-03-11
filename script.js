const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

// REMOVING MENU ON LINK CLICKS

const navLink = document.querySelectorAll('.nav_link')

function linkAction() {
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction));

// CHANGE BACKGROUND HEADER COLOR ON SCROLL

function scrollHeader(){
    const header = document.getElementById('header');
    if(this.scrollY >= 30){
        header.classList.add('scroll-header')
    }else{
        header.classList.remove('scroll-header')

    }
}
window.addEventListener('scroll', scrollHeader)


let testimonialSwiper = new Swiper(".testimonial-swiper", {
    spaceBetween: 30,
    loop: 'true',
    
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
})

let newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 24,
    loop: 'true',

    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        }
    }
})


// SROLL SCTION ACTIVE LINK

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


// SCROLL UP
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up')
    if(this.scrollY >= 400){
        scrollUp.classList.add('show-scroll')
    }else{
        scrollUp.classList.remove('show-scroll')
    }
}
window.addEventListener('scroll', scrollUp)








// const data = null;

// const xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

// xhr.addEventListener("readystatechange", function () {
//     if (this.readyState === this.DONE) {
//         console.log(this.responseText);
//     }
// });

// xhr.open("GET", "https://football-web-pages1.p.rapidapi.com/appearances.json?comp=1&team=1");
// xhr.setRequestHeader("x-rapidapi-host", "football-web-pages1.p.rapidapi.com");
// xhr.setRequestHeader("x-rapidapi-key", "b6c81705b2msh6dba127d0f600f5p18c3f6jsn68cd5abde8d2");

// xhr.send(data);

const cart = document.getElementById('cart'),
    cartShop = document.getElementById('cart-shop'),
    cartClose = document.getElementById('cart-close')

if (cartShop) {
    cartShop.addEventListener('click', () => {
        cart.classList.add('show-cart')
    })
}

if (cartClose) {
    cartClose.addEventListener('click', () => {
        cart.classList.remove('show-cart')
    })
}


// DARK THEME TOGGLER

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme';
const iconTheme = 'bx-sun';

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'; 
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'


if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}


themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})