
import styled, { css } from "styled-components";

// Fonts
import roboto from 'components/assets/fonts/fonts'

// Props base
import propsBase from 'components/assets/props/props-base'

// Colors
import colorsBG from 'components/assets/colors/colors-bg'
import colorsText from 'components/assets/colors/colors-text'


// ================== PROPS EXCLUSIVES ==================
// Table Zebra
const TableHorizontalZebra = css ` 
    &:nth-child(even) {
    background-color: #F5F5F5;
} `


const Tr = styled.tr `

    max-width: 100%;

    /* FONT */
    ${roboto}

    /* Table Zebra */
    ${ props => props.tableHorizontalZebra && css ` ${ TableHorizontalZebra } `}
    

    /* PROPS BASE */
    ${propsBase}

    /* COLORS */
    ${ colorsBG }
    ${ colorsText }

`;

export default Tr;