
import styled, { css } from 'styled-components'

// Fonts
import roboto from 'components/assets/fonts/fonts'

// Colors
import colorsBG from 'components/assets/colors/colors-bg'
import colorsText from 'components/assets/colors/colors-text'


// ========================= BUTTON BASE ============================
const buttonBase = css`
        font-size: .9rem;
        padding: .5rem 1.5rem;
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
const buttonCircle1 = css`
        font-size: .9rem;
        padding: .4rem .6rem;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        outline: none;
        transition: .2s;

        &:hover {
                background-color: #03A9F4;
        }

    `

const buttonCircle2 = css`
    font-size: .9rem;
    padding: .6rem .8rem;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    outline: none;
    transition: .2s;

    &:hover {
            background-color: #03A9F4;
    }

    `

const buttonCircle3 = css`
    font-size: .9rem;
    padding: .8rem 1rem;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    outline: none;
    transition: .2s;

    &:hover {
            background-color: #03A9F4;
    }

    `

const buttonCircle4 = css`
    font-size: .9rem;
    padding: 1rem 1.2rem;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    outline: none;
    transition: .2s;

    &:hover {
            background-color: #03A9F4;
    }

    `

const buttonCircle5 = css`
    font-size: .9rem;
    padding: 1.2rem 1.4rem;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    outline: none;
    transition: .2s;

    &:hover {
            background-color: #03A9F4;
    }

    `

const buttonCircle6 = css`
    font-size: .9rem;
    padding: 1.4rem 1.6rem;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    outline: none;
    transition: .2s;

    &:hover {
            background-color: #03A9F4;
    }

    `
// ======================== PADDING ==============================
const PaddingR1 = css` padding-right: .1rem; `
const PaddingR2 = css` padding-right: .2rem; `
const PaddingR3 = css` padding-right: .3rem; `
const PaddingR4 = css` padding-right: .4rem; `
const PaddingR5 = css` padding-right: .5rem; `
const PaddingR6 = css` padding-right: .6rem; `
const PaddingR7 = css` padding-right: .7rem; `
const PaddingR8 = css` padding-right: .8rem; `
const PaddingR9 = css` padding-right: .9rem; `
const PaddingR10 = css` padding-right: 1rem; `
const PaddingR11 = css` padding-right: 1.1rem; `
const PaddingR12 = css` padding-right: 1.2rem; `
const PaddingR13 = css` padding-right: 1.3rem; `
const PaddingR14 = css` padding-right: 1.4rem; `
const PaddingR15 = css` padding-right: 1.5rem; `
const PaddingR16 = css` padding-right: 1.6rem; `
const PaddingR17 = css` padding-right: 1.7rem; `
const PaddingR18 = css` padding-right: 1.8rem; `
const PaddingR19 = css` padding-right: 1.9rem; `
const PaddingR20 = css` padding-right: 2rem; `


const PaddingL1 = css` padding-left: .1rem; `
const PaddingL2 = css` padding-left: .2rem; `
const PaddingL3 = css` padding-left: .3rem; `
const PaddingL4 = css` padding-left: .4rem; `
const PaddingL5 = css` padding-left: .5rem; `
const PaddingL6 = css` padding-left: .6rem; `
const PaddingL7 = css` padding-left: .7rem; `
const PaddingL8 = css` padding-left: .8rem; `
const PaddingL9 = css` padding-left: .9rem; `
const PaddingL10 = css` padding-left: 1rem; `
const PaddingL11 = css` padding-left: 1.1rem; `
const PaddingL12 = css` padding-left: 1.2rem; `
const PaddingL13 = css` padding-left: 1.3rem; `
const PaddingL14 = css` padding-left: 1.4rem; `
const PaddingL15 = css` padding-left: 1.5rem; `
const PaddingL16 = css` padding-left: 1.6rem; `
const PaddingL17 = css` padding-left: 1.7rem; `
const PaddingL18 = css` padding-left: 1.8rem; `
const PaddingL19 = css` padding-left: 1.9rem; `
const PaddingL20 = css` padding-left: 2rem; `


const PaddingT1 = css` padding-top: .1rem; `
const PaddingT2 = css` padding-top: .2rem; `
const PaddingT3 = css` padding-top: .3rem; `
const PaddingT4 = css` padding-top: .4rem; `
const PaddingT5 = css` padding-top: .5rem; `
const PaddingT6 = css` padding-top: .6rem; `
const PaddingT7 = css` padding-top: .7rem; `
const PaddingT8 = css` padding-top: .8rem; `
const PaddingT9 = css` padding-top: .9rem; `
const PaddingT10 = css` padding-top: 1rem; `
const PaddingT11 = css` padding-top: 1.1rem; `
const PaddingT12 = css` padding-top: 1.2rem; `
const PaddingT13 = css` padding-top: 1.3rem; `
const PaddingT14 = css` padding-top: 1.4rem; `
const PaddingT15 = css` padding-top: 1.5rem; `
const PaddingT16 = css` padding-top: 1.6rem; `
const PaddingT17 = css` padding-top: 1.7rem; `
const PaddingT18 = css` padding-top: 1.8rem; `
const PaddingT19 = css` padding-top: 1.9rem; `
const PaddingT20 = css` padding-top: 2rem; `

const PaddingB1 = css` padding-bottom: .1rem; `
const PaddingB2 = css` padding-bottom: .2rem; `
const PaddingB3 = css` padding-bottom: .3rem; `
const PaddingB4 = css` padding-bottom: .4rem; `
const PaddingB5 = css` padding-bottom: .5rem; `
const PaddingB6 = css` padding-bottom: .6rem; `
const PaddingB7 = css` padding-bottom: .7rem; `
const PaddingB8 = css` padding-bottom: .8rem; `
const PaddingB9 = css` padding-bottom: .9rem; `
const PaddingB10 = css` padding-bottom: 1rem; `
const PaddingB11 = css` padding-bottom: 1.1rem; `
const PaddingB12 = css` padding-bottom: 1.2rem; `
const PaddingB13 = css` padding-bottom: 1.3rem; `
const PaddingB14 = css` padding-bottom: 1.4rem; `
const PaddingB15 = css` padding-bottom: 1.5rem; `
const PaddingB16 = css` padding-bottom: 1.6rem; `
const PaddingB17 = css` padding-bottom: 1.7rem; `
const PaddingB18 = css` padding-bottom: 1.8rem; `
const PaddingB19 = css` padding-bottom: 1.9rem; `
const PaddingB20 = css` padding-bottom: 2rem; `


// ========================= RADIUS =============================
const buttonRadius1 = css` border-radius: .3rem; `
const buttonRadius2 = css` border-radius: .6rem; `
const buttonRadius3 = css` border-radius: .9rem; `
const buttonRadius4 = css` border-radius: 1.2rem; `
const buttonRadius5 = css` border-radius: 1.5rem; `
const buttonRadius6 = css` border-radius: 1.8rem; `


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
const PositionAbsolute = css` position: absolute; `
const PositionFixed = css` position: fixed; `
const PositionRelative = css` position: relative; `
const PositionStatic = css` position: static; `
const PositionSticky = css` position: sticky; `
const PositionInherit = css` position: inherit; `
const PositionInitial = css` position: initial; `
const PositionUnset = css` position: unset; `


// ========================= MARGINS ============================
// MarginX
const MarginX1 = css` margin-left: .2rem; margin-right: .2rem; `
const MarginX2 = css` margin-left: .4rem; margin-right: .4rem; `
const MarginX3 = css` margin-left: .7rem; margin-right: .7rem; `
const MarginX4 = css` margin-left: 1.1rem; margin-right: 1.1rem; `
const MarginX5 = css` margin-left: 1.6rem; margin-right: 1.6rem; `
const MarginX6 = css` margin-left: 2.2rem; margin-right: 2.2rem; `
const MarginX7 = css` margin-left: 2.9rem; margin-right: 2.9rem; `
const MarginX8 = css` margin-left: 3.7rem; margin-right: 3.7rem; `
const MarginX9 = css` margin-left: 4.6rem; margin-right: 4.6rem; `
const MarginX10 = css` margin-left: 5.6rem; margin-right: 5.6rem; `
// MarginY
const MarginY1 = css` margin-top: .2rem; margin-bottom: .2rem; `
const MarginY2 = css` margin-top: .4rem; margin-bottom: .4rem; `
const MarginY3 = css` margin-top: .7rem; margin-bottom: .7rem; `
const MarginY4 = css` margin-top: 1.1rem; margin-bottom: 1.1rem; `
const MarginY5 = css` margin-top: 1.6rem; margin-bottom: 1.6rem; `
const MarginY6 = css` margin-top: 2.2rem; margin-bottom: 2.2rem; `
const MarginY7 = css` margin-top: 2.9rem; margin-bottom: 2.9rem; `
const MarginY8 = css` margin-top: 3.7rem; margin-bottom: 3.7rem; `
const MarginY9 = css` margin-top: 4.6rem; margin-bottom: 4.6rem; `
const MarginY10 = css` margin-top: 5.6rem; margin-bottom: 5.6rem; `
// MarginTop
const MarginT1 = css` margin-top: .2rem; `
const MarginT2 = css` margin-top: .4rem; `
const MarginT3 = css` margin-top: .7rem; `
const MarginT4 = css` margin-top: 1.1rem; `
const MarginT5 = css` margin-top: 1.6rem; `
const MarginT6 = css` margin-top: 2.2rem; `
const MarginT7 = css` margin-top: 2.9rem; `
const MarginT8 = css` margin-top: 3.7rem; `
const MarginT9 = css` margin-top: 4.6rem; `
const MarginT10 = css` margin-top: 5.6rem; `
// MarginRight
const MarginR1 = css` margin-right: .2rem; `
const MarginR2 = css` margin-right: .4rem; `
const MarginR3 = css` margin-right: .7rem; `
const MarginR4 = css` margin-right: 1.1rem; `
const MarginR5 = css` margin-right: 1.6rem; `
const MarginR6 = css` margin-right: 2.2rem; `
const MarginR7 = css` margin-right: 2.9rem; `
const MarginR8 = css` margin-right: 3.7rem; `
const MarginR9 = css` margin-right: 4.6rem; `
const MarginR10 = css` margin-right: 5.6rem; `
// MarginBottom
const MarginB1 = css` margin-bottom: .2rem; `
const MarginB2 = css` margin-bottom: .4rem; `
const MarginB3 = css` margin-bottom: .7rem; `
const MarginB4 = css` margin-bottom: 1.1rem; `
const MarginB5 = css` margin-bottom: 1.6rem; `
const MarginB6 = css` margin-bottom: 2.2rem; `
const MarginB7 = css` margin-bottom: 2.9rem; `
const MarginB8 = css` margin-bottom: 3.7rem; `
const MarginB9 = css` margin-bottom: 4.6rem; `
const MarginB10 = css` margin-bottom: 5.6rem; `
// MarginRight
const MarginL1 = css` margin-left: .2rem; `
const MarginL2 = css` margin-left: .4rem; `
const MarginL3 = css` margin-left: .7rem; `
const MarginL4 = css` margin-left: 1.1rem; `
const MarginL5 = css` margin-left: 1.6rem; `
const MarginL6 = css` margin-left: 2.2rem; `
const MarginL7 = css` margin-left: 2.9rem; `
const MarginL8 = css` margin-left: 3.7rem; `
const MarginL9 = css` margin-left: 4.6rem; `
const MarginL10 = css` margin-left: 5.6rem; `



const Button = styled.button`

    /* FONT */
    ${roboto}

    /* BUTTON BASE */
    ${buttonBase} 


    /* CIRCLE */
    ${props => props.circle1 && css` ${buttonCircle1} `}
    ${props => props.circle2 && css` ${buttonCircle2} `}
    ${props => props.circle3 && css` ${buttonCircle3} `}
    ${props => props.circle4 && css` ${buttonCircle4} `}
    ${props => props.circle5 && css` ${buttonCircle5} `}
    ${props => props.circle6 && css` ${buttonCircle6} `}

    /* PADDING */
    ${props => props.paddingR1 && css` ${PaddingR1} `}
    ${props => props.paddingR2 && css` ${PaddingR2} `}
    ${props => props.paddingR3 && css` ${PaddingR3} `}
    ${props => props.paddingR4 && css` ${PaddingR4} `}
    ${props => props.paddingR5 && css` ${PaddingR5} `}
    ${props => props.paddingR6 && css` ${PaddingR6} `}
    ${props => props.paddingR7 && css` ${PaddingR7} `}
    ${props => props.paddingR8 && css` ${PaddingR8} `}
    ${props => props.paddingR9 && css` ${PaddingR9} `}
    ${props => props.paddingR10 && css` ${PaddingR10} `}
    ${props => props.paddingR11 && css` ${PaddingR11} `}
    ${props => props.paddingR12 && css` ${PaddingR12} `}
    ${props => props.paddingR13 && css` ${PaddingR13} `}
    ${props => props.paddingR14 && css` ${PaddingR14} `}
    ${props => props.paddingR15 && css` ${PaddingR15} `}
    ${props => props.paddingR16 && css` ${PaddingR16} `}
    ${props => props.paddingR17 && css` ${PaddingR17} `}
    ${props => props.paddingR18 && css` ${PaddingR18} `}
    ${props => props.paddingR19 && css` ${PaddingR19} `}
    ${props => props.paddingR20 && css` ${PaddingR20} `}

    ${props => props.paddingL1 && css` ${PaddingL1} `}
    ${props => props.paddingL2 && css` ${PaddingL2} `}
    ${props => props.paddingL3 && css` ${PaddingL3} `}
    ${props => props.paddingL4 && css` ${PaddingL4} `}
    ${props => props.paddingL5 && css` ${PaddingL5} `}
    ${props => props.paddingL6 && css` ${PaddingL6} `}
    ${props => props.paddingL7 && css` ${PaddingL7} `}
    ${props => props.paddingL8 && css` ${PaddingL8} `}
    ${props => props.paddingL9 && css` ${PaddingL9} `}
    ${props => props.paddingL10 && css` ${PaddingL10} `}
    ${props => props.paddingL11 && css` ${PaddingL11} `}
    ${props => props.paddingL12 && css` ${PaddingL12} `}
    ${props => props.paddingL13 && css` ${PaddingL13} `}
    ${props => props.paddingL14 && css` ${PaddingL14} `}
    ${props => props.paddingL15 && css` ${PaddingL15} `}
    ${props => props.paddingL16 && css` ${PaddingL16} `}
    ${props => props.padding1L7 && css` ${PaddingL17} `}
    ${props => props.paddingL18 && css` ${PaddingL18} `}
    ${props => props.paddingL19 && css` ${PaddingL19} `}
    ${props => props.paddingL20 && css` ${PaddingL20} `}

    ${props => props.paddingT1 && css` ${PaddingT1} `}
    ${props => props.paddingT2 && css` ${PaddingT2} `}
    ${props => props.paddingT3 && css` ${PaddingT3} `}
    ${props => props.paddingT4 && css` ${PaddingT4} `}
    ${props => props.paddingT5 && css` ${PaddingT5} `}
    ${props => props.paddingT6 && css` ${PaddingT6} `}
    ${props => props.paddingT7 && css` ${PaddingT7} `}
    ${props => props.paddingT8 && css` ${PaddingT8} `}
    ${props => props.paddingT9 && css` ${PaddingT9} `}
    ${props => props.paddingT10 && css` ${PaddingT10} `}
    ${props => props.paddingT11 && css` ${PaddingT11} `}
    ${props => props.paddingT12 && css` ${PaddingT12} `}
    ${props => props.paddingT13 && css` ${PaddingT13} `}
    ${props => props.paddingT14 && css` ${PaddingT14} `}
    ${props => props.paddingT15 && css` ${PaddingT15} `}
    ${props => props.paddingT16 && css` ${PaddingT16} `}
    ${props => props.paddingT17 && css` ${PaddingT17} `}
    ${props => props.paddingT18 && css` ${PaddingT18} `}
    ${props => props.paddingT19 && css` ${PaddingT19} `}
    ${props => props.paddingT20 && css` ${PaddingT20} `}

    ${props => props.paddingB1 && css` ${PaddingB1} `}
    ${props => props.paddingB2 && css` ${PaddingB2} `}
    ${props => props.paddingB3 && css` ${PaddingB3} `}
    ${props => props.paddingB4 && css` ${PaddingB4} `}
    ${props => props.paddingB5 && css` ${PaddingB5} `}
    ${props => props.paddingB6 && css` ${PaddingB6} `}
    ${props => props.paddingB7 && css` ${PaddingB7} `}
    ${props => props.paddingB8 && css` ${PaddingB8} `}
    ${props => props.paddingB9 && css` ${PaddingB9} `}
    ${props => props.paddingB10 && css` ${PaddingB10} `}
    ${props => props.paddingB11 && css` ${PaddingB11} `}
    ${props => props.paddingB12 && css` ${PaddingB12} `}
    ${props => props.paddingB13 && css` ${PaddingB13} `}
    ${props => props.paddingB14 && css` ${PaddingB14} `}
    ${props => props.paddingB15 && css` ${PaddingB15} `}
    ${props => props.paddingB16 && css` ${PaddingB16} `}
    ${props => props.paddingB17 && css` ${PaddingB17} `}
    ${props => props.paddingB18 && css` ${PaddingB18} `}
    ${props => props.paddingB19 && css` ${PaddingB19} `}
    ${props => props.paddingB20 && css` ${PaddingB20} `}

    /* RADIUS */
    ${props => props.radius1 && css` ${buttonRadius1} `}
    ${props => props.radius2 && css` ${buttonRadius2} `}
    ${props => props.radius3 && css` ${buttonRadius3} `}
    ${props => props.radius4 && css` ${buttonRadius4} `}
    ${props => props.radius5 && css` ${buttonRadius5} `}
    ${props => props.radius6 && css` ${buttonRadius6} `}

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
    ${props => props.absolute && css` ${PositionAbsolute} `}
    ${props => props.fixed && css` ${PositionFixed} `}
    ${props => props.relative && css` ${PositionRelative} `}
    ${props => props.static && css` ${PositionStatic} `}
    ${props => props.sticky && css` ${PositionSticky} `}
    ${props => props.inherit && css` ${PositionInherit} `}
    ${props => props.initial && css` ${PositionInitial} `}
    ${props => props.unset && css` ${PositionUnset} `}

    /* MARGINS */
    /* MarginX */
    ${props => props.marginX1 && css` ${MarginX1} `}
    ${props => props.marginX2 && css` ${MarginX2} `}
    ${props => props.marginX3 && css` ${MarginX3} `}
    ${props => props.marginX4 && css` ${MarginX4} `}
    ${props => props.marginX5 && css` ${MarginX5} `}
    ${props => props.marginX6 && css` ${MarginX6} `}
    ${props => props.marginX7 && css` ${MarginX7} `}
    ${props => props.marginX8 && css` ${MarginX8} `}
    ${props => props.marginX9 && css` ${MarginX9} `}
    ${props => props.marginX10 && css` ${MarginX10} `}
    /* MarginY */
    ${props => props.marginY1 && css` ${MarginY1} `}
    ${props => props.marginY2 && css` ${MarginY2} `}
    ${props => props.marginY3 && css` ${MarginY3} `}
    ${props => props.marginY4 && css` ${MarginY4} `}
    ${props => props.marginY5 && css` ${MarginY5} `}
    ${props => props.marginY6 && css` ${MarginY6} `}
    ${props => props.marginY7 && css` ${MarginY7} `}
    ${props => props.marginY8 && css` ${MarginY8} `}
    ${props => props.marginY9 && css` ${MarginY9} `}
    ${props => props.marginY10 && css` ${MarginY10} `}
    /* MarginT */
    ${props => props.marginT1 && css` ${MarginT1} `}
    ${props => props.marginT2 && css` ${MarginT2} `}
    ${props => props.marginT3 && css` ${MarginT3} `}
    ${props => props.marginT4 && css` ${MarginT4} `}
    ${props => props.marginT5 && css` ${MarginT5} `}
    ${props => props.marginT6 && css` ${MarginT6} `}
    ${props => props.marginT7 && css` ${MarginT7} `}
    ${props => props.marginT8 && css` ${MarginT8} `}
    ${props => props.marginT9 && css` ${MarginT9} `}
    ${props => props.marginT10 && css` ${MarginT10} `}
    /* MarginR */
    ${props => props.marginR1 && css` ${MarginR1} `}
    ${props => props.marginR2 && css` ${MarginR2} `}
    ${props => props.marginR3 && css` ${MarginR3} `}
    ${props => props.marginR4 && css` ${MarginR4} `}
    ${props => props.marginR5 && css` ${MarginR5} `}
    ${props => props.marginR6 && css` ${MarginR6} `}
    ${props => props.marginR7 && css` ${MarginR7} `}
    ${props => props.marginR8 && css` ${MarginR8} `}
    ${props => props.marginR9 && css` ${MarginR9} `}
    ${props => props.marginR10 && css` ${MarginR10} `}
    /* MarginB */
    ${props => props.marginB1 && css` ${MarginB1} `}
    ${props => props.marginB2 && css` ${MarginB2} `}
    ${props => props.marginB3 && css` ${MarginB3} `}
    ${props => props.marginB4 && css` ${MarginB4} `}
    ${props => props.marginB5 && css` ${MarginB5} `}
    ${props => props.marginB6 && css` ${MarginB6} `}
    ${props => props.marginB7 && css` ${MarginB7} `}
    ${props => props.marginB8 && css` ${MarginB8} `}
    ${props => props.marginB9 && css` ${MarginB9} `}
    ${props => props.marginB10 && css` ${MarginB10} `}
    /* MarginL */
    ${props => props.marginL1 && css` ${MarginL1} `}
    ${props => props.marginL2 && css` ${MarginL2} `}
    ${props => props.marginL3 && css` ${MarginL3} `}
    ${props => props.marginL4 && css` ${MarginL4} `}
    ${props => props.marginL5 && css` ${MarginL5} `}
    ${props => props.marginL6 && css` ${MarginL6} `}
    ${props => props.marginL7 && css` ${MarginL7} `}
    ${props => props.marginL8 && css` ${MarginL8} `}
    ${props => props.marginL9 && css` ${MarginL9} `}
    ${props => props.marginL10 && css` ${MarginL10} `}

    /* COLORS */
    ${colorsBG}
    ${colorsText}
`

export default Button;