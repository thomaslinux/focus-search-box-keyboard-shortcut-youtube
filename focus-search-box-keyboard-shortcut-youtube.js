// ==UserScript==
// @name        hotkey : for input search box
// @namespace   Violentmonkey Scripts
// @match       *://www.youtube.com/*
// @match       *://m.youtube.com/*
// @match       *://www.youtube-nocookie.com/*
// @grant       none
// @version     20260120.15.04
// @author      thomaslinux
// @description 16/01/2026 11:19:00
// ==/UserScript==
document.addEventListener('keydown', function(event) {
    if (event.key === ':') {
        const input = document.querySelector('.ytSearchboxComponentInput');
        if (input) {
            input.focus();
            event.preventDefault();
        }
    }
});
