
import styled, { css } from 'styled-components'

// Fonts
import roboto from 'components/assets/fonts/fonts'

// Props base
import propsBase from 'components/assets/props/props-base'

// Colors
import colorsBG from 'components/assets/colors/colors-bg'
import colorsText from 'components/assets/colors/colors-text'


// ========================= TYPES ============================
const inputBase = css `
    padding: .3rem .7rem;
    font-size: .9rem;
    color: #616161;
    border: solid .5px #BDBDBD;
    outline: none;
    transition: .8s;

    ::placeholder {
    color: #BDBDBD;
    font-size: .8rem;
}
`





const Input = styled.input `

    /* FONT */
    ${ roboto }

    /* INPUT BASE */
    ${ inputBase }
    

    /* PROPS BASE */
    ${propsBase}

    /* COLORS */
    ${ colorsBG }
    ${ colorsText }

`

export default Input