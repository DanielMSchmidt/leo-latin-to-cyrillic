const translit = require('latin-to-cyrillic');

document.querySelector("#search-field").onchange = function() {
    const el = document.querySelector("#search-field");
    el.value = translit(el.value);
}