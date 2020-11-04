
//import 'https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&display=swap';

const HeaderDarkPersonalStyles = {

    // ===================== GRID CONTAINER ====================
    gridContainerHeader: {
        backgroundColor: '#000'
    },

    // ===================== GRID ITEMS =====================

    // Grid item perfil
    gridItemPerfil: {
        padding: '20px',
        alignContent: 'center',
        textAlign: 'center',
        '@global h2' : {
            color: '#fff',
            margin: '5px',
            fontSize: '3rem',
            paddingTop: '60px',
            fontFamily: "'Cinzel Decorative', cursive",
        },
        '@global h3': {
            color: '#fff',
            fontSize: '3rem',
        },
        '@global h4' : {
            color: '#fff',
            fontSize: '2rem',
        },
        '@global h5' : {
            color: '#fff',
            fontSize: '1rem',
        }
    },

    gridItemFotoPerfil: {
        '@global img': {
            width: '100%'
        }
    },

    iconButton: {
        color: '#DB6E25'
    }

}

export default HeaderDarkPersonalStyles;