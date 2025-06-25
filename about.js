

const openingQuote = '<i class="fa-solid fa-quote-left"></i>';
const closingQuote = '<i class="fa-solid fa-quote-right"></i>';

const text = 'Technology should feel as natural as a heartbeat — smooth, intuitive, and human-centered ~ Muthomi';

// Get the parent element
const typingElement = document.getElementById('styled-quote');

// Set up the initial HTML with a typing span
typingElement.innerHTML = `${openingQuote} <span id="typing-text"></span> ${closingQuote}`;

// Select the span where typing will happen
const typingTextElement = document.getElementById('typing-text');

let index = 0;

function typeCharacter() {
    if (index < text.length) {
        typingTextElement.textContent += text.charAt(index); // Add characters to the span
        index++;
        setTimeout(typeCharacter, 70); // Typing speed
    }
}

window.onload = typeCharacter;

