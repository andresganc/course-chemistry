
import styled, { css } from 'styled-components'

// Fonts
import roboto from '../assets/fonts/fonts'

// Colors
import colorsBG from '../assets/colors/colors-bg'
import colorsText from '../assets/colors/colors-text'
import {
    red,
    pink,
    purple,
    deepPurple,
    indigo,
    blue,
    lightBlue,
    cyan,
    teal,
    green,
    lightGreen,
    lime,
    yellow,
    amber,
    orange,
    deepOrange,
    brown,
    gray,
    blueGray,
    black,
    white,
    darkText,
    lightText,
    darkIcons,
    lightIcons
} from '../assets/colors/colors-system'




// ========================= TYPES ============================
    const buttonBase = css `
        font-size: .9rem;
        padding: .5rem 1.5rem;
        border: none;
        border-radius: .2rem;
        cursor: pointer;
        outline: none;
        transition: .2s;

        &:hover {
                background-color: ${ blue[400] };
                //background-color: rgba(255, 255, 255, .1)
        }

    `

    const buttonRound = css `
        font-size: .9rem;
        padding: .5rem 1.5rem;
        border: none;
        border-radius: .9rem;
        cursor: pointer;
        outline: none;
        transition: .2s;

        &:hover {
            background-color: ${ blue[400]};
            //background-color: rgba(255, 255, 255, .1)
        }

    `

    const buttonCircle = css `
        font-size: .9rem;
        padding: .6rem .9rem;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        outline: none;
        transition: .2s;

        &:hover {
                background-color: ${ blue[400] };
                //background-color: rgba(255, 255, 255, .1)
        }

    `
// ========================= TYPES ============================



const Button = styled.button `

    /* Font */
    ${ roboto }

    /* Button base*/
    ${ buttonBase } 
    
    /* Colors */
    ${ colorsBG }
    ${ colorsText }

    
    
    // TYPE
    ${ props => props.default && css `    
        ${ buttonBase }
    `}

    ${ props => props.round && css `    
        ${ buttonRound }
    `}


    ${ props => props.circle && css `    
        ${ buttonCircle }
    `}
    

 
`

export default Button;