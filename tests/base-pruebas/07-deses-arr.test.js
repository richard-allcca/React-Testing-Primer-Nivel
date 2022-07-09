
import { retornaArreglo } from './../../src/base-pruebas/07-deses-arr';

describe('Pruebas en 07-deses-arr', () => {


  test('debe retornnar un retornaArreglo', () => {

    // const arr = [ 'ABC', 123 ];
    const [ letters, numbers ] = retornaArreglo();

    // test de contenido especifico
    expect(letters).toBe('ABC');
    expect(numbers).toBe(123);

    // test de tipo de contenido
    expect(typeof letters).toBe('string');
    expect(typeof numbers).toBe('number');

    // test flexible, puede ser cualquier tipo de contenido
    expect(letters).toEqual(expect.any(String));
    expect(numbers).toEqual(expect.any(Number));

  })

})