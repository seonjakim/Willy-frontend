import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NavBar from "../../Component/NavBar/NavBar";
import MainComponent1 from "./MainComponent/MainComponent1";
import MainComponent2 from "./MainComponent/MainComponent2";
import MainComponent3 from "./MainComponent/MainComponent3";
import MainComponent4 from "./MainComponent/MainComponent4";
import MainComponent5 from "./MainComponent/MainComponent5";
import MainComponent6 from "./MainComponent/MainComponent6";
import MainComponent7 from "./MainComponent/MainComponent7";
import MainComponent8 from "./MainComponent/MainComponent8";
import MainComponent9 from "./MainComponent/MainComponent9";

function MainPage() {
  const [mainDatas, setMainDatas] = useState([]);
  const [slides, setSlides] = useState([]);
  const [boxes, setBoxes] = useState([]);
  const [health, setHealth] = useState([]);
  const [QandA, setQandA] = useState([]);
  const [peopleInfo, setPeopleInfo] = useState([]);
  const [subscribe, setSubscribe] = useState([]);
  const [benefit, setBenefit] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data/main.json")
      .then((res) => res.json())
      .then((res) => {
        setMainDatas(res.home_list.slice(0, 1));
        setSlides(res.home_list.slice(1, 5));
        setBoxes(res.home_list.slice(5, 10));
        setHealth(res.home_list.slice(10, 11));
        setQandA(res.home_list.slice(11, 16));
        setPeopleInfo(res.home_list.slice(16, 19));
        setSubscribe(res.home_list.slice(19, 22));
        setBenefit(res.home_list.slice(22, 23));
      });
  }, []);

  return (
    <Main>
      <NavBar />
      <MainComponent1 datas={mainDatas} />
      <MainComponent2 datas={slides} />
      <MainComponent3 datas={boxes} />
      <MainComponent4 datas={health} />
      <MainComponent5 datas={QandA} />
      <MainComponent6 datas={peopleInfo} />
      <MainComponent7 datas={subscribe} />
      <MainComponent8 datas={benefit} />
      <MainComponent9 />
    </Main>
  );
}

export default MainPage;

//style
const Main = styled.div`
  width: 100%;
  height: 100%;
`;
