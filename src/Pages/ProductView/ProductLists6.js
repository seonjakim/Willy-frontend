import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import Footer from "../../Component/Footer/Footer";

function ProductLists6() {
  const [datas, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [boolean, setBoolean] = useState(false);

  const PageNation = useCallback(() => {
    setCount(count + 1);
    setBoolean(true);
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
      setBoolean(false);
    }
  }, [boolean, count, datas]);

  useEffect(() => {
    fetch("http://10.58.6.120:8000/product/review?offset=1&limit=9")
      .then((res) => res.json())
      .then((res) => {
        setData(res.reviews);
      });
  }, []);

  return (
    <Body>
      <P>고객후기</P>
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
      <button onClick={() => PageNation()}>더보기</button>
      <Footer />
    </Body>
  );
}

export default ProductLists6;

//style
const Body = styled.div`
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  button {
    margin: 40px auto 160px auto;
    border-color: rgba(0, 0, 0, 0.08);
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.08);
    background-color: white;
    width: 924px;
    height: 50px;
    font-weight: bold;
    font-size: 16px;
  }
`;

const P = styled.p`
  width: 1024px;
  margin: 0 auto;
  padding: 0 50px;
  font-weight: bold;
  font-size: 18px;
  color: #e26d59;
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
  padding: 0 22px;
  font-size: 12px;
  margin-top: 20px;
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
