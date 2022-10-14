import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";


describe('Pruebas en 08-imp-exp', () => {


   test('debe retornar un heroe por id', () => {

      const id = 2
      const heroe = getHeroeById(id);
      const heroeEsperado = {
         id: 2,
         name: "Spiderman",
         owner: "Marvel"
      }

      expect(heroe).toEqual(heroeEsperado);

   })

   test('debe retornar undefined si no existe el id', () => {

      const id = 12
      const heroe = getHeroeById(id);

      //  espera que sea undefined
      expect(heroe).toEqual(undefined);

      // espera que sea un valor falsy (null, undefined, 0, false, '')
      expect(heroe).toBeFalsy();

   })

   test('debe retornar un arreglo de heroes de DC', () => {

      const owner = 'DC'
      const heroesDc = getHeroesByOwner(owner)

      // se espera que sean 3 heroes
      expect(heroesDc.length).toBe(3);
      // se espera que sea un arreglo igual al ejemplo
      expect(heroesDc).toEqual([
         {
            id: 1, name: 'Batman', owner: 'DC'
         },
         {
            id: 3, name: 'Superman', owner: 'DC'
         },
         {
            id: 4, name: 'Flash', owner: 'DC'
         }
      ])

   })

   test('debe retornar un arreglo de heroes de Marvel', () => {

      const owner = 'Marvel'
      const heroesMarvel = getHeroesByOwner(owner)

      // se espera que sean 2 heroes
      expect(heroesMarvel.length).toBe(2);

      // se espera que sea un arreglo igual al ejemplo
      expect(heroesMarvel).toEqual([
         { id: 2, name: 'Spiderman', owner: 'Marvel' },
         { id: 5, name: 'Wolverine', owner: 'Marvel' }
      ])

   })

})