import { getSaludo } from "../../base-pruebas/02-template-string";

describe('Debe retornar un saludo', () => {

  test('getSaludo de retornar "Hola Richard', () => {

    const name = 'Richard';
    const message = getSaludo(name);

    expect(message).toBe(`Hola ${name}`);

  })
})