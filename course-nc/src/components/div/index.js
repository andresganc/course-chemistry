
import Styled, { css } from "styled-components";

// Fonts
import roboto from 'components/assets/fonts/fonts'

// Props base
import propsBase from 'components/assets/props/props-base'

// Colors
import colorsBG from 'components/assets/colors/colors-bg'
import colorsText from 'components/assets/colors/colors-text'


// ================== PROPS EXCLUSIVES ==================
// Display - Legacy values
const DisplayBlock = css ` display: block; `
const DisplayInline = css ` display: inline; `
const DisplayInlineBlock = css ` display: inline-block; `
const DisplayFlex = css ` display: flex; `
const DisplayInlineFlex = css ` display: inline-flex; `
const DisplayGrid = css ` display: grid; `
const DisplayInlineGrid = css ` inline-grid;`
const DisplayFlowRoot = css ` flow-root; `
// Display - Box Generation
const DisplayNone = css ` display: none; `
const DisplayContents = css ` display: contents; `
// Display - Other Values
const DisplayTable = css ` display: table; `
const DisplayTableRow = css ` display: table-row; `
const DisplaylistItem = css ` display: clist-item; `
// Display - Global Values
const DisplayInherit = css ` display: inherit; `
const DisplayInitial = css ` display: initial; `
const DisplayRevert = css ` revert;`
const DisplayUnset = css ` unset; `
// Display - Two-Value Syntax
const DisplayBlockFlow = css ` display: block flow; `
const DisplayInlineFlow = css ` display: inline Flow; `
const DisplayInlineFlowRoot = css ` display: inline flow-root; `
const DisplayBlockFlex = css ` display: block flex; `
// const DisplayInlineFlex = css ` display: inline flex; ` 
const DisplayBlockGrid = css ` display: block grid; `
// const DisplayInlineGrid = css ` inline grid;`
const DisplayBlockFlowRoot = css ` block flow-root; `

// ==== Grid template columns ====
const GTCol1 = css ` grid-template-columns: repeat(1, minmax(0, 1fr)); `
const GTCol2 = css ` grid-template-columns: repeat(2, minmax(0, 1fr)); `
const GTCol3 = css ` grid-template-columns: repeat(3, minmax(0, 1fr)); `
const GTCol4 = css ` grid-template-columns: repeat(4, minmax(0, 1fr)); `
const GTCol5 = css ` grid-template-columns: repeat(5, minmax(0, 1fr)); `
const GTCol6 = css ` grid-template-columns: repeat(6, minmax(0, 1fr)); `
const GTCol7 = css ` grid-template-columns: repeat(7, minmax(0, 1fr)); `
const GTCol8 = css ` grid-template-columns: repeat(8, minmax(0, 1fr)); `
const GTCol9 = css ` grid-template-columns: repeat(9, minmax(0, 1fr)); `
const GTCol10 = css ` grid-template-columns: repeat(10, minmax(0, 1fr)); `
const GTCol11 = css ` grid-template-columns: repeat(11, minmax(0, 1fr)); `
const GTCol12 = css ` grid-template-columns: repeat(12, minmax(0, 1fr)); `
const GTColNone = css ` grid-template-columns: none; `

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


const Container = Styled.div `

    max-width: 100%;

    /* FONT */
    ${roboto}

    /* ================== PROPS EXCLUSIVES ================== */
    /* DISPLAY */
    /* Display - Legacy values */
    ${ props => props.displayBlock && css ` ${ DisplayBlock } `}
    ${ props => props.displayInline && css ` ${ DisplayInline } `}
    ${ props => props.displayInlineBlock && css ` ${ DisplayInlineBlock } `}
    ${ props => props.displayFlex && css ` ${ DisplayFlex } `}
    ${ props => props.displayInlineFlex && css ` ${ DisplayInlineFlex } `}
    ${ props => props.displayGrid  && css ` ${ DisplayGrid } `}
    ${ props => props.displayInlineGrid && css ` ${ DisplayInlineGrid } `}
    ${ props => props.displayFlowRoot && css ` ${ DisplayFlowRoot } `}
    /* Display - Box Generation */
    ${ props => props.displayNone && css ` ${ DisplayNone } `}
    ${ props => props.displayContents && css ` ${ DisplayContents } `}
    /* Display - Other Values */
    ${ props => props.displayTable  && css ` ${ DisplayTable } `}
    ${ props => props.displayTableRow && css ` ${ DisplayTableRow } `}
    ${ props => props.displaylistItem && css ` ${ DisplaylistItem } `}
    // Display - Other Values */
    ${ props => props.displayInherit && css ` ${ DisplayInherit } `}
    ${ props => props.displayInitial  && css ` ${ DisplayInitial } `}
    ${ props => props.displayRevert && css ` ${ DisplayRevert } `}
    ${ props => props.displayUnset && css ` ${ DisplayUnset } `}
    /* Display - Two Value Syntax */
    ${ props => props.displayBlockFlow  && css ` ${ DisplayBlockFlow } `}
    ${ props => props.displayInlineFlow && css ` ${ DisplayInlineFlow } `}
    ${ props => props.displayInlineFlowRoot && css ` ${ DisplayInlineFlowRoot } `}
    ${ props => props.displayBlockFlex && css ` ${ DisplayBlockFlex } `}
    ${ props => props.displayBlockGrid && css ` ${ DisplayBlockGrid } `}
    ${ props => props.displayBlockFlowRoot && css ` ${ DisplayBlockFlowRoot } `}

    /* GRID TEMPLATE COLUMNS */
    ${ props => props.gtCol1 && css ` ${ GTCol1 } `}
    ${ props => props.gtCol2 && css ` ${ GTCol2 } `}
    ${ props => props.gtCol3 && css ` ${ GTCol3 } `}
    ${ props => props.gtCol4 && css ` ${ GTCol4 } `}
    ${ props => props.gtCol5 && css ` ${ GTCol5 } `}
    ${ props => props.gtCol6 && css ` ${ GTCol6 } `}
    ${ props => props.gtCol7 && css ` ${ GTCol7 } `}
    ${ props => props.gtCol8 && css ` ${ GTCol8 } `}
    ${ props => props.gtCol9 && css ` ${ GTCol9 } `}
    ${ props => props.gtCol10 && css ` ${ GTCol10 } `}
    ${ props => props.gtCol11 && css ` ${ GTCol11 } `}
    ${ props => props.gtCol12 && css ` ${ GTCol12 } `}
    ${ props => props.gtColNone && css ` ${ GTColNone } `}

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
    /* ================== PROPS EXCLUSIVES ================== */

    /* PROPS BASE */
    ${propsBase}

    /* COLORS */
    ${ colorsBG }
    ${ colorsText }

`;

export default Container;