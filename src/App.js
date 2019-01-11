import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';
class App extends Component {
  render() {
    return (
        <div className="wrapper">
          <SayFullName name="Name" surname="Surname" link="https://ya.ru" />
          <SayFullName name="Anna" surname="Petrova" link="https://google.ru" />
          <SayFullName name="Ivan" surname="Mikhailov" link="https://rambler.ru" />
        </div>
    );
  }
}

function SayFullName(props) {
    return(
        <div>
          <h1>Мое имя {props.name}, фамилия - {props.surname}</h1>
          <a href={props.link}>Ссылка на мой профиль</a>
        </div>
    );
}

export default App;
