function hamburg() {
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}

function cancel() {
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}

// for Typewriter effect

const texts = [
    "PORTAFOLIO"
]

let speed = 100;

const textElements = document.querySelector(".typewriter-text")

let textIndex = 0;
let charcterIndex = 0;

function typeWriter() {
    if (charcterIndex < texts[textIndex].length) {
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, 1000)
    }
}

function eraseText() {
    if (textElements.innerHTML.length > 0) {
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
    } else {
        // Verifica que solo se repita el texto una vez
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500);
    }
}

// Evita que el efecto se ejecute múltiples veces
window.onload = function() {
    // Solo ejecuta la función typeWriter una vez al cargar la página
    if (textElements.innerHTML === "") {
        typeWriter();
    }
}

