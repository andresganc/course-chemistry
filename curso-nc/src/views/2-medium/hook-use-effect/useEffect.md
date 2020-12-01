
# ============= USE-EFFECT ============


### Que hace useEffect

    - El efecto primario de react es dibujar html en el DOM, Pero exixten muchas cosas mas 
        que se necesitan hacer en el desarrollo web, app, desktop etc. 

        el equipo de desarrollo de React llama efectos secundarios o “side effects” a las acciones realizadas 
        antes o después de que un componente es renderizado, como por ejemplo consumir datos de una API, 
        colocar callbacks o quitarlos así como hacer llamadas a otros servicios.

        Permite llevar acabo efectos secundarios en componentes funcionales.


        Ejemplos : 

        - Network

        - Geolocalizacion

        - Internet disponible

        - FileSystem




### Siclos de vida

    - Los tres ciclos de vida que se comprimen en useEffect son: 
    
    componentDidMount
    
    componentDidUpdate
    
    componentWillUnmount

    los ciclos de vida que no están contemplados por ahora en Hooks son componentDidCatch y getDerivedStateFromError 
    (hablando de la versión v16.8) aunque el equipo de desarrollo de react ha comentado que planean incluirlos más adelante.