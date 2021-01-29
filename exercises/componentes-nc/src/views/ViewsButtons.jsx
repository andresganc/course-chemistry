
import React, { Fragment } from 'react'

// Componentes NC
import Button from '../components/buttons/button'

// Styles
import '../assets/css/button.css'

const ViewsButtons = () => {
    return (
        <Fragment>
            <Button className="button-color" bgPurple500 textWhite round> Guardar </Button>
            <Button bgLime300> Guardar </Button>
            <Button bgOrangeA400> Guardar </Button>
            <Button bgDeepOrange900> Guardar </Button>

            <br/>

            <Button bgBlue500 textWhite> Guardar </Button>
            <Button textLimeA400> Guardar </Button>
            <Button textLightBlueA700 round> Guardar </Button>

            <br/>

            <Button circle bgOrange900 textWhite> A </Button>
        </Fragment>
    )
}

export default ViewsButtons
