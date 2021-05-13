
import React, { Fragment } from 'react'
import Styled from 'styled-components'

// Components NC
import GridContainer from 'components/grid-container'

const Aside = Styled(GridContainer)`
    //width: 20%;
    //height: 100%;
`

const AsideHeader = Styled(GridContainer) `
    margin: 40px 20px;
    color: #ffff;
`

const AsideBody = Styled(GridContainer) `
    margin: 40px 20px;

    li {
        list-style: none;
        margin-top: 5px;
        margin-bottom: 5px;
    }

    a {
        color: #fff;
        text-decoration: none;
    }
`

const LayoutAside = () => {
    return (
        <Fragment>
            <Aside bgGray800 textWhite>
                <AsideHeader>
                    <h2> Aside </h2>
                </AsideHeader>

                <AsideBody>
                    <nav>
                        <ul>
                            <li><a href="/dashboard"> Escritorio </a></li>
                            <li><a href="/contador"> Contador </a></li>
                            <li><a href="/contador-horas"> Contador horas </a></li>
                            <li><a href=""> Todo list </a></li>
                        </ul>
                    </nav>
                </AsideBody>
            </Aside>
        </Fragment>
    )
}

export default LayoutAside
