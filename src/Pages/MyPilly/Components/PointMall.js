import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { TheTitle, Point, PointUpdate } from "./MyPoint";
import PointMallDetail from "./PointMallDetail";

function PointMall() {
  const [data, setData] = useState([]);
  const [show, hide] = useState(false);
  const [index, setIndex] = useState(1);

  useEffect(() => {
    fetch("http://10.58.4.9:8000/account/gift")
      .then((res) => res.json())
      .then((res) => setData(res.point_products));
  }, []);

  const PointMallCard = data.map((items, idx) => (
    <LiTag
      key={idx}
      onClick={() => {
        setIndex(items.id);
        hide(!show);
      }}
    >
      <ImgTag src={items.image_url} />
      <Cloumn>
        <SmallGray>{items.brand}</SmallGray>
        <TagTitle>{items.hashtag}</TagTitle>
        <MainTitle>{items.name}</MainTitle>
        <Price>{items.point}</Price>
      </Cloumn>
    </LiTag>
  ));

  return (
    <BodyWrapper>
      <TheTitle>포인트몰</TheTitle>
      {show ? (
        <PointMallDetail id={index} />
      ) : (
        <>
          <Point>
            보유 포인트
            <PointUpdate>0 P</PointUpdate>
          </Point>
          <UlTag>{PointMallCard}</UlTag>
        </>
      )}
    </BodyWrapper>
  );
}

export default PointMall;

const BodyWrapper = styled.div`
  width: 100%;
`;

const UlTag = styled.ul`
  width: 100%;
`;

const LiTag = styled.li`
  height: 156px;
  display: flex;
  flex-direction: row;
  border-top: 1px solid rgba(1, 19, 108, 0.09);
  align-items: center;
  cursor: pointer;
`;

const ImgTag = styled.img`
  width: 110px;
  height: 110px;
`;

const Cloumn = styled.div`
  padding-left: 20px;
`;

export const SmallGray = styled.div`
  color: #848484;
  font-size: 14px;
  margin: 10px 0 0 0;
`;

export const TagTitle = styled.div`
  font-size: 20px;
  margin: 10px 0 0 0;
`;

export const MainTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

export const Price = styled.div`
  margin: 16px;
  font-size: 20px;
  font-weight: 800;
`;
