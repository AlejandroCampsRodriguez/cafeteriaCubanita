// Script - Cafetería La Esquina

document.addEventListener('DOMContentLoaded', function() {
    // Animación de botones de ordenar
    const ordenarBtns = document.querySelectorAll('.btn-warning');
    
    ordenarBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const producto = this.closest('.card-body').querySelector('.card-title').textContent;
            const precio = this.closest('.card-body').querySelector('.text-warning').textContent;
            
            // Mostrar notificación
            mostrarNotificacion(`✓ ${producto} agregado al carrito (${precio})`);
        });
    });

    // Función para mostrar notificaciones
    function mostrarNotificacion(mensaje) {
        const notif = document.createElement('div');
        notif.className = 'alert alert-success alert-dismissible fade show';
        notif.setAttribute('role', 'alert');
        notif.innerHTML = `
            ${mensaje}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;
        notif.style.position = 'fixed';
        notif.style.top = '70px';
        notif.style.right = '20px';
        notif.style.zIndex = '9999';
        notif.style.minWidth = '300px';
        
        document.body.appendChild(notif);
        
        // Remover automáticamente después de 3 segundos
        setTimeout(() => {
            notif.remove();
        }, 3000);
    }

    // Scroll suave para enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Efecto de aparición para tarjetas al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.product-card, .card').forEach(card => {
        card.style.opacity = '0';
        observer.observe(card);
    });

    // Cambiar navbar de estilo al hacer scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
        }
    });

    console.log('Cafetería La Esquina - Sitio web cargado correctamente ☕');
});
