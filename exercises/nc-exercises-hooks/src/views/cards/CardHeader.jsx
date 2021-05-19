
import { Fragment } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Components NC 
import GridContainer from 'components/grid-container'
import Typography from 'components/typography'
import FlexContainer from 'components/flex-container'

// Icons Font Awesome
import { faReact} from '@fortawesome/free-brands-svg-icons'

const Card = styled(GridContainer)`
    background: linear-gradient( 155deg,#0353F4,#1957D2,#9138CB);
    background: linear-gradient( 170deg,#1E88E5,#1E88E5,#9138CB);
    
    width: 100%;
    height: 300px;
`

const ContenedorImage = styled(FlexContainer)`
    margin: auto;
`
const cardGradient02 = () => {
    return (
        <Fragment>
            <Card>

                <ContenedorImage jcCenter>
                    <FontAwesomeIcon icon={faReact} size='7x' color='#A2BD00'/>
                </ContenedorImage>

                <GridContainer>
                    <Typography h2 textGray200 center bold> REACT HOOKS </Typography>
                    <Typography h4 textGray200 center bold> MENU </Typography>
                </GridContainer>
            </Card>

        </Fragment>
    )
}

export default cardGradient02