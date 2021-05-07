
import styled, { css } from 'styled-components'

// Fonts
import roboto from '../assets/fonts/fonts'

// Colors
import colorsBG from '../assets/colors/colors-bg'
import colorsText from '../assets/colors/colors-text'


// ========================= BUTTON BASE ============================
    const buttonBase = css `
        font-size: .7rem;
        padding: .3rem 1.3rem;
        border: none;
        cursor: pointer;
        outline: none;
        transition: .2s;

        &:hover {
                background-color: #03A9F4;
                //background-color: rgba(255, 255, 255, .1)
        }

    `

// ========================= BUTTON CIRCLE ============================
    const buttonCircle = css `
        font-size: .7rem;
        padding: .4rem .7rem;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        outline: none;
        transition: .2s;

        &:hover {
                background-color: #03A9F4;
        }

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



const Button = styled.button `

    /* FONT */
    ${ roboto }

    /* BUTTON BASE */
    ${ buttonBase } 


    /* CIRCLE */
    ${ props => props.circle && css ` ${ buttonCircle } `}

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
`

export default Button;