import React, { Component } from 'react';
import { Header } from './styled-components/divs/Header';
import { HeaderMainLogo } from "./styled-components/img/HeaderImg";

export default class Home extends Component {

    render () {
        return <>
            <Header>
                <HeaderMainLogo src='static/logo.png'/>
            </Header>
        </>
    }
}