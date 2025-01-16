// ==UserScript==
// @name        Prends ma SHS
// @namespace   Violentmonkey Scripts
// @match       https://isa.epfl.ch/imoniteur_ISAP/PORTAL14S.htm#tab26
// @grant       none
// @version     1.0
// @author      Androz2091
// @description 2025-16-01 12:00:00
// ==/UserScript==

setTimeout(() => {
    console.log('DOM loaded');

    // navigate to inscriptions aux cours
    //document.getElementById("26").click();

    const xpath = "//a[contains(text(), 'MATH-207(d) - Analysis IV')]";
    const element = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

    const tickBox = element.parentElement.parentElement.parentElement.children[6].children[3];
    const isDisabled = tickBox?.disabled;
    // add a ?. because when the course is full,
    // one of the two inputs might be missing
    const isChecked = tickBox?.checked;

    if (tickBox && !isDisabled && !isChecked) {
        tickBox.click();
        setTimeout(() => {
            window.prtl.mainManager.saveCell(document.f_1809191822);
        }, 1000);
        alert('Inscription réussie');
    }
}, 4000);
