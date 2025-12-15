document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.getElementById('main-nav');
    
    // Si no encontramos los elementos, detenemos la función para evitar errores.
    //if (!menuToggle || !nav) return;

    menuToggle.addEventListener('click', function() {
        // Alternar la clase 'active' en el botón para la animación "X"
        menuToggle.classList.toggle('active');
        
        // Alternar la clase 'nav-open' en el NAV para mostrar/ocultar el menú
        nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
        nav.classList.toggle('nav-open');
    });

    // Opcional: Cerrar el menú después de hacer clic en un enlace (para mejor UX)
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('nav-open')) {
                menuToggle.classList.remove('active');
                nav.classList.remove('nav-open');
            }
        });
    });
});
