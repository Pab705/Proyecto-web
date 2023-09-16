# Ayudantía - JavaScript, DOM y JQuery (con Bootstrap y Sass)

**INF3240 - Ingeniería Web**<br />
**Escuela de Ingeniería Informática**<br />
**Pontificia Universidad Católica de Valparaíso**

<!-- omit in toc -->
## Índice
<!--  -->
- [Información](#información)
  - [Datos ayudantía](#datos-ayudantía)
  - [Tecnologías utilizadas](#tecnologías-utilizadas)
  - [Archivos](#archivos)
- [Pasos iniciales](#pasos-iniciales)
- [Actividades](#actividades)
  - [Actividad 1](#actividad-1)
    - [Tips](#tips)
  - [Actividad 2](#actividad-2)
    - [Tips](#tips-1)
  - [Actividad 3 (opcional)](#actividad-3-opcional)

## Información


**INF3240 - Ingeniería Web**<br />
**Escuela de Ingeniería Informática**<br />
**Pontificia Universidad Católica de Valparaíso**
### Datos ayudantía

- **Número:** 4
- **Semana:** 4 al 8 de Septiembre de 2023
- **Temática:** Agregar interactividad con JavaScript, crear proyecto de Node.js para frontend usando Vite.js, jQuery, validaciones de formularios y preprocesadores de CSS (Sass).

### Tecnologías utilizadas

- [![bootstrap-badge]][bootstrap-web]
- [![js-badge]][js-web]
- [![vite-badge]][vite-web]
- [![jquery-badge]][jquery-web]
- [![jquery-validate-badge]][jquery-validate-web]

### Archivos

| Título             | Lenguaje | Archivo (link)                     |
| ------------------ | -------- | ---------------------------------- |
| ayudantia-4   | `carpeta zip`   | Descarga en Aula Virtual      |

## Pasos iniciales

1. Descargar el archivo `ayudantia-4.zip` de la ayudantía desde Aula Virtual.
2. Descomprimir el archivo, de preferencia en el escritorio.
3. Abrir la carpeta `ayudantia-4` en Visual Studio Code.
4. Presionar las teclas <kbd>Ctrl</kbd> + <kbd>ñ</kbd> para abrir la terminal integrada de Visual Studio Code (también puede acceder presionando <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>p</kbd>, y escribiendo `terminal`).
5. Instalar las dependencias de NPM con el comando:
    ```bash
    npm install
    ```
6. Ejecutar el proyecto con el comando:
    ```bash
    npm run dev
    ```

## Actividades

### Actividad 1

Ir al archivo `regiones.js` en la carpeta `scripts`. En la línea 71 está el prototípo de la función que carga las regiones de Chile dentro del `<select>` del formulario. Utilizando JQuery y la manipulación del DOM, modifique la función para que cargue las regiones del arreglo dado (la constante `const regiones` de la línea 1)

#### Tips

1. Puedes usar el método `map()`, que te permite retornar todos los elementos de un array, pero modificados. Por ejemplo:
   ```js
   const numeros = [1, 2, 3, 4, 5];

   const modificados = numeros.map((numero) => {
     return '<p>Número ' + numero + '</p>';
   })
   
   /* Esto nos imprimirá:
    * <p>Número 1</p>
    * <p>Número 2</p>
    * <p>Número 3</p>
    * <p>Número 4</p>
    * <p>Número 5</p>
    */
   console.log(modificados);
   ```
2. Puedes usar JQuery y la manipulación del DOM (`$`) para obtener el elemento `<select>` con el id `#region`. Dentro de los `<select>` los elementos se etiquetan con `<option>`

### Actividad 2

Ir al archivo `reglas.js` dentro de la carpeta `scripts`. En la línea 5 está el prototipo de la función que valida el dígito verificador del RUT ingresado. Utilizando JQuery y la manipulación del DOM, modifique la función para que valide el dígito verificador del RUT ingresado en el formulario.

#### Tips

1. Puedes usar el método `split()` para separar un string en un array, utilizando un separador. Por ejemplo:
   ```js
   const rut = '12345678-9';
   const rutSeparado = rut.split('-');
   /* Esto nos imprimirá:
    * ['12345678', '9']
    */
   console.log(rutSeparado);
   ```
   `split()` nos devuelve un array con los elementos separados por el separador que le pasamos como parámetro. En este caso, el separador es `-`. Esto nos permite lo siguiente:
    ```js
    const [ numero, dv ] = rut.split('-');
    ```
    En donde `numero` es el número del RUT, y `dv` es el dígito verificador.
2. El dígito verificador de los RUTs en Chile se calcula matemáticamente a través del "Módulo 11". Puedes buscar información en internet.

### Actividad 3 (opcional)

Utilizando cualquiera (o combinaciones entre ellas) de las siguientes metodologías:

- Modificar el DOM para añadir clases y estilos a los elementos.
- Modificar el archivo de estilos de Sass `.scss`.
- Aprovechar las clases y componentes de Bootstrap.

Modifique el archivo `tema.js` dentro de la carpeta `scripts`, para agregar o modificar el tema (colores) del formulario. Las modificaciones puedes hacerlas a tu gusto personal, y te puedes apoyar de Coolors.co para generar paletas de colores (el link está en el Aula Virtual).

[bootstrap-badge]: https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=fff&style=flat
[bootstrap-web]: https://getbootstrap.com/
[vite-badge]: https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff&style=flat
[vite-web]: https://vitejs.dev/
[js-badge]: https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=flat
[js-web]: https://developer.mozilla.org/es/docs/Web/JavaScript
[jquery-badge]: https://img.shields.io/badge/jQuery-0769AD?logo=jquery&logoColor=fff&style=flat
[jquery-web]: https://jquery.com/
[jquery-validate-badge]: https://img.shields.io/badge/jQuery%20Validate-0769AD?logo=jquery&logoColor=fff&style=flat
[jquery-validate-web]: https://jqueryvalidation.org/
