function clickColor() {
  window.onload = function () {
    const btnsFilters = document.querySelectorAll('.todoFilter');
    btnsFilters[0].classList.add('text-skin-blue')
    const cleanColor = () => {
        if( document.querySelector('.text-skin-blue') ){
            const btnSelected = document.querySelector('.text-skin-blue');
            btnSelected.classList.remove('text-skin-blue');
  
        }
    };
  
    const changeColor = (evt) => {
        cleanColor();
        const btnSelected = evt.target;
        btnSelected.classList.add('text-skin-blue');
    };
  
    btnsFilters.forEach( btnFilter => btnFilter.addEventListener('click', changeColor) )
  }
}

export { clickColor } 