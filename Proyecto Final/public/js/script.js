//Navbar responsive
document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
        offset: 120,
        duration: 800,
        easing: 'ease-in-out',
        once: true,
    });

    window.addEventListener('scroll', function () {
        var header = document.querySelector('header');
        var scrollPosition = window.scrollY;

        // Si el scroll es mayor a 100px, agrega la clase 'scroll', de lo contrario, quítala
        if (scrollPosition > 100) {
            header.classList.add('scroll');
        } else {
            header.classList.remove('scroll');
        }
    });
});
