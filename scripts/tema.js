/**
 * Función que carga los colores del tema en función del modo activo.
 * @param {boolean} darkmode Define si el modo activo es oscuro o no
 * @param {Object} themeicons Objeto con los iconos del tema
 * @returns {Object} Objeto con los atributos para el icono del tema
 */
const cargarColoresTema = (darkmode = false, themeicons) => {
    if (darkmode) {
        /*
         * Actividad (optativa): Implementar un nuevo tema de colores, 
         * usando sass, bootstrap y/o JQuery. Puede reemplazar uno de los
         * temas existentes o agregar uno nuevo. 
         */
        // Aquí se puede cambiar el modo oscuro
        $('div.mode-toggle').empty().append(themeicons.light).removeClass('btn-outline-dark').addClass('btn-outline-light');
        $('body').removeClass('bg-light').addClass('bg-dark');
        $('div.card').removeClass('bg-white text-dark').addClass('bg-secondary text-light');
        $('p').removeClass('text-dark').addClass('text-light');
        $('button.btn').removeClass('btn-primary').addClass('btn-dark');
        $('a.btn').removeClass('btn-dark').addClass('btn-light');
        $('input.form-control,select.form-select').addClass('dark-mode');
        return {
            fill: 'white',
            width: '2em',
            height: '2em'
        };
    } else {
        // Aquí se puede cambiar el modo claro
        $('div.mode-toggle').empty().append(themeicons.dark).removeClass('btn-outline-light').addClass('btn-outline-dark');
        $('body').removeClass('bg-dark').addClass('bg-light');
        $('div.card').removeClass('bg-secondary text-light').addClass('bg-white text-dark');
        $('p').removeClass('text-light').addClass('text-dark');
        $('button.btn').removeClass('btn-dark').addClass('btn-primary');
        $('a.btn').removeClass('btn-light').addClass('btn-dark');
        $('input.form-control,select.form-select').removeClass('dark-mode');
        return {
            fill: 'black',
            width: '2em',
            height: '2em'
        };
    }
}

export default cargarColoresTema;
