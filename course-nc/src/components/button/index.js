
import Styled, { css } from 'styled-components'

// Fonts
import roboto from 'components/assets/fonts/fonts'

// Props base
import propsBase from 'components/assets/props/props-base'

// Colors
import colorsBG from 'components/assets/colors/colors-bg'
import colorsText from 'components/assets/colors/colors-text'



// ========================= BUTTON BASE ============================
const buttonBase = css`
    font-size: .9rem;
    padding: .5rem 1.5rem;
    border: none;
    cursor: pointer;
    outline: none;
    transition: .2s;

    &:hover {
        background-color: #03A9F4;
        //background-color: rgba(255, 255, 255, .1)
    }
`

// ================== PROPS EXCLUSIVES ==================
// ==== Button circle1 ====
const buttonCircle1 = css`
    font-size: .9rem;
    padding: .4rem .6rem;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    outline: none;
    transition: .2s;

    &:hover {
        background-color: #03A9F4;
    }
`
// ==== Button circle2 ====
const buttonCircle2 = css`
    font-size: .9rem;
    padding: .6rem .8rem;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    outline: none;
    transition: .2s;

    &:hover {
        background-color: #03A9F4;
    }
`
// ==== Button circle3 ====
const buttonCircle3 = css`
    font-size: .9rem;
    padding: .8rem 1rem;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    outline: none;
    transition: .2s;

    &:hover {
        background-color: #03A9F4;
    }
`
// ==== Button circle4 ====
const buttonCircle4 = css`
    font-size: .9rem;
    padding: 1rem 1.2rem;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    outline: none;
    transition: .2s;

    &:hover {
        background-color: #03A9F4;
    }
`
// ==== Button circle5 ====
const buttonCircle5 = css`
    font-size: .9rem;
    padding: 1.2rem 1.4rem;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    outline: none;
    transition: .2s;

    &:hover {
        background-color: #03A9F4;
    }
`
// ==== Button circle6 ====
const buttonCircle6 = css`
    font-size: .9rem;
    padding: 1.4rem 1.6rem;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    outline: none;
    transition: .2s;

    &:hover {
        background-color: #03A9F4;
    }
`
// ================== PROPS EXCLUSIVES ==================



const Button = Styled.button`

    /* FONT */
    ${roboto}

    /* BUTTON BASE */
    ${buttonBase} 

    /* ================== PROPS EXCLUSIVES ================== */
    /* ==== TYPES ==== */
    /* CIRCLE */
    ${props => props.circle1 && css` ${buttonCircle1} `}
    ${props => props.circle2 && css` ${buttonCircle2} `}
    ${props => props.circle3 && css` ${buttonCircle3} `}
    ${props => props.circle4 && css` ${buttonCircle4} `}
    ${props => props.circle5 && css` ${buttonCircle5} `}
    ${props => props.circle6 && css` ${buttonCircle6} `}
    
    /* ================== PROPS EXCLUSIVES ================== */


    /* PROPS BASE */
    ${propsBase}

    /* COLORS */
    ${colorsBG}
    ${colorsText}
`

export default Button;