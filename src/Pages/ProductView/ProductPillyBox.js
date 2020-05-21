import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { HO_URL } from "../../Constants"; // 석호님 IP
import NavBar from "../../Component/NavBar/NavBar";
import ProductLists5 from "./ProductLists5";
import { connect } from "react-redux";
import { addNavCart } from "../../Actions/index";

function ProductPillyBox(props) {
  const [datas, setData] = useState([]);
  const [explanation, setExplanation] = useState([]);

  useEffect(() => {
    fetch(`${HO_URL}/product/${props.match.params.id}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.product_detail);
        setExplanation(res.product_detail[0].explanation_list);
      });
  }, [props.match.params.id]);

  const goToCart = (id) => {
    props.addNavCart(id);
  };

  return (
    <Body>
      <NavBar props={props} />
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
                <DetailButBody
                  onClick={() => goToCart(datas[5].product_list[0].id)}
                >
                  <button>
                    <span>장바구니 담기</span>
                  </button>
                </DetailButBody>
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

const mapDispatchProps = (dispatch) => ({
  addNavCart: (id) => dispatch(addNavCart(id)),
});

export default connect(null, mapDispatchProps)(ProductPillyBox);

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

const DetailButBody = styled.div`
  width: 232px;
  line-height: 58px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  height: 60px;
  margin: 29px auto 0 auto;
  background-color: #e26d59;
  box-shadow: 0 5px 4px 0 rgba(0, 0, 0, 0.15);
  span {
    font-weight: bold;
    font-size: 16px;
    color: white;
  }
`;
