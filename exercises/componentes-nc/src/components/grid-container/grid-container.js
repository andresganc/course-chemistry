
import styled, { css } from "styled-components";

// Colors
import colorsBG from '../assets/colors/colors-bg'
import colorsText from '../assets/colors/colors-text'


// ========================= GRID TEMPLATE COLUMNS ============================
    const GridCols1 = css ` grid-template-columns: repeat(1, minmax(0, 1fr)); `
    const GridCols2 = css ` grid-template-columns: repeat(2, minmax(0, 1fr)); `
    const GridCols3 = css ` grid-template-columns: repeat(3, minmax(0, 1fr)); `
    const GridCols4 = css ` grid-template-columns: repeat(4, minmax(0, 1fr)); `
    const GridCols5 = css ` grid-template-columns: repeat(5, minmax(0, 1fr)); `
    const GridCols6 = css ` grid-template-columns: repeat(6, minmax(0, 1fr)); `
    const GridCols7 = css ` grid-template-columns: repeat(7, minmax(0, 1fr)); `
    const GridCols8 = css ` grid-template-columns: repeat(8, minmax(0, 1fr)); `
    const GridCols9 = css ` grid-template-columns: repeat(9, minmax(0, 1fr)); `
    const GridCols10 = css ` grid-template-columns: repeat(10, minmax(0, 1fr)); `
    const GridCols11 = css ` grid-template-columns: repeat(11, minmax(0, 1fr)); `
    const GridCols12 = css ` grid-template-columns: repeat(12, minmax(0, 1fr)); `
    const GridColsNone = css ` grid-template-columns: none `


// ========================= GAP ============================
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

// ========================= JUSTIFY CONTENT CENTER ============================
    const ContentCenter = css `
    justify-content: center;
    margin: auto;
    `



const gridContainer = styled.div `

    display: grid;
    max-width: 100%;

    /* Colors */
    ${ colorsBG }
    ${ colorsText }

    /* Grid Template Columns */
    ${ props => props.gridCols1 && css ` ${ GridCols1 } `}
    ${ props => props.gridCols2 && css ` ${ GridCols2 } `}
    ${ props => props.gridCols3 && css ` ${ GridCols3 } `}
    ${ props => props.gridCols4 && css ` ${ GridCols4 } `}
    ${ props => props.gridCols5 && css ` ${ GridCols5 } `}
    ${ props => props.gridCols6 && css ` ${ GridCols6 } `}
    ${ props => props.gridCols7 && css ` ${ GridCols7 } `}
    ${ props => props.gridCols8 && css ` ${ GridCols8 } `}
    ${ props => props.gridCols9 && css ` ${ GridCols9 } `}
    ${ props => props.gridCols10 && css ` ${ GridCols10 } `}
    ${ props => props.gridCols11 && css ` ${ GridCols11 } `}
    ${ props => props.gridCols12 && css ` ${ GridCols12 } `}
    ${ props => props.gridColsNone && css ` ${ GridColsNone } `}

    /* Gap */
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

    /* Content Center */
    ${ props => props.center && css ` ${ContentCenter} `}

`;

export default gridContainer;