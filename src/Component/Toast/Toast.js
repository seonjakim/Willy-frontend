import React from "react";
import styled from "styled-components";

const Toast = (content, color) => {
  return (
    <ToastWrapper>
      <Item color={color}>{content}</Item>
    </ToastWrapper>
  );
};

export default Toast;

const ToastWrapper = styled.div`
  position: fixed;
  z-index: 999;
  bottom: 12px;
  left: 12px;
`;

const Item = styled.div`
  opacity: 0.8;
  background-image: url();
  background-color: #51a351;
  position: relative;
  pointer-events: auto; /* ?? */
  margin-bottom: 6px;
  padding: 15px 15px 15px 50px;
  width: 300px;
  border-radius: 3px;
  background-position: 15px center;
  background-repeat: no-repeat;
  box-shadow: 0 0 12px #999;
  color: #fff;
`;
