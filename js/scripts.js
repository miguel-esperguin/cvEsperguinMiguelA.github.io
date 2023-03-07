/*!
* Start Bootstrap - Resume v7.0.5 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
function validarForm() {
    if(document.getElementById('nombre').value.trim() =='') {
        alert('Debe ingresar un nombre')
        return false
    } else {
        if(document.getElementById('nombre').value.length<3) {
            alert('El nombre debe tener al menos 3 caracteres')
            return false
        }
    }  
}
function validaDNI(){
    var  ex_regular_dni = /^([0-9]{8,8})$/

    if(ex_regular_dni.test(dni.value) == true){
         alert('Acepta para jugar al snake. Utiliza "W" "S" "A" y "D" para moverte.') 
         window.open("\snake.html", "snake", "width=800, height=800");
           
    }else{
        alert('Dni erroneo, formato no válido')
     }
    
  }
  
