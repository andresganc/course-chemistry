
import styled, { css } from 'styled-components'

// Props base
import propsBase from 'components/assets/props/props-base'

// Colors
import colorsBG from 'components/assets/colors/colors-bg'


// ========================= SEPARATOR BASE ====================
const SeparatorBase = css`
    height: 1px;
    width: 100%;
    border: none;
    border-radius: 1rem;
`

// ================== PROPS EXCLUSIVES ==================
// ==== WIDTH ====
const Height1 = css` height: 1px; `
const Height2 = css` height: 2px; `
const Height3 = css` height: 3px; `
const Height4 = css` height: 4px; `
const Height5 = css` height: 5px; `
const Height6 = css` height: 6px; `
const Height7 = css` height: 7px; `
const Height8 = css` height: 8px; `
const Height9 = css` height: 9px; `
const Height10 = css` height: 10px; `

// ================== PROPS EXCLUSIVES ==================


const Hr = styled.hr`

    ${SeparatorBase}

    /* ================== PROPS EXCLUSIVES ================== */
    /* SEPARATOR */    
    ${props => props.height1 && css` ${Height1} `}
    ${props => props.height2 && css` ${Height2} `}
    ${props => props.height3 && css` ${Height3} `}
    ${props => props.height4 && css` ${Height4} `}
    ${props => props.height5 && css` ${Height5} `}
    ${props => props.height6 && css` ${Height6} `}
    ${props => props.height7 && css` ${Height7} `}
    ${props => props.height8 && css` ${Height8} `}
    ${props => props.height9 && css` ${Height9} `}
    ${props => props.height10 && css` ${Height10} `}

    /* ================== PROPS EXCLUSIVES ================== */


    /* PROPS BASE */
    ${propsBase}

    /* COLORS */
    ${colorsBG}

`

export default Hr