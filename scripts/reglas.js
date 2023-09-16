/**
 * Función que permite validar el dígito verificador de un RUT chileno.
 * @param {string} rut RUT a validar
 * @returns {boolean} true si el dígito verificador es válido, false en caso
 */

function validaDV(rut) {
    // Se separa el número del dígito verificador
    const [numero, dv] = rut.replace('-K', '-k').split('-');

    // Aquí se debe aplicar módulo 11. La función se extrajo de:
    // https://validarutchile.cl/calcular-rut-en-javascript.php
    // ! OJO: Es una función que se llama a sí misma.
    const dvVer = ((T) => {
        let M=0,S=1;
        for(;T;T=Math.floor(T/10))
        S=(S+T%10*(9-M++%6))%11;
        return S?S-1:'k';
    })(numero);

    // Se compara el dígito verificador calculado con el ingresado
    return dvVer == dv;
}
/**
 * Función que agrega las reglas personalizadas al plugin jQuery Validation. Se
 * encarga de validar el formato (sin puntos, con guión) y el dígito verificador.
 * @see https://jqueryvalidation.org/
 */
export default () => {
    $.validator.addMethod('rut', function (value, element) {
        return this.optional(element) || /^[0-9]{7,8}-[0-9Kk]{1}$/.test(value);
    }, 'El RUT ingresado es inválido');

    $.validator.addMethod('rutdv', function(value, element) {
        return this.optional(element) || validaDV(value);
    }, 'El dígito verificador del RUT es inválido');
};
