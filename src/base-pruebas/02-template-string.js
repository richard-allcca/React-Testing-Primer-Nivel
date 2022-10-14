
export function getSaludo(nombre) {
   return 'Hola ' + nombre;
}

let nombre = 'Cristina';

console.log(`Este es un texto: ${getSaludo(nombre)}  `);