
import React from 'react'
import Styled from 'styled-components'

// Components NC
import Menu from 'components/menus/menu-basic-01'
import Container from 'components/container'
import GridContainer from 'components/grid-container'
import Card from 'view/Card'

// Styles
import '../assets/css/inicio.css'

const Inicio = () => {
    return (
        <div className='inicio'>
            <Menu />
            
            <Container className='inicio__container'>
                <GridContainer center marginY5>
                    <h2> HOOKS EXAMPLES </h2>
                </GridContainer>
                
                <GridContainer gridCols4 gap10>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </GridContainer>
            </Container>
            
        </div>
    )
}

export default Inicio
