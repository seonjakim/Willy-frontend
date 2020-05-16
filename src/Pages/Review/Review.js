import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import NavBar from "../../Component/NavBar/NavBar";

function Review() {
  const [datas, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [boolean, setBoolean] = useState(false);

  const onScroll = useCallback(() => {
    if (window.scrollY >= 600 * (count + 1)) {
      setCount(count + 1);
      setBoolean(true);
    }
  }, [count]);

  useEffect(() => {
    if (boolean === true) {
      fetch(
        `http://10.58.6.120:8000/product/review?offset=${count + 1}&limit=9`
      )
        .then((res) => res.json())
        .then((res) => {
          console.log("res", res.reviews);
          setData(datas.concat(res.reviews));
        });
      console.log("offset", count + 1);
      setBoolean(false);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [boolean, count, datas, onScroll]);

  useEffect(() => {
    fetch("http://10.58.6.120:8000/product/review?offset=1&limit=9")
      .then((res) => res.json())
      .then((res) => {
        setData(res.reviews);
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
                      {data.products.length >= 18 ? (
                        <p> {data.products.slice(0, 18)}...</p>
                      ) : (
                        <p>{data.products}</p>
                      )}
                    </Title>
                    <Right>
                      {data.created_at} / {data.subscription}
                    </Right>
                  </div>
                  <img src={data.image} alt="" />
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
  width: 920px;
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
  width: 1032px;
  margin: 0 auto;
  justify-content: center;
`;

const Content = styled.div`
  width: 296px;
  background-color: white;
  border-radius: 6px 6px 0 0;
  border: 1px solid #e6e6e6;
  margin: 50px 8px 0 8px;
  img {
    width: 294px;
    margin-top: 14px;
  }
`;

const Title = styled.div`
  display: flex;
  padding: 24px 20px;
  font-size: 13.5px;
`;

const Right = styled.p`
  text-align: right;
  font-size: 12px;
  padding-right: 20px;
`;

const Text = styled.p`
  margin-top: 20px;
  padding: 0 22px;
  font-size: 13.5px;
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
