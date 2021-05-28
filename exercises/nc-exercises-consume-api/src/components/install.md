
# INSTALACION

## TABLA DE CONTENIDO

### Descargar componentes

    - Descargar los componentes NC de la API y ubicarlos dentro del src de su proyecto

### Instalacion de dependencias


#### Styled Components

    - Styles
    
    $ npm i styled-components


#### React Router Dom

    - Rutas en React

    $ npm i react-router-dom


#### SVG ( Not required - Test and delete )

    - Manejo de SVG en React

    $ npm i @svgr/webpack

        Crear un archivo webpack.config.js y agregar el siguiente codigo.

            {
            test: /\.svg$/,
            use: ['@svgr/webpack'],
            }
            
            
#### Icons Font Awesome - React

    $ npm i --save @fortawesome/fontawesome-svg-core
    $ npm install --save @fortawesome/free-solid-svg-icons
    $ npm install --save @fortawesome/react-fontawesome
    $ npm install --save @fortawesome/free-brands-svg-icons
    $ npm install --save @fortawesome/free-regular-svg-icons


#### Crear path 

    - Crear el path del proyecto ( Para trabajar con rutas relativas )
       Creamos en la carpeta raiz un archivo llamado jsconfig.json y agregamos el siguiente codigo

        {
            "compilerOptions": {
                "baseUrl": "src",
                "paths": {
                "*": ["src/*"]
                }
            }
        }

    



