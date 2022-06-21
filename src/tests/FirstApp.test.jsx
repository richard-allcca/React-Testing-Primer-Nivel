import { render } from "@testing-library/react"
import { FirstApp } from "../FirstApp";

describe('Pruebas en <FirstApp/>', () => {

  /**
   * ? comentado para evitar erroes con el snapshot
   * Test del snapshot comentada para hacer pruebas en el mismo archivo sin que de error por el cambio del estado del comonente
   */

  // test('debe de hacer match con el snapshot', () => {

  //     const title = 'Hola, Soy Vegeta';
  //     const container = render(<FirstApp title={title} />);

  //     expect(container).toMatchSnapshot();
  //   })

  test('should retornar el título en un h1', () => {

    const title = 'Hola, Soy Goku';
    const { container, getByText, getByTestId } = render(<FirstApp title={title} />);
    expect(getByText(title)).toBeTruthy();

    /**
     * incluso muestra el error de espacios en blanco 
     * toContain - muestra el texto en el html con + detalle de error
     *? comentado para hacer las pruebas mas flexibles
     */

    // const h1 = container.querySelector('h1');
    // expect(h1.innerHTML).toBe(title);
    // expect(h1.innerHTML).toContain(title.trim());

    /**
     * Prueba creando un data-testId en el html
     * igual que con la prueba anterior se puede usar "toBe" o "toContain"
     */
    // expect(getByTestId('test-title').innerHTML).toContain(title);
    expect(getByTestId('test-title').innerHTML).toBe(title);

  })


  test('should mostrar el subtitulo enviado por props', () => {

    const title = 'Hola, Soy Goku';
    const subTitle = 'Soy un subtítulo';
    const { getByText } = render(
      <FirstApp title={title} subTitle={subTitle} />
    );

    /**
     * en caso de tener mas de 1 element con el mismo texto se puede usar el getAllByText, devuelve un array para contar los elementos encontrados 
     */
    expect(getByText(subTitle)).toBeTruthy();
    // expect(getAllByText(subTitle).length).toBe(2);
  })

})