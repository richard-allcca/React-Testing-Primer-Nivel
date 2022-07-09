import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas en el archivo 02-template-string', () => {

  test('should return greeting', () => {

    const name = "Richard";
    const greeting = getSaludo(name);
  })

})