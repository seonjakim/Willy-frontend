import React from "react";
import styled from "styled-components";

function ProductLists4(props) {
  return (
    <Body>
      <Title>왜 필리인가?!</Title>
      <ListsWrap>
        {props.datas.slice(0, 4).map((data, idx) => {
          return (
            <div key={idx}>
              <img src={data.image_url} alt="" />
              <div>
                <InnerTitle>{data.title}</InnerTitle>
                <Content>{data.content}</Content>
              </div>
            </div>
          );
        })}
      </ListsWrap>
    </Body>
  );
}

export default ProductLists4;

//style
const Body = styled.div`
  padding-top: 200px;
  background-color: #f2f2f2;
`;

const ListsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1024px;
  margin: 40px auto 0 auto;
  padding: 0 50px;
  div {
    display: flex;
    flex-direction: column;
    width: 225px;
    background-color: white;
    img {
      width: 225px;
      height: 180px;
    }
    div {
      padding: 20px 20px 30px;
      letter-spacing: -0.4px;
      line-height: 1.4;
    }
  }
`;

const Content = styled.p`
  padding-top: 5px;
  line-height: 22px;
`;

const Title = styled.p`
  font-size: 18px;
  color: #e26d59;
  font-weight: 700;
  margin: 0 auto;
  width: 1024px;
  padding: 0 50px;
`;

const InnerTitle = styled.p`
  font-size: 17px;
  font-weight: bold;
`;
