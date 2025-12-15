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

const installerwin = document.getElementsByClassName('btn primary-cta win32');
for (let i = 0; i < installerwin.length; i++) {
    installerwin[i].addEventListener('click', () => {
        window.location.href = 'https://github.com/josecantero/curseApp/releases/download/v1.0.74/courseapp-1.0.74.Squerrel_Setup.exe';
    });
}
const installerlin = document.getElementsByClassName('btn primary-cta linux');
for (let i = 0; i < installerlin.length; i++) {
    installerlin[i].addEventListener('click', () => {
        window.location.href = 'https://github.com/josecantero/curseApp/releases/download/v1.0.74/courseApp-1.0.74.AppImage';
    });
}
const grupoFb = document.getElementsByClassName('btn primary-cta fbg');
console.log(grupoFb);
for (let i = 0; i < grupoFb.length; i++) {
    grupoFb[i].addEventListener('click', () => {
        window.location.href = 'https://www.facebook.com/groups/cursosgratisenstreaming/';
    });
}

var today = new Date();
var year = today.getFullYear();
console.log("Current Year: " + year);
document.getElementById("year").innerHTML = year;
