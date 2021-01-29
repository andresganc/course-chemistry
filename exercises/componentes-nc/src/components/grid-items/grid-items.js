
import styled, { css } from "styled-components";

// Colors
import colorsBG from '../assets/colors/colors-bg'
import colorsText from '../assets/colors/colors-text'


const gridItems = styled.div `

    display: grid;
    //max-width: 100%;

    /* Colors */
    ${ colorsBG }
    ${ colorsText }

    /* Grid Template Columns */
    ${ props => props.gridCols1 && css ` grid-template-columns: repeat(1, minmax(0, 1fr)) `}
    ${ props => props.gridCols2 && css ` grid-template-columns: repeat(2, minmax(0, 1fr)) `}
    ${ props => props.gridCols3 && css ` grid-template-columns: repeat(3, minmax(0, 1fr)) `}
    ${ props => props.gridCols4 && css ` grid-template-columns: repeat(4, minmax(0, 1fr)) `}
    ${ props => props.gridCols5 && css ` grid-template-columns: repeat(5, minmax(0, 1fr)) `}
    ${ props => props.gridCols6 && css ` grid-template-columns: repeat(6, minmax(0, 1fr)) `}
    ${ props => props.gridCols7 && css ` grid-template-columns: repeat(7, minmax(0, 1fr)) `}
    ${ props => props.gridCols8 && css ` grid-template-columns: repeat(8, minmax(0, 1fr)) `}
    ${ props => props.gridCols9 && css ` grid-template-columns: repeat(9, minmax(0, 1fr)) `}
    ${ props => props.gridCols10 && css ` grid-template-columns: repeat(10, minmax(0, 1fr)) `}
    ${ props => props.gridCols11 && css ` grid-template-columns: repeat(11, minmax(0, 1fr)) `}
    ${ props => props.gridCols12 && css ` grid-template-columns: repeat(12, minmax(0, 1fr)) `}
    ${ props => props.gridColsNone && css ` grid-template-columns: none `}

    /* Gap */
    ${ props => props.gap1 && css ` gap: 10px `}


`;

export default gridItems;