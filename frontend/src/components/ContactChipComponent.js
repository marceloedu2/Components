import React from "react";
import styled from "styled-components";

const Contact = styled.div`
  display: inline-block;
  padding: 0 25px;
  height: 50px;
  font-size: 16px;
  line-height: 50px;
  border-radius: 25px;
  background-color: #f1f1f1;
  cursor: pointer;
`;
const ChipImg = styled.img`
  float: left;
  margin: 0 10px 0 -25px;
  background: #009587;
  height: 50px;
  width: 50px;
  color: white;
  text-align: center;
  background-size: cover;
  border-radius: 50%;
`;
const CloseButton = styled.button`
  display: inline-block;
  background: #aaa;
  border: 0;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  padding: 0;
  margin: 0 -4px 0 10px;
  cursor: pointer;
  font: inherit;
  line-height: 20px;
  &:after { 
    color: #000;
    content: 'x';
  }
  &:hover {
    background: #999;
  }
  &:active {
    background: #777;
  }
`;

const ContactChip = ({ imagUrl }) => {
  return (
    <Contact>
      <ChipImg
        src={
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        }
      />
      Marcelo Eduardo Araujo
      <CloseButton />
    </Contact>
  );
};

export default ContactChip;
