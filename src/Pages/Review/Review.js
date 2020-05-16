import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NavBar from "../../Component/NavBar/NavBar";

function Review() {
  const [datas, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data/review.json")
      .then((res) => res.json())
      .then((res) => {
        setData(res.review);
      });
  }, []);

  return (
    <Body>
      <NavBar />
      <Header>
        <p>고객리뷰</p>
        <div>
          <span>필리를 이용해주신 고객님들의 리얼후기</span>
          <Green>1,430건</Green>
          <span>을 확인하세요!</span>
        </div>
      </Header>
      <ContentWrap>
        {datas.length > 1
          ? datas.map((data, idx) => {
              return (
                <Content key={idx}>
                  <div>
                    <Title>
                      <p>{data.name}</p>
                      {data.product.length >= 18 ? (
                        <p> ({data.product.slice(0, 18)}...</p>
                      ) : (
                        <p>({data.product})</p>
                      )}
                    </Title>
                    <Right>
                      {data.day} / {data.info}
                    </Right>
                  </div>
                  <img src={data.image_url} alt="" />
                  {data.content.length >= 107 ? (
                    <Text>{data.content.slice(0, 107)}···</Text>
                  ) : (
                    <Text>{data.content}</Text>
                  )}
                  <More>더보기</More>
                </Content>
              );
            })
          : ""}
      </ContentWrap>
    </Body>
  );
}

export default Review;

const Body = styled.div`
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  width: 1024px;
  margin: 0 auto;
  p {
    margin-top: 20px;
    font-size: 24px;
  }

  div {
    display: flex;
    margin-top: 37px;
    font-size: 16px;
    color: #848484;
    span {
      font-weight: 400;
    }
  }
`;

const Green = styled.span`
  color: #6ad743;
  font-weight: 700;
`;

const ContentWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1024px;
  margin: 50px auto 0 auto;
`;

const Content = styled.div`
  width: 320px;
  background-color: white;
  border-radius: 6px 6px 0 0;
  border: 1px solid #e6e6e6;
  img {
    width: 320px;
    margin-top: 14px;
  }
`;

const Title = styled.div`
  display: flex;
  padding: 24px 20px;
`;

const Right = styled.p`
  text-align: right;
  font-size: 12px;
`;

const Text = styled.p`
  margin-top: 20px;
  padding: 0 22px;
`;

const More = styled.p`
  font-size: 12px;
  font-weight: bold;
  margin: 19px 22px 25px 22px;
  cursor: pointer;
  color: #f37165;
  border-bottom: 1px solid #f37165;
  width: 36px;
`;
