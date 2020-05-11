import React from "react";
import styled from "styled-components";
import NavBar from "../NavBar/NavBar";

function MainPage() {
  return (
    <Main>
      <NavBar/>
    </Main>
  );
};

export default MainPage;

//style
const Main = styled.div`
  width: 100%;
  height: 100%;
`;