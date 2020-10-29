import HeaderDarkPersonal from "../../HeaderDarkPersonal"

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
            fontSize: '4em',
            paddingTop: '60px',
            fontFamily: "'Permanent Marker', cursive",
        },
        '@global h3': {
            color: '#fff',
            fontSize: '3em',
            fontFamily: "'Exo 2, sans-serif'",
        },
        '@global h4' : {
            color: '#fff',
            fontSize: '2em',
            fontFamily: "'Exo 2, sans-serif'",
        },
        '@global h5' : {
            color: '#fff',
            fontSize: '1em',
            fontFamily: "'Exo 2, sans-serif'",
        }
    },

    gridItemFotoPerfil: {
        fontFamily: "'Exo 2, sans-serif'",
        '@global img': {
            width: '100%'
        }
    },

    iconButton: {
        color: '#DB6E25'
    }

}

export default HeaderDarkPersonalStyles;