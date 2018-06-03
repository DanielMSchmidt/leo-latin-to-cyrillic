// ==UserScript==
// @name         LatinToCyrillic
// @version      0.1
// @description  Translates latin to cyrillic on LEO
// @author       DanielMSchmidt
// @include       https://www.leo.org/*
// @include       http://www.leo.org/*
// ==/UserScript==
(function() {
    'use strict';

    (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
        const translit = require('latin-to-cyrillic');
        
        document.querySelector("#search-field").onchange = function() {
            const el = document.querySelector("#search-field");
            el.value = translit(el.value);
        }
        },{"latin-to-cyrillic":2}],2:[function(require,module,exports){
        module.exports = require('./lib/index')
        
        },{"./lib/index":3}],3:[function(require,module,exports){
        module.exports = (string) => {
          const isRegisterInUpperCase = (symbol) => symbol === symbol.toUpperCase()
          const translit = {
            'a': 'а',
            'b': 'б',
            'v': 'в',
            'g': 'г',
            'd': 'д',
            'e': 'е',
            'jo': 'ё',
            'yo': 'ё',
            'ö': 'ё',
            'zh': 'ж',
            'z': 'з',
            'i': 'и',
            'j': 'й',
            'k': 'к',
            'l': 'л',
            'm': 'м',
            'n': 'н',
            'o': 'о',
            'p': 'п',
            'r': 'р',
            's': 'с',
            't': 'т',
            'u': 'у',
            'f': 'ф',
            'h': 'х',
            'x': 'х',
            'c': 'ц',
            'ch': 'ч',
            'sh': 'ш',
            'shh': 'щ',
            'w': 'щ',
            '#': 'ъ',
            'y': 'ы',
            '\'': 'ь',
            'je,ä': 'э',
            'ä': 'э',
            'ju': 'ю',
            'yu': 'ю',
            'ü': 'ю',
            'ja': 'я',
            'ya': 'я',
            'q': 'я'
          }
        
          for (let i = 0, j = string.length; i < j; i++) {
            if (isRegisterInUpperCase(string[i]) && translit[string[i].toLowerCase()]) {
              string = string.replace(string[i], translit[string[i].toLowerCase()].toUpperCase())
            } else if (translit[string[i]]) {
              string = string.replace(string[i], translit[string[i]])
            }
          }
        
          return string
        }
        
        },{}]},{},[1]);        
})();
