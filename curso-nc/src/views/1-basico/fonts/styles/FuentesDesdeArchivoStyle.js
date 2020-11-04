
// Fonts 
import FontExo2 from '../fonts/Exo_2/static/Exo2-Regular.ttf';
import FontTitanOne from '../fonts/Titan_One/TitanOne-Regular.ttf';

const FuentesDesdeArchivoStyle = {
    /*
    '@global': {
        h2: {
            fontFamily: "'Exo 2', sans-serif",
            fontSize: '3em',
            color: "green"
        }
    },
    */
   /*
   '@fontFamily': {
        src: "local('Exo 2'), local('Exo2 Regular'), local('Exo2-Regular'), url('../fonts/Exo_2/static/Exo2-VariableFont_wght.ttf'), format('truetype') ", 
       fontFamily: "'Exo 2', sans-serif",
   },
   */
   H2Style: {
        src: `
        local('Exo 2'),
        local('Exo2 Regular'),
        local('Exo2-Regular'),
        url(${FontExo2}) format('truetype')`,
        src: `
        local('Titan One'),
        local('TitanOne Regular'),
        url(${FontTitanOne}) format('truetype')
        `,
        //unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF', 
        fontFamily: "'Exo 2', Roboto",
        fontSize: '2rem',
        color: '#813BF7'
   }
}

export default FuentesDesdeArchivoStyle;