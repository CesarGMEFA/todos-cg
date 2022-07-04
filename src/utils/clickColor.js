function clickColor() {
  window.onload = function () {
    const btnsFilters = document.querySelectorAll('.todoFilter');
    
    const cleanColor = () => {
        if( document.querySelector('.text-skin-blue') ){
            const btnSelected = document.querySelector('.text-skin-blue');
            btnSelected.classList.remove('text-skin-blue');
  
        }
    };
  
    const changeColor = (evt) => {
        cleanColor();
        const btnSelected = evt.target;
        console.log(btnSelected)
        btnSelected.classList.add('text-skin-blue');
        
  
    };
  
    btnsFilters.forEach( btnFilter => btnFilter.addEventListener('click', changeColor) )
  }
}

export { clickColor } 