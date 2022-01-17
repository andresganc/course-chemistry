
import styled, { css } from 'styled-components'

// Props base
import propsBase from 'components/assets/props/props-base'

// Colors
import colorsBG from 'components/assets/colors/colors-bg'
import colorsText from 'components/assets/colors/colors-text'



// ========================= ICON ============================
const SVG = styled.svg`
    flex: none;
    transition: fill 0.25s;
    width: 40px;
    height: 40px;
    fill: white;
`
// ================== PROPS EXCLUSIVES ==================
// ==== TYPES ====
// Type base
const typeBase = css `
    border-radius: .1rem;
`
// Type round
const typeRound = css `
    border-radius: .4rem;
    transition: .2s;
`
// Type circle
const typeCircle = css `
    border-radius: 50%;
    transition: .2s;
`

// ==== SIZE ====
const sizeXS = css ` width: 25px; height: 25px; padding: .3rem; `
const sizeS = css ` width: 30px; height: 30px; padding: .4rem; `
const sizeM = css ` width: 40px; height: 40px; padding: .5rem; `
const sizeL = css ` width: 60px; height: 60px; padding: .6rem; `
const sizeXL = css ` width: 80px; height: 80px; padding: .7rem; `
const sizeXXL = css ` width: 100px; height: 100px; padding: .8rem; `

// ================== PROPS EXCLUSIVES ==================



const Image = styled.img `

    /* IMAGE BASE */
    ${ typeBase } 


    /* ================== PROPS EXCLUSIVES ================== */
    /* TYPE */
    ${ props => props.round && css ` ${ typeRound } `}
    ${ props => props.circle && css ` ${ typeCircle } `}
    
    /* SIZE */
    ${ props => props.sizeXS && css ` ${ sizeXS } `}
    ${ props => props.sizeS && css ` ${ sizeS } `}
    ${ props => props.sizeM && css ` ${ sizeM } `}
    ${ props => props.sizeL && css ` ${ sizeL } `}
    ${ props => props.sizeXL && css ` ${ sizeXL } `}
    ${ props => props.sizeXXL && css ` ${ sizeXXL } `}
    /* ================== PROPS EXCLUSIVES ================== */


    /* PROPS BASE */
    ${propsBase}

    /* COLORS */
    ${ colorsBG }
    ${ colorsText }
    
`

export default Image;
