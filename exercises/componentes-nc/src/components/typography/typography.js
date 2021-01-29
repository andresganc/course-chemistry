
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
    const textBase = css `
        font-size: 1rem;
    `

    const textH1 = css `
        font-size: 2.2rem; 
    `

    const textH2 = css `
        font-size: 1.9rem; 
    `

    const textH3 = css `
        font-size: 1.6rem; 
    `

    const textH4 = css `
        font-size: 1.3rem; 
    `

    const textH5 = css `
        font-size: 1rem; 
    `

    const textH6 = css `
        font-size: .7rem; 
    `

    const textP1 = css `
        font-size: 1.2rem; 
        color: ${ gray[600] };
    `

    const textP2 = css `
        font-size: 1rem;
        color: ${ gray[600] } 
    `

    const textP3 = css `
        font-size: .8rem;
        color: ${ gray[600] } 
    `
// ========================= TYPES ============================


const Typography = styled.p `

    /* Font */
    ${ roboto }

    /* TextBase */
    ${ textBase }

    /* Colors */
    ${ colorsBG }
    ${ colorsText }


    // =========== TYPE ===========
    ${ props => props.h1 && css ` ${ textH1 } `}
    ${ props => props.h2 && css ` ${ textH2 } `}
    ${ props => props.h3 && css ` ${ textH3 } `}
    ${ props => props.h4 && css ` ${ textH4 } `}
    ${ props => props.h5 && css ` ${ textH5 } `}
    ${ props => props.h6 && css ` ${ textH6 } `}
    ${ props => props.p1 && css ` ${ textP1 } `}
    ${ props => props.p2 && css ` ${ textP2 } `}
    ${ props => props.p3 && css ` ${ textP3 } `}
    // =========== TYPE ===========

    // =========== WIDTH ============
    ${ props => props.lighter && css ` font-weight: lighter `}
    ${ props => props.normal && css ` font-weight: normal `}
    ${ props => props.bold && css ` font-weight: bold `}

    



`

export default Typography