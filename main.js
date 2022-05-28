const moreBtn = document.querySelector('.info .metadata .moreBtn');
const title = document.querySelector('.info .metadata .title');

moreBtn.addEventListener('click', () => {
  moreBtn.classList.toggle('clicked');
  title.classList.toggle('clamp');
})

const thumbsUp = document.querySelector('.info .actions .fa-thumbs-up');
thumbsUp.addEventListener('click', ()=>{
thumbsUp.classList.toggle( 'clicked');

})