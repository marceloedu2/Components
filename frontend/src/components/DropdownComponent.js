import React, { useState } from 'react';
import styled from 'styled-components'

const DropUl = styled.ul`
  margin: 10px;
  background-color: #f1f1f1;
  width: 200px;
  background-color: #333240;
  color: #fff;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
`
const DropUlLabel = styled.label`
  font-size: 20px;
  cursor: pointer;
`
const DropDivLi = styled.div`
  margin-top: 10px;
`
const DropItemLi = styled.li`
  margin: 0;
  padding-top: 10px;
  padding-bottom: 10px;
  list-style-type: none;
  background-color: #333240;
  font-size: 18px;
  text-align: center;
  color: #fff;
  &:hover{
    background-color: #fff;
    color: #333240;
  }
`

const Dropdown = (props) => {
  const [drop, setDrop] = useState({
    display: 'none',
    background: '#fff',
    color: '#333240',
    border: '2px solid #333240',
  })
  const handleButtonClick  = (event) => {
    if (drop.display === 'none'){
      setDrop({ display: 'block' })
    }else{
      setDrop({ display: 'none' })
    }
  }

  const handleClickOutside  = (event) => {
    setDrop({display: 'none'})
  }

  return (
    <DropUl onClick={handleButtonClick } onClose={handleClickOutside}>
      <DropUlLabel >
        {props.label}
      </DropUlLabel>
      <DropDivLi style={ drop }>
        { 
          props.options.map(option => (
            <DropItemLi key={option.value} onClick={handleClickOutside}>
              { option.label }
            </DropItemLi>
          ))
        }
      </DropDivLi>
    </DropUl>
  );
}

export default Dropdown 