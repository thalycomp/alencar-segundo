function ativaNoScroll() {
  const botaoFlutuante = document.querySelector('.up-to-page');
  const proxSection = document.querySelector('.esc');

    if(document.querySelector('.esc').getBoundingClientRect().height < window.scrollY) {
          
          botaoFlutuante.style.display = 'block';

    } else {
          
          botaoFlutuante.style.display = 'none';
    }

}

window.addEventListener('scroll', ativaNoScroll);


