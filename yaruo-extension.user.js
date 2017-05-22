// ==UserScript==
// @name         yaruo-extension
// @namespace    https://github.com/Duct-and-rice/yaruo-extension
// @version      1.0.0
// @description  A userscript for Yaruo Cluster
// @author       The Department of Yaruo of Koushinkyo
// @match        http://jbbs.shitaraba.net/bbs/read.cgi/*
// @match        http://bbs.yaruyomi.com/test/read.cgi/ban/*
// @match        http://yaruoshelter.com/test/read.cgi/yaruo001/*
// @downloadURL  http://localhost:8080/bundle.js
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function(){document.body.appendChild(document.createElement('script')).src='https://rawgit.com/Duct-and-rice/yaruo-extension/feature/bundle.js';main(GM_xmlhttpRequest);})();
