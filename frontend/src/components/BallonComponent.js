import React, { useState, useRef } from 'react';
import styled from 'styled-components'

const BallonDiv = styled.div`
  position: relative;
  margin: 10px;
`
const BallonText = styled.span`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 30px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  bottom: 125%;
  cursor: pointer;
  margin-top:-15px;
  margin-left: 20px;
  transition: opacity 0.3s;
  &:after {
  content: '';
	position: absolute;
	left: 0;
	top: 50%;
	width: 0;
	height: 0;
	border: 15px solid transparent;
	border-right-color: #555;
	border-left: 0;
	border-bottom: 0;
	margin-top: -13px;
	margin-left: -14px;
}
`
const Ballon = (props) => {
  const [position, setPosition] = useState({
    top: null,
    left: null,
    opacity: 0
  })

  const element = useRef(null)

  const onMouseMove = ({ clientX, clientY }) => {
    const { top, left, bottom, right } = element.current.getBoundingClientRect()
    if (clientX > right || clientX < left || clientY > bottom || clientY < top) {
      onMouseLeave()     
    } else {
      setPosition({ top: clientY - top, left: clientX - left })
    }
  }

  const onMouseLeave = () => {
    setPosition({ opacity: 0, display: 'none' })
  }

  const onMouseEnter = () => {
    setPosition({ opacity: 1 })
  }

  return (
    <BallonDiv onMouseLeave={onMouseLeave} onMouseMove={onMouseMove} onMouseEnter={onMouseEnter} ref={element}>
      { props.children }
      <BallonText style={position}>{props.text ? props.text : 'Uninformed'}</BallonText>
    </BallonDiv>
  );
}

export default Ballon
