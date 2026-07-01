window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');

    if(window.scrollY > 50) {
        navbar.classList.add('shrink');
        navbar.classList.remove('full')
    }else{
        navbar.classList.add('full');
        navbar.classList.remove('shrink')
    }
});


// Efecto de typing y delete
const positions = ["Desarrollador Web", "Software Developer"];
let count = 0;
let index = 0;
let currentText = '';
let isDeleting = false;

function type() {
  const typedTextSpan = document.getElementById("position");
  
  currentText = positions[count];
  
  if (isDeleting) {
    index--;
  } else {
    index++;
  }

  typedTextSpan.textContent = currentText.slice(0, index);

  let speed = isDeleting ? 50 : 100;

  if (!isDeleting && index === currentText.length) {
    speed = 1500; // Pausa al final de la palabra
    isDeleting = true;
  } else if (isDeleting && index === 0) {
    isDeleting = false;
    count = (count + 1) % positions.length;
    speed = 300;
  }

  setTimeout(type, speed);
}

document.addEventListener("DOMContentLoaded", type);
