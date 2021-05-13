
import React from 'react'
import Styled from 'styled-components'

// Components NC
import Menu from 'components/menus/menu-basic-01'
import Container from 'components/container'
import GridContainer from 'components/grid-container'
import Card1 from 'view/Card1'
import Card2 from 'view/Card2'
import Card3 from 'view/Card3'
import Card4 from 'view/Card4'

// Styles
import '../assets/css/inicio.css'

const Inicio = ({ children }) => {
    return (
        <div className='inicio'>
            <Menu />
            
            <Container className='inicio__container'>
                <GridContainer center marginY3>
                    <h2> HOOKS EXAMPLES </h2>
                </GridContainer>

                <main bgGray300 >
                    <h4> Example </h4>
                    { children }
                </main>
                
                
                <GridContainer gridCols4 gap10>
                    <Card1 />
                    <Card2 />
                    <Card3 />
                    <Card4 />
                </GridContainer>
            </Container>
            
        </div>
    )
}

export default Inicio
