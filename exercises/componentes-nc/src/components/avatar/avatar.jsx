
import React, { Fragment } from 'react'
import styled, { css } from 'styled-components'

//Icon
import Home from './img/insert_photo.svg'
import HomePNG from './img/home.png'

// Colors
import colorsBG from '../assets/colors/colors-bg'
import colorsText from '../assets/colors/colors-text'



// ========================= ICON ============================
    
    const SVG = styled.svg`
        flex: none;
        transition: fill 0.25s;
        width: 40px;
        height: 40px;
        fill: white;
    `;


// ========================= TYPES ============================
    const avatarDefault = css `
        background-color: #BDBDBD;
        width: 50px;
        font-size: .9rem;
        padding: .7rem;
        border: none;
        border-radius: .2rem;
        transition: .2s;

        
        &:hover {
            background-color: #03A9F4;
            //background-color: rgba(255, 255, 255, .1)
        }
        

    `

    const avatarRound = css `
        background-color: #BDBDBD;
        font-size: .9rem;
        padding: .7;
        border: none;
        border-radius: .9rem;
        cursor: pointer;
        outline: none;
        transition: .2s;

        &:hover {
            background-color: #03A9F4;
            //background-color: rgba(255, 255, 255, .1)
        }

    `

    const buttonCircle = css `
        background-color: #BDBDBD;
        font-size: .9rem;
        padding: .6rem .9rem;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        outline: none;
        transition: .2s;

        &:hover {
            background-color: #03A9F4;
            //background-color: rgba(255, 255, 255, .1)
        }

    `
// ========================= TYPES ============================


const Avatar = styled.img `

    /* avatar base*/
    ${ avatarDefault } 

    
    /* Colors */
    ${ colorsBG }
    ${ colorsText }
    

    // TYPE
    ${ props => props.default && css ` ${ avatarDefault } `}
    ${ props => props.round && css ` ${ avatarRound } `}
    ${ props => props.circle && css ` ${ buttonCircle } `}


    ${ props => props.default && css ` ${ avatarDefault } `}
    
`

/* 
const Avatar = (props) => {
    return (
        <Fragment>
            <Container src={props.image}>
                <Icon xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                </Icon>
            </Container>
        </Fragment>
    )
}
*/

export default Avatar;
