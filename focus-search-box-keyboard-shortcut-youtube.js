// ==UserScript==
// @name        : to focus the search box
// @namespace   Violentmonkey Scripts
// @match       youtube.com/*
// @grant       none
// @version     1.0
// @author      thomaslinux
// @description 16/01/2026 10:33:34
// ==/UserScript==
document.addEventListener('keydown', function(event) {
    if (event.key === ':') {
        const input = document.querySelector('.ytSearchboxComponentInput');
        if (input) {
            input.focus();
            event.preventDefault(); // Empêche le comportement par défaut de la touche si nécessaire
        }
    }
});
