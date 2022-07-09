
import { getHeroeByIdAsync } from './../../src/base-pruebas/09-promesas';


describe('Pruebas en 09 promesas', () => {

  test(' getHeroeByIdAsync debe retornar un heroe', (done) => {

    const id = 2;
    getHeroeByIdAsync(id)
      .then(data => {

        expect(data).toEqual({
          id: 2,
          name: "Spiderman",
          owner: "Marvel"
        });

        done();
      })
  })

  test('getHeroeByIdAsync debe retornar un error si heroe no existe', (done) => {

    const id = 7;
    getHeroeByIdAsync(id)
      .then(data => {

        // ? se espera que la busqueda del heroe sea false
        expect(data).toBeFalsy();

        done();
      }).catch(err => {

        expect(err).toBe(`No se pudo encontrar el héroe con el id: ${id}`);

        done();
      })
  })

})