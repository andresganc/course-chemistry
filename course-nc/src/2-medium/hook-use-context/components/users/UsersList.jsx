
import React, { Fragment, useEffect, useContext } from 'react'
import Styled from 'styled-components'
import Icon from '@mdi/react'

// Context
import UserContext from '../../context/users/user-context.js'

// NC Components Base
import Div from 'components/div'
import H3 from 'components/h3'
import H4 from 'components/h4'
import H5 from 'components/h5'
import H6 from 'components/h6'
import P from 'components/p'
import Caption from 'components/caption'
import A from 'components/a'
import Image from 'components/image'
import Table from 'components/table'
import THead from 'components/thead'
import Th from 'components/th'
import TBody from 'components/tbody'
import Tr from 'components/tr'
import Td from 'components/td'

// Icons
import { mdiTextBoxOutline, mdiEye } from '@mdi/js'


const ContainerTable = Styled(Div) `
    
    display: grid;
    justify-content: center;
    width: 50%;

`

const ImageProfile = Styled(Image) `
    width: 60px;
    height: 60px;
    border-radius: 50%;
`


const UsersList = () => {

    const { users, getUsers, getProfile } = useContext(UserContext)

    useEffect(() => {

        getUsers()

    }, [])

    return (
        <Fragment>
            <ContainerTable bgGray100 padding10>

                <Div displayFlex jcCenter aiCenter bgBlue500 padding3 radiusTL1 radiusTR1>
                    <Icon path={mdiTextBoxOutline} title="API Users" size={1.3} color="#FFFFFF" />
                    <P fontSize6 textWhite padding5 marginT1> API USERS LIST </P>
                </Div>

                <Table bgWhite padding10>
                    <THead >
                        <Tr bgGray600 textWhite>
                            <Th radiusTL1 radiusTR1> <P fontSize7 marginY1 marginX3> ID </P> </Th>
                            <Th radiusTL1 radiusTR1> <P fontSize7> Name </P></Th>
                            <Th radiusTL1 radiusTR1> <P fontSize7> Email </P></Th>
                            <Th radiusTL1 radiusTR1> <P fontSize7 marginX4> Image </P> </Th>
                            <Th radiusTL1 radiusTR1> <P fontSize7 marginX3> Show </P> </Th>
                        </Tr>
                    </THead>

                    <TBody>

                        {
                            users.map(record => (
                                <Fragment>
                                    <Tr tableHorizontalZebra>
                                        <Td><P key={record.id} fontSize7 marginX3 textGray700> {record.id} </P></Td>
                                        <Td><P key={record.id} fontSize7 marginX3 textGray700> {record.first_name} </P></Td>
                                        <Td><P key={record.id} fontSize7 marginX3 textGray700> {record.email} </P></Td>
                                        <Td><ImageProfile src={record.avatar} marginX3/></Td>
                                        <Td textCenter><A key={record.id} href='#!' onClick={() => getProfile(record.id) }><Icon path={ mdiEye } title="Show profile" size={.9} color="#2196F3" /></A></Td>
                                    </Tr>
                                </Fragment>
                            ))
                        }

                    </TBody>
                </Table>

            </ContainerTable>

        </Fragment>
    )
}

export default UsersList
