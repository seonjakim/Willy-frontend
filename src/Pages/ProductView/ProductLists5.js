import React from "react";
import styled from "styled-components";

function ProductLists5(props) {
  return (
    <Body>
      <Title>배송 및 반품 교환 안내</Title>
      <Content>
        {props.datas.slice(4, 7).map((data, idx) => {
          return (
            <div key={idx}>
              <img src={data.image_url} alt="" />
              <div>
                <InnerTitle>{data.title}</InnerTitle>
                <div dangerouslySetInnerHTML={{ __html: data.content }} />
              </div>
            </div>
          );
        })}
      </Content>
      <button>교환/반품정보</button>
    </Body>
  );
}

export default ProductLists5;

//style
const Body = styled.div`
  padding: 200px 0 60px 0;
  background-color: #f2f2f2;
  button {
    width: 152px;
    height: 40px;
    font-size: 12px;
    font-weight: bold;
    box-shadow: 0 5px 4px 0 rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    border: 1px solid #d7d7d7;
    background-color: #fff;
    margin: 60px auto 0 auto;
    display: flex;
    justify-content: center;
  }
`;

const Title = styled.p`
  font-size: 18px;
  color: #e26d59;
  font-weight: bold;
  width: 1024px;
  margin: 0 auto;
  padding: 0 50px 0 50px;
`;

const Content = styled.div`
  display: flex;
  width: 1024px;
  margin: 40px auto 0 auto;
  padding: 0 50px;
  div {
    display: flex;
    width: 325px;
    img {
      width: 101px;
      height: 101px;
    }
    div {
      display: flex;
      flex-direction: column;
      div {
        display: flex;
        flex-direction: column;
        padding-top: 5px;
        padding-left: 18px;
        justify-content: flex-end;
        p {
          padding-top: 5px;
          width: 183px;
        }
      }
    }
  }
`;

const InnerTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
  padding-left: 18px;
`;
