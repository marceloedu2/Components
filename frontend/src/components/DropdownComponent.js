import React, { useState } from 'react';
import styled from 'styled-components'

const DropUl = styled.ul`
  margin: 10px;
`
const DropItemLi = styled.li`
  margin: 10px;
`

const Dropdown = (props) => {
  const [drop, setDrop] = React.useState(null)

  const handleClick = (event) => {
    setDrop(event.currentTarget);
    console.log("entrou");
  }

  const handleClose = () => {
    setDrop(null)
    console.log("saiu")
  }

  return (
    <DropUl onClick={handleClick} onClose={handleClose}>
      {props.title}
      <DropItemLi>{props.item}</DropItemLi>
      <DropItemLi>Option 2</DropItemLi>
      <DropItemLi>Option 3</DropItemLi>
      <DropItemLi>Option 4</DropItemLi>
    </DropUl>
  );
}

export default Dropdown 