# CURSOS, EJERCICIOS Y PROYECTOS CON REACT

<br>

## Tabla de contenido

- [REQUISITOS](#requisitos)
  - [1. Instalacion de NodeJS](#1.-Instalacion-de-NodeJS)
  - [2. Instalacion de NPM, YARN o NPX](#2.-instalacion-de-npm,-yarn-o-npx)
  - [3. Instalacion de Create React](#3.-Instalacion-de-Create-React-App)



<br><br>

## REQUISITOS

### 1. Instalacion de NodeJS

* Desde Linux

    Pagina web: https://nodejs.org
    <br>
    Instalacion: https://nodejs.org/es/download/package-manager/

* Desde Windows

    Pagina web: https://nodejs.org
    <br>
    Instalacion: https://nodejs.org/es/download/

* Desde Mac

    Pagina web: https://nodejs.org
    <br>
    Instalacion: https://nodejs.org/es/download/


<br>

### 2. Instalacion de NPM, YARN o NPX

* NPX (Recomendado)

    Pagina web : https://www.npmjs.com/
    <br>
    Instalacion : https://yarnpkg.com/getting-started/install

* NPM

    Pagina web : https://www.npmjs.com/
    <br>
    Instalacion : https://yarnpkg.com/getting-started/install

* YARN

    Pagina web : https://yarnpkg.com/
    <br>
    Instalacion : https://yarnpkg.com/getting-started/install


<br>

### 3. Instalacion de Create React App

Instalacion desde cualquier consola del SO

npm install -g create-react-app

npm create-react-app my-app
cd my-app
npm start

NOTA IMPORTANTE: Es recomendable usar NPX ( No necesita instalacion previa y siempre busca y descarga la ultima version )

    - JavaScript
        npx create-react-app my-app

        or

        yarn create-react-app my-app
    

    - TypeScript
        npx create-react-app my-app --template typescript

        or

        yarn create react-app my-app --template typescript





* ======================================================================

### 4. Convertir proyecto React JavaScript a React TypeScript

    - Instalar Types

        npm install --save typescript @types/node @types/react @types/react-dom @types/jest

        # or

        yarn add typescript @types/node @types/react @types/react-dom @types/jest

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