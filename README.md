
# REACT - CURSOS, CONVENCION (ACUERDOS), EJERCICIOS Y PROYECTOS

<br>

## Tabla de contenido

- [REQUISITOS](#requisitos)
  - [1. Instalacion de NodeJS](#1.-Instalacion-de-NodeJS)
  - [2. Instalacion de NPM, YARN o NPX](#2.-instalacion-de-npm,-yarn-o-npx)
  - [3. Instalacion de Create React](#3.-Instalacion-de-Create-React-App)

- [CONVENSIONES & ACUERDOS - NC](#CONVENSIONES-&-ACUERDOS---NC)
    - [1. CREACION DE PROYECTOS](#1.-CREACION-DE-PROYECTOS)
    - [2. CARPETA ASSETS](#2.-CARPETA-ASSETS)
    - [3. CARPETA IMG](#3.-CARPETA-IMG)
    - [4. CARPETA STYLES](#4.-CARPETA-STYLES)
    - [5. CARPETA COMPONENTS](#5.-CARPETA-COMPONENTS)
    - [6. CARPETA DATA](#6.-CARPETA-DATA)
    - [7. CARPETA LANGUAGE](#7.-CARPETA-LANGUAGE)
    - [8. CARPETA ROUTES](#8.-CARPETA-ROUTES)
    - [9. CARPETA TESTS](#9.-CARPETA-TESTS)
    - [10. CARPETA VIEWS](#10.-CARPETA-VIEWS)
    - [11. CARPETA UTILS](#11.-CARPETA-UTILS)
    - [12. CARPETA MUTATIONS](#12.-CARPETA-MUTATIONS)
    - [13. CARPETA QUERYS](#13.-CARPETA-QUERYS)
    - [14. IMAGEN DE LA ESTRUCTURA DE CARPETAS](#14.-IMAGEN-DE-LA-ESTRUCTURA-DE-CARPETAS)

- [REACT - REACT.JS - REACTJS](#REACT---REACT.JS---REACTJS)
    - [Que es React](#Que-es-React)
    - [React es Declarativa](#React-es-Declarativa)
    - [React esta basada en componentes](#React-esta-basada-en-componentes)
    - [Programacion reactiva](#Programacion-reactiva)
    - [Usa el Virtual DOM y Diffing](#Usa-el-Virtual-DOM-y-Diffing)
    - [Eventos sinteticos (Soluciona el problema antiguo de los eventos click)](#Eventos-sinteticos-(Soluciona-el-problema-antiguo-de-los-eventos-click))
    - [Server Side Rendering](#Server-Side-Rendering)
    - [JSX](#JSX)
    - [WebPack](#WebPack)
    - [Carpetas y archivos creados por create-react-app](#Carpetas-y-archivos-creados-por-create-react-app)

- [REACT BASICO](#REACT-BASICO)
    - [REACT Y REACT DOM](#REACT-Y-REACT-DOM)
    - [COMPONENTES](#COMPONENTES)
    - [COMPONENTE CON FUNCTIONS](#COMPONENTE-CON-FUNCTIONS)
    - [COMPONENTE ARROW FUNCTIONS](#COMPONENTE-ARROW-FUNCTIONS)
    - [COMPONENTE CON CLASES](#COMPONENTE-CON-CLASES)
    - [COMPONENTES MATERIAL UI](#COMPONENTES-MATERIAL-UI)
    - [COMPONENTES CREATIVE TIM](#COMPONENTES-CREATIVE-TIM)
    - [COMPONENTES NC](#COMPONENTES-NC)
    - [REACT-ROUTER-DOM](#REACT-ROUTER-DOM)
    - [HISTORY](#HISTORY)
    - [PATH](#PATH)
    - [FUENTES TIPOGRAFICAS](#FUENTES-TIPOGRAFICAS)

    - [PROPS (PROPIEDADES)](#PROPS-(PROPIEDADES))
    - [STATE (ESTADO)](#STATE-(ESTADO))


- [STYLES](#STYLES)
    - [STYLES IN LINE](#STYLES-IN-LINE)
    






<br><br>

## REQUISITOS

<br>

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

### 2. Instalacion de NPM o YARN

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

    * Instalacion desde cualquier consola del SO

    npm install -g create-react-app

    npm create-react-app my-app
    cd my-app
    npm start

    NOTA IMPORTANTE: Es recomendable usar NPX ( No necesita instalacion previa y siempre busca y descarga la ultima version )

    npx create-react-app my-app
    cd my-app
    npm start



<br><br>
* =======================================================================================================================================
<br><br>



## CONVENSIONES & ACUERDOS - NC

<br>

### 1. CREACION DE PROYECTOS
    * La creacion de proyectos se hara con el paquete o comando create-react-app, Y se usara NPX en lugar de NPM.

        Ejemplo de carpeta:

        npx create-react-app myapp

    
### 2. CARPETA ASSETS

    * ASSETS : Carpeta donde se guardara las imagenes y estilos, Su nombre debe estar escrito totalmente en minuscula.

        Ejemplo de carpeta: assets


### 3. CARPETA IMG
               
    * IMG : Carpeta donde se almacenaran las imagenes, Su nombre debe de estar escrito totalmente en minuscula.
            Debe de estar dentro de assets.

            Ejemplo de carpeta: img

### 4. CARPETA STYLES
                
    * STYLES : Carpeta donde se almacenaran los estilos, Su nombre debe de estar escrito totalmente en minuscula.
        Debe de estar dentro de assets, Y sus estilos se haran en JavaScript.

        Ejemplo de carpeta: styles


    * NOTAS IMPORTANTES : 

        No se usara la carpeta CSS ni archivos con extension .css, En su lugar se haran los estilos en JavaScript con extension .js
        No usar la extension .jss , En su lugar hacerlo con .js

### 5. CARPETA COMPONENTS

    * COMPONENTS : Carpeta donde almacenara los componentes creados por NC, Su nombre debe de estar escrito totalmente en minuscula.
        Deben estar hechos en extension .js

        Ejemplo de carpeta : components

### 6. CARPETA DATA

    * CARPETA DATA : La carpeta de DATA es donde se almacenara todos los datos del proyecto (Datos que se usaran DropDowList, Tablas alternas y algunos componentes )
        Su nombre debe de estar escrito totalmente en minuscula.
        Nota aclaratoria: Estos datos no son los de la base de datos del proyecto (Datos alternos a la base de datos principal).

        Ejemplo de carpeta : data
        Ejemplo de datos: Paises, Tipos de documentacion, etc.



### 7. CARPETA LANGUAGE

    * CARPETA LANGUAGE : La carpeta language se usa para almacenar los lenguajes del proyecto en caso de que el proyecto se vaya a desarrollar en varios idiomas.
        Si el proyecto solo va a tener un lenguaje no sera necesario crearla. Su nombre debe de estar escrito totalmente en minuscula.

        Ejemplo de la carpeta: language


### 8. CARPETA ROUTES

    * CARPETA ROUTES : La carpeta routes almacenara todas las rutas del proyecto, Su nombre debe de estar escrito totalmente en minuscula.
        
        Ejemplo de carpeta : routes


### 9. CARPETA TESTS

    * CARPETA TESTS : La carpeta tests es donde se almacenaran todos los scripts para hacer los testeos al proyecto, Su nombre debe de estar escrito 
        totalmente en minuscula.
        Deben de estar hechos con extension .test.js  nombre.test.js 

        Ejemplo de carpeta: tests


### 10. CARPETA VIEWS

    * CARPETA VIEWS : La carpeta views es donde se almacenaran todos los archivos o objetos visuales, Su nombre debe de estar escrito totalmente en minuscula.
        Si el proyecto es muy grande se pueden crear subcarpetas para una mejor organizacion.    

        Nota importante: En modo de desarrollo(Cuando se esta haciendo) pueden estar en .jsx si se prefiere, Una vez finalizado deben cambiarse a .js

        Ejemplo de carpeta: views


### 11. CARPETA UTILS

    * CARPETA UTILS :  La carpeta utils es donde se almacenara todas las utilidades del componente visual como archivos logicos, procesos y 
        archivos que complementen el desarrollo del objeto visual, Su nombre debe de estar escrito totalmente en minuscula.
        Debe de estar dentro de views y si se crearon subcarpetas, Dentro de estas

        Ejemplo de carpeta: utils


### 12. CARPETA MUTATIONS

    * CARPETA MUTATIONS : La carpeta mutations es donde se almacenaran todas las mutaciones en caso de que el proyecto este enlazando con bases de datos 
    y use GraphQL y/o Apollo.
    Su nombre debe de estar escrito totalmente en minuscula. Va dentro de views o la subcarpeta del objeto.

    Ejemplo de carpeta : mutations


### 13. CARPETA QUERYS

    * CARPETA QUERYS : La carpeta querys se usa para almacenar las consultas en caso de que el proyecto este enlazando con bases de datos 
    y use GraphQL y/o Apollo.
    Su nombre debe de estar escrito totalmente en minuscula. Va dentro de views o la subcarpeta del objeto.

    Ejemplo de carpeta : querys


### 14. IMAGEN DE LA ESTRUCTURA DE CARPETAS

<img src="src/assets/img/carpetas-react.png">





<br><br>
* =======================================================================================================================================
<br><br>


## REACT - REACT.JS - REACTJS


### Que es React

    * React (también llamada React.js o ReactJS) es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. Es mantenido por Facebook y la comunidad de software libre. Han participado en el proyecto más de mil desarrolladores diferentes. 1​

    React intenta ayudar a los desarrolladores a construir aplicaciones que usan datos que cambian todo el tiempo. Su objetivo es ser sencillo, declarativo y fácil de combinar. React sólo maneja la interfaz de usuario en una aplicación; React es la Vista en un contexto en el que se use el patrón MVC (Modelo-Vista-Controlador) o MVVM (Modelo-vista-modelo de vista). También puede ser utilizado con las extensiones de React-based que se encargan de las partes no-UI (que no forman parte de la interfaz de usuario) de una aplicación web.

    React fue creada por Jordan Walke, un ingeniero de software en Facebook, inspirado por los problemas que tenía la compañía con el mantenimiento del código de los anuncios dentro de su plataforma. Enfocado en la experiencia del usuario y la eficiencia para sus programadores, influenciado por XHP (un marco de componentes de HTML para PHP), nace el prototipo ReactJS.


<br>

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

<br>


### React esta basada en componentes

    * Divide la interfaz en trozos mas pequeños y reusables.

    * Puedes crear nuevos componentes usando componentes mas pequeños.

    * Cada componente encapsula su estado.

    * Codigo mas reusable, Pequeño y mantenible.

<br>


### Programacion reactiva

    * Cada componente "Reacciona" y se vuelve a renderizar cuando se produce un cambio de estado (state) o le llegan nuevas propiedades (props)

<br>


### Usa el Virtual DOM y Diffing

    * DOM - Document Object Model 
    Genera una copia del arbol de elementos del navegador para solo hacer los minimos cambios necesarios para reflejar el estado de nuestro componentes.

<br>
<img src="src/assets/img/virtual-dom.png" width="500px">
<br><br>


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



### WebPack

    * Webpack es un paquete de módulos JavaScript de código abierto . [2] [3] [4] [5] [6] Es un paquete de módulos principalmente para JavaScript, pero puede transformar activos front-end como HTML, CSS e imágenes si se incluyen los cargadores correspondientes. [7] webpack toma módulos con dependencias y genera activos estáticos que representan esos módulos. [8]

    webpack toma las dependencias y genera un gráfico de dependencia que permite a los desarrolladores web utilizar un enfoque modular para sus propósitos de desarrollo de aplicaciones web. Se puede usar desde la línea de comandos o se puede configurar usando un archivo de configuración que se denomina webpack.config.js . Este archivo se utiliza para definir reglas, complementos, etc., para un proyecto. (Webpack es altamente extensible a través de reglas que permiten a los desarrolladores escribir tareas personalizadas que desean realizar al agrupar archivos).

    Node.js es necesario para usar webpack.


### Carpetas y archivos creados por create-react-app

    * CARPETAS

        - SRC : Carpeta Source. Es la carpeta donde se realiza todo el desarrollo del proyecto

        - NODE_MODULES : Es la carpeta donde se almacenan todas las dependencias del proyecto

        - PUBLIC : Es la carpeta donde estan todos los archivos iniciales de HTML


    * ARCHIVOS

        * FUERA DEL SOURCE
        
            - .GITIGNORE : Archivo que contiene todas la lista de cosas que se van a ignorar al usar GIT.

            - PACKAGE.JSON : El archivo package.json almacena toda la configuracion del proyecto

            - PACKAGE-LOCK.JSON : El archivo package-lock.json se genera cuando se hace el npm install. Y contiene todo el registro detallado
                de las dependencias instaladas.

            - README.md : El archivo README.md es un archivo de texto con esxtension .md (Markdown - Marcado Ligero). Y nos permite crear un manual
                o archivo de lectura con textos enriquezidos, Links, Titulos, Subtitulos, Textos, Imagenes, Videos. De una forma muy rapida.

        
        * DENTRO DEL SOURCE

            - INDEX.JS : El archivo index.js es el archivo de arranque del proyecto.

            - APP.JS : El App.js es un componente de ejemplo.

            - APP.CSS : El App.js tiene los estilos de el componente App.js

            - INDEX.CSS : El index.css tiene los estilos del index.js

            - SERVICEWORKER.JS : El modulo serviceWorker.js le aporta ciertas capacidades a la tecnologia React como: Crear aplicaciones de escritorio,
                Aplicaciones web, App (Aplicaciones moviles), Poder ejecutar un a aplicacion web sin estar conectado a internet.

            - SETUPTESTS.JS : setupTest.js es donde se almacena la configuracion de los testeos del proyecto.




<br><br>
* =======================================================================================================================================
<br><br>



## REACT BASICO
<br>


### REACT Y REACT DOM

    * REACT : React es el punto de entrada a la biblioteca de React. Si se carga React desde una etiqueta <script>, estas API de alto nivel estarán 
        disponibles en el   React global. Si se usa ES6 con npm se puede escribir import React from 'react'. 
        Si se usa ES5 con npm, se puede escribir var React = require('react').


    * REACT DOM : El paquete react-dom proporciona métodos específicos del DOM que pueden ser utilizados en el nivel más alto de tu aplicación 
        como una vía de escape del modelo de React si así lo necesitas. La mayoría de tus componentes no deberían necesitar usar este módulo.

        Si cargas React desde una etiqueta <script>, estas APIs de alto nivel estarán disponibles en la variable global ReactDOM. 
        Si usas ES6 con npm, puedes escribir import ReactDOM from 'react-dom'. Si usas ES5 con npm, puedes escribir var ReactDOM = require('react-dom').



<br>

### COMPONENTES

    * Los componentes permiten separar la interfaz de usuario en piezas independientes, reutilizables y pensar en cada pieza de forma aislada.

    * Conceptualmente, los componentes son como las funciones de JavaScript. Aceptan entradas arbitrarias (llamadas “props”) y devuelven a 
        React elementos que describen lo que debe aparecer en la pantalla.
    
    * Existen 3 formas en react para crear componentes. Con Funciones, Con Arrow Functions y Clases.

    * Los componentes con funciones tiene una forma adicional de crearlos, ques es el Arrow Functions 


<br>

### COMPONENTE CON FUNCTIONS

    * La forma más sencilla de definir un componente es escribir una función de JavaScript.

    * Esta función es un componente de React válido porque acepta un solo argumento de objeto “props” (que proviene de propiedades) 
        con datos y devuelve un elemento de React. Llamamos a dichos componentes “funcionales” porque literalmente son funciones JavaScript.

    * Las funciones solo aceptan propiedades (props) - (Las clases si aceptan Props y State)


    * Codigo ejemplo de componente creado con una funcion


        import React from "react";

        function HolaMundo() {

            return (

                <div>
                    <h2> !!! Hola Mundo !!! </h2>
                </div>
            
            );
        }

        export default HolaMundo;


<br>

### COMPONENTE ARROW FUNCTIONS

    * FUNCION FLECHA : Arrow Function = Funcion flecha
    

    * Es una forma rapida y nueva de hacer compoonentes y salio en la version ES6 - Ecma Script 2015


    * Codigo de ejemplo:


        import React from 'react';

        const ComponenteArrowFunctions = () => 
        <div>
            <h2> Este es un componente Arrow Functions </h2>
        </div>

        export default ComponenteArrowFunctions



<br>

### COMPONENTE CON CLASES

    * Los componentes con clases nacieron con el ES6 - ECMAScript 2015

    * Los componentes con clases tienen ciertas caracteristicas adicionales heredadas de React.Component que lo hacen en la mejor 
        forma de crear componentes.

    * Algunas de las caracteristicas adicionales de componentes creados con clases es que se puede darle uso a los State y el Render.


    * Codigo de ejemplo:

        import React from 'react';

        class ComponenteConClases extends React.Component {

            render(){

                return(
                    <h2> Este es un componente hecho con clases </h2>
                )
                
            } 

        }

        export default ComponenteConClases;


<br>




### COMPONENTES MATERIAL UI

    * Instalacion

        - 1. // usando npm (En consola y Dentro del proyecto)
                npm install @material-ui/core

            // usando yarn
                yarn add @material-ui/core

        - 2. Fuente Roboto
                Material-UI fue diseñado con la fuente Roboto en mente. Así que asegúrate de seguir estas instrucciones . 
                Por ejemplo, a través de Google Web Fonts:

                Este link se debe pegar en el index.html (Dentro del head) que esta en la carpeta public del proyecto react.
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

        - 3. Fuente de Iconos
                Para poder utilizar la fuente del componente Icon, primero debes agregar la fuente Material icons. Aquí hay algunas instrucciones sobre cómo hacerlo. 
                Por ejemplo, a través de Google Web Fonts:

                Este link se debe pegar en el index.html (Dentro del head) que esta en la carpeta public del proyecto react.
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

        - 4. Iconos SVG (En consola y Dentro del proyecto)
                Para poder utilizar los íconos SVG Material precompilados, como los que se encuentran en los demos de íconos, 
                primero debes instalar el paquete @material-ui/icons:

                // usando npm
                npm install @material-ui/icons

                // usando yarn
                yarn add @material-ui/icons


    * Implementacion

        Los componentes de Material-UI funcionan aisladamente. Son autosuficientes, y sólo inyectarán los estilos necesarios para su presentación. 
        No dependen de ninguna hoja de estilos global como normalize.css.

        Puedes utilizar cualquiera de los componentes como son demostrados en la documentación. Por favor, consulta la página de demostración de cada 
        componente para ver cómo deben ser importados.

        Codigo de ejemplo:

            import React from 'react';
            import ReactDOM from 'react-dom';
            import Button from '@material-ui/core/Button';

            function App() {
            return (
                <Button variant="contained" color="primary">
                Hola Mundo!
                </Button>
            );
            }

            ReactDOM.render(<App />, document.querySelector('#app'));


### COMPONENTES CREATIVE TIM

### COMPONENTES NC

### REACT-ROUTER-DOM

    * react-router-dom es la libreria que maneja las rutas de un proyecto React

        - Router (Enrutador): Router es el enrutador (Es el que conecta internament).

        - Switch (Interruptor): Switch es metodo que sirve para cambiar de una ruta a otra.

        - Route (Ruta): Route es la ruta que se crea para cada pagina.

        - Redirect (Redireccionar): Redirect redirecciona a una ruta cuando el usuario ingresa una ruta erronea.

        - BrowserRouter (Enrutador de navegador): Almacena todas las rutas.

        - Link (Enlace): Link sirve para generar enlaces


    * Instalacion

        - npm i react-router-dom


    * Ejemplo:

        import { Router, Switch, Route, Redirect } from 'react-router-dom';
        import { createBrowserHistory } from "history";

        var hist = createBrowserHistory();

        <Router history={hist}>
            <Switch>
                <Route path="/pagina2" component={Pagina2} />
                <Route path="/" component={PaginaInicio} />
            </Switch>  
        </Router>


### HISTORY

    *   history: Libreria o dependencia que se usa para almacenar un historial de rutas o sessiones de un proyecto

        - Se suele usar como propiedad del Router

    *   Instalacion (Consola)

        npm i history


    *   Ejemplo:

            import { Router, Switch, Route, Redirect } from 'react-router-dom';
            import { createBrowserHistory } from "history";

            var hist = createBrowserHistory();

            <Router history={hist}>
                <Switch>
                    <Route path="/pagina2" component={Pagina2} />
                    <Route path="/" component={PaginaInicio} />
                </Switch>  
            </Router>


### PATH

    * path (Camino): El path es la libreria con la que configuramos el arranque del proyecto

        - Por defecto esta configurado con la raiz del proyecto.

        - Se puede cambiar con un archivo de configuracion para que inicie desde el src (Este archivo se debe de poner en la carpeta raiz)

        - Nombre del archivo: Por convencion se pone el nombre jsconfig.json

        Codigo del archivo

            {
            "compilerOptions": {
                "baseUrl": "src",
                "paths": {
                "*": ["src/*"]
                }
            }
            }


### FUENTES TIPOGRAFICAS

    * Las fuentes tipograficas usadas en NC son Fuentes en linea de Google Fonts

        - Se elije la fuente

        - Se copia el link de la fuente en el archivo index.html de Public (Dentro del Head)

        - Se crea una estructura de estilo makeStyles (Si agrega el estilo de tipografia dentro de este)

        - Se aplica a los componentes que se desee

        ejemplo: 

            import React, { Fragment } from 'react';

            // Componentes MAterial UI
            import { makeStyles } from '@material-ui/core/styles';

            const useStyles = makeStyles({
                h2: {
                    fontFamily: "'Press Start 2P', cursive",
                    fontSize: 50,
                    color: "blue"
                },
                h3: {
                    fontFamily: "'Galada', cursive",
                    fontSize: 50,
                    color: "red"
                } 
            });

            function FuentesGoogle() {

                const classes = useStyles();

                return (
                    <Fragment>

                        <h2 className={classes.h2} > Fuentes Tipografica Google </h2>
                        <h3 className={classes.h3} > Fuentes Tipografica Google </h3>


                    </Fragment>
                );
            }

            export default FuentesGoogle;



### PROPS (PROPIEDADES)

    * Los componentes permiten separar la interfaz de usuario en piezas independientes, reutilizables y pensar en cada pieza de forma aislada.
    Esta página proporciona una introducción a la idea de los componentes.

    * La forma más sencilla de definir un componente es escribir una función de JavaScript:

        function Welcome(props) {
            return <h1>Hello, {props.name}</h1>;
        }

        Esta función es un componente de React válido porque acepta un solo argumento de objeto “props” (que proviene de propiedades) con datos y devuelve un 
        elemento de React. Llamamos a dichos componentes “funcionales” porque literalmente son funciones JavaScript.


    * También puedes utilizar una clase de ES6 para definir un componente

        class Welcome extends React.Component {
        render() {
            return <h1>Hello, {this.props.name}</h1>;
        }
        }

        Los dos componentes anteriores son equivalentes desde el punto de vista de React.
        Tanto los componentes de función como de clase tienen algunas características adicionales que veremos en las próximas secciones.


    *


<br>

### STATE (ESTADO)

    * El objeto state es donde almacena los valores de propiedad que pertenecen al componente.
        Cuando el objeto state cambia, el componente se vuelve a representar.

    * El objeto state se puede inicializar directamente despues de la clase o en el constructor de la clase.

        - State incializado directamente:

            class NombreClase {

                state = {

                }

                render(){
                    return();
                }

            }


        - State inicializado en el constructor junto con los props:

            class NombreClase {

                constructor(props) {
                    super(props);
                    this.state = {
                        estado: false,
                        nombre: "Andres",
                        numero1: 0
                        };
                }

                render(){
                    return();
                }

            }




## STYLES


### STYLES IN LINE

    * Los estilos usados en NC son los estilos de Material UI que estan dentro del Core. (Usamos los estilos en JavaScript)

        - No es necesario instalar si tenemos ya instalado el Core Material UI

        Ejemplo:

            import React, { Fragment } from 'react';

            import { makeStyles } from '@material-ui/core/styles';

            const useStyles = makeStyles({
            h2: {
                fontSize: 50,
                color: "gray"
            },
            button: {
                backgroundColor: "red"
            } 
            });

            function StyleInLine() {

                const classes = useStyles();

                return(
                    <Fragment>
                        <h2 className={classes.h2} > Estilos en linea </h2>
                        <button className={classes.button}> Estilos </button>
                    </Fragment>
                );
            }

            export default StyleInLine;
