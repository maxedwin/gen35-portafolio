// eng_esp.js

function toggleLanguage() {
    console.log('entro ddd');
    const languageToggle = document.getElementById('language-toggle');
    const aboutDescription = document.querySelector('.about__description');

    // Cambia el idioma según el estado del toggle
    if (languageToggle.checked) {
        // Cambia a inglés
        aboutDescription.innerHTML = "I'm a passionate programmer and web developer, my world revolves around programming and technology. Every line of code is an opportunity to express creativity and contribute to digital advancement. In constant pursuit of challenges, I find in this exciting journey the opportunity to learn, evolve, and leave my mark in the digital world.";
    } else {
        // Cambia a español
        aboutDescription.innerHTML = "Soy un Apasionado programador y desarrollador web, mi mundo gira en torno a la programación y la tecnología. Cada línea de código es una oportunidad para expresar creatividad y contribuir al avance digital. En constante búsqueda de desafíos, encuentro en este emocionante viaje la oportunidad de aprender, evolucionar y dejar mi marca en el mundo digital.";
    }
}

// Asigna la función al evento de cambio del toggle
document.getElementById('language-toggle').addEventListener('change', toggleLanguage);

export default toggleLanguage;
