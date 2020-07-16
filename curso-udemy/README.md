# CURSO REACT UDEMY 
<br>

## REACT
<br><br>

### React es Declarativa

Programación Declarativa vs Programación Imperativa

* Diferencias
En los programas imperativos un porcentaje muy alto del código está dedicado a controlar la secuencia de ejecución. En un lenguaje declarativo no existen dichas instrucciones.
Los lenguajes declarativos ofrecen menores costos de desarrollo y mayor ﬁabilidad debido al menor número de líneas que son requeridas, lo que conlleva a un menor número de errores

* Programación Declarativa Programación Imperativa
La programación declarativa describe el problema que se quiere solucionar, pero no las instrucciones necesarias para hacerlo, mientras que en la programación imperativa se detallan las instrucciones necesarias para llegar a la solución.
Los programas declarativos incluyen menos detalles que sus contrapartidas imperativas.

Ejemplo

* Imperativo
    1. Ve a la cocina
    2. Abre la nevera
    3. Coge el pollo
    4. Prepara el pollo
    5. Sirve el pollo

* Declarativa

    1. Quiero pollo

<br><br>

### React esta basada en componentes


* Divide la interfaz en trozos mas pequeños y reusables.

* Puedes crear nuevos componentes usando componentes mas pequeños.

* Cada componente encapsula su estado.

* Codigo mas reusable, Pequeño y mantenible.

<br><br>

### Programacion reactiva

* Cada componente "Reacciona" y se vueleve a renderizar cuando se produze un cambio de estado o le llegan nuevas propiedades

<br><br>


### Usa el Virtual DOM y Diffing

* Genera una copia del arbol de elementos del navegador para solo hacer los minimos cambios necesarios para reflejar el estado de nuestro componentes.
<br>

<img src="src/assets/img/virtual-dom.png" width="500px">

<br><br><br>


### Eventos sinteticos (Soluciona el problema antiguo de los eventos click)

* Abstracion de los eventos nativos de los navegadores

* Compatibilidad cross browsing sin necesidad de mas librerias

* Soporte para todos los eventos que puedas necesitar desde click y double click, Hasta eventos moviles como touchstart y touchend.

<br>

### Server Side Rendering

* Puedes renderizar tu aplicacion de React desde el servidor, Perfecto para SEO y performance.

<br>


### JSX

* Cosas que se pueden hacer con JSX

const element = <h1> Hola Mundo </h1>;

------------------------------------------------

const element = <h1> { 2 + 2 } Hola Mundo </h1>;

------------------------------------------------

function multiplicar (a, b) {
    return a * b
}

const element = <h1> { multiplicar (2, 2) } Hola Mundo </h1>;

<br>

* Expresiones ternarias

function multiplicar (a, b) {
    return a * b
}

const mostrarMultiplicacion = true

const element = <h1> { mostrarMultiplicacion ?  multiplicar (2, 2) : 'Nada que mostrar' } Hola Mundo </h1>;


* Atributos

const image = <img src='http://url-con-image.jpg' />

-------------------------------------------------------

const url = 'http://url-con-image.jpg' 
const image = <img src={url}>

<br>

* Children (2 elementos de react guardados en una misma variable)

// Esto mo se puede hacer  
const element = <h1> Hola</h1> <h2> Hola 2</h2> 

// De esta forma si (Metidos en un DIV)
const element = <div> <h1> Hola</h1> <h2> Hola 2</h2> </div> 
















This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
