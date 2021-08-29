var inputs = document.getElementsByClassName('formulario__input');
for (var i = 0; i < inputs.length; i++){
    inputs[i].addEventListener('keyup', function(){
       if(this.value.length >= 1) {
           this.nextElementSibling.classList.add('fixed');
       }else{
           this.nextElementSibling.classList.remove('fixed');
       }
    });
}