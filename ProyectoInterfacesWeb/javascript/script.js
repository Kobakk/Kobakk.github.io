
const $nav = document.querySelector('.nav');
const $hamburger = document.querySelector('.hamburger');

$hamburger.addEventListener('click', ()=>{
    $nav.classList.toggle("nav--open");
    $hamburger.classList.toggle("hamburger--open");
});
/*
const form = document.getElementById("mainForm");
form.addEventListener('submit', function (event) {
  event.preventDefault();
  let valor = form.elements['input'].value;
  let newValue; let i = 0;

  document.querySelectorAll('.card').forEach(($box, i) => {
    let imgSrc = $box.querySelector('img').getAttribute('src');
    newValue = `https://source.unsplash.com/random/?${valor}&${i}`;
    i++;
    console.log(i);
    $box.querySelector('img').setAttribute('src', newValue);
    $box.querySelector('img').setAttribute('alt', valor);        
  });

});
*/