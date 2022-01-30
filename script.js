// Toggle mobile nav
const menuBtn = document.querySelector('.nav-toggle').addEventListener('click', toggleNav);
const menu = document.querySelector('.nav-list');
const footerCopyright = document.getElementById('copyright')

function toggleNav(){
    menu.classList.toggle('show')
}

const footerYear = new Date().getFullYear()
footerCopyright.innerText += `<p class="text-primary">Copyright &copy; ${footerYear} | Website Design by <a
href="https://www.juanmoreno.dev/">Juan Moreno</a></p>`

