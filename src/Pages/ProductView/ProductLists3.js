import React, { useState, useEffect } from "react";
import styled from "styled-components";

function ProductLists3() {
  const [datas, setData] = useState([]);

  useEffect(() => {
    fetch("http://10.58.6.120:8000/information/story?category=review")
      .then((res) => res.json())
      .then((res) => {
        setData(res.story_list[1].story);
      });
  }, []);

  return (
    <Body>
      <Title>
        <P1>pilly in Real life</P1>
        <P2>필리 크루들의 리얼스토리를 만나보세요.</P2>
      </Title>
      {datas.length >= 1 ? (
        <Story>
          {datas.map((data, idx) => {
            return (
              <div key={idx}>
                <img src={data.image_url} alt="" />
                <div>
                  <p>{data.title}</p>
                  <P>{data.content}</P>
                </div>
              </div>
            );
          })}
        </Story>
      ) : (
        ""
      )}
    </Body>
  );
}

export default ProductLists3;

//style

const Body = styled.div`
  background-color: #f2f2f2;
  padding-top: 200px;
`;

const Title = styled.div`
  width: 1024px;
  margin: 0 auto;
  padding: 0 50px;
`;

const P1 = styled.p`
  font-size: 18px;
  color: #e26d59;
  font-weight: 700;
`;

const P2 = styled.p`
  margin-top: 18px;
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const Story = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1024px;
  margin: 0 auto;
  padding: 0 30px;
  div {
    display: flex;
    justify-content: space-between;
    width: 462px;
    padding-right: 10px;
    margin-top: 40px;
    img {
      width: 200px;
      height: 140px;
    }
    div {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      p {
        font-size: 14px;
      }
    }
  }
`;

const P = styled.p`
  margin-top: 13px;
`;
