import { retornaArreglo } from "../../base-pruebas/07-deses-arr"

describe('Pruebas en 07-deses-arr', () => {

  test('debe retornar un string y un número', () => {

    const [letters, numbers] = retornaArreglo()

    expect(letters).toBe('ABC');
    expect(numbers).toBe(123);

    expect(typeof letters).toBe('string');
    expect(typeof numbers).toBe('number');

    /**
     * expect anidado luego de toStrictEqual esta esperando cualquier tipo de string
     */
    expect(letters).toStrictEqual(expect.any(String));
  })
})