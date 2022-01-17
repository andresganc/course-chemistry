
import Styled from "styled-components";

// Fonts
import roboto from 'components/assets/fonts/fonts'

// Props base
import propsBase from 'components/assets/props/props-base'

// Colors
import colorsBG from 'components/assets/colors/colors-bg'
import colorsText from 'components/assets/colors/colors-text'


const Container = Styled.div `

    max-width: 100%;

    /* FONT */
    ${roboto}

    /* PROPS BASE */
    ${propsBase}

    /* COLORS */
    ${ colorsBG }
    ${ colorsText }

`;

export default Container;