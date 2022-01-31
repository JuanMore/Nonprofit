// Toggle mobile nav
const menuBtn = document.querySelector('.nav-toggle').addEventListener('click', toggleNav);
const menu = document.querySelector('.nav-list');
const footerCopyright = document.getElementById('copyright')

function toggleNav(){
    menu.classList.toggle('show')
}

// define a function to close menu on outside window click
window.addEventListener('onclick', function(e) {
    if(e.target != menu && e.target.parentNode != menu){
        menu.style.display = 'none'
    }
})




// set year to copyright element
const footerYear = new Date().getFullYear()
footerCopyright.innerHTML += `<p class="text-primary">Copyright &copy; ${footerYear} | Website Design by <a
href="https://www.juanmoreno.dev/">Juan Moreno</a></p>`


