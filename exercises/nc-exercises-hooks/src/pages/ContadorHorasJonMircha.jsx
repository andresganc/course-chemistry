
import React, { Fragment, useState, useEffect } from 'react'

// Components
import Container from 'components/container'
import GridContainer from 'components/grid-container'
import Typography from 'components/typography'
import Button from 'components/buttons'

// Layouts
import LayoutDashboard from 'layouts/LayoutDashboard'


const Reloj = ({ hour }) => {
    return ( 
    <h3> { hour } </h3>
    )
}

const ContadorHorasJonMircha = () => {

    const [hour, setHour] = useState(new Date().toLocaleTimeString())
    const [visible, setVisible] = useState(false)

    // Funtion tictoc ( Para uso sin useEffect )
    const tictoc = (valor) => {
       
        setVisible(valor)

    }

    // useEffect para reloj
    useEffect(() => {
        let timer
        
        if (visible) {
            timer = setInterval( () => {
                setHour( new Date().toLocaleTimeString())
            }, 1000)
        }else {
            clearInterval(timer)
        }


        return () => {
            console.log('Fase de desmontaje del reloj')
            clearInterval(timer)
        }

    }, [visible])

    return (
        <Fragment>
            <LayoutDashboard>
                <Container>
                    <GridContainer center >
                        <Typography h3 center textBlue700> Contador Horas </Typography>
                        { visible && <Reloj hour={hour}/> }
                    </GridContainer>
                    <GridContainer center>
                        <Button onClick={ () => tictoc(true) } bgGreen500 > Start - without useEffect </Button>
                        <Button onClick={ () => tictoc(false) } bgOrange500 > Stop - without useEffect </Button>
                    </GridContainer>
                    <GridContainer center>
                        <Button onClick={ () => setVisible(true) } bgGreen500 > Start - with useEffect </Button>
                        <Button onClick={ () => setVisible(false) } bgOrange500 > Stop - with useEffect </Button>
                    </GridContainer>
                </Container>
            </LayoutDashboard>
        </Fragment>
    )
}

export default ContadorHorasJonMircha
