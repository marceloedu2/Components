import React from 'react';
import styled from "styled-components";

const CardDiv = styled.div`
  margin: 10px;
  width: 300px;
  border-radius: 5px;
  box-shadow: 7px 7px 5px rgba(50, 50, 50,0.77);

`
const CardImg = styled.img`
  border-radius: 5px 5px 0 0;
  width: 200px;
  padding-top: -10px;
  width: 100%;
`
const CardBody = styled.label`
  font-size: 18px;
`
const CardTitle = styled.label`
  font-size: 18px;
`
const CardSubtitle = styled.p`
  font-size: 16px;
`
const CardText = styled.p`
  font-size: 14px;
`

const Button = styled.button`
  font-size: 16px;
`

const Card = (props) => {
  return (
    <CardDiv>
      <CardImg src={props.image ? props.image : 'http://www.wfservice.it/layout/images/nophoto.jpg'} alt="Card image cap" />
      <CardBody>
        <CardTitle>Card title</CardTitle>
        <CardSubtitle>Card subtitle</CardSubtitle>
        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        <Button>Button</Button>
      </CardBody>
    </CardDiv>
  )
}

export default Card
