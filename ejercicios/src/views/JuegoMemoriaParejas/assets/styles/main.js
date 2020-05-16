
const stylesMainJMP = {
    '@global': {
        body: {
            float: 'center',
            display: 'flex',
            backgroundColor: 'black',
            width: '95%'
        },
        div: {
            '&:focus':{
                outline: 'none !important'
            } 
        }
    },

    prueba: {
        backgroundColor: 'black'
    }

}

/*
const body = {
    backgroundColor: 'black'
}
*/







// Ejemplos 
/*

const body = {
    float: 'center',
    display: 'flex',
    backgroundColor: 'black',
    width: '95%'
}

const divFocus = {
    '@global':{

        outline: 'none !important'
    }
}



import {createUseStyles} from 'react-jss'
import withStyles from 'react-jss';

const useStyles = createUseStyles({
    
    body: {
        background: 'black'
    }

});

export default {useStyles};
export default withStyles(styles)(Button);
*/

export default {stylesMainJMP};