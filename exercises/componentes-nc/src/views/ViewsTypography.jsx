
import React, { Fragment } from 'react'

// Componentes NC
import Typography from '../components/typography/typography'

const ViewsTypography = () => {
    return (
        <Fragment>
            <Typography h1 bgGray400 textPink500> Esta es una typografia H1 </Typography>
            <Typography h2 bgGray400 textBlue500> Esta es una typografia H2 </Typography>
            <Typography h3 bgGray400 textLime500> Esta es una typografia H3 </Typography>
            <Typography h4 bgGray400 textPurple500> Esta es una typografia H4 </Typography>
            <Typography h5 bgGray400 textOrange500> Esta es una typografia H5 </Typography>
            <Typography h6 bgGray400 textYellow500> Esta es una typografia H6 </Typography>

            <Typography p1 textOrange900> Esta es una typografia P1 </Typography>
            <Typography p2> Esta es una typografia P2 </Typography>
            <Typography p3> Esta es una typografia P3 </Typography>
        </Fragment>
    )
}

export default ViewsTypography
