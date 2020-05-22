import React, { useEffect } from "react";
import styled, { css } from "styled-components";

function Nutrient({ user, idx, nutrient }) {
  useEffect(() => {
    animateCircle(idx, nutrient.point);
  });

  const animateCircle = (idx, point) => {
    console.log(idx, point);
    const canvas = document.querySelectorAll(".canvas");
    const ctx = Array.from(canvas).map((c) => c.getContext("2d"));

    ctx[idx].lineWidth = 4;
    ctx[idx].strokeStyle = "#4183d7";
    const end = Math.PI * 1.5;

    for (let i = 0; i < (100 / 5.0) * point; i++) {
      console.log(i);
      setTimeout(() => {
        ctx[idx].clearRect(0, 0, 200, 200);
        ctx[idx].beginPath();
        ctx[idx].arc(
          50,
          50,
          47,
          Math.PI * 1.5,
          (((end / 100) * point) / 5.0) * i + 0.045
        );
        ctx[idx].stroke();
      }, i * 10);
    }
  };

  return (
    <NutrientWrapper>
      <Text>
        <Title>{nutrient.name}</Title>
        {console.log(nutrient.name)}
        <Efficiency>
          {console.log(nutrient.effects[0].content)}
          <Effect># {nutrient.effects[0].content}</Effect>
          <Effect># {nutrient.effects[0].product_content}</Effect>
          <Effect># {nutrient.effects[0].sub_content}</Effect>
        </Efficiency>
        {/* <Recommend> * 10대초반의 남성 0.00%가 추천 받았습니다. </Recommend> */}
      </Text>
      <Rating>
        <Progress>
          <Canvas width="100" height="100" className="canvas" />
          <Score>
            추천점수
            <Num>{nutrient.point}</Num>
          </Score>
        </Progress>
      </Rating>
      <DetailWrapper>
        <Detailbox>
          {/* item map here */}
          <ItemFirst>
            <Header>{user}님은</Header>
            {/* 필요해요 List here */}
            <Lists>
              {nutrient.needs.map((need) => (
                <List>
                  <ListTitle>{need.title}</ListTitle>
                  <ListDesc>
                    {need.content.split(need.highlight)[0]}
                    <Highlight>{need.highlight}</Highlight>
                    {need.content.split(need.highlight)[1]}
                    <br />

                    {console.log(need.link.split(","))}
                    {need.link.split(",").map((link, idx) => {
                      console.log("link", link);
                      return (
                        <a href={`${link}`}>
                          <Reference>참고자료#{idx + 1}</Reference>
                        </a>
                      );
                    })}
                  </ListDesc>
                </List>
              ))}
            </Lists>
          </ItemFirst>
          <ItemSecond>
            <Header>영양성분</Header>
            {/* 영양성분 List here */}
            <Lists>
              {nutrient.importants.map((important) => (
                <List>
                  <ListTitle>{important.title}</ListTitle>
                  <ListDesc>
                    {important.description.split(important.highlights)[0]}
                    <Highlight>{important.highlights}</Highlight>
                    {important.description.split(important.highlights)[1]}
                  </ListDesc>
                </List>
              ))}
            </Lists>
          </ItemSecond>
          <ItemThird img={nutrient.nutrient.image}>
            <VitaTitle>
              필리가 연구한
              <br />
              <Bold>{nutrient.name}</Bold>
            </VitaTitle>
            <VitaLists>
              {nutrient.nutrient.list.map((list) => (
                <VitaList>{list}</VitaList>
              ))}
              {/* Link */}
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
    background-color: #4183d7;
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
  font-weight: 600;
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

const Reference = styled.span`
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
