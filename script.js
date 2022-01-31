// Toggle mobile nav
const menuBtn = document.querySelector('.nav-toggle').addEventListener('click', toggleNav);
const menu = document.querySelector('.nav-list');
const footerCopyright = document.getElementById('copyright')

function toggleNav(e){
    menu.classList.toggle('show')
    if(e.target !== menuBtn && e.target !== menu){
        console.log('click 1')
        menu.classList.remove('show')
    }
}

// define a function to close menu on outside window click
// document.onclick = function(e){
//     console.log('click 1')
//     if(e.target !== menuBtn){
//         console.log('click 2')
//         menu.classList.remove('show')
//     }
// }




// set year to copyright element
const footerYear = new Date().getFullYear()
footerCopyright.innerHTML += `<p class="text-primary">Copyright &copy; ${footerYear} | Website Design by <a
href="https://www.juanmoreno.dev/">Juan Moreno</a></p>`


