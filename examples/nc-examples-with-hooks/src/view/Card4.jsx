
import React, { Fragment } from 'react'
import Styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Componentes NC
import Container from 'components/container'
import GridContainer from 'components/grid-container'
import Typography from 'components/typography'
import Image from 'components/image'
import Button from 'components/buttons'

// Icons Font Awesome
import { faGlobeEurope } from '@fortawesome/free-solid-svg-icons'
import { faListAlt } from '@fortawesome/free-solid-svg-icons'

// Images
import ImageTodoList from 'assets/img/todo-list-01.jpg' 

const CardContainer = Styled(Container) `
    background-color: lightgray;
    border-radius: 10px;
`

const Card = () => {
    return (
        <CardContainer marginX3>

            <GridContainer center marginY4>
                <FontAwesomeIcon icon={ faListAlt } size='2x' color='#2196F3' />
            </GridContainer>

            <GridContainer marginY3>
                <Typography h6 textGray800 center> TITLE </Typography>
            </GridContainer>

            <GridContainer center>
                <Image src={ ImageTodoList } width='250px' />
            </GridContainer>

            <GridContainer borderR5 center marginY5 >
                <Button bgBlue500 textWhite radius1> Ver </Button>
            </GridContainer>
            
        </CardContainer>
    )
}

export default Card
