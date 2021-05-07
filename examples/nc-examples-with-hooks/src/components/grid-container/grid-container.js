
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


// ========================= RADIUS =============================
    const buttonRadius1 = css ` border-radius: .3rem; `
    const buttonRadius2 = css ` border-radius: .6rem; `
    const buttonRadius3 = css ` border-radius: .9rem; `
    const buttonRadius4 = css ` border-radius: 1.2rem; `
    const buttonRadius5 = css ` border-radius: 1.5rem; `
    const buttonRadius6 = css ` border-radius: 1.8rem; `


// ========================= SHADOW =============================
const ShadowBR1 = css` box-shadow: 1px 2px 1px 1px rgba(0, 0, 0, 0.1); `
const ShadowBR2 = css` box-shadow: 2px 3px 1px 1px rgba(0, 0, 0, 0.1); `
const ShadowBL1 = css` box-shadow: -1px 2px 1px 1px rgba(0, 0, 0, 0.1); `
const ShadowBL2 = css` box-shadow: -2px 3px 1px 1px rgba(0, 0, 0, 0.1); `
const ShadowTR1 = css` box-shadow: 1px -2px 1px 1px rgba(0, 0, 0, 0.1); `
const ShadowTR2 = css` box-shadow: 2px -3px 1px 1px rgba(0, 0, 0, 0.1); `
const ShadowTL1 = css` box-shadow: -1px -2px 1px 1px rgba(0, 0, 0, 0.1); `
const ShadowTL2 = css` box-shadow: -2px -3px 1px 1px rgba(0, 0, 0, 0.1); `

// ========================= POSITIONS =============================
    const PositionAbsolute = css ` position: absolute; `
    const PositionFixed = css ` position: fixed; `
    const PositionRelative = css ` position: relative; `
    const PositionStatic = css ` position: static; `
    const PositionSticky = css ` position: sticky; `
    const PositionInherit = css ` position: inherit; `
    const PositionInitial = css ` position: initial; `
    const PositionUnset = css ` position: unset; `




// ========================= MARGINS ============================
    // MarginX
    const MarginX1 = css ` margin-left: .2rem; margin-right: .2rem; `
    const MarginX2 = css ` margin-left: .4rem; margin-right: .4rem; `
    const MarginX3 = css ` margin-left: .7rem; margin-right: .7rem; `
    const MarginX4 = css ` margin-left: 1.1rem; margin-right: 1.1rem; `
    const MarginX5 = css ` margin-left: 1.6rem; margin-right: 1.6rem; `
    const MarginX6 = css ` margin-left: 2.2rem; margin-right: 2.2rem; `
    const MarginX7 = css ` margin-left: 2.9rem; margin-right: 2.9rem; `
    const MarginX8 = css ` margin-left: 3.7rem; margin-right: 3.7rem; `
    const MarginX9 = css ` margin-left: 4.6rem; margin-right: 4.6rem; `
    const MarginX10 = css ` margin-left: 5.6rem; margin-right: 5.6rem; `
    // MarginY
    const MarginY1 = css ` margin-top: .2rem; margin-bottom: .2rem; `
    const MarginY2 = css ` margin-top: .4rem; margin-bottom: .4rem; `
    const MarginY3 = css ` margin-top: .7rem; margin-bottom: .7rem; `
    const MarginY4 = css ` margin-top: 1.1rem; margin-bottom: 1.1rem; `
    const MarginY5 = css ` margin-top: 1.6rem; margin-bottom: 1.6rem; `
    const MarginY6 = css ` margin-top: 2.2rem; margin-bottom: 2.2rem; `
    const MarginY7 = css ` margin-top: 2.9rem; margin-bottom: 2.9rem; `
    const MarginY8 = css ` margin-top: 3.7rem; margin-bottom: 3.7rem; `
    const MarginY9 = css ` margin-top: 4.6rem; margin-bottom: 4.6rem; `
    const MarginY10 = css ` margin-top: 5.6rem; margin-bottom: 5.6rem; `
    // MarginTop
    const MarginT1 = css ` margin-top: .2rem; `
    const MarginT2 = css ` margin-top: .4rem; `
    const MarginT3 = css ` margin-top: .7rem; `
    const MarginT4 = css ` margin-top: 1.1rem; `
    const MarginT5 = css ` margin-top: 1.6rem; `
    const MarginT6 = css ` margin-top: 2.2rem; `
    const MarginT7 = css ` margin-top: 2.9rem; `
    const MarginT8 = css ` margin-top: 3.7rem; `
    const MarginT9 = css ` margin-top: 4.6rem; `
    const MarginT10 = css ` margin-top: 5.6rem; `
    // MarginRight
    const MarginR1 = css ` margin-right: .2rem; `
    const MarginR2 = css ` margin-right: .4rem; `
    const MarginR3 = css ` margin-right: .7rem; `
    const MarginR4 = css ` margin-right: 1.1rem; `
    const MarginR5 = css ` margin-right: 1.6rem; `
    const MarginR6 = css ` margin-right: 2.2rem; `
    const MarginR7 = css ` margin-right: 2.9rem; `
    const MarginR8 = css ` margin-right: 3.7rem; `
    const MarginR9 = css ` margin-right: 4.6rem; `
    const MarginR10 = css ` margin-right: 5.6rem; `
    // MarginBottom
    const MarginB1 = css ` margin-bottom: .2rem; `
    const MarginB2 = css ` margin-bottom: .4rem; `
    const MarginB3 = css ` margin-bottom: .7rem; `
    const MarginB4 = css ` margin-bottom: 1.1rem; `
    const MarginB5 = css ` margin-bottom: 1.6rem; `
    const MarginB6 = css ` margin-bottom: 2.2rem; `
    const MarginB7 = css ` margin-bottom: 2.9rem; `
    const MarginB8 = css ` margin-bottom: 3.7rem; `
    const MarginB9 = css ` margin-bottom: 4.6rem; `
    const MarginB10 = css ` margin-bottom: 5.6rem; `
    // MarginRight
    const MarginL1 = css ` margin-left: .2rem; `
    const MarginL2 = css ` margin-left: .4rem; `
    const MarginL3 = css ` margin-left: .7rem; `
    const MarginL4 = css ` margin-left: 1.1rem; `
    const MarginL5 = css ` margin-left: 1.6rem; `
    const MarginL6 = css ` margin-left: 2.2rem; `
    const MarginL7 = css ` margin-left: 2.9rem; `
    const MarginL8 = css ` margin-left: 3.7rem; `
    const MarginL9 = css ` margin-left: 4.6rem; `
    const MarginL10 = css ` margin-left: 5.6rem; `



const gridContainer = styled.div `

    display: grid;
    max-width: 100%;

    
    /* GRID TEMPLATE COLUMNS */
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

    /* CONTENT CENTER */
    ${ props => props.center && css ` ${ContentCenter} `}

    /* RADIUS */
    ${ props => props.radius1 && css ` ${ buttonRadius1 } `}
    ${ props => props.radius2 && css ` ${ buttonRadius2 } `}
    ${ props => props.radius3 && css ` ${ buttonRadius3 } `}
    ${ props => props.radius4 && css ` ${ buttonRadius4 } `}
    ${ props => props.radius5 && css ` ${ buttonRadius5 } `}
    ${ props => props.radius6 && css ` ${ buttonRadius6 } `}

    /* SHADOW */   
    ${props => props.shadowBR1 && css` ${ShadowBR1} `}
    ${props => props.shadowBR2 && css` ${ShadowBR2} `}
    ${props => props.shadowBL1 && css` ${ShadowBL1} `}
    ${props => props.shadowBL2 && css` ${ShadowBL2} `}
    ${props => props.shadowTR1 && css` ${ShadowTR1} `}
    ${props => props.shadowTR2 && css` ${ShadowTR2} `}
    ${props => props.shadowTL1 && css` ${ShadowTL1} `}
    ${props => props.shadowTL2 && css` ${ShadowTL2} `}

    /* POSITION */ 
    ${ props => props.absolute && css ` ${ PositionAbsolute } `}
    ${ props => props.fixed && css ` ${ PositionFixed } `}
    ${ props => props.relative && css ` ${ PositionRelative } `}
    ${ props => props.static && css ` ${ PositionStatic } `}
    ${ props => props.sticky && css ` ${ PositionSticky } `}
    ${ props => props.inherit && css ` ${ PositionInherit } `}
    ${ props => props.initial && css ` ${ PositionInitial } `}
    ${ props => props.unset && css ` ${ PositionUnset } `}

    /* MARGINS */
    /* MarginX */
    ${ props => props.marginX1 && css ` ${ MarginX1 } `}
    ${ props => props.marginX2 && css ` ${ MarginX2 } `}
    ${ props => props.marginX3 && css ` ${ MarginX3 } `}
    ${ props => props.marginX4 && css ` ${ MarginX4 } `}
    ${ props => props.marginX5 && css ` ${ MarginX5 } `}
    ${ props => props.marginX6 && css ` ${ MarginX6 } `}
    ${ props => props.marginX7 && css ` ${ MarginX7 } `}
    ${ props => props.marginX8 && css ` ${ MarginX8 } `}
    ${ props => props.marginX9 && css ` ${ MarginX9 } `}
    ${ props => props.marginX10 && css ` ${ MarginX10 } `}
    /* MarginY */
    ${ props => props.marginY1 && css ` ${ MarginY1 } `}
    ${ props => props.marginY2 && css ` ${ MarginY2 } `}
    ${ props => props.marginY3 && css ` ${ MarginY3 } `}
    ${ props => props.marginY4 && css ` ${ MarginY4 } `}
    ${ props => props.marginY5 && css ` ${ MarginY5 } `}
    ${ props => props.marginY6 && css ` ${ MarginY6 } `}
    ${ props => props.marginY7 && css ` ${ MarginY7 } `}
    ${ props => props.marginY8 && css ` ${ MarginY8 } `}
    ${ props => props.marginY9 && css ` ${ MarginY9 } `}
    ${ props => props.marginY10 && css ` ${ MarginY10 } `}
    /* MarginT */
    ${ props => props.marginT1 && css ` ${ MarginT1 } `}
    ${ props => props.marginT2 && css ` ${ MarginT2 } `}
    ${ props => props.marginT3 && css ` ${ MarginT3 } `}
    ${ props => props.marginT4 && css ` ${ MarginT4 } `}
    ${ props => props.marginT5 && css ` ${ MarginT5 } `}
    ${ props => props.marginT6 && css ` ${ MarginT6 } `}
    ${ props => props.marginT7 && css ` ${ MarginT7 } `}
    ${ props => props.marginT8 && css ` ${ MarginT8 } `}
    ${ props => props.marginT9 && css ` ${ MarginT9 } `}
    ${ props => props.marginT10 && css ` ${ MarginT10 } `}
    /* MarginR */
    ${ props => props.marginR1 && css ` ${ MarginR1 } `}
    ${ props => props.marginR2 && css ` ${ MarginR2 } `}
    ${ props => props.marginR3 && css ` ${ MarginR3 } `}
    ${ props => props.marginR4 && css ` ${ MarginR4 } `}
    ${ props => props.marginR5 && css ` ${ MarginR5 } `}
    ${ props => props.marginR6 && css ` ${ MarginR6 } `}
    ${ props => props.marginR7 && css ` ${ MarginR7 } `}
    ${ props => props.marginR8 && css ` ${ MarginR8 } `}
    ${ props => props.marginR9 && css ` ${ MarginR9 } `}
    ${ props => props.marginR10 && css ` ${ MarginR10 } `}
    /* MarginB */
    ${ props => props.marginB1 && css ` ${ MarginB1 } `}
    ${ props => props.marginB2 && css ` ${ MarginB2 } `}
    ${ props => props.marginB3 && css ` ${ MarginB3 } `}
    ${ props => props.marginB4 && css ` ${ MarginB4 } `}
    ${ props => props.marginB5 && css ` ${ MarginB5 } `}
    ${ props => props.marginB6 && css ` ${ MarginB6 } `}
    ${ props => props.marginB7 && css ` ${ MarginB7 } `}
    ${ props => props.marginB8 && css ` ${ MarginB8 } `}
    ${ props => props.marginB9 && css ` ${ MarginB9 } `}
    ${ props => props.marginB10 && css ` ${ MarginB10 } `}
    /* MarginL */
    ${ props => props.marginL1 && css ` ${ MarginL1 } `}
    ${ props => props.marginL2 && css ` ${ MarginL2 } `}
    ${ props => props.marginL3 && css ` ${ MarginL3 } `}
    ${ props => props.marginL4 && css ` ${ MarginL4 } `}
    ${ props => props.marginL5 && css ` ${ MarginL5 } `}
    ${ props => props.marginL6 && css ` ${ MarginL6 } `}
    ${ props => props.marginL7 && css ` ${ MarginL7 } `}
    ${ props => props.marginL8 && css ` ${ MarginL8 } `}
    ${ props => props.marginL9 && css ` ${ MarginL9 } `}
    ${ props => props.marginL10 && css ` ${ MarginL10 } `}

    /* COLORS */
    ${ colorsBG }
    ${ colorsText }

`;

export default gridContainer;