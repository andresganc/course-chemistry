
import styled, { css } from "styled-components";

// Colors
import colorsBG from '../assets/colors/colors-bg'
import colorsText from '../assets/colors/colors-text'



// ========================= Justify Content ============================
    const JCFlexStart = css ` justify-content: flex-start; `
    const JCCenter = css ` justify-content: center; `
    const JCFlexEnd = css ` justify-content: flex-end; `
    const JCSpaceAround = css ` justify-content: space-around; `
    const JCSpaceBetween = css ` justify-content: space-between; `
    const JCSpaceEvely = css ` justify-content: space-evenly; `

// ========================= Align Content ============================
    const ACFlexStart = css ` align-content: flex-start; `
    const ACFlexCenter = css ` align-content: center; `
    const ACFlexEnd = css ` align-content: flex-End; `
    const ACSpaceAround = css ` align-content: space-around; `
    const ACSpaceBetween = css ` align-content: space-between; `
    const ACStretch = css ` align-content: stretch; `

// ========================= Align Items ============================
    const AIFlexStart = css ` align-items: flex-start; `
    const AICenter = css ` align-items: center; `
    const AIFlexEnd = css ` align-items: flex-end; `
    const AIStretch = css ` align-items: stretch; `
    const AIBaseline = css ` align-items: baseline; `

// ========================= Align Self ============================
    const ASFlexStart = css ` align-self: flex-start;  `
    const ASCenter = css ` align-self: center; `
    const ASFlexEnd = css ` align-self: flex-end; `
    const ASStretch = css ` align-self: stretch; `
    const ASBaseline = css ` align-self: baseline; `
    const ASAuto = css ` align-self: auto; `


    
const flexContainer = styled.div `

    display: flex;
    max-width: 100%;

    /* Colors */
    ${ colorsBG }
    ${ colorsText }

    /* Justify Content */
    ${ props => props.jcFlexStart && css ` ${ JCFlexStart } `}
    ${ props => props.jcCenter && css ` ${ JCCenter } `}
    ${ props => props.jcFlexEnd && css ` ${ JCFlexEnd }`}
    ${ props => props.jcSpaceAround && css ` ${ JCSpaceAround } `}
    ${ props => props.jcSpaceBetween && css ` ${ JCSpaceBetween } `}
    ${ props => props.jcSpaceEvely && css ` ${ JCSpaceEvely } `}

    /* Align Content */
    ${ props => props.acFlexStart && css ` ${ ACFlexStart }`}
    ${ props => props.acCenter && css ` ${ ACFlexCenter } `}
    ${ props => props.acFlexEnd && css ` ${ ACFlexEnd } `}
    ${ props => props.acSpaceAround && css ` ${ ACSpaceAround } `}
    ${ props => props.acSpaceBetween && css ` ${ ACSpaceBetween } `}
    ${ props => props.acStretch && css ` ${ ACStretch } `}

    /* Align Items */
    ${ props => props.aiFlexStart && css ` ${ AIFlexStart } `}
    ${ props => props.aiCenter && css ` ${ AICenter } `}
    ${ props => props.aiFlexEnd && css ` ${ AIFlexEnd } `}
    ${ props => props.aiStretch && css ` ${ AIStretch } `}
    ${ props => props.aiBaseline && css ` ${ AIBaseline } `}

    /* Align Self */
    ${ props => props.asFlexStart && css ` ${ ASFlexStart } `}
    ${ props => props.asCenter && css ` ${ ASCenter } `}
    ${ props => props.asFlexEnd && css ` ${ ASFlexEnd } `}
    ${ props => props.asStretch && css ` ${ ASStretch } `}
    ${ props => props.asBaseline && css ` ${ ASBaseline } `}
    ${ props => props.asAuto && css ` ${ ASAuto } `}
`;

export default flexContainer;