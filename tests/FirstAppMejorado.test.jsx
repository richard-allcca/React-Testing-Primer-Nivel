import { render, screen } from '@testing-library/react';

// import { FirstApp } from '../FirstApp';
import { FirstApp } from './../src/FirstApp';


describe('Pruebas en <FirstApp/>', () => {

  const title = 'Hola, Soy Goku';
  const subTitle = 'Soy un subtítulo';

  test('should hacer match con el snapshot', () => {
    const { container } = render(<FirstApp title={title} />);

    expect(container).toMatchSnapshot();
  })


  test('should retornar el mensaje "Hola, Soy Goku', () => {
    render(<FirstApp title={title} />);
    // screen.debug(); //? muestra el contenido completo de body en el html 

    expect(screen.getByText(title)).toBeTruthy();
    // expect(screen.getByText(title)).not.toBeTruthy();//? negacion de toBeTruthy
  })


  test('should mostrar el titulo en un h1', () => {
    render(<FirstApp title={title} />);

    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title);
  })


  test('should mostrar el subtitulo enviado por props', () => {
    render(<FirstApp title={title} subTitle={subTitle} />);

    expect(screen.getByText(subTitle).innerHTML).toContain(subTitle);
    expect(screen.getAllByText(subTitle).length).toBe(1);
  })

})