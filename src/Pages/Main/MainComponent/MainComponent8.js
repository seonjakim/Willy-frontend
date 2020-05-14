import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import MainButton from "../../../Component/MainButtonComponent";

function MainPage8(props) {
  const [benefit, setBenefit] = useState([]);
  useEffect(() => {
    setBenefit(props.datas);
  }, [props.datas]);

  return (
    <>
      {benefit.length >= 1 ? (
        <>
          <Main>
            <Text>{benefit[0].title}</Text>
            <Container>
              <ThemeProvider theme={theme}>
                <MainButton />
              </ThemeProvider>
            </Container>
          </Main>
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default MainPage8;

//style
const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background-color: #e26d59;
  padding: 110px 0;
`;

const Text = styled.p`
  font-size: 48px;
  font-weight: bold;
  color: #fff;
  width: 320px;
  text-align: center;
  align-self: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const theme = {
  buttonColor: "#333",
  buttonMargin: "30px 0 0",
};
