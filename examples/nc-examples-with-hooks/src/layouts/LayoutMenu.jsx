
import React, { Fragment } from 'react'
import Styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Components NC
import FlexContainer from 'components/flex-container'
import GridContainer from 'components/grid-container'
import Input from 'components/inputs'
import Image from 'components/image'

// Icons
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Menu = Styled(FlexContainer)`
    justify-content: space-between;
    align-items: center;
    padding: 10px 10px;
    background-color: #9E9E9E;

`

const LayoutMenu = () => {
    return (
        <Fragment>
            <Menu>
                <FlexContainer>
                    <h3> ESCRITORIO </h3>
                </FlexContainer>

                <FlexContainer>
                    <Input placeholder='Buscar' />
                    <Image src='' />
                    <FontAwesomeIcon icon={ faSearch } />
                </FlexContainer>
            </Menu>      
        </Fragment>
    )
}

export default LayoutMenu
