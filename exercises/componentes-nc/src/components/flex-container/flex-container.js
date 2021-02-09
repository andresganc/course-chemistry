
import styled, { css } from "styled-components";

// Colors
import colorsBG from '../assets/colors/colors-bg'
import colorsText from '../assets/colors/colors-text'


const flexContainer = styled.div `

    display: flex;
    max-width: 100%;

    /* Colors */
    ${ colorsBG }
    ${ colorsText }

    /* Justify Content */
    ${ props => props.jcFlexStart && css ` justify-content: flex-start `}
    ${ props => props.jcCenter && css ` justify-content: center `}
    ${ props => props.jcFlexEnd && css ` justify-content: flex-end `}
    ${ props => props.jcSpaceAround && css ` justify-content: space-around `}
    ${ props => props.jcSpaceBetween && css ` justify-content: space-between `}
    ${ props => props.jcSpaceEvely && css ` justify-content: space-evenly `}

    /* Align Content */
    ${ props => props.acFlexStart && css ` align-content: flex-start `}
    ${ props => props.acCenter && css ` align-content: center `}
    ${ props => props.acFlexEnd && css ` align-content: flex-end `}
    ${ props => props.acSpaceAround && css ` align-content: space-around `}
    ${ props => props.acSpaceBetween && css ` align-content: space-between `}
    ${ props => props.acSpaceEvely && css ` align-content: space-evenly `}
    ${ props => props.acStretch && css ` align-content: stretch `}

    /* Align Content */
    ${ props => props.aiFlexStart && css ` align-items: flex-start `}
    ${ props => props.aiCenter && css ` align-items: center `}
    ${ props => props.aiFlexEnd && css ` align-items: flex-end `}
    ${ props => props.aiStretch && css ` align-items: stretch `}
    ${ props => props.aiBaseline && css ` align-items: baseline `}

    /* Align Self */
    ${ props => props.asFlexStart && css ` align-self: flex-start `}
    ${ props => props.asCenter && css ` align-self: center `}
    ${ props => props.asFlexEnd && css ` align-self: flex-end `}
    ${ props => props.asStretch && css ` align-self: stretch `}
    ${ props => props.asBaseline && css ` align-self: baseline `}
    ${ props => props.asAuto && css ` align-self: auto `}
`;

export default flexContainer;