import React from "react";
import { Text } from 'react-native'
import { MaterialCommunityIcons, AntDesign, Ionicons } from '@expo/vector-icons'

import {
    Header,
    Wrapper,
    Container,
    BalanceContainer,
    BalanceTitle,
    Balance
} from "./styles";

import Suggestions from '../../components/Suggestions'
import Activities from '../../components/Activities'
import Tips from '../../components/Tips'
import Banner from '../../components/Banner'

export default function Home() {
    return (
        <Wrapper>
            <Container>
                <Header>
                    <MaterialCommunityIcons name={'qrcode-scan'} color={'#10c86e'} size={30} />
                    <AntDesign name={'setting'} color={'#18c86e'} size={30}/>
                    <BalanceContainer>
                        <BalanceTitle>Meu saldo</BalanceTitle>
                        <Balance>R$ 249.999,99</Balance>
                    </BalanceContainer>
                    <AntDesign name={'gift'} color={'#10c86e'} size={30} />
                    <Ionicons name={'chatbubble-ellipses-outline'} color={'#10c86e'} size={30} />
                </Header>
                <Suggestions/>
                <Activities/>
                <Tips/>
                <Banner/>
            </Container>
        </Wrapper>
    )
}