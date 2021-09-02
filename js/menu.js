var nav = document.getElementById('navigation');
nav.addEventListener('click', animateIn);

function animateIn(e) {
  e.stopPropagation();
  TweenMax.to(nav, 1.3, {
    width: '300px',
    height: '300px',
    borderTopLeftRadius: '30% 29%',
    borderTopRightRadius: '70% 26%',
    borderBottomLeftRadius: '71%',
    borderBottomRightRadius: '29% 74%',
    ease: Elastic.easeOut });


  TweenMax.to('nav ul', 0.4, {
    opacity: '1',
    ease: Linear.easeOut }).
  delay(0.45);
}

function animateOut() {
  TweenMax.to(nav, 0.5, {
    width: '30px',
    height: '30px',
    borderRadius: '10%',
    ease: Power2.easeInOut });


  TweenMax.to('nav ul', 0.2, {
    opacity: '0',
    ease: Linear.easeOut });

}

window.addEventListener('click', function () {
  animateOut();
});