
const stylesJSExterno = {
    divCard: {
        position: 'relative',
        width: '600px',
        height: '350px',
        margin: '20px',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: '20px',
        background: 'linear-gradient(135deg, #d41e31, #491f8f)'
    },

    divContent: {
        position: 'relative',
        width: '80%',
        left: '5%',
        padding: '20px, 20px, 20px, 40px',
        margin: '20px',
        transition: '0.5s'
    },

    h2: {
        color: '#fff',
        textTransform: 'uppercase',
        fontSize: '1.5em',
        lineHeight: '1em'
    },

    p: {
        color: '#fff'
    },

    img: {
        position: 'absolute',
        bottom: '0',
        left: '50%',
        transform: 'translateX(-50%)',
        height: '350px',
        transition: '0.5s',
        opacity: '0.3',
        '&:hover' : {
            left: '80%',
            height: '500px'
        }
    }

}

export default stylesJSExterno;