import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NavBar from "../../Component/NavBar/NavBar";
import BascketButton from "../../Component/BascketButton/BascketButton";
import Footer from "../../Component/Footer/Footer";

function ProductView() {
  const [main, setMain] = useState([]);
  const [products, setProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data/productView.json")
      .then((res) => res.json())
      .then((res) => {
        setMain(res.productView);
        setProduct(res.card);
      });
  }, []);

  return (
    <Body>
      <NavBar />
      {main.length >= 1 ? (
        <Top>
          <MainImg src={main[0].image_url} alt="" />
          <Title>
            {main[0].title.slice(0, 10)}
            <br />
            {main[0].title.slice(10, main[0].title.length)}
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
          ? products.slice(0, 7).map((product, idx) => {
              return (
                <Card key={idx}>
                  <CardTop>
                    <div>
                      <SubName>{product.sub_name}</SubName>
                      <Name>{product.name}</Name>
                      <Img3 src={product.pill_sub_image_url} alt="" />
                      <Img4 src="" alt="" />
                    </div>
                    <Img2 src={product.pill_image_url} alt="" />
                  </CardTop>
                  <CardBottom>
                    <ul>
                      <Li>
                        <Dot />
                        {product.pill_description[0]}
                      </Li>
                      <Li>
                        <Dot />
                        {product.pill_description[1]}
                      </Li>
                      <Li>
                        <Dot />
                        {product.pill_description[2]}
                      </Li>
                    </ul>
                    <DayAndPrice>
                      <Span>{product.day}</Span>
                      <Price>{product.price.toLocaleString()}원</Price>
                    </DayAndPrice>
                  </CardBottom>
                  <Div>
                    <ViewMore>더보기</ViewMore>
                    <BascketButton />
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
          ? products.slice(7, products.length).map((product, idx) => {
              return (
                <Card key={idx}>
                  <CardTop>
                    <div>
                      <SubName>{product.sub_name}</SubName>
                      <Name>{product.name}</Name>
                      <Img3 src={product.pill_sub_image_url} alt="" />
                      <Img4 src="" alt="" />
                    </div>
                    <Img2 src={product.pill_image_url} alt="" />
                  </CardTop>
                  <CardBottom>
                    <ul>
                      <Li>
                        <Dot />
                        {product.pill_description[0]}
                      </Li>
                      <Li>
                        <Dot />
                        {product.pill_description[1]}
                      </Li>
                      <Li>
                        <Dot />
                        {product.pill_description[2]}
                      </Li>
                    </ul>
                    <DayAndPrice>
                      <Span>{product.day}</Span>
                      <Price>{product.price.toLocaleString()}원</Price>
                    </DayAndPrice>
                  </CardBottom>
                  <Div>
                    <ViewMore>더보기</ViewMore>
                    <BascketButton />
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

export default ProductView;

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
  width: 944px;
  margin: 0 auto;
`;

const Card = styled.div`
  padding: 30px 30px 30px 30px;
  border-radius: 8px;
  background-color: #efe9d9;
  top: 0;
  width: 452px;
  height: 393px;
  margin: 60px 7.5px 0 7.5px;
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
