import 'jquery-validation';

import { siGithub, siFacebook, siGoogle } from 'simple-icons';
import './styles/main.scss';
import * as bootstrap from 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.scss';
import "@popperjs/core"

import { cargarRegiones } from './scripts/regiones';
import { validarRegistro } from './scripts/validaciones';
import { validarLogin } from './scripts/validaciones';

import reglas from './scripts/reglas';
import cargarColoresTema from './scripts/tema';

const themeIcons = {
    light: '<i class="bi bi-brightness-high-fill h-5 w-5"></i>',
    dark: '<i class="bi bi-moon-stars-fill"></i>'
}

// Esta función se ejecuta cuando el DOM ha sido cargado.
$(() => {

    // Cargar los colores del tema, y genera los atributos para los íconos.
    const iconsAttrs = cargarColoresTema(false, themeIcons);

    cargarRegiones();
    reglas();
    validarRegistro();
    validarLogin();

    // Constantes para los íconos de redes sociales
    const facebookIcon = $(siFacebook.svg).attr(iconsAttrs);
    const googleIcon = $(siGoogle.svg).attr(iconsAttrs);
    const githubIcon = $(siGithub.svg).attr(iconsAttrs);

    // Se agregan los íconos a los elementos correspondientes usando jQuery
    $('#fb-icon').append(facebookIcon);
    $('#google-icon').append(googleIcon);
    $('#gh-icon').append(githubIcon);

    // Se agrega el evento click al botón de cambio de modo
    $('div.mode-toggle').on('click', e => {
        e.preventDefault();
        const currMode = $('input.form-control').hasClass('dark-mode');
        cargarColoresTema(!currMode, themeIcons);
    })

});