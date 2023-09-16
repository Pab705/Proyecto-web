# "Sistema de reportes para alumnos en programa de postgrado de escuela de informática de la PUCV"
**INF3240 - Ingeniería Web**<br />
**Escuela de Ingeniería Informática**<br />
**Pontificia Universidad Católica de Valparaíso**

<!-- omit in toc -->
## Índice
<!--  -->
- [Información General]
- [Tecnologías utilizadas]
- [Archivos]
- [Instrucciones de instalación]
- [Mockups en Figma]
- [Funcionalidades]

## Información general


- **INF3240 - Ingeniería Web**<br />
- **Escuela de Ingeniería Informática**<br />
- **Pontificia Universidad Católica de Valparaíso**
- **Temática:** Visualización de datos
- **Autor:** Patricio Ahumada Bonilla rut: 18.758.163-K
- **Objetivo del proyecto:** El proyecto constará de un visualizador de información y estadísticas relevantes para el proceso de autoevaluación de postgrados, en el cual se examinan críticamente diferentes factores del programa (En este caso, de doctorados), para así poder destacar sus fortalezas y debilidades. El sistema recopilará y graficará el cruce de diversas fuentes de información manejada por el área docente y administrativa de la escuela; y mostrará las estadísticas requeridas por dichas áreas para facilitar así el desarrollo del informe de autoevaluación.

## Tecnologías utilizadas

- [![bootstrap-badge]][bootstrap-web]
- [![js-badge]][js-web]
- [![vite-badge]][vite-web]
- [![jquery-badge]][jquery-web]
- [![jquery-validate-badge]][jquery-validate-web]

## Archivos

| Título             | Tipo       | Archivo (link)                     |
| ------------------ | --------   | ---------------------------------- |
| Proyecto-web       |Repositorio de GitHub|https://github.com/Pab705/Proyecto-web      |

## Instrucciones de instalación

1. Descargar el archivo `Proyecto-web-master.zip` desde el repositorio de GitHub.
2. Descomprimir el archivo, de preferencia en el escritorio.
3. Abrir la carpeta `Proyecto-web-master` en Visual Studio Code.
4. Presionar las teclas <kbd>Ctrl</kbd> + <kbd>ñ</kbd> para abrir la terminal integrada de Visual Studio Code (también puede acceder presionando <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>p</kbd>, y escribiendo `terminal`).
5. Instalar las dependencias de NPM con el comando:
    ```bash
    npm install
    ```
6. Ejecutar el proyecto con el comando:
    ```bash
    npm run dev
    ```

## Mockups en figma

Archivo (link)
   : https://www.figma.com/file/QpQEfX8d213tAWWk1nEoym/Untitled?type=design&mode=design&t=eODBBcDeqkMkEXvM-1

## Funcionalidades

### Registro

  Al ejecutar el programa nos encontraremos con la primera interface de registro. La cual contiene los campos de:
  
    - Nombre
    - Rut (Necesario para inicio de sesión)
    - Email
    - Teléfono
    - Contraseña
    - Confirmación de contraseña
    - Región
    
  El botón de registro enviará la información necesaria al DOM para validar los datos (No guarda los datos registrados, dado que no se ha implementado aún) y mostrará los errores cometidos por el usuario. Bajo este botón se encuentra un hipervínculo al módulo de Inicio de Sesión.
  Adicionalmente, en el borde superior derecho se encuentra un botón para cambiar el tema de claro a oscuro y viceversa.

### Inicio de sesión

  El segundo módulo tiene la funcionalidad de validar los datos ingresados en los campos de RUT y Contraseña. Bajo estos campos encontramos el botón de inicio de sesión (Validación de usuario registraro no está implementada aún), el cual nos redirigirá a la primer interface de visualización de datos del programa, "Resumen por periodo".
  Adicionalmente, en el borde superior derecho se encuentra un botón para cambiar el tema de claro a oscuro y viceversa.

### Resumen por periodo

  En este modulo encontraremos información relevante sobre los alumnos que cursan o cursaron el programa de doctorados en el periodo seleccionado en el grupo de botones (últimos 10 años, últimos 5 años, último año y semestre actual). Además, podremos visualizar algunos gráficos generales de relevancia a modo de resumen presupuestario e información sociológica de los alumnos matriculados. También podremos visualizar el estado de acreditación actual de la escuela.
  Tendremos además un botón (Bajo el logo) que despliega un menú para acceder a los distintos módulos del programa.
  Al costado derecho del logo de la escuela, encontraremos una barra de búsqueda para acceder a algún participante del programa.
 
### Recursos

  En el módulo Recursos, podremos visualizar información graficada relevante a montos invertidos por la escuela, asignaciones directas a alumnos para concepto de becas, pasantías y eventos

### Estadísticas

  En el presente módulo de Estadísticas, visualizaremos la graficación de todo el cruce de información relevante al proceso de autoevaluación del programa de doctorado, tanto demográfica como económica.

### Comunidad

  En el módulo de comunidad, veremos una lista de los estudiantes participando del programa en el periodo seleccionado, además de una barra de progreso que otorga información rápida al lector sobre el semestre que está cursando el alumno, (Muestra la etiqueta "EXTENDIDO" si el alumno prolongó su estadía en el programa sobre los 8 semestres), estado de avance del alumno y los hitos más importantes del programa (Examen de candidatura y examen de grado). Estas barras cambiarán de color según el estado actual del alumno (VERDE si cursa normalmente el programa o si fue aprobado; AMARILLO si el alumno se encuentra en una interrupción de estudios o cursa el último semestre permitido por el programa {Máximo 12}; y ROJA si el alumno se retiró del programa o reprobó)

### Perfil de alumno

  En el perfil de alumno, se muestra información general de este, también una barra de progreso en el programa junto a destacadores de los hitos: Inicio en el programa, Examen de candidatura, interrupción de estudios (Si existe) y examen de grado. Al igual que las barras de progreso presentes en el módulo de comunidad, estas cambiarán de color según el estado actual del alumno. 
  Además, encontraremos una barra de navegación con las siguientes categorías de información:
  
  - Perfil
  - Publicaciones: Información sobre la cantidad de publicaciones realizadas por el alumno.
  - Pasantías: Responsable en lugar de origen y destino, lugar de destino y gráficos con información sobre recursos asignados.
  - Becas: Institución que otorga el beneficio, semestres en que se perciben y totales de recursos asignados, junto con gráficos correspondientes.
  - Eventos: Información relevante sobre los eventos a los que ha asistido el alumno, generalmente charlas.



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
