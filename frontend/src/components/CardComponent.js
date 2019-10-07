import React from 'react';
import styled from "styled-components";

const CardDiv = styled.div`
  margin: 10px;
  width: 300px;
  height: 400px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 7px 7px 5px rgba(50, 50, 50,0.77);
  transition: .3s cubic-bezier(.3, 0, 0, 1.3);
  overflow: hidden;
  cursor: pointer;
  &:hover{
    width: 320px;
    height: 420px;
    box-shadow: 10px 10px 7px rgba(50, 50, 50,0.77);
  }
`
const CardImg = styled.div`
  border-radius: 5px 5px 0 0;
  width: 100%;
  height: 200px;
  padding-top: -10px;
  border-radius: 0 0 40% 40%;
  margin-top: -40px;
  background: url(${img => `${img.image}`});
  background-color: #333230;
  background-size: cover;
  background-position: center center;
  transition: .3s cubic-bezier(.3, 0, 0, 1.3);
  ${CardDiv}:hover & {
    border-radius: 0;
    margin-top: -1px;
  } 
`
const CardBody = styled.div`
  align-self: auto;
`
const CardTitle = styled.h2`
  text-align: center;
  font-size: 26px;
  color: #333240;
  transition: .3s cubic-bezier(.3, 0, 0, 1.3);
  ${CardDiv}:hover & {
    color: #fff;
    margin-top: -30px;
  }
`
const CardSubtitle = styled.h3`
  color: #333240;
  text-align: center;
`
const CardText = styled.p`
  font-size: 14px;
  padding: 10px;
  text-align: center;
  width: 300px;
  color: rgba(0,0,0,0.5);
  transition: .3s cubic-bezier(.3, 0, 0, 1.3);
  ${CardDiv}:hover &{
    margin-left: 10px;
  }
`
const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:30px;
  width: 100%;
`
const Button = styled.button`
  font-size: 16px;
  color: #333240;
  background-color: #fff;
  border: 2px solid #333240;
  padding: 10px 25px;
  border-radius: 50px;
  font-size: 17px;
  text-decoration: none;
  font-weight: bold;
  transition: .3s cubic-bezier(.3, 0, 0, 1.3);
  &:hover{
    color: #fff;
    background-color: #333240;

  }
`

const Card = (props) => {
  return (
    <CardDiv>
      <CardImg image={props.image ? props.image : 'https://semantic-ui.com/images/wireframe/image.png'}></CardImg>
      <CardBody>
        <CardTitle>{props.title ? props.title : 'Card title'}</CardTitle>
        <CardSubtitle>{props.subtitle ? props.subtitle : 'Card subtitle'}</CardSubtitle>
        <CardText>{props.text ? props.text : 'Some quick example text to build on the card title and make up the bulk of the cards content.'}</CardText>
        <ButtonDiv>
          <Button>view</Button>
        </ButtonDiv>
      </CardBody>
    </CardDiv>
  )
}

export default Card
