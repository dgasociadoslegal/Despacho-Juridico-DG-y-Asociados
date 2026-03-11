document.addEventListener('DOMContentLoaded', function() {
    console.log("Despacho Juridico - Sitio cargado correctamente");

        const navLinks = document.querySelectorAll('.nav-link');
        const menuToggle = document.getElementById('navbarNav');
    
    navLinks.forEach((l) => {
        l.addEventListener('click', () => { 
            if(window.innerWidth < 992) {
                new bootstrap.Collapse(menuToggle).toggle(); 
            }
        });
    });
});