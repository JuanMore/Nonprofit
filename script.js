// Toggle mobile nav
const menuBtn = document.querySelector('.nav-toggle').addEventListener('click', toggleNav);
const menu = document.querySelector('.nav-list');
const footerCopyright = document.getElementById('copyright')

// define a function to close menu on outside window click
function closeMobileNav() {
    if(menu.style.display === 'block'){
        menu.style.display = 'none'
    } else {
        menu.style.display = 'block'
    }
}

window.onclick = closeMobileNav

function toggleNav(){
    menu.classList.toggle('show')
}



// set year to copyright element
const footerYear = new Date().getFullYear()
footerCopyright.innerHTML += `<p class="text-primary">Copyright &copy; ${footerYear} | Website Design by <a
href="https://www.juanmoreno.dev/">Juan Moreno</a></p>`


