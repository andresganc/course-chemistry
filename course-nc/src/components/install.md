 // TODO: Especificar como se instala babel y jsconfing.json 
 
# INSTALACION

## TABLA DE CONTENIDO

### Descargar componentes

    - Descargar los componentes NC de la API y ubicarlos dentro del src de su proyecto

### Instalacion de dependencias


#### Styled Components

    - npm i styled-components

        Para que Styled Components tenga un correcto funcionamiento en Next y evitar un error ya conocido ( No found Props ClassName ).
         Se debe instalar babel y agregar un archivo de configuracion para Styled Components
    
        - Dependencias de babel a instalar
            $ npm install -D @babel/core @babel/cli @babel/preset-env
            $ npm install @babel/polyfill

        - Crear en la carpeta raiz el archivo .babelrc y agreagar el siguiente codigo

            {
            "presets": ["next/babel"],
            "plugins": [["styled-components", { "ssr": true, "preprocess": false }]]
            }

#### SVG Image

    - npm i next-images
    
        Create a next.config.js in your project

        // next.config.js
        const withImages = require('next-images')
        module.exports = withImages()

#### Icons Font Awesome - React

    $ npm i --save @fortawesome/fontawesome-svg-core
    $ npm install --save @fortawesome/free-solid-svg-icons
    $ npm install --save @fortawesome/react-fontawesome
    $ npm install --save @fortawesome/free-brands-svg-icons
    $ npm install --save @fortawesome/free-regular-svg-icons

    - Para Next se debe hacer esta importacion en el archivo _app.js

        import "@fortawesome/fontawesome-svg-core/styles.css";


#### Path

    - Creamos un archivo de configuracion para el path de components, layouts, sections, test, themes

        - Se crea en la raiz el archivo jsconfig.json y se agregar el siguiente codigo

        {
            "compilerOptions": {
            "baseUrl": ".",
            "paths": {
                "@components/*": ["components/*"],
                "@layouts/*": ["layouts/*"],
                "@test/*": ["test/*"],
                "@themes/*": ["themes/*"],
                "@views/*": ["views/*"],
            },
            "target": "es6",
            "lib": ["dom", "dom.iterable", "esnext"],
            "skipLibCheck": true,
            "strict": true,
            "forceConsistentCasingInFileNames": true,
            "noEmit": true,
            "esModuleInterop": true,
            "module": "esnext",
            "moduleResolution": "node",
            "resolveJsonModule": true,
            "isolatedModules": true,
            "jsx": "preserve"
            },
            "exclude": ["node_modules"],
            "include": ["next-env.d.ts", "**/*.js", "**/*.jsx"]
        }
