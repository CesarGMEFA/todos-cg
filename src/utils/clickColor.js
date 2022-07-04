function clickColor() {
  window.onload = function () {
    const btns = document.querySelectorAll('.todoFilter');
    
    console.log('btns: ', btns)
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
  
    btns.forEach( btn => btn.addEventListener('click', changeColor) )
  }
}

export { clickColor } 