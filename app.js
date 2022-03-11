
//SLIDESHOW//

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

///NAVBAR_MOBILE
const navbarMobile = document.querySelector(".nav__mobile")
const toggleBar = document.querySelector(".toggle")
const xIcon = document.querySelector(".fa-xmark")
const menuIcon = document.querySelector(".fa-bars")
const buttonSearch = document.querySelector("#button")
const input = document.getElementById('input')




toggleBar.addEventListener("click", toggle)
function toggle() {
  if (navbarMobile.classList.contains("show__menu")) {
    navbarMobile.classList.remove("show__menu");
    xIcon.style.display = "none";
    menuIcon.style.display = "block";

  } else {
    navbarMobile.classList.add("show__menu");
    xIcon.style.display = "block";
    menuIcon.style.display = "none";

  }
}

buttonSearch.addEventListener('click', function (e) {
  e.preventDefault()
  if (input.classList.contains("close__input")) {
    input.classList.remove("close__input");
    input.classList.add("show__input");
      
    
  } else {
    input.classList.remove("show__input");
    input.classList.add("close__input");
   
  }
})

//INCREMENTS NUMBER
const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
  counter.innerText = '0'

  const updateCounter = () => {
    const target = +counter.getAttribute('data-target')
    const c = +counter.innerText

    const increment = target / 100

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`
      setTimeout(updateCounter, 50)
    } else {
      counter.innerText = target
    }
  }
  console.log(counter)
  updateCounter()
})
