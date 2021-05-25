
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

    // Ejemplo de useEffect completo ( Fase de montaje, Actualizacion y Desmontaje)
    useEffect(() => {
        
        const detectarScroll = () => {
            setScrollY(window.pageYOffset)
        }

        console.log('Fase de montaje useEffect Completo')
        window.addEventListener('scroll', detectarScroll)


        return () => {
            window.removeEventListener('scroll', detectarScroll)
            console.log('Limpiando - Fase de desmontaje - useEffect Completo')
        }
    }, [scrollY])


    // UseEffect con 2do parametro 
    // Fase de montaje con 2do parametro (Solo se ejecuta una vez por el segundo parametro)
    useEffect(() => {

        console.log('Fase de montaje')
  
    },[])


    // UseEffect sin fase de desmontaje ni 2do parametro 
    // Fase de montaje que es actualizacion por no tener fase de desmontaje ni 2do parametro (Hace un look infinito cada vez que se mueve el scroll)
    // No greagar el segundo parametro puede bajar el performance de la APP
    useEffect(() => {

        console.log('Fase de actualizacion')
  
    })

    // useEffect - Fase de desmontaje
    useEffect(() => {

        return () => {
            console.log('Fase de desmontaje')
        }
    })

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
