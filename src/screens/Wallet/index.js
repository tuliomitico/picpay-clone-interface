import React from "react";
import { AntDesign, Feather, FontAwesome, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import {
    Header,
    HeaderContainer,
    Title,
    Wrapper,
    BalanceContainer,
    Value,
    Bold,
    EyeButton,
    Info,
    Actions,
    Action,
    ActionLabel,
    UseBalance,
    UseBalanceTitle,
    PaymentMethods,
    PaymentMethodsTitle,
    Card,
    CardBody,
    CardDetails,
    CardTitle,
    CardInfo,
    Img,
    AddButton,
    AddLabel,
    UseTicketContainer,
    UseTicketButton,
    UseTicketLabel
} from './styles'
import { Switch } from "react-native";

import creditCard from '../../images/credit-card.png'

export default class Wallet extends React.Component {

    constructor(props) {
        super(props)
        this.state = { isVisible: true, useBalance: true }
        this.handleToggleVisiblity = this.handleToggleVisiblity.bind(this)
        this.handleToggleUseBalance = this.handleToggleUseBalance.bind(this)
    }

    handleToggleVisiblity() {
        this.setState((prevState) => {
            return {
                ...prevState,
                isVisible: !prevState.isVisible
            }
        })
    }

    handleToggleUseBalance() {
        this.setState((prevState) => {
            return {
                ...prevState,
                useBalance: !prevState.useBalance
            }
        })
    }

    render() {
        return (
            <Wrapper>
                <Header
                    colors = {this.state.useBalance ? ['#52E78C', '#1AB563'] :['#D3D3D3', '#868686'] }
                >
                    <HeaderContainer>
                        <Title>Saldo PicPay</Title>
                        <BalanceContainer>
                            <Value>
                                R$ {this.state.isVisible ? <Bold>249.999,99</Bold> : <Bold>----</Bold>}
                            </Value>
                            <EyeButton onPress={this.handleToggleVisiblity}>
                                <Feather name={this.state.isVisible ? "eye" : "eye-off"} size={28} color={"#fff"} />
                            </EyeButton>
                        </BalanceContainer>
                        <Info>
                            Seu saldo está rendendo 150% do CDI
                    </Info>
                        <Actions>
                            <Action>
                                <MaterialCommunityIcons name={"cash"} size={28} color={"#fff"} />
                                <ActionLabel>Adicionar</ActionLabel>
                            </Action>
                            <Action>
                                <FontAwesome name={"bank"} size={20} color={"#fff"} />
                                <ActionLabel>Retirar</ActionLabel>
                            </Action>
                        </Actions>
                    </HeaderContainer>
                </Header>
                <UseBalance>
                    <UseBalanceTitle>
                        Usar saldo ao pagar
                    </UseBalanceTitle>
                    <Switch value={this.state.useBalance} onValueChange={this.handleToggleUseBalance} />
                </UseBalance>
                <PaymentMethods>
                    <PaymentMethodsTitle>
                        Formas de pagamento
                    </PaymentMethodsTitle>
                    <Card>
                        <CardBody>
                            <CardDetails>
                                <CardTitle>
                                    Cadastre seu cartão de crédito
                        </CardTitle>
                                <CardInfo>
                                    Cadastre seu cartão de crédito para poder fazer pagamentos meso quando não tiver saldo no seu PicPay.
                        </CardInfo>
                            </CardDetails>
                            <Img source={creditCard} resizeMode={'contain'} />
                        </CardBody>
                        <AddButton>
                            <AntDesign name={'pluscircleo'} size={30} color={'#0db060'} />
                            <AddLabel>Adicionar cartão de crédito</AddLabel>
                        </AddButton>
                    </Card>
                    <UseTicketContainer>
                        <UseTicketButton>
                            <MaterialCommunityIcons name="ticket-outline" size={20} color={'#0db060'} style={{ alignItems: "center" }}>
                                {/* <MaterialIcons name="attach-money" size={15} color={"#0db060"} /> */}
                            </MaterialCommunityIcons>
                            <UseTicketLabel>
                                Usar código promocional
                            </UseTicketLabel>
                        </UseTicketButton>
                    </UseTicketContainer>
                </PaymentMethods>
            </Wrapper>
        )
    }
}