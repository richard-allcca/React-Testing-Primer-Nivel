# Test en React

- Primer nivel de Testing en React

## Enlaces

[Web Oficial Jest](https://jestjs.io/)
[React Testing Library](https://testing-library.com/docs/react-testing-library/intro)

## Dependencies

    npm i jest --save-dev
    npm i @types/jest --save-dev
    npm i --save-dev babel-jest @babel/core @babel/preset-env
    npm i isomorphic-fetch -D (crea el jest.config y modifica el jest.setup)
    npm i --save-dev @testing-library/react
    npm i @babel/preset-react

## Tests siempre escuchando cambios

- Modifica el script para Jest

    "test": "jest --watchAll"
