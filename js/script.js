import menuHamburguer from "./module/menuHamburguer.js";
import initGallery from "./module/gallery.js";

menuHamburguer();

if (typeof initGallery === "function") {
    initGallery();
} else {
    console.error("initGallery is not defined or not a function");
}

new SimpleAnime();

document.addEventListener("contextmenu", function (e) {
    if (e.target.tagName === "IMG") {
        e.preventDefault();
    }
});
