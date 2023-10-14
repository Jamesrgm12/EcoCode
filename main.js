
const acordeon = document.getElementsByClassName('contenedor');
const sliderContainer = document.querySelector('.slider-container');

for (i=0; i<acordeon.length; i++) {
  acordeon[i].addEventListener('click', function () {
    this.classList.toggle('activa')
  })
}

sliderContainer.addEventListener('mouseenter', () => {
  sliderContainer.style.animationPlayState = 'paused';
});
sliderContainer.addEventListener('mouseleave', () => {
  sliderContainer.style.animationPlayState = 'running';
});