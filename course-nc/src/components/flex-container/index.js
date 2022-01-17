
import styled, { css } from "styled-components";

// Fonts
import roboto from 'components/assets/fonts/fonts'

// Props base
import propsBase from 'components/assets/props/props-base'

// Colors
import colorsBG from 'components/assets/colors/colors-bg'
import colorsText from 'components/assets/colors/colors-text'



// ================== PROPS EXCLUSIVES ==================
// ==== TYPES ====
const typeBase = css`
    border-radius: .1rem;
`
const typeRound = css`
    border-radius: .4rem;
`
const typeCircle = css`
    border-radius: 50%;
`

// ==== Justify Content ====
const JCFlexStart = css ` justify-content: flex-start; `
const JCCenter = css ` justify-content: center; `
const JCFlexEnd = css ` justify-content: flex-end; `
const JCSpaceAround = css ` justify-content: space-around; `
const JCSpaceBetween = css ` justify-content: space-between; `
const JCSpaceEvely = css ` justify-content: space-evenly; `

// ==== Align Content ====
const ACFlexStart = css ` align-content: flex-start; `
const ACFlexCenter = css ` align-content: center; `
const ACFlexEnd = css ` align-content: flex-End; `
const ACSpaceAround = css ` align-content: space-around; `
const ACSpaceBetween = css ` align-content: space-between; `
const ACStretch = css ` align-content: stretch; `

// ==== Align Items ====
const AIFlexStart = css ` align-items: flex-start; `
const AICenter = css ` align-items: center; `
const AIFlexEnd = css ` align-items: flex-end; `
const AIStretch = css ` align-items: stretch; `
const AIBaseline = css ` align-items: baseline; `

// ==== Align Self ====
const ASFlexStart = css ` align-self: flex-start;  `
const ASCenter = css ` align-self: center; `
const ASFlexEnd = css ` align-self: flex-end; `
const ASStretch = css ` align-self: stretch; `
const ASBaseline = css ` align-self: baseline; `
const ASAuto = css ` align-self: auto; `

// ===== Gap ====
const Gap1 = css ` gap: 1px; `
const Gap2 = css ` gap: 2px; `
const Gap3 = css ` gap: 3px; `
const Gap4 = css ` gap: 4px; `
const Gap5 = css ` gap: 5px; `
const Gap6 = css ` gap: 6px; `
const Gap7 = css ` gap: 7px; `
const Gap8 = css ` gap: 8px; `
const Gap9 = css ` gap: 9px; `
const Gap10 = css ` gap: 10px; `
const Gap11 = css ` gap: 11px; `
const Gap12 = css ` gap: 12px; `
const Gap13 = css ` gap: 13px; `
const Gap14 = css ` gap: 14px; `
const Gap15 = css ` gap: 15px; `
const Gap16 = css ` gap: 16px; `
const Gap17 = css ` gap: 17px; `
const Gap18 = css ` gap: 18px; `
const Gap19 = css ` gap: 19px; `
const Gap20 = css ` gap: 20px; `

// ================== PROPS EXCLUSIVES ==================



const flexContainer = styled.div `

    display: flex;
    max-width: 100%;

    /* FONT */
    ${roboto}

    ${typeBase}

    /* ================== PROPS EXCLUSIVES ================== */
    /* TYPE */
    ${props => props.round && css` ${typeRound} `}
    ${props => props.circle && css` ${typeCircle} `}

    /* JUSTIFY CONTENT */
    ${ props => props.jcFlexStart && css ` ${ JCFlexStart } `}
    ${ props => props.jcCenter && css ` ${ JCCenter } `}
    ${ props => props.jcFlexEnd && css ` ${ JCFlexEnd }`}
    ${ props => props.jcSpaceAround && css ` ${ JCSpaceAround } `}
    ${ props => props.jcSpaceBetween && css ` ${ JCSpaceBetween } `}
    ${ props => props.jcSpaceEvely && css ` ${ JCSpaceEvely } `}

    /* ALIGN CONTENT */
    ${ props => props.acFlexStart && css ` ${ ACFlexStart }`}
    ${ props => props.acCenter && css ` ${ ACFlexCenter } `}
    ${ props => props.acFlexEnd && css ` ${ ACFlexEnd } `}
    ${ props => props.acSpaceAround && css ` ${ ACSpaceAround } `}
    ${ props => props.acSpaceBetween && css ` ${ ACSpaceBetween } `}
    ${ props => props.acStretch && css ` ${ ACStretch } `}

    /* ALIGN ITEMS */
    ${ props => props.aiFlexStart && css ` ${ AIFlexStart } `}
    ${ props => props.aiCenter && css ` ${ AICenter } `}
    ${ props => props.aiFlexEnd && css ` ${ AIFlexEnd } `}
    ${ props => props.aiStretch && css ` ${ AIStretch } `}
    ${ props => props.aiBaseline && css ` ${ AIBaseline } `}

    /* ALIGN SELF */
    ${ props => props.asFlexStart && css ` ${ ASFlexStart } `}
    ${ props => props.asCenter && css ` ${ ASCenter } `}
    ${ props => props.asFlexEnd && css ` ${ ASFlexEnd } `}
    ${ props => props.asStretch && css ` ${ ASStretch } `}
    ${ props => props.asBaseline && css ` ${ ASBaseline } `}
    ${ props => props.asAuto && css ` ${ ASAuto } `}

    /* GAP */
    ${ props => props.gap1 && css ` ${ Gap1 } `}
    ${ props => props.gap2 && css ` ${ Gap2 } `}
    ${ props => props.gap3 && css ` ${ Gap3 } `}
    ${ props => props.gap4 && css ` ${ Gap4 } `}
    ${ props => props.gap5 && css ` ${ Gap5 } `}
    ${ props => props.gap6 && css ` ${ Gap6 } `}
    ${ props => props.gap7 && css ` ${ Gap7 } `}
    ${ props => props.gap8 && css ` ${ Gap8 } `}
    ${ props => props.gap9 && css ` ${ Gap9 } `}
    ${ props => props.gap10 && css ` ${ Gap10 } `}
    ${ props => props.gap11 && css ` ${ Gap11 } `}
    ${ props => props.gap12 && css ` ${ Gap12 } `}
    ${ props => props.gap13 && css ` ${ Gap13 } `}
    ${ props => props.gap14 && css ` ${ Gap14 } `}
    ${ props => props.gap15 && css ` ${ Gap15 } `}
    ${ props => props.gap16 && css ` ${ Gap16 } `}
    ${ props => props.gap17 && css ` ${ Gap17 } `}
    ${ props => props.gap18 && css ` ${ Gap18 } `}
    ${ props => props.gap19 && css ` ${ Gap19 } `}
    ${ props => props.gap20 && css ` ${ Gap20 } `}
    
    /* ================== PROPS EXCLUSIVES ================== */


    /* PROPS BASE */
    ${propsBase}

    /* COLORS */
    ${ colorsBG }
    ${ colorsText }

`;

export default flexContainer;