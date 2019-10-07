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
    open: false,
  })
  const [select, setSelect] = useState({
    label: '',
  })
  const handleButtonClick  = () => {
    setDrop({open: !drop.open})
  }

  const handleClickSelected = (label) => {
    setDrop({ open: false})
    setSelect({label})
  }

  return (
    
    <DropUl onClick={ handleButtonClick }>
      <DropUlLabel >
        {select.label ? select.label : props.label}
      </DropUlLabel>
      <DropDivLi style={ { display: !drop.open ? 'none': 'block' } }>
        { 
          props.options.map(option => (
            <DropItemLi key={option.value} value={option.value} onClick={() => handleClickSelected(option.label)}>
              { option.label }
            </DropItemLi>
          ))
        }
      </DropDivLi>
    </DropUl>
  );
}

export default Dropdown 