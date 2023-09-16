const regiones = [
    {
        id: 15,
        nombre: 'Región de Arica y Parinacota'
    },
    {
        id: 1,
        nombre: 'Región de Tarapacá'
    },
    {
        id: 2,
        nombre: 'Región de Antofagasta'
    },
    {
        id: 3,
        nombre: 'Región de Atacama'
    },
    {
        id: 4,
        nombre: 'Región de Coquimbo'
    },
    {
        id: 5,
        nombre: 'Región de Valparaíso'
    },
    {
        id: 13,
        nombre: 'Región Metropolitana de Santiago'
    },
    {
        id: 6,
        nombre: 'Región del Libertador General Bernardo O\'Higgins'
    },
    {
        id: 7,
        nombre: 'Región del Maule'
    },
    {
        id: 8,
        nombre: 'Región del Biobío'
    },
    {
        id: 16,
        nombre: 'Región de Ñuble'
    },
    {
        id: 9,
        nombre: 'Región de la Araucanía'
    },
    {
        id: 14,
        nombre: 'Región de Los Ríos'
    },
    {
        id: 10,
        nombre: 'Región de Los Lagos'
    },
    {
        id: 11,
        nombre: 'Región de Aysén del General Carlos Ibáñez del Campo'
    },
    {
        id: 12,
        nombre: 'Región de Magallanes y de la Antártica Chilena'
    }
]

/**
 * Función que carga las regiones en el select de regiones.
 */
export function cargarRegiones() {
    const select = $('#region');
    select.append(regiones.map(region => `<option value="${region.id}">${region.nombre}</option>`));
    console.log('Cargando regiones...');
}