import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TheFirstPage from "./Components/TheFirstPage";
import MyPoint from "./Components/MyPoint";
import Prescription from "./Components/Prescription";
import Subscription from "./Components/Subscription";
import Payment from "./Components/Payment";
import PointMall from "./Components/PointMall";
import MemberInfo from "./Components/MemberInfo";
import PointMallDetail from "./Components/PointMallDetail";
import NavBar from "../../Component/NavBar/NavBar";
import { HO_URL } from "../../Constants";

function MyPilly() {
  const [diffCom, setDiffcom] = useState(0);
  const [user, setUser] = useState([]);
  const accessToken = localStorage.getItem("token");
  useEffect(() => {
    if (accessToken) {
      fetch(`${HO_URL}/user/user-profile`, {
        method: "GET",
        headers: {
          Authorization: accessToken,
        },
      })
        .then((res) => res.json())
        .then((res) => setUser(res.user_profile[0]));
    }
  }, [accessToken]);

  const obj = {
    0: <TheFirstPage setDiffcom={setDiffcom} user={user} />,
    1: <MyPoint />,
    2: <Prescription />,
    3: <Subscription />,
    4: <Payment />,
    5: <MemberInfo user={user} />,
    6: <PointMall />,
  };

  return (
    <MyPillyWrapper>
      <InnerWrapper>
        <LeftSideBar>
          <TopTitle
            onClick={() => {
              setDiffcom(0);
            }}
          >
            MY 필리
          </TopTitle>
          <List
            style={diffCom === 1 ? { color: "#e26d59" } : { color: "" }}
            onClick={() => {
              setDiffcom(1);
            }}
          >
            내포인트
          </List>
          <List
            style={diffCom === 2 ? { color: "#e26d59" } : { color: "" }}
            onClick={() => setDiffcom(2)}
          >
            문진관리
          </List>
          <List
            style={diffCom === 3 ? { color: "#e26d59" } : { color: "" }}
            onClick={() => setDiffcom(3)}
          >
            정기구독
          </List>
          <List
            style={diffCom === 4 ? { color: "#e26d59" } : { color: "" }}
            onClick={() => setDiffcom(4)}
          >
            결제관리
          </List>
          <List
            style={diffCom === 6 ? { color: "#e26d59" } : { color: "" }}
            onClick={() => setDiffcom(6)}
          >
            포인트몰
          </List>
          <List
            style={diffCom === 5 ? { color: "#e26d59" } : { color: "" }}
            onClick={() => setDiffcom(5)}
          >
            회원관리
          </List>
        </LeftSideBar>
        <MainDiv>{obj[diffCom]}</MainDiv>
      </InnerWrapper>
    </MyPillyWrapper>
  );
}

export default MyPilly;

const MyPillyWrapper = styled.div`
  height: 331px;
  padding-top: 120px;
  margin-bottom: 100px;
`;

const InnerWrapper = styled.div`
  width: 1140px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
`;

const LeftSideBar = styled.div`
  width: 192px;
  text-align: center;
`;

const TopTitle = styled.div`
  font-size: 16px;
  padding: 25px 0;
  border-top: 1px solid #adadad;
  border-bottom: 1px solid #adadad;
  font-weight: 700;
  cursor: pointer;
`;

const List = styled.div`
  font-size: 18px;
  color: #333333;
  padding-top: 25px;
  font-weight: 540;
  cursor: pointer;
  letter-spacing: -1px;
`;

const MainDiv = styled.div`
  width: 908px;
  margin-left: 40px;
`;
