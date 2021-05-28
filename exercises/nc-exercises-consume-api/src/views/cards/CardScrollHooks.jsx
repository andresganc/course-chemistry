
import { Fragment } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Link React
import { Link } from 'react-router-dom'
// Link Next
//import Link from 'next/link'

// Components NC 
import GridContainer from 'components/grid-container'
import Typography from 'components/typography'
import FlexContainer from 'components/flex-container'

// Icons Font Awesome
import { faMouse } from '@fortawesome/free-solid-svg-icons'

const Card = styled(GridContainer)`
    background-color: #5E5E5E;
    padding: 10px;
    width: 203px;
    height: 154px;
    margin: 10px 10px;
    border-radius: 10px;

    &:hover {
        transition: .5s;
        box-shadow: 2px 3px 1px 1px #A2BD00;
    }
`

const ContenedorImage = styled(FlexContainer)`
    margin: auto;
`

const CardContadorHoras = () => {
    return (
        <Fragment>
            <Link to="/scroll-hooks">
                    <Card>
                        <ContenedorImage jcCenter>
                            <FontAwesomeIcon icon={faMouse} color='#A2BD00' size='2x' />
                        </ContenedorImage>

                        <GridContainer>
                            <Typography p2 textGray200 center> SCROLL HOOKS </Typography>
                            <Typography p3 textGray200 center lighter> useState - useEffect </Typography>
                        </GridContainer>
                    </Card>
            </Link>
        </Fragment>
    )
}

export default CardContadorHoras