import React from "react";
import styled from "styled-components";

function ProductLists9(props) {
  return (
    <Body>
      <Precautions>
        <p>섭취시 주의사항</p>
        {props.datas[0].precautions.split(",").map((data, idx) => {
          return <div key={idx}>{data}</div>;
        })}
      </Precautions>
      <Button>제품설명서 보기</Button>
    </Body>
  );
}

export default ProductLists9;

//style

const Body = styled.div`
  padding-bottom: 60px;
`;

const Button = styled.div`
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
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Precautions = styled.div`
  margin-top: 38px;
  font-size: 16px;
  font-weight: bold;
  width: 1024px;
  padding: 0 50px;
  margin: 0 auto;
  p {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 10px;
  }
  div {
    font-size: 14px;
    font-weight: initial;
    letter-spacing: -0.4px;
    line-height: 1.4;
  }
`;
