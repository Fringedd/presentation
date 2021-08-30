const $navigation = document.querySelector('.navigation');
const $arrow = document.querySelector('.arrow');

$navigation.onmouseover = () => {
  $arrow.animate([
    {left: '0'},
    {left: '10px'},
    {left: '0'}
  ],{
    duration: 700,
    iterations: Infinity
  });
}