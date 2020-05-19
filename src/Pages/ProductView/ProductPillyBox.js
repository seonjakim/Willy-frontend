import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NavBar from "../../Component/NavBar/NavBar";
import DetailButton from "../../Component/BascketButton/DetailButton";
import ProductLists5 from "./ProductLists5";

function ProductPillyBox(props) {
  const [datas, setData] = useState([]);
  const [explanation, setExplanation] = useState([]);

  useEffect(() => {
    fetch(`http://10.58.3.23:8000/product/${props.match.params.id}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.product_detail);
        setExplanation(res.product_detail[0].explanation_list);
      });
  }, [props.match.params.id]);
  return (
    <Body>
      <NavBar />
      {datas.length >= 1 ? (
        <>
          <Header
            style={{
              backgroundImage: `url(${datas[5].product_list[0].header_image_url})`,
              backgroundSize: "cover",
              backgroundPosition: "50% 50%",
            }}
          >
            <ContentWrapper>
              <ContentTop>
                <SubTitle>{datas[5].product_list[0].sub_name}</SubTitle>
                <Title>{datas[5].product_list[0].name}</Title>
              </ContentTop>
              {props.match.params.id === "9" ? (
                ""
              ) : (
                <>
                  <Img src={datas[1].product_category[0].image_url} alt="" />
                  <Category>{datas[1].product_category[0].name}</Category>
                </>
              )}
              <Detail>{datas[5].product_list[0].header_description}</Detail>
              <DayPrice>
                <Span>{datas[5].product_list[0].day}</Span>
                <Middle>|</Middle>
                <Span>{datas[5].product_list[0].price.toLocaleString()}</Span>
              </DayPrice>
              <ImgWarapper>
                <Img3 />
                <Img2 />
              </ImgWarapper>
              <BascketWrapper>
                <DetailButton />
              </BascketWrapper>
            </ContentWrapper>
          </Header>
          <SectionList
            dangerouslySetInnerHTML={{
              __html: datas[2].section_list[0].bottle,
            }}
          />
          <ProductLists5 datas={explanation} />
        </>
      ) : (
        ""
      )}
    </Body>
  );
}

export default ProductPillyBox;

//style
const Body = styled.div``;

const SectionList = styled.div`
  img {
    width: 100%;
  }
  p {
    padding-bottom: 50px;
    text-align: center;
  }
`;

const Header = styled.div`
  margin-top: 100px;
  height: 740px;
`;

const ContentWrapper = styled.div`
  width: 1024px;
  margin: 0 auto;
`;

const ContentTop = styled.div`
  padding-top: 115px;
`;

const ImgWarapper = styled.div`
  display: flex;
  margin-top: 18px;
`;

const SubTitle = styled.p`
  font-size: 36px;
`;

const Title = styled.p`
  font-size: 36px;
  font-weight: bold;
`;

const Detail = styled.p`
  font-size: 16px;
  margin-top: 28px;
  width: 494px;
`;

const Img = styled.img`
  margin-top: 30px;
`;

const Img2 = styled.div`
  margin-left: 5px;
  width: 54px;
  height: 54px;
  background-image: url(https://pilly.kr/images/icons/productDetail/icon-certification-gmp.png);
  background-size: 54px;
  background-repeat: no-repeat;
`;

const Img3 = styled.div`
  margin-top: 6px;
  width: 50px;
  height: 50px;
  background-image: url(https://pilly.kr/images/icons/productDetail/icon-certification-health2.png);
  background-size: 44px;
  background-repeat: no-repeat;
`;
const Span = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

const Category = styled.span`
  font-size: 12px;
`;

const DayPrice = styled.div`
  margin-top: 13px;
`;

const Middle = styled.span`
  margin: 0 12px;
`;

const BascketWrapper = styled.div`
  position: absolute;
  margin-top: 21px;
`;
