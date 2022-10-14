
import { render, screen, fireEvent } from '@testing-library/react';
// import { CounterApp } from '../CounterApp';
import { CounterApp } from './../src/CounterApp';

describe('Pruebas en el <Counterapp/>', () => {

   const valor = 100;

   test('should hacer match con el snapshot', () => {
      const { container } = render(<CounterApp value={ valor } />);

      expect(container).toMatchSnapshot();
   })


   test('should mostrar el valor inicial de 100', () => {

      render(<CounterApp value={ valor } />);

      expect(screen.getByText(valor)).toBeTruthy();
      //? busca por rol(etiqueta semantica html) y su nivel en el html(h2 = nivel 2)
      expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain('100');
   })


   test('should de incrementar con el botón +1', () => {

      render(<CounterApp value={ valor } />);
      //? fireEvent, contiene todos los eventos del Dom
      fireEvent.click(screen.getByText('+1'));

      expect(screen.getByText('101')).toBeTruthy();

   })


   test('should de decrementar con el botón -1', () => {

      render(<CounterApp value={ valor } />);
      //? fireEvent, contiene todos los eventos del Dom
      fireEvent.click(screen.getByText('-1'));

      // screen.debug(); //? muestra el contenido completo de body en el html
      expect(screen.getByText('99')).toBeTruthy();

   })


   test('should funcionar el botón de reset', () => {

      render(<CounterApp value={ valor } />);
      fireEvent.click(screen.getByText('+1'));
      fireEvent.click(screen.getByText('+1'));
      fireEvent.click(screen.getByText('+1'));
      // screen.debug(); //? muestra el contenido completo de body en el html

      // fireEvent.click(screen.getByText('Reset'));//? captura por contenido
      fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));// por nombre

      expect(screen.getByText(100)).toBeTruthy();
   })

})