import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { InnerInfo } from "./MyPoint";

function PrescriptionCard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/Mockdatasubscription.json")
      .then((res) => res.json())
      .then((res) => setData(res.items));
  }, []);

  const PreCardList = data.map((item, idx) => (
    <CardDiv key={idx}>
      <Date>{item.completeTsp}</Date>
      {item.products[0].title}
    </CardDiv>
  ));

  return (
    <>
      {data.length !== 0 ? (
        <>{PreCardList}</>
      ) : (
        <InnerInfo>문진 내역이 없습니다.</InnerInfo>
      )}
    </>
  );
}

export default PrescriptionCard;

const CardDiv = styled.div`
  height: 95px;
  border-bottom: 1px solid rgba(1, 19, 108, 0.09);
  font-size: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Date = styled.div`
  font-size: 14px;
  color: #848484;
  margin: 0 0 8px 0;
`;
