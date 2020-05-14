import React from "react";
import styled from "styled-components";

function Footer() {
  return <FooterBody>ⓒ Carewith Inc. All Rights Reserved.</FooterBody>;
}

export default Footer;

//style
const FooterBody = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 50px 0 53px 0;
  color: #848484;
  font-size: 14px;
`;
