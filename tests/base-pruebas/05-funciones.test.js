import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {

  test('getUser debe retornar un objeto', () => {

    const testUser = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    }

    const user = getUser();

    // expect(testUser).toEqual(user); //? similares
    expect(testUser).toStrictEqual(user);

  })

  test('getUserActivo debe retornar un objeto', () => {

    const name = "Richard"
    const testUser = {
      uid: 'ABC567',
      username: name
    };
    const userActivo = getUsuarioActivo(name);

    expect(userActivo).toEqual(testUser);

  })

})