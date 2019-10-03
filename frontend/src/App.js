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

export default function App() {
  return (
    <Container>
      <Chip 
        avatar={'https://abrilexame.files.wordpress.com/2018/10/8dicas1.jpg?quality=70&strip=info&w=382&h=382'}
        name={'Marcelo Eduardo Araujo'}
      />
      <Chip />
      <Card image={'https://images2.minutemediacdn.com/image/upload/c_crop,h_3487,w_6203,x_0,y_38/f_auto,q_auto,w_1100/v1553265659/shape/mentalfloss/istock-931058552.jpg'}/>
      <Card />
    </Container>
  );
}
//https://codepen.io/hansmaad/pen/QGYpey
//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_contact_chips_close