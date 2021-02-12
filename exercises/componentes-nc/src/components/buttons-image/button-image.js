
import React, { Fragment } from 'react'

import styled, { css } from 'styled-components'

// NC Components 
import Button from '../buttons/button'

// Icons
import Home from './assets/img/home-solid.svg';

// Fonts
import roboto from '../assets/fonts/fonts'

// Colors
import colorsBG from '../assets/colors/colors-bg'
import colorsText from '../assets/colors/colors-text'


// ========================= IMAGE ===========================
const Image = styled.img `
    width: 30px;
`

function ButtonImage(props) {
    return (
        <Fragment>
            <Button> 
                <Image src={Home} />
                {props.name}
            </Button>
        </Fragment>
    )
}


export default ButtonImage;