import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import MainButton from "../../../Component/MainButtonComponent/MainButtonComponent";

function MainPage4(props) {
  const [datas, setData] = useState([]);

  useEffect(() => {
    setData(props.datas);
  }, [props.datas]);

  return (
    <Main>
      {datas.length >= 1 ? (
        <>
          <Content>{datas[0].title.slice(0, 7)}</Content>
          <Content>{datas[0].title.slice(7, datas[0].title.length)}</Content>
        </>
      ) : (
        ""
      )}
      <Container>
        <ThemeProvider theme={theme}>
          <MainButton />
        </ThemeProvider>
      </Container>
    </Main>
  );
}

export default MainPage4;

//style
const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #a3cbd5;
  width: 100%;
  height: 444px;
`;

const Content = styled.p`
  font-size: 56px;
  font-weight: bold;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const theme = {
  buttonColor: "#333",
  buttonMargin: "30px 0 0",
};
