import React from "react";
import styled from "styled-components";

function ProductLists7(props) {
  return (
    <Body>
      <Material>
        <Text1>원료 및 함량</Text1>
        <MaterialWrapper>
          {props.datas.map((data, idx) => {
            return (
              <Div key={idx}>
                <Text2>{data.nutrial}</Text2>
                <img src={data.image_url} alt="" />
              </Div>
            );
          })}
        </MaterialWrapper>
      </Material>
    </Body>
  );
}

export default ProductLists7;

//style

const Body = styled.button`
  width: 1024px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  text-align: left;
  padding: 0 50px;
`;

const Material = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  div {
    div {
      p {
        text-align: left;
      }
    }
  }
`;

const MaterialWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1024px;
`;

const Div = styled.div`
  width: 462px;
  img {
    width: 335px;
    height: 90px;
    margin: 22px 0;
  }
`;

const Text1 = styled.p`
  font-size: 16px;
  font-weight: bold;
  display: flex;
`;

const Text2 = styled.p`
  font-size: 13px;
  font-weight: bold;
  margin-top: 12px;
`;
