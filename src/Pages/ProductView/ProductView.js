import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { HO_URL } from "../../Constants"; // 석호님 IP

import NavBar from "../../Component/NavBar/NavBar";
import BascketButton from "../../Component/BascketButton/BascketButton";
import Footer from "../../Component/Footer/Footer";

function ProductView(props) {
  const [main, setMain] = useState([]);
  const [products, setProduct] = useState([]);
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch(`${HO_URL}/product`) // 석호님 IP 이용
      .then((res) => res.json())
      .then((res) => {
        setMain(res.products);
        setProduct(res.products);
      });
  }, []);

  const buttonChange = (idx) => {
    setState(state.concat(idx + 1));
  };

  const goToProductLists = (id) => {
    props.history.push(`/product/${id}`);
  };

  return (
    <Body>
      {console.log("pv")}
      <NavBar />
      {main.length >= 1 ? (
        <Top>
          <MainImg src={main[0].product_header[0].image_url} alt="" />
          <Title>
            {main[0].product_header[0].title.slice(0, 10)}
            <br />
            {main[0].product_header[0].title.slice(
              10,
              main[0].product_header[0].title.length
            )}
          </Title>
          <MainIcon1
            src="https://pilly.kr/images/icons/common/icon-certification-health-white.png"
            alt=""
          />
          <MainIcon2
            src="https://pilly.kr/images/icons/common/icon-certification-gmp-white.png"
            alt=""
          />
        </Top>
      ) : (
        ""
      )}
      <List>
        {products.length > 1
          ? products.slice(1, 8).map((product, idx) => {
              return (
                <Card style={{ backgroundColor: `${product.color}` }} key={idx}>
                  <CardTop onClick={() => goToProductLists(idx + 1)}>
                    <div>
                      <SubName>{product.sub_name}</SubName>
                      <Name>{product.name}</Name>
                      <Img3 src={product.category_image[0]} alt="" />
                      <Img4 src={product.category_image[1]} alt="" />
                    </div>
                    <Img2 src={product.image_url} alt="" />
                  </CardTop>
                  <CardBottom>
                    <ul>
                      <Li>
                        <Dot />
                        {product.description[0].content}
                      </Li>
                      <Li>
                        <Dot />
                        {product.description[0].sub_content}
                      </Li>
                      <Li>
                        <Dot />
                        {product.description[0].product_content}
                      </Li>
                    </ul>
                    <DayAndPrice>
                      <Span>{product.day}</Span>
                      <Price>{product.price.toLocaleString()}원</Price>
                    </DayAndPrice>
                  </CardBottom>
                  <Div>
                    <ViewMore onClick={() => goToProductLists(idx + 1)}>
                      더보기
                    </ViewMore>
                    <BascketButton
                      state={state.indexOf(product.id) !== -1 ? state : ""}
                      onClick={() => buttonChange(idx)}
                    />
                  </Div>
                </Card>
              );
            })
          : ""}
        <OneTime>
          <Bold>1회 정기구독 제품</Bold>
          <P>
            1회 구매 제품은 정기구독으로 신청하셔도 매번 배송되지 않고 1회만
            배송됩니다.
          </P>
        </OneTime>
        {products.length > 1
          ? products.slice(8, products.length).map((product, idx) => {
              return (
                <Card
                  style={{ backgroundColor: `${product.color}` }}
                  key={idx}
                  onClick={() => goToProductLists(idx + 8)}
                >
                  <CardTop>
                    <div>
                      <SubName>{product.sub_name}</SubName>
                      <Name>{product.name}</Name>
                      <Img3 src={product.category_image[0]} alt="" />
                      <Img4 src={product.category_image[1]} alt="" />
                    </div>
                    <Img2 src={product.image_url} alt="" />
                  </CardTop>
                  <CardBottom>
                    <ul>
                      <Li>
                        <Dot />
                        {product.description[0].content}
                      </Li>
                      <Li>
                        <Dot />
                        {product.description[0].sub_content}
                      </Li>
                      <Li>
                        <Dot />
                        {product.description[0].product_content}
                      </Li>
                    </ul>
                    <DayAndPrice>
                      <Span>{product.day}</Span>
                      <Price>{product.price.toLocaleString()}원</Price>
                    </DayAndPrice>
                  </CardBottom>
                  <Div>
                    <ViewMore>더보기</ViewMore>
                    <BascketButton
                      state={state.indexOf(product.id) !== -1 ? state : ""}
                      onClick={() => buttonChange(idx + 7, product.id)}
                    />
                  </Div>
                </Card>
              );
            })
          : ""}
      </List>
      <Footer />
    </Body>
  );
}

export default withRouter(ProductView);

//style
const Body = styled.div`
  position: relative;
  padding-bottom: 177px;
`;

const Top = styled.div`
  max-height: 590px;
  overflow: hidden;
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1024px;
  margin: 0 auto;
`;

const Card = styled.div`
  padding: 30px 30px 30px 30px;
  border-radius: 8px;
  top: 0;
  width: 452px;
  height: 393px;
  margin: 60px 8px 0 8px;
`;

const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CardBottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MainImg = styled.img`
  position: relative;
  max-height: initial;
  margin-top: -13.3%;
  width: 100%;
`;

const MainIcon1 = styled.img`
  position: absolute;
  top: 300px;
  left: 450px;
`;

const MainIcon2 = styled.img`
  position: absolute;
  top: 300px;
  left: 515px;
`;

const Title = styled.p`
  position: absolute;
  top: 180px;
  left: 450px;
  font-size: 36px;
  font-weight: bold;
  color: white;
`;

const SubName = styled.p`
  font-size: 14px;
  margin-top: 8px;
`;

const Name = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-top: 3px;
`;

const Img2 = styled.img`
  width: 130px;
`;

const Img3 = styled.img`
  margin-top: 20px;
  width: 24px;
`;

const Img4 = styled.img`
  margin-top: 20px;
  margin-left: 20px;
  width: 24px;
`;

const Li = styled.li`
  position: relative;
  padding-left: 12px;
  font-size: 14px;
  line-height: 24px;
`;

const Dot = styled.div`
  content: "";
  position: absolute;
  left: 0;
  top: 11px;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background-color: #333;
`;

const DayAndPrice = styled.div`
  display: flex;
  flex-direction: column;
`;

const Span = styled.span`
  font-size: 14px;
  font-weight: bold;
  text-align: right;
`;

const Price = styled.span`
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const ViewMore = styled.span`
  font-size: 14px;
  border-bottom: solid 1px #707070;
  font-weight: bold;
  color: #707070;
  margin: 14px 0 0 12px;
  line-height: 24px;
  width: 42px;
`;

const OneTime = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 100px auto 0 auto;
`;

const Bold = styled.p`
  font-size: 26px;
  font-weight: bold;
`;

const P = styled.p`
  margin-top: 18px;
  font-size: 16px;
`;
