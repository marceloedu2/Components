import React from 'react';
import { Chip, Card, Ballon, Dropdown } from "./components";
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
  display:inline-block;
  width: 300px;
  height: 300px;
  background-color: gray;
  border-bottom: 1px dotted black;
`
const Quest = styled.label`
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 10px;
`

export default function App() {
  return (
    <Container>
      <Quest>1 - Create your own contact chip component and style it.</Quest>
      <Chip 
        avatar={'https://abrilexame.files.wordpress.com/2018/10/8dicas1.jpg?quality=70&strip=info&w=382&h=382'}
        name={'Marcelo Eduardo Araujo'}
      />
      <Chip />
      <Quest>2 - Create your own Card component and style it.</Quest>
      <Card 
        image={'https://www.maisesports.com.br/wp-content/uploads/2018/07/furia-cs-go.jpg'}
        title={'FURIA 0x2 FNATIC'}
        subtitle={'FURIA trava duelo na Overpass'}
        text={'Brasileiros falharam na concretização, sofrendo 34 a 32 na Overpass; Na Inferno não encontraram jogo do lado CT'}
      />
      <Card />
      <Quest>3 - Create your own Balloon component and style it.</Quest>
      <Ballon text="Brasileiros falharam na concretização, sofrendo 34 a 32 na Overpass; Na Inferno não encontraram jogo do lado CT">
        <Card 
          image={'https://www.maisesports.com.br/wp-content/uploads/2018/07/furia-cs-go.jpg'}
          title={'FURIA 0x2 FNATIC'}
          subtitle={'FURIA trava duelo na Overpass'}
          text={''}
        />
      </Ballon>
      <Ballon>
        <Card 
          image={'https://www.maisesports.com.br/wp-content/uploads/2018/07/furia-cs-go.jpg'}
          title={'FURIA 0x2 FNATIC'}
          subtitle={'FURIA trava duelo na Overpass'}
          text={'Brasileiros falharam na concretização, sofrendo 34 a 32 na Overpass; Na Inferno não encontraram jogo do lado CT'}
        />
      </Ballon>
      <Quest>4 - Create your own Dropdown component and style it.</Quest>
      <Dropdown 
        options={[
          {label: 'one', value: 1},
          {label: 'two', value: 2},
          {label: 'three', value: 3}
          ]}
          label={'label'}
      />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </Container>
  );
}