import React, { useState } from "react";
import styled from "styled-components";

const Contact = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
  height: 54px;
  font-size: 16px;
  line-height: 50px;
  border-radius: 25px;
  background-color: #333230;
  color: #fff;
  box-shadow: 7px 7px 5px rgba(50, 50, 50, 0.77);
  cursor: pointer;
  &:hover{
    background: #333240;
    box-shadow: 7px 7px 5px rgba(51, 50, 64,0.77);
  }
`;
const ChipImg = styled.img`
  margin: 1px 8px 1px 1px;
  background: #333240;
  color: white;
  text-align: center;
  background-size: cover;
  border-radius: 50%;
`;

const CloseButton = styled.button`
  background: white;
  border: 0;
  outline: 0;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  padding: 0;
  margin: 0 16px;
  cursor: pointer;
  font: inherit;
  line-height: 20px;
  &:hover {
    background: #31a2a6;
  }
`;

const Chip = (props) => {
  const [show, setShow] = useState(true)
  return (
    <Contact style={{ display: !show ? 'none' : '' }}>
      <ChipImg 
        src={props.avatar ? props.avatar : 'http://www.sonrn.com.br/wp-content/uploads/2018/04/58d7d5b0fb6d4c07bc9a3d25.png'}
        alt="Person"
        width="50"
        height="50"
      />
      <span>
        {props.name ? props.name : 'Undefined'}
      </span>
      <CloseButton onClick={() => setShow(false)}>&times;</CloseButton>
    </Contact>
  );
};

export default Chip;
