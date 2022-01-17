
import styled, { css } from 'styled-components'

// Fonts
import roboto from 'components/assets/fonts/fonts'

// Props base
import propsBase from 'components/assets/props/props-base'

// Colors
import colorsBG from 'components/assets/colors/colors-bg'
import colorsText from 'components/assets/colors/colors-text'


// ================== PROPS EXCLUSIVES ==================
// ==== TYPES ====
    const textBase = css ` font-size: 1rem; margin: 0px; padding: 0px;`
    const textH1 = css ` font-size: 2.4rem; font-weight: bold; `
    const textH2 = css ` font-size: 2.1rem; font-weight: bold; `
    const textH3 = css ` font-size: 1.9rem; font-weight: bold; `
    const textH4 = css ` font-size: 1.6rem; font-weight: bold; `
    const textH5 = css ` font-size: 1.3rem; font-weight: bold; `
    const textH6 = css ` font-size: 1rem; font-weight: bold; `
    const textP1 = css ` font-size: 1.1rem; `
    const textP2 = css ` font-size: 1rem; `
    const textP3 = css ` font-size: .9rem; `
    const textP4 = css ` font-size: .8rem; `
    const textP5 = css ` font-size: .7rem; `
    const textP6 = css ` font-size: .6rem; `

// ===== FONT WEIGHT ====
    const fontWeightLighter = css ` font-weight: lighter; `
    const fontWeightNormal = css ` font-weight: normal; `
    const fontWeightBold = css ` font-weight: bold; `

// ================== PROPS EXCLUSIVES ==================


const Typography = styled.p `

    /* FONT */
    ${ roboto }

    /* TEXT BASE */
    ${ textBase }

    /* ================== PROPS EXCLUSIVES ================== */
    /* ==== TYPES ==== */
    ${ props => props.h1 && css ` ${ textH1 } `}
    ${ props => props.h2 && css ` ${ textH2 } `}
    ${ props => props.h3 && css ` ${ textH3 } `}
    ${ props => props.h4 && css ` ${ textH4 } `}
    ${ props => props.h5 && css ` ${ textH5 } `}
    ${ props => props.h6 && css ` ${ textH6 } `}
    ${ props => props.p1 && css ` ${ textP1 } `}
    ${ props => props.p2 && css ` ${ textP2 } `}
    ${ props => props.p3 && css ` ${ textP3 } `}
    ${ props => props.p4 && css ` ${ textP4 } `}
    ${ props => props.p5 && css ` ${ textP5 } `}
    ${ props => props.p6 && css ` ${ textP6 } `}

    /* WIDTH */
    ${ props => props.lighter && css ` ${ fontWeightLighter } `}
    ${ props => props.normal && css ` ${ fontWeightNormal } `}
    ${ props => props.bold && css ` ${ fontWeightBold } `}
    /* ================== PROPS EXCLUSIVES ================== */


    /* PROPS BASE */
    ${propsBase}

    /* COLORS */
    ${ colorsBG }
    ${ colorsText }
    
`

export default Typography