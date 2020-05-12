import React, { useState, useEffect } from "react";
import styled from "styled-components";

function MainPage6(props) {
  const [peopleInfo, setPeopleInfo] = useState([]);

  useEffect(()=>{
    setPeopleInfo(props.datas)
  }, [props.datas])

  return(
    <Main>
      <Span>이미 입소문이 시작되었어요.</Span>
        {peopleInfo.map((person, idx) => {
          return(
            <Person key={idx}>
              <Img src={person.image_url} alt=""/>
              <BoldText>{person.title}</BoldText>
              <SubText>{person.content}</SubText>
            </Person>
          )
        })}
    </Main>
  )
}

export default MainPage6;

//style

const Main = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px 0;
  width: 100%;
`;

const Span = styled.span`
  justify-self: center;
  text-align: center;
  font-size: 19px;
  font-weight: bold;
`;

const Person = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`;

const Img = styled.img`
  align-self: center;
  width: 220px;
  height: 220px;
`

const BoldText = styled.p`
  align-self: center;
  margin-top: 16px; 
  font-size: 48px;
  font-weight: bold;
  width: 440px;
  color: #333333;
  text-align: center;
`;

const SubText = styled.p`
  align-self: center;
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
`;