import React, { useEffect } from "react";
import styled, { css } from "styled-components";

function Nutrient() {
  useEffect(() => {
    console.log("Effect..");
    animateCircle();
  });

  const animateCircle = () => {
    const ctx = document.querySelector(".canvas").getContext("2d");
    ctx.lineWidth = 2;
    const end = Math.PI * 1.5;
    for (let i = 0; i < 100; i++) {
      setTimeout(() => {
        ctx.clearRect(0, 0, 200, 200);
        ctx.beginPath();
        ctx.arc(50, 50, 47, Math.PI * 1.5, (end / 100) * i + 0.045);
        ctx.stroke();
      }, i * 10);
    }
  };

  return (
    <NutrientWrapper>
      <Text>
        <Title>오메가3</Title>
        <Efficiency>
          {/* effect list map here */}
          <Effect>#혈중중성지방 개선에 도움</Effect>
          <Effect>#눈 건강에 도움</Effect>
        </Efficiency>
        <Recommend> * 10대초반의 남성 0.00%가 추천 받았습니다. </Recommend>
      </Text>
      <Rating>
        <Progress>
          <Canvas width="100" height="100" className="canvas" />
          <Score>
            추천점수
            <Num>5.0</Num>
          </Score>
        </Progress>
      </Rating>
      <DetailWrapper>
        <Detailbox>
          {/* item map here */}
          <ItemFirst>
            <Header>{"칙촉"}님은</Header>
            {/* 필요해요 List here */}
            <Lists>
              <List>
                <ListTitle>혈액순환 관리가 필요해요.</ListTitle>
                <ListDesc>
                  {" "}
                  인스턴트와 육류 위주의 식습관을 가지고 있는 현대인들은 혈중
                  중성지방과 콜레스테롤 수치가 높습니다. 또한, 장시간 앉아 있는
                  습관은 혈류를 느리게 만들어 혈액이 온몸을 잘 순환하지 않아
                  집중력과 기억력을 저하시키고,
                  고혈압∙고지혈증∙동맥경화∙심근경색과 같은 심혈관성 질환의
                  발병할 확률이 높습니다. <Highlight>오메가3는</Highlight>{" "}
                  혈전의 생성을 방지하고 혈관내피세포의 기능을 개선하여{" "}
                  <Highlight>혈행 개선에 도움을 줄 수 있습니다.</Highlight>
                  <br />
                  <Reference>참고자료#{1}</Reference>
                </ListDesc>
              </List>
            </Lists>
          </ItemFirst>
          <ItemSecond>
            <Header>영양성분</Header>
            {/* 영양성분 List here */}
            <Lists>
              <List>
                <ListTitle>
                  {"오메가3는 남녀노소 필수 영양성분입니다."}
                </ListTitle>
                <ListDesc>
                  오메가3는 주로 생선 기름에 많이 함유되어있는 불포화지방산으로,
                  효능을 나타내는 주요 성분은 DHA와 EPA입니다.{" "}
                  <Highlight>오메가3는</Highlight> 간에서 중성지방이 합성되는
                  것을 억제하여 혈전 생성을 방지하고,
                  <Highlight>혈액이 잘 흐르게 하는데 도움을 줍니다.</Highlight>
                  오메가3는 서구화된 식습관, 인스턴트 음식 과다 섭취등으로 인해
                  부족한 경우가 많습니다. 또한, 체내에서 합성되는 효율이 매우
                  낮아 식품이나 건강기능식품으로 섭취하는 것이 좋습니다. 일일
                  권장 섭취량은 DHA와 EPA의 합으로서 매일 500~2,000mg이며
                  일주일에 2~3회 고등어 등의 등푸른 생선을 먹는 것으로 500mg이상
                  섭취가 가능합니다.
                </ListDesc>
              </List>
            </Lists>
          </ItemSecond>
          <ItemThird
            img={"https://img.pilly.kr/survey/product/pilly-omega3@2x.png"}
          >
            <VitaTitle>
              필리가 연구한
              <br />
              <Bold>{"오메가3"}</Bold>
            </VitaTitle>
            <VitaLists>
              <VitaList>북대서양의 청정한 노르웨이산 오메가3</VitaList>
              <VitaList>작은 어류를 사용한 원료</VitaList>
              <VitaList>체내 이용율이 높은 rTG타입 오메가3</VitaList>
              {/* Link */}
              <ReferTo></ReferTo>
            </VitaLists>
          </ItemThird>
        </Detailbox>
      </DetailWrapper>
    </NutrientWrapper>
  );
}

export default Nutrient;

const NutrientWrapper = styled.li`
  position: relative;
  margin-top: 10px;
  padding: 35px 0 21px;
  border-bottom: 1px solid #efefef;
  background-color: #fff;

  &:first-child {
    border-top-width: 0;
    margin-top: 0;
  }
`;

// Text
const Text = styled.div`
  position: relative;
  padding-left: 48px;
  padding-right: 80px;
  margin-bottom: 14px;
`;

const Title = styled.p`
  font-size: 22px;
  line-height: 24px;
  color: #333;
  font-weight: 700;

  &:after {
    content: "";
    position: absolute;
    top: 6px;
    left: 26px;
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #999;
  }
`;

const Efficiency = styled.p`
  margin-top: 22px;
  width: 90%;
  font-size: 16px;
  line-height: 24px;
  color: #333;
`;

const Effect = styled.span`
  display: block;
`;

const Recommend = styled.p`
  margin-top: 20px;
  margin-right: -30px;
  font-size: 15px;
  color: #999;
`;

// Rating
const Rating = styled.div`
  position: absolute;
  top: 35px;
  right: 46px;
`;

const Progress = styled.div`
  position: relative;
  margin: auto;
  text-align: center;
`;

//width="125", height="125" ??
const Canvas = styled.canvas`
  width: 100px;
  height: 100px;
`;

const Score = styled.span`
  position: absolute;
  vertical-align: middle;
  font-size: 13px;
  color: #333;
  top: 29px;
  left: 27px;
`;

const Num = styled.em`
  display: block;
  font-size: 22px;
  font-weight: 100;
`;

// DetailWrapper
const DetailWrapper = styled.div`
  padding: 14px 10px 0;
`;

const Detailbox = styled.div`
  display: block;
  border-top: 1px solid #efefef;
  background-color: #fafafa;
`;

// Item

const item = css`
  padding: 30px 16px;
`;

const ItemFirst = styled.div`
  ${item}
  border-bottom: 2px solid #eee;
`;

const Header = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #999;
`;

const Lists = styled.ul``;

const List = styled.li`
  margin-top: 30px;
`;

const ListTitle = styled.span`
  font-size: 24px;
  color: #333;
`;

const ListDesc = styled.p`
  margin-top: 24px;
  line-height: 28px;
  font-size: 16px;
  font-weight: 400;
  color: #414141;
`;

const Highlight = styled.span`
  background-color: rgba(230, 230, 50, 0.5);
`;

const Reference = styled.a`
  display: inline-block;
  margin-top: 34px;
  margin-right: 20px;
  padding-left: 17px;
  padding-bottom: 0px;
  width: 94px;
  font-weight: 400;
  color: #848484;
  background-image: url("https://pilly.kr/images/icons/survey/icon-document.png");
  background-size: 13px;
  background-repeat: no-repeat;
  background-position: 0 55%;
  border-bottom: 1px solid #848484;
`;

const ItemSecond = styled.div`
  ${item}
`;

const ItemThird = styled.div`
  ${item}
  height: 300px;
  width: 97%;
  margin: 0 auto;
  background-color: #eee;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: auto 300px;
  box-shadow: 0px 6px 11px rgba(0, 0, 0, 0.2);
`;

const VitaTitle = styled.p`
  color: #333;
  font-size: 33px;
  font-weight: 300;
`;

const Bold = styled.span`
  font-weight: 400;
`;

const VitaLists = styled.ul`
  margin-top: 16px;
`;

const VitaList = styled.li`
  margin-top: 8px;
  position: relative;
  padding-left: 13px;
  font-size: 14px;
  color: #999;
  word-break: keep-all;

  &:first-child {
    margin-top: 0;
  }

  &:after {
    content: "";
    position: absolute;
    left: 0%;
    top: 50%;
    margin-top: -2px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #999;
  }
`;

const ReferTo = styled.div``;
