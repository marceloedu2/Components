import React from 'react';
import { Chip, Card } from "./components";
import './App.css'
import styled from 'styled-components'

const Container = styled.body`
  margin: 80px auto 0;
  max-width: 450px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const CardBallon = styled.div`
  position: relative;
  display:inline-block;
  width: 300px;
  border-bottom: 1px dotted black;
`

export default function App() {
  return (
    <Container>
      <br/>
      <br/>
      <br/>
      <br/>
      <Ballon text="Ballon de teste">
        <CardBallon>
          Button Ballon
        </CardBallon>
      </Ballon>
      <br/>
      <br/>
      <br/>
      <Chip 
        avatar={'https://abrilexame.files.wordpress.com/2018/10/8dicas1.jpg?quality=70&strip=info&w=382&h=382'}
        name={'Marcelo Eduardo Araujo'}
      />
      <Chip />
      <Card 
        image={'https://i.all3dp.com/cdn-cgi/image/fit=cover,w=1284,h=722,gravity=0.5x0.5,format=auto/wp-content/uploads/2018/12/28144052/background-images-can-come-in-handy-when-modeling-tian-ooi-all3dp-181228.jpg'}
        title={'Nature life'}
        subtitle={'Welcome to Nature'}
        text={'Organizations or initiatives that work to clean up nature and the planet'}
      />
      <Card />
    </Container>
  );
}
//https://codepen.io/hansmaad/pen/QGYpey
//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_contact_chips_close