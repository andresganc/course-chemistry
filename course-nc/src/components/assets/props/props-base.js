
import { css } from 'styled-components'

// Props base
import {
    BorderNone, BorderTop, BorderBottom, BorderLeft, BorderRight,
    Margin1, Margin2, Margin3, Margin4, Margin5, Margin6, Margin7, Margin8, Margin9, Margin10,
    MarginX1, MarginX2, MarginX3, MarginX4, MarginX5, MarginX6, MarginX7, MarginX8, MarginX9, MarginX10,
    MarginY1, MarginY2, MarginY3, MarginY4, MarginY5, MarginY6, MarginY7, MarginY8, MarginY9, MarginY10,
    MarginT1, MarginT2, MarginT3, MarginT4, MarginT5, MarginT6, MarginT7, MarginT8, MarginT9, MarginT10,
    MarginR1, MarginR2, MarginR3, MarginR4, MarginR5, MarginR6, MarginR7, MarginR8, MarginR9, MarginR10,
    MarginB1, MarginB2, MarginB3, MarginB4, MarginB5, MarginB6, MarginB7, MarginB8, MarginB9, MarginB10,
    MarginL1, MarginL2, MarginL3, MarginL4, MarginL5, MarginL6, MarginL7, MarginL8, MarginL9, MarginL10,
    Padding1, Padding2, Padding3, Padding4, Padding5, Padding6, Padding7, Padding8, Padding9, Padding10,
    Padding11, Padding12, Padding13, Padding14, Padding15, Padding16, Padding17, Padding18, Padding19, Padding20,
    PaddingX1, PaddingX2, PaddingX3, PaddingX4, PaddingX5, PaddingX6, PaddingX7, PaddingX8, PaddingX9, PaddingX10,
    PaddingX11, PaddingX12, PaddingX13, PaddingX14, PaddingX15, PaddingX16, PaddingX17, PaddingX18, PaddingX19, PaddingX20,
    PaddingY1, PaddingY2, PaddingY3, PaddingY4, PaddingY5, PaddingY6, PaddingY7, PaddingY8, PaddingY9, PaddingY10,
    PaddingY11, PaddingY12, PaddingY13, PaddingY14, PaddingY15, PaddingY16, PaddingY17, PaddingY18, PaddingY19, PaddingY20,
    PaddingT1, PaddingT2, PaddingT3, PaddingT4, PaddingT5, PaddingT6, PaddingT7, PaddingT8, PaddingT9, PaddingT10,
    PaddingT11, PaddingT12, PaddingT13, PaddingT14, PaddingT15, PaddingT16, PaddingT17, PaddingT18, PaddingT19, PaddingT20,
    PaddingR1, PaddingR2, PaddingR3, PaddingR4, PaddingR5, PaddingR6, PaddingR7, PaddingR8, PaddingR9, PaddingR10,
    PaddingR11, PaddingR12, PaddingR13, PaddingR14, PaddingR15, PaddingR16, PaddingR17, PaddingR18, PaddingR19, PaddingR20,
    PaddingB1, PaddingB2, PaddingB3, PaddingB4, PaddingB5, PaddingB6, PaddingB7, PaddingB8, PaddingB9, PaddingB10,
    PaddingB11, PaddingB12, PaddingB13, PaddingB14, PaddingB15, PaddingB16, PaddingB17, PaddingB18, PaddingB19, PaddingB20,
    PaddingL1, PaddingL2, PaddingL3, PaddingL4, PaddingL5, PaddingL6, PaddingL7, PaddingL8, PaddingL9, PaddingL10,
    PaddingL11, PaddingL12, PaddingL13, PaddingL14, PaddingL15, PaddingL16, PaddingL17, PaddingL18, PaddingL19, PaddingL20, 
    PositionAbsolute, PositionFixed, PositionInherit, PositionInitial, PositionRelative, PositionStatic, PositionSticky, PositionUnset,
    Radius1, Radius2, Radius3, Radius4, Radius5, Radius6, 
    RadiusTL1, RadiusTL2, RadiusTL3, RadiusTL4, RadiusTL5, RadiusTL6,
    RadiusTR1, RadiusTR2, RadiusTR3, RadiusTR4, RadiusTR5, RadiusTR6,
    RadiusBL1, RadiusBL2, RadiusBL3, RadiusBL4, RadiusBL5, RadiusBL6,
    RadiusBR1, RadiusBR2, RadiusBR3, RadiusBR4, RadiusBR5, RadiusBR6,
    ShadowTR1, ShadowTR2, ShadowTL1, ShadowTL2, ShadowBR1, ShadowBR2, ShadowBL1, ShadowBL2,
    TextCenter, TextLeft, TextRight,
     
} 
    from 'components/assets/props/props-base-css'



    const propsBase = css `
        /* ==================== PROPS BASE ==================== */

        /* BORDER */
        ${ props => props.borderNone && css ` ${BorderNone} `}
        ${ props => props.borderTop && css ` ${BorderTop} `}
        ${ props => props.borderBottom && css ` ${BorderBottom} `}
        ${ props => props.borderLeft && css ` ${BorderLeft} `}
        ${ props => props.borderRight && css ` ${BorderRight} `}

        /* TEXT CENTER */
        ${ props => props.textCenter && css ` ${TextCenter} `}
        ${ props => props.textLeft && css ` ${TextLeft} `}
        ${ props => props.textRight && css ` ${TextRight} `}

        /* RADIUS */
        /* Radius all */
        ${props => props.borderRadius1 && css` ${Radius1} `}
        ${props => props.borderRadius2 && css` ${Radius2} `}
        ${props => props.borderRadius3 && css` ${Radius3} `}
        ${props => props.borderRadius4 && css` ${Radius4} `}
        ${props => props.borderRadius5 && css` ${Radius5} `}
        ${props => props.borderRadius6 && css` ${Radius6} `}
        /* Radius TL */
        ${props => props.borderRadiusTL1 && css` ${RadiusTL1} `}
        ${props => props.borderRadiusTL2 && css` ${RadiusTL2} `}
        ${props => props.borderRadiusTL3 && css` ${RadiusTL3} `}
        ${props => props.borderRadiusTL4 && css` ${RadiusTL4} `}
        ${props => props.borderRadiusTL5 && css` ${RadiusTL5} `}
        ${props => props.borderRadiusTL6 && css` ${RadiusTL6} `}
        /* Radius TR */
        ${props => props.borderRadiusTR1 && css` ${RadiusTR1} `}
        ${props => props.borderRadiusTR2 && css` ${RadiusTR2} `}
        ${props => props.borderRadiusTR3 && css` ${RadiusTR3} `}
        ${props => props.borderRadiusTR4 && css` ${RadiusTR4} `}
        ${props => props.borderRadiusTR5 && css` ${RadiusTR5} `}
        ${props => props.borderRadiusTR6 && css` ${RadiusTR6} `}
        /* Radius BL */
        ${props => props.borderRadiusBL1 && css` ${RadiusBL1} `}
        ${props => props.borderRadiusBL2 && css` ${RadiusBL2} `}
        ${props => props.borderRadiusBL3 && css` ${RadiusBL3} `}
        ${props => props.borderRadiusBL4 && css` ${RadiusBL4} `}
        ${props => props.borderRadiusBL5 && css` ${RadiusBL5} `}
        ${props => props.borderRadiusBL6 && css` ${RadiusBL6} `}
         /* Radius BR */
        ${props => props.borderRadiusBR1 && css` ${RadiusBR1} `}
        ${props => props.borderRadiusBR2 && css` ${RadiusBR2} `}
        ${props => props.borderRadiusBR3 && css` ${RadiusBR3} `}
        ${props => props.borderRadiusBR4 && css` ${RadiusBR4} `}
        ${props => props.borderRadiusBR5 && css` ${RadiusBR5} `}
        ${props => props.borderRadiusBR6 && css` ${RadiusBR6} `}

        /* SHADOW */    
        ${props => props.boxShadowBR1 && css` ${ShadowBR1} `}
        ${props => props.boxShadowBR2 && css` ${ShadowBR2} `}
        ${props => props.boxShadowBL1 && css` ${ShadowBL1} `}
        ${props => props.boxShadowBL2 && css` ${ShadowBL2} `}
        ${props => props.boxShadowTR1 && css` ${ShadowTR1} `}
        ${props => props.boxShadowTR2 && css` ${ShadowTR2} `}
        ${props => props.boxShadowTL1 && css` ${ShadowTL1} `}
        ${props => props.boxShadowTL2 && css` ${ShadowTL2} `}

        /* POSITION */ 
        ${props => props.positionAbsolute && css` ${PositionAbsolute} `}
        ${props => props.positionFixed && css` ${PositionFixed} `}
        ${props => props.positionRelative && css` ${PositionRelative} `}
        ${props => props.positionStatic && css` ${PositionStatic} `}
        ${props => props.positionSticky && css` ${PositionSticky} `}
        ${props => props.positionInherit && css` ${PositionInherit} `}
        ${props => props.positionInitial && css` ${PositionInitial} `}
        ${props => props.positionUnset && css` ${PositionUnset} `}

        /* MARGINS */
        /* Margin - Margin All */
        ${props => props.margin1 && css` ${Margin1} `}
        ${props => props.margin2 && css` ${Margin2} `}
        ${props => props.margin3 && css` ${Margin3} `}
        ${props => props.margin4 && css` ${Margin4} `}
        ${props => props.margin5 && css` ${Margin5} `}
        ${props => props.margin6 && css` ${Margin6} `}
        ${props => props.margin7 && css` ${Margin7} `}
        ${props => props.margin8 && css` ${Margin8} `}
        ${props => props.margin9 && css` ${Margin9} `}
        ${props => props.margin10 && css` ${Margin10} `}
        /* MarginX - Eje X */
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
        /* MarginY - Margin eje Y */
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
        /* MarginT - Margin Top */
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
        /* MarginR - Margin Right */
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
        /* MarginB - Margin Bottom */
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
        /* MarginL - Margin Left */
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

        /* PADDING */
        /* Padding - Padding All */
        ${props => props.padding1 && css` ${Padding1} `}
        ${props => props.padding2 && css` ${Padding2} `}
        ${props => props.padding3 && css` ${Padding3} `}
        ${props => props.padding4 && css` ${Padding4} `}
        ${props => props.padding5 && css` ${Padding5} `}
        ${props => props.padding6 && css` ${Padding6} `}
        ${props => props.padding7 && css` ${Padding7} `}
        ${props => props.padding8 && css` ${Padding8} `}
        ${props => props.padding9 && css` ${Padding9} `}
        ${props => props.padding10 && css` ${Padding10} `}
        ${props => props.padding11 && css` ${Padding11} `}
        ${props => props.padding12 && css` ${Padding12} `}
        ${props => props.padding13 && css` ${Padding13} `}
        ${props => props.padding14 && css` ${Padding14} `}
        ${props => props.padding15 && css` ${Padding15} `}
        ${props => props.padding16 && css` ${Padding16} `}
        ${props => props.padding17 && css` ${Padding17} `}
        ${props => props.padding18 && css` ${Padding18} `}
        ${props => props.padding19 && css` ${Padding19} `}
        ${props => props.padding20 && css` ${Padding20} `}
        /* PaddingX - Padding eje X */
        ${props => props.paddingX1 && css` ${PaddingX1} `}
        ${props => props.paddingX2 && css` ${PaddingX2} `}
        ${props => props.paddingX3 && css` ${PaddingX3} `}
        ${props => props.paddingX4 && css` ${PaddingX4} `}
        ${props => props.paddingX5 && css` ${PaddingX5} `}
        ${props => props.paddingX6 && css` ${PaddingX6} `}
        ${props => props.paddingX7 && css` ${PaddingX7} `}
        ${props => props.paddingX8 && css` ${PaddingX8} `}
        ${props => props.paddingX9 && css` ${PaddingX9} `}
        ${props => props.paddingX10 && css` ${PaddingX10} `}
        ${props => props.paddingX11 && css` ${PaddingX11} `}
        ${props => props.paddingX12 && css` ${PaddingX12} `}
        ${props => props.paddingX13 && css` ${PaddingX13} `}
        ${props => props.paddingX14 && css` ${PaddingX14} `}
        ${props => props.paddingX15 && css` ${PaddingX15} `}
        ${props => props.paddingX16 && css` ${PaddingX16} `}
        ${props => props.paddingX17 && css` ${PaddingX17} `}
        ${props => props.paddingX18 && css` ${PaddingX18} `}
        ${props => props.paddingX19 && css` ${PaddingX19} `}
        ${props => props.paddingX20 && css` ${PaddingX20} `}
        /* PaddingY - Padding eje Y */
        ${props => props.paddingY1 && css` ${PaddingY1} `}
        ${props => props.paddingY2 && css` ${PaddingY2} `}
        ${props => props.paddingY3 && css` ${PaddingY3} `}
        ${props => props.paddingY4 && css` ${PaddingY4} `}
        ${props => props.paddingY5 && css` ${PaddingY5} `}
        ${props => props.paddingY6 && css` ${PaddingY6} `}
        ${props => props.paddingY7 && css` ${PaddingY7} `}
        ${props => props.paddingY8 && css` ${PaddingY8} `}
        ${props => props.paddingY9 && css` ${PaddingY9} `}
        ${props => props.paddingY10 && css` ${PaddingY10} `}
        ${props => props.paddingY11 && css` ${PaddingY11} `}
        ${props => props.paddingY12 && css` ${PaddingY12} `}
        ${props => props.paddingY13 && css` ${PaddingY13} `}
        ${props => props.paddingY14 && css` ${PaddingY14} `}
        ${props => props.paddingY15 && css` ${PaddingY15} `}
        ${props => props.paddingY16 && css` ${PaddingY16} `}
        ${props => props.paddingY17 && css` ${PaddingY17} `}
        ${props => props.paddingY18 && css` ${PaddingY18} `}
        ${props => props.paddingY19 && css` ${PaddingY19} `}
        ${props => props.paddingY20 && css` ${PaddingY20} `}
        /* PaddingR - Padding right */
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
        /* PaddingL - Padding left */
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
        /* PaddingT - Padding top */
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
        /* PaddingB - Padding bottom */
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
        /* ==================== PROPS BASE ==================== */
    `

    export default propsBase;