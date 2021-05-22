
import React, { Fragment, useState, useEffect } from 'react'
import Styled from 'styled-components'

// Layouts
import LayoutDashboard from 'layouts/LayoutDashboard'

// Components
import Container from 'components/container'
import GridContainer from 'components/grid-container'
import Typography from 'components/typography'


const ContainerMain = Styled(GridContainer)`
    height: 2500px;
    overflow-y: scroll;
`

const ContainerScroll = Styled(GridContainer)`
    position: fixed;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 400px;
    height: 200px;
`


const ScrollHooks = () => {

    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        
        const detectarScroll = () => {
            setScrollY(window.pageYOffset)
        }

        console.log('Fase de montaje')
        window.addEventListener('scroll', detectarScroll)


        return () => {
            console.log('Limpiando')
        }
    }, [])

    return (
        <Fragment>
            <LayoutDashboard>
                <ContainerMain>
                    <ContainerScroll bgOrange500>
                        <Typography h4 textGray800> SCROLL HOOKS </Typography>
                        <Typography> Desplace el scroll para ver su posicion en Y </Typography>
                        <Typography h2 textPink500>  { scrollY } px </Typography>
                    </ContainerScroll>
                    
                </ContainerMain>
            </LayoutDashboard>
        </Fragment>
    )
}

export default ScrollHooks
