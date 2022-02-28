import hamburguerMenu from "./dom/menu_hamburguesa.js";
import { digitalClock, alarm } from "./dom/reloj.js";
import{moveBall, shortcuts}from ".dom/teclado.js";
import countdown from "./dom/cuenta_regresiva.js";
import scrollTopButton from "./dom/boton_scroll.js";
import darkTheme from "./dom/tema_oscuro.js";
import responsiveMedia from "./dom/objeto_responsive.js";
import userDeviceinfo from "./dom/deteccion_dispositivos.js";
import networkStatus from "./dom/deteccion_red.js";
import webCam from "./dom/deteccion_webcam.js";
import getGeolocalizacion from "./dom/geolocalizacion.js";
import searchFiltrers from "./dom/filtro_busquedas.js";
import draw from "./dom/sorteo.js";
import slider from "./dom/carucel.js";
import scrollSpy from "./dom/scroll_espia.js";
import smartVideo from "./dom/video_inteligente.js";
import contactFormValidation from "./dom/validaciones_formularios.js";
import speechReader from "./dom/narrador.js";

const d = document
d.addEventListener("DOMContentLoaded",(e)=>{
    hamburguerMenu(".panel-btm","panel","menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarm("assets/alarma_2.mp3","#activar-alarma","#desactivar-alarma");
    countdown(
        "countdown",
        "Sep 27, 2022",
        "Feliz cumpleaños amigo digital"
    );
    scrollTopButton(".scroll-top-btn");
    responsiveMedia(
        "youtube",
        "(min-width: 1024px)",
        `<a href ="https://www.youtube.com/watch?v=25etvwBV-SU"target="_blank" rel="noopener">Ver Video</a>`,
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/
        6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
        gyroscope; picture-in-picture" allowfullscreen></iframe>`
    );
    responsiveMedia(
        "gmaps",
        "(min-width: 1024px)",
        `<a href ="https://goo.gl/maps/ojZXhLQ1A6nwo5uH9"target="_blank" rel="noopener">Ver Mapa</a>`,        
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1881.3308153116982!2d-99.16759934999999!3d19.42702060000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sEl%20%C3%81ngel%20de%20la%20Independencia!5e0!3m2!1ses!2sec!4v1645945590266!5m2!1ses!2sec" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
    );
    responsiveTester("responsive-tester");
    userDeviceinfo("user-device");
    webCam("webcam");
    getGeolocalizacion("geolocalizacion");
    searchFiltrers(".card-filter","card")
    draw("winner-btn","stage");
    slider();
    scrollSpy();
    smartVideo();
    contactFormValidation();
});

d.addEventListener("keydown",(e)=>{
    shortcuts(e);
    moveBall(e,"ball","stage");
});

darkTheme(".dark-theme-btn","dark-mode");
networkStatus();
speechReader();