import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import heroes from './../../data/heroes';


describe('Prueba en 08-imp-exp', () => {

  test('getHeroById debe retornar un héroe por id', () => {

    const oneHeroe = {
      id: 1,
      name: 'Batman',
      owner: 'DC'
    }

    const heroeResp = getHeroeById(1);

    expect(heroeResp).toEqual(oneHeroe);
  })

  test('getHeroById debe retornar undefined si no existe el id', () => {

    const oneHerow = undefined;

    const heroeResp = getHeroeById(10);

    expect(heroeResp).toEqual(oneHerow);
  })

  test('getHeroesByOwner debe retornar heroes de Dc', () => {

    const owner = 'Dc';

    const heroesDc = heroes.filter((heroe) => heroe.owner = owner);

    const heroesResp = getHeroesByOwner(owner);

    expect(heroesResp).toEqual(heroesDc);
  })

  test('hegHeroesByOwner debe retornar heroes de Marvel', () => {

    const owner = 'Marvel'
    const heroesDc = heroes.filter((heroe) => heroe.owner === owner)

    const heroesResp = getHeroesByOwner(owner);

    expect(heroesResp).toEqual(heroesDc);
  })

}) 