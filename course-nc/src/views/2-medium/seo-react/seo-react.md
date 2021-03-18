
### SEO EN REACT


#### Problemas de SEO para React js.

    - Sobre los problemas comunes SEO para React js, es obvio que la relación entre Javascript y SEO resulta, en la mayoría de los casos, compleja. Por ello en la implementación SEO surgen varios puntos a resolver.

    Los procesos de rastreo y la indexación son lo más críticos. Normalmente Googlebot descarga un archivo HTML que encuentra, extrae los enlaces y los visita simultáneamente, y luego envía los recursos descargados al indexador. Pero cuando se trata de un sitio web basado en JavaScript, el proceso se vuelve un poco más complicado. Es como el proceso mencionado anteriormente, pero tarda mucho más y con un paso adicional en el proceso, porque parte del indexador debe realizar más trabajo al analizar y ejecutar el JavaScript, y los nuevos enlaces que se encuentran deben pasar al rastreador para chequearlos y luego enviarlos otra vez al indexador, lo que convierte el proceso en menos eficiente.


#### Soluciones para SEO de sitios web basados ​​en React js.

    - Con los problemas descritos, se debe facilitar el rastreo de los motores de búsqueda a nuestros sitios web. Para ello, se plantean dos formas principales de resolver los problemas de SEO ​​para React js:

    Isomorphic React o Javascript Universal: Si se detecta que JavaScript está deshabilitado en el lado del cliente, Isomorphic JavaScript, también llamado Javascript Universal, se ejecuta en el lado del servidor y envía el contenido final al cliente. De esta manera, todos los archivos, propiedades y contenidos necesarios están disponibles cuando se carga la página. En el caso caso que JavaScript está habilitado, funciona como una aplicación dinámica con múltiples componentes. Los beneficios son claros: una carga más rápida comparado con webs tradicionales, más compatibilidad con navegadores más antiguos y diferentes rastreadores y una mayor experiencia de usuario (UX).
    Prerenderización: Otra de las soluciones que se podrían aplicar para SEO para React js, es prerenderizar su sitio web con la herramienta Prerender. Ésta usa la herramienta Headless Chrome para representar la página de la misma manera que un navegador. Prerender espera a que la página se cargue por completo y luego devolverá el contenido en HTML completo. Presenta varias ventajas: Permite que los motores de búsqueda rastreen correctamente el sitio web; se configura más fácilmente porque no hace falta que la base de código sea compatible con la representación del lado del servidor; Prerender no ejerce una carga excesiva al servidor, ya que es sólo un motor de renderizado de sitio web simple.

    El objetivo de la implementación de ambas soluciones SEO para React js,  es servir contenido HTML digerible a rastreadores y navegadores. Ambos métodos utilizan un recurso de servidor intermediario para extraer el contenido solicitado y modificar el contenido HTML para que se envíen al usuario como el contenido de estado final en lugar de un código de plantilla. Esto significa que el contenido servido será un HTML completamente expandido que contendrá contenido y enlaces, los cuales adoran y entienden los rastreadores. Luego ejecutarán cualquier JavaScript y CSS más simples para comprender los cambios en la estructura de la página.


#### Algunos consejos para SEO para React js.

    - Para concluir el post, os señalo algunas consideraciones previas a tener en cuenta, para implementar SEO para React js de forma eficiente y eficaz:

    1. Las URL deben ser amigables. Deben parecerse a las URL estáticas con directorios y con palabras que describan el contenido para que puedan ser entendibles. Hay que tener en cuenta que algunas webs ​​en JavaScript contienen un hashtag en la URL, que Google probablemente no puede rastrear. Existen componentes de navegación para React, como React Router, para poder crear url únicas y rastreables.

    2. Se debe evitar colocar contenido importante detrás de un evento de JavaScript. Es posible que Google no siga los eventos «onclick» de ningún sitio. No se debe de usar los eventos onclick de JavaScript como un reemplazo para los enlaces internos.

    3. Se recomienda usar el procesamiento del Servidor. En lugar de cargar contenidos después de cargar HTML, todas las operaciones se llevan a cabo en el servidor y el navegador obtendrá HTML con toda la información. Usar el procesamiento del servidor, permitirá que parte del código se ejecute primero en su servidor. Esto significa que el servidor primero obtiene los datos de la API que se necesitan para ser incluidos en el HTML de la página inicial, y luego empaqueta esos datos y envía estos datos al navegador. De esta forma se está en un punto de partida donde ya tienen todos los datos. De otra forma, tendría comenzar desde cero.

    4. Generar e implementar el título y las etiquetas meta / head es complejo en React js. Se debe definir esas etiquetas dentro del componente y moverlos en el HEAD del documento tanto del lado del cliente como del servidor. Existen módulos como React helmet, react-meta-tags o react-document-meta, que nos pueden facilitar el proceso.


    - Modulos para SEO en React

        - React helmet
        - React-meta-tags
        - React-document-meta




