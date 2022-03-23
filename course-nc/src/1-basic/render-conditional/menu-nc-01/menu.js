
import React, { useEffect } from 'react'

// Hooks
import useScreen from '@components/assets/hooks/useScreen'

// NC Components base
import H2 from '@components/h2' 


const menuNC01 = () => {

    const [
        handleScreen, 
        handleAddScreen, 
        handleRemoveScreen, 
        mobileS, 
        mobileM, 
        mobileL,
        tablet,
        laptop,
        laptopL,
        screen2K,
        screen4K,
        screen8K
        ] = useScreen()

    useEffect(() => {

        handleScreen()

        handleAddScreen()
        
        return () => handleRemoveScreen()

    }, [])
    
        
    if ((mobileS) || (mobileM) || (mobileL) || (tablet) === true ) {
        return <H2> Menu para mobiles </H2>
    } 

    if ((laptop) || (laptopL) || (screen2K) === true ) {
        return <H2> Menu menu desktops </H2>
    } 

    return <H2> Error al cargar el componente </H2>
  
}

export default menuNC01