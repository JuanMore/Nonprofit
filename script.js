// Toggle mobile nav
const menuBtn = document.querySelector('.nav-toggle').addEventListener('click', toggleNav);
const menu = document.querySelector('.nav-list');
const footerCopyright = document.getElementById('copyright')

function toggleNav(){
    menu.classList.toggle('show')
}

// define a function to close menu on outside window click
window.addEventListener( 'click', function( e ) {
   const targetElement = e.target;  // clicked element

    do {
        if ( targetElement === menu ) {
            // This is a click inside. Do nothing, just return.
            return;
        }

        // Go up the DOM
        targetElement = targetElement.parentNode;
    } while ( targetElement );

    // This is a click outside.
    menu.click();
} );





// set year to copyright element
const footerYear = new Date().getFullYear()
footerCopyright.innerHTML += `<p class="text-primary">Copyright &copy; ${footerYear} | Website Design by <a
href="https://www.juanmoreno.dev/">Juan Moreno</a></p>`


