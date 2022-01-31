// Toggle mobile nav
const menuBtn = document.querySelector('.nav-toggle').addEventListener('click', toggleNav);
const menu = document.querySelector('.nav-list');
const footerCopyright = document.getElementById('copyright')

function toggleNav(e){
        menu.classList.toggle('show')
}





// set year to copyright element
const footerYear = new Date().getFullYear()
footerCopyright.innerHTML += `<p class="text-primary">Copyright &copy; ${footerYear} | Website Design by <a
href="https://www.juanmoreno.dev/">Juan Moreno</a></p>`


