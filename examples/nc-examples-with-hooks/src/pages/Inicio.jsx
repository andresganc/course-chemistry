
import React, { Fragment } from 'react'

// Components NC
import Menu from '../components/menus/menu-basic-01'
import Container from '../components/container/container'
import SectionPricing from '../components/sections-pricing/section-pricing-01'


// Styles
import '../assets/css/inicio.css'

const Inicio = () => {
    return (
        <div className='inicio'>
            <Menu />
            
            <Container className='inicio__container'>
                <h2>  Page inicio </h2>
                <SectionPricing />
            </Container>
            
        </div>
    )
}

export default Inicio
