import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { HO_URL } from "../../Constants"; // 석호님 IP

import NavBar from "../../Component/NavBar/NavBar";
import DeatilButton from "../../Component/BascketButton/DetailButton";
import ProductLists2 from "./ProductLists2";
import ProductLists3 from "./ProductLists3";
import ProductLists4 from "./ProductLists4";
import ProductLists5 from "./ProductLists5";
import ProductLists6 from "./ProductLists6";

function ProductLists(props) {
  const [datas, setData] = useState([]);

  useEffect(() => {
    fetch(`${HO_URL}/product/${props.match.params.id}`) // 석호님 IP 이용
      .then((res) => res.json())
      .then((res) => {
        setData(res.product_detail);
      });
  }, [props.match.params.id]);

  const intoCart = () => {};

  return (
    <Body>
      {console.log("hi", datas)}
      {datas.length >= 1 ? (
        <>
          <NavBar />
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
              <Img src={datas[1].product_category[0].image_url} alt="" />
              <Category>{datas[1].product_category[0].name}</Category>
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
                <DeatilButton onClick={() => intoCart()} />
              </BascketWrapper>
            </ContentWrapper>
          </Header>
          <Main>
            <TalkImg />
            <Review>522 개의 후기 보러가기</Review>
            <MainBody>
              <SectionList1
                dangerouslySetInnerHTML={{
                  __html: datas[2].section_list[0].bottle,
                }}
              />
              <SectionList2
                dangerouslySetInnerHTML={{
                  __html: datas[2].section_list[0].title,
                }}
              />
              <SectionList3
                dangerouslySetInnerHTML={{
                  __html: datas[2].section_list[0].effects,
                }}
              />
              <SectionList4
                dangerouslySetInnerHTML={{
                  __html: datas[2].section_list[0].point,
                }}
              />
              <div
                dangerouslySetInnerHTML={{
                  __html: datas[2].section_list[0].video_url,
                }}
              />
            </MainBody>
            <MainBottom>
              <Description>제품 설명</Description>
              <Img4
                src={datas[5].product_list[0].pill_image_url}
                alt=""
                style={{ width: "240px" }}
              />
              <TopText>이렇게 드세요</TopText>
              <MiddleText>
                {datas[5].product_list[0].pill_description}
              </MiddleText>
              <BottomText>
                {datas[5].product_list[0].pill_sub_description}
              </BottomText>
              <Img5
                src={datas[5].product_list[0].pill_sub_image_url}
                alt=""
                style={{ width: "183px", height: "33px" }}
              />
              <Ingredient>
                {datas[5].product_list[0].ingredient.slice(
                  0,
                  datas[5].product_list[0].ingredient.length - 22
                )}
              </Ingredient>
              <Ingredient2>
                {datas[5].product_list[0].ingredient.slice(
                  datas[5].product_list[0].ingredient.length - 22,
                  datas[5].product_list[0].ingredient.length
                )}
              </Ingredient2>
              <Material>
                <Text1>원료 및 함량</Text1>
                <MaterialWrapper>
                  {datas[4].material_list.map((data, idx) => {
                    return (
                      <Div key={idx}>
                        <Text2>{data.nutrial}</Text2>
                        <img src={data.image_url} alt="" />
                      </Div>
                    );
                  })}
                </MaterialWrapper>
              </Material>
              <Precautions>
                <p>섭취시 주의사항</p>
                {datas[4].material_list[0].precautions
                  .split(",")
                  .map((data, idx) => {
                    return <div key={idx}>{data}</div>;
                  })}
              </Precautions>
            </MainBottom>
            <button>제품설명서 보기</button>
          </Main>
          <ProductLists2 datas={datas} />
          <ProductLists3 />
          <ProductLists4 datas={datas} />
          <ProductLists5 datas={datas} />
          <ProductLists6 datas={datas} />
        </>
      ) : (
        ""
      )}
    </Body>
  );
}

export default ProductLists;

//style
const Body = styled.div`
  background-color: #fafafa;
`;

const Precautions = styled.div`
  margin-top: 60px;
  font-size: 16px;
  font-weight: bold;
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

const Main = styled.div`
  width: 1024px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
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
  }
`;

const TalkImg = styled.div`
  width: 18px;
  height: 18px;
  background-image: url(https://pilly.kr/images/icons/productDetail/icon-product-review-count.png);
  background-size: 18px;
  background-repeat: no-repeat;
  margin: 110px auto 0 auto;
`;

const Review = styled.span`
  border-bottom: solid 1px #999;
  padding-bottom: 2px;
  color: #999;
  font-size: 16px;
  justify-self: center;
  margin: 8px auto 0 auto;
`;

const MainBody = styled.div`
  letter-spacing: -0.4px;
  line-height: 1.4;
  div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    img {
      margin: 0 auto;
    }
    h2 {
      em {
        font-size: 26px;
        font-weight: initial;
      }
    }
  }
`;

const SectionList1 = styled.div`
  img {
    width: 375px;
  }
`;

const SectionList2 = styled.div`
  h2 {
    font-size: 26px;
    font-weight: bold;
    text-align: center;
  }
`;

const SectionList3 = styled.div`
  div {
    ul {
      display: flex;
      justify-content: center;
      padding-top: 60px;
      li {
        text-align: center;
        margin: 0 10px;
        img {
          border: 30px solid #fff;
          border-radius: 50%;
        }
        h3 {
          font-size: 24px;
          font-weight: bold;
          text-align: center;
          margin-top: 28px;
          width: 300px;
        }

        p {
          font-size: 16px;
          margin: 16px auto 0 auto;
          width: 294px;
          text-align: center;
        }
      }
    }
  }
`;

const SectionList4 = styled.div`
  div {
    padding: 200px 24px 0 24px;
  }
  h2 {
    margin-top: 60px;
    font-size: 18px;
    font-weight: bold;
    color: #e26d59;
    text-align: left;
    padding: 0 78px;
    margin: 40px auto;
    width: 924px;
  }
  img {
    width: 924px;
    height: 500px;
  }
  ul {
    padding: 0 78px;
    width: 924px;
    margin: 0 auto;
    li {
      margin-bottom: 60px;
      span {
        font-size: 16px;
        font-weight: bold;
      }
      h3 {
        padding-top: 10px;
        font-size: 26px;
        strong {
          font-weight: bold;
        }
      }
      p {
        font-size: 16px;
        padding-top: 18px;
        width: 768px;
      }
      img {
        margin-top: 40px;
        width: 768px;
        height: 380px;
      }
    }
  }
`;

const MainBottom = styled.div`
  padding-top: 200px;
  width: 1024px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  P {
    text-align: center;
  }
`;

const Img4 = styled.img`
  margin: 40px auto 0 auto;
`;

const Img5 = styled.img`
  margin: 28px auto 0 auto;
`;

const Description = styled.p`
  font-size: 18px;
  color: #e26d59;
  font-weight: bold;
  text-align: center;
`;

const TopText = styled.p`
  font-weight: bold;
  font-size: 16px;
  margin-top: 40px;
`;

const MiddleText = styled.p`
  font-size: 26px;
  font-weight: bold;
  margin: 10px auto 0 auto;
  width: 300px;
`;

const BottomText = styled.p`
  font-size: 16px;
  margin-top: 10px;
`;

const Ingredient = styled.p`
  color: #e26d59;
  font-size: 16px;
  margin-top: 28px;
`;

const Ingredient2 = styled.p`
  font-size: 16px;
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
      img {
        width: 335px;
        height: 81px;
        margin-top: 22px;
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
  height: 125px;
  margin-top: 22px;
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
