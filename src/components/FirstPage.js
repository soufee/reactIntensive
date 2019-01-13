import React, { Component } from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

const Repair = styled.div`
color: #ffffff;
font-size: 40px;
font-weight: 700;
line-height: 50px;

span{
dizplay:block;
font-size: 24px;
line-height: 30px;
}
`

const LightText = styled.div `
color: #fff;
font-size: 18px;
font-weight: 300;
line-height: 28px;
margin-top: 54px;
`

const CallBtn = styled.button`
width: 247px;
height: 67px;
background-color: #ffa14b;
border-radius: 30px;
color: #ffffff;
font-size: 18px;
font-weight: bold;
margin-top: 32px;
}
`
class FirstPage extends Component{
    render(){
        return(
            <Row>
                <Col lg={5}>
                    <Repair>
                        Качественный ремонт
                        <span> iPhone за 35 минут и гарантией 1 год</span>
                    </Repair>
                    <LightText>Это Первая</LightText>
                    <CallBtn>Отправить заявку!</CallBtn>
                </Col>
                <Col lg={6} lgOffset={1}>

                </Col>
            </Row>
        )
    }
}

export default FirstPage;