import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";

describe("Prueba en 09-promesas", () => {

  /**
   *? Done permite esperar que se ejecute una función asyncrona
 */

  test("getHeroeByIdAsync debe retornar un héroe", (done) => {
    const id = 1;

    getHeroeByIdAsync(id)
      .then((hero) => {

        expect(hero).toEqual({
          id: 1,
          name: "Batman",
          owner: "DC",
        });

        done();
      });
  });

  test("getHeroeByIdAsync debe retornar un Error si heroe no exite", (done) => {
    const id = 100;

    getHeroeByIdAsync(id)
      .catch((error) => {

        expect(error).toBe(`No se pudo encontrar el héroe con el id: ${id}`)

        done();
      });
  });

});

// Nota de Error
/* 
A worker process has failed to exit gracefully and has been force exited. This is likely caused by tests leaking due to improper teardown. Try running with --detectOpenHandles to find leaks. Active timers can also cause this, ensure that .unref() was called on them.
 */
