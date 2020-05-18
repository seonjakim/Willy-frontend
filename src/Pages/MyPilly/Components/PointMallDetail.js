import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { TwoBtn } from "./MemberInfo";
import { SmallGray, TagTitle, MainTitle, Price } from "./PointMall";

function PointMallDetail(props) {
  const [data, setData] = useState([]);
  const Hee_API_URL = "http://10.58.5.47:8000";

  useEffect(() => {
    fetch(`${Hee_API_URL}/user/gift/${props.id}`)
      .then((res) => res.json())
      .then((res) => setData(res.detail));
  }, [props.id]);

  console.log("props", props.id);

  return (
    <DetailWrapper>
      {data.length >= 1 ? (
        <>
          <TopSquare>
            <ImgDiv>
              <Img src={data[0].image_url} />
            </ImgDiv>
            <BorderInnerContend>
              <SmallGray>{data[0].brand}</SmallGray>
              <TagTitle>{data[0].hashtag}</TagTitle>
              <MainTitle>{data[0].name}</MainTitle>
              <Price>{data[0].point}</Price>
              <FirstBtn>필리 포인트로 교환하기</FirstBtn>
              <SecondBtn>목록으로</SecondBtn>
            </BorderInnerContend>
          </TopSquare>
          <BottomContent>
            <DescriptionReceiver>
              {data[0].description.split("\n").map((desc, idx) => (
                <div key={idx}>{desc}</div>
              ))}
            </DescriptionReceiver>
            <ImgReceiver>
              {data[0].images.length > 1
                ? data[0].images.map((img, idx) => (
                    <Img key={idx} src={Object.values(img)} />
                  ))
                : ""}
            </ImgReceiver>
          </BottomContent>
        </>
      ) : (
        ""
      )}
    </DetailWrapper>
  );
}

export default PointMallDetail;

const DetailWrapper = styled.div`
  width: 100%;
`;

const TopSquare = styled.div`
  height: 278px;
  border: 1px solid #efefef;
  display: flex;
  flex-direction: row;
`;

const ImgDiv = styled.div`
  height: 276px;
  width: 301px;
  border-right: 1px solid #efefef;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const BorderInnerContend = styled.div`
  display: inline-block;
  padding: 32px 0 0 0;
  margin: 0 0 0 42px;
`;

const ReviseTwoBtn = styled(TwoBtn)`
  margin: 15px 8px 0;
  border-radius: 30px;
  height: 60px;
`;

const FirstBtn = styled(ReviseTwoBtn)`
  background-color: #e26d59;
  color: white;
  box-shadow: 0 5px 4px 0 rgba(0, 0, 0, 0.15);
  width: 320px;
`;

const SecondBtn = styled(ReviseTwoBtn)`
  background-color: transparent;
  border: 1px solid #d7d7d7;
  width: 138px;
`;

const BottomContent = styled.div`
  width: 100%;
  border-bottom: 1px solid #efefef;
`;

const DescriptionReceiver = styled.div`
  padding: 30px 26px;
`;

const ImgReceiver = styled.div``;
