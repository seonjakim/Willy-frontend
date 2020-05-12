import React from "react";
import styled from "styled-components";

function MainButton() {
  return(<Button>지금 시작하기</Button>)
}

export default MainButton;

//style
const Button = styled.button`
  width: 175px;
  height: 80px;
  border: none;
  color: white;
  border-radius: 40px;
  font-size: 16px;
  font-weight:bold;
  box-shadow: 0 5px 4px 0 rgba(0,0,0,0.15);

  background-color: ${props => props.theme.buttonColor};
  margin: ${props => props.theme.buttonMargin};
`;

Button.defaultProps = {
  theme: {
    buttonColor: "#e26d59",
    buttonMargin: "41px 0 0 50px"
  }
}