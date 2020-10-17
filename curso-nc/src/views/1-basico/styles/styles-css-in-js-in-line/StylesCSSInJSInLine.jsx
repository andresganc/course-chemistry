
/* =========== STYLES CSS IN JS IN LINE 01 - EN REACT ============ */
// Para agregar css dentro de js usamos la dependencia styled-components
// Este estilo se agrega en el mismo archivo, construyendo un objeto.

// Instalacion de styled-components
// npm i styled-components

import React, { Fragment } from 'react';

// Componentes
import styled from 'styled-components';         // Dependencia para agregar css en js

const Div = styled.div `
    position: relative;
    width: 600px;
    height: 350px;
    margin: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 20px;
    background: linear-gradient(135deg, #d41e31, #491f8f);
`;

const DivContent = styled.div `
    position: relative;
    width: 50%;
    left: 20%;
    padding: 20px, 20px, 20px, 40px;
    margin: 20px;.
    transition: 0.5s;
`;

const H2 = styled.h2 `
    color: #fff;
    text-transform: uppercase;
    font-size: 1.5em;
    line-height: 1em;
`;

const P = styled.p `
    color: #fff;
`;


function StylesCSSInJSInLine () {
    return (
        <Fragment>
            <div>
                <Div>
                    <DivContent>
                        <H2> Styles CSS en JS - REACT </H2>
                        <P> Para agregar css dentro de js usamos la dependencia styled-components
                            Este estilo se agrega en el mismo archivo, construyendo un objeto </P>
                    </DivContent>
                </Div>
            </div>
        </Fragment>
    );
}

export default StylesCSSInJSInLine;