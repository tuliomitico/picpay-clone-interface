import React from "react"
import { AntDesign, Feather,MaterialCommunityIcons } from '@expo/vector-icons'

import {
    Container,
    Header,
    Title,
    Card,
    CardHeader,
    Avatar,
    Description,
    Bold,
    CardBody,
    UserName,
    CardFooter,
    Details,
    Value,
    Divider,
    Date,
    Actions,
    Option,
    OptionLabel
} from "./styles"

import avatar from '../../images/avatar.png'

export default function Activities() {
    return (
        <Container>
            <Header>
                <Title>Atividades</Title>
            </Header>
            <Card>
                <CardHeader>
                    <Avatar source={avatar} />
                    <Description>
                        <Bold>Você</Bold> pagou a <Bold>@porquinho.garganta.tremilique.assis.de.freitas</Bold>
                    </Description>
                </CardHeader>
                <CardBody>
                    <UserName>Túlio de Freitas Castro</UserName>
                </CardBody>
                <CardFooter>
                    <Details>
                        <Value>R$ 0,01</Value>
                        <Divider />
                        <Feather name="lock" color="white" size={14} />
                        <Date>Há 2 semanas</Date>
                    </Details>
                    <Actions>
                        <Option>
                            <MaterialCommunityIcons name={"comment-outline"} size={14} color="#fff" />
                            <OptionLabel>0</OptionLabel>
                        </Option>
                        <Option>
                            <AntDesign name={"hearto"} size={14} color="#fff" />
                            <OptionLabel>0</OptionLabel>
                        </Option>
                    </Actions>
                </CardFooter>
            </Card>
        </Container>
    )
}

