import menuHamburguer from "./module/menuHamburguer.js";
import initGallery from "./module/gallery.js";

menuHamburguer();
initGallery();
new SimpleAnime();

document.addEventListener("contextmenu", function (e) {
    if (e.target.tagName === "IMG") {
        e.preventDefault();
    }
});
