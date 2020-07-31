

# REDUX 

<br>

## Que es redux?

    - Redux es un contenedor predecible del estado de aplicaciones JavaScript.

        Te ayuda a escribir aplicaciones que se comportan de manera consistente, corren en distintos ambientes (cliente, servidor y nativo), y son fáciles de probar. Además de eso, provee una gran experiencia de desarrollo, gracias a edición en vivo combinado con un depurador sobre una línea de tiempo.

        Puedes usar Redux combinado con React, o cual cualquier otra librería de vistas. Es muy pequeño (2kB) y no tiene dependencias.

    - Influencias
        Redux evoluciona las ideas de Flux, pero evitando su complejidad tomando cosas de Elm.

        Ya sea que los hayas usado o no, solo toma unos minutos para empezar a usar Redux.


<br>


## Instalacion

Instalación
Para instalar la versión estable:

npm i -S redux
Normalmente también vas a querer usar la conexión a React y las herramientas de desarrollo.

npm i -S react-redux
npm i -D redux-devtools
Esto asumiendo que estás usando npm como administrador de paquetes con un empaquetador de módulos como Webpack o Browserify para usar módulos de CommonJS.

Si todavía no usas npm o algún empaquetador de módulos moderno, quizás prefieras el paquete en UMD que define Redux como un objeto global, puedes usar una desde cdnjs. No recomendamos este enfoque para ninguna aplicación seria, ya que la mayoría de las librerías complementarias a Redux está solo disponibles en npm.