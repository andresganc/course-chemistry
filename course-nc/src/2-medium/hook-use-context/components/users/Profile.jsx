
import React, { Fragment, useContext } from 'react'
import Styled from 'styled-components'

// NC Components Basic
import Div from 'components/div'
import H4 from 'components/h4'
import H5 from 'components/h5'
import P from 'components/p'
import Image from 'components/image'

// Context 
import UserContext from '../../context/users/user-context.js'

// images
import ImageProfileNull from '../../assets/img/notfound.png'


const ImageProfile = Styled(Image) `

    width: 250px;
    height: 250px;
    border-radius: 50%;

`

function Profile() {

    const { selectedUser } = useContext(UserContext)

    return (
        <Fragment>
            {
                selectedUser ? (
                    <Fragment>
                        <Div displayGrid jcCenter marginAuto aiCenter margin10 padding10 radius5 bgGray50 shadowBR2>
                            <H5 textCenter textPink500 marginY3> Profile </H5>
                            <Div displayFlex jcCenter marginX10>
                                <ImageProfile src={ selectedUser.avatar} radius5/>
                            </Div>
                            
                            <H5 fontSize7 textCenter textBlue500 marginY3> ID: { selectedUser.id } </H5>
                            <P fontSize7 textCenter textBlue500 marginB3> Name: { selectedUser.first_name } </P>
                            <P fontSize7 textCenter textTeal500> Email: { selectedUser.email } </P>
                        </Div>
                    </Fragment>
                ):(
                    <Fragment>
                        <Div displayGrid jcCenter marginAuto aiCenter margin10 padding10 radius5 bgGray50 shadowBR2>
                            <H5 textCenter textPink500 marginY3> Profile </H5>
                            <Div displayFlex jcCenter marginX10>
                                <ImageProfile src={ ImageProfileNull } radius5/>
                            </Div>
                            
                            <H5 fontSize7 textCenter textBlue500 marginY3> ID: Null </H5>
                            <P fontSize7 textCenter textBlue500 marginB3> Name: Null </P>
                            <P fontSize7 textCenter textTeal500> Email: Null </P>
                        </Div>
                    </Fragment>
                )
            }
        </Fragment>
    )
}

export default Profile
