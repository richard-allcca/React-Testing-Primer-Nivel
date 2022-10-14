import { render } from "@testing-library/react"
import { FirstApp } from './../src/FirstApp';


describe('Pruebas en <FirstApp/>', () => {


   test('debe de hacer match con el snapshot', () => {

      /**
       * comentada para pruebas en el mismo archivo, evita errores por el cambio de estado de componente
       */

      //     const title = 'Hola, Soy Vegeta';
      //     const container = render(<FirstApp title={title} />);

      //     expect(container).toMatchSnapshot();

   })


   test('should mostrar el título en un h1', () => {

      const title = 'Hola, Soy Goku';

      const { container, getByText, getByTestId } = render(<FirstApp title={ title } />);

      /** ==========================================================
       * getByText: Obtiene el texto especificado en el elemento 
       * Se espera que el h1 contenga el texto 'Hola, Soy Goku'
       */

      expect(getByText(title)).toBeTruthy();

      /** ==========================================================
       * toContain - muestra el texto en el html con + detalle de error
       * incluso muestra el error de espacios en blanco
       * comentado para hacer las pruebas mas flexibles
       */

      // expect(h1.innerHTML).toContain(title.trim());

      /** ==========================================================
      * Se espera que el h1 contenga la propiedad title con 'Hola, Soy Goku'
       */

      // const h1 = container.querySelector('h1');
      // expect(h1.innerHTML).toBe(title);

      /** ==========================================================
       * Prueba creando un (custom property) data-testId en el html
       * igual que con la prueba anterior se puede usar "toBe" o "toContain"
       */

      // expect(getByTestId('test-title').innerHTML).toContain(title);
      expect(getByTestId('test-title').innerHTML).toBe(title);

   })


   test('should mostrar el subtitulo enviado por props', () => {

      const title = 'Hola, Soy Goku';
      const subTitle = 'Soy un subtítulo';
      const { getByText } = render(
         <FirstApp title={ title } subTitle={ subTitle } />
      );

      /**
       * Se espera que el subtitle contenga el texto 'Soy un subtítulo'
       */
      expect(getByText(subTitle)).toBeTruthy();

      /**
       * getAllByText en caso de tener mas de 1 element con el mismo texto se puede usar el getAllByText, devuelve un array para contar los elementos encontrados 
       */

      // expect(getAllByText(subTitle).length).toBe(2);

   })

})