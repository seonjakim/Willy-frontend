import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { addNavCart } from "../../Actions/index";

function ProductLists8(props) {
  const goToCart = (id) => {
    props.addNavCart(id);
  };

  return (
    <>
      <Header
        style={{
          backgroundImage: `url(${props.datas[5].product_list[0].header_image_url})`,
          backgroundSize: "cover",
          backgroundPosition: "50% 50%",
        }}
      >
        <ContentWrapper>
          <ContentTop>
            <SubTitle>{props.datas[5].product_list[0].sub_name}</SubTitle>
            <Title>{props.datas[5].product_list[0].name}</Title>
          </ContentTop>
          {props.id === 8 ? (
            ""
          ) : (
            <>
              <Img src={props.datas[1].product_category[0].image_url} alt="" />
              <Category>{props.datas[1].product_category[0].name}</Category>
            </>
          )}
          <Detail>{props.datas[5].product_list[0].header_description}</Detail>
          <DayPrice>
            <Span>{props.datas[5].product_list[0].day}</Span>
            <Middle>|</Middle>
            <Span>{props.datas[5].product_list[0].price.toLocaleString()}</Span>
          </DayPrice>
          {props.id === 8 ? (
            ""
          ) : (
            <ImgWarapper>
              <Img3 />
              <Img2 />
            </ImgWarapper>
          )}
          <BascketWrapper>
            <DetailButBody
              onClick={() => goToCart(props.datas[5].product_list[0].id)}
            >
              <button>
                <span>장바구니 담기</span>
              </button>
            </DetailButBody>
          </BascketWrapper>
        </ContentWrapper>
      </Header>
      <Main>
        {props.id === 8 ? (
          ""
        ) : (
          <>
            <TalkImg />
            <Review>522 개의 후기 보러가기</Review>
          </>
        )}
        <MainBody>
          <SectionList1
            dangerouslySetInnerHTML={{
              __html: props.datas[2].section_list[0].bottle,
            }}
          />
          <SectionList2
            dangerouslySetInnerHTML={{
              __html: props.datas[2].section_list[0].title,
            }}
          />
          <SectionList3
            dangerouslySetInnerHTML={{
              __html: props.datas[2].section_list[0].effects,
            }}
          />
          <SectionList4
            dangerouslySetInnerHTML={{
              __html: props.datas[2].section_list[0].point,
            }}
          />
          <SectionLists5
            dangerouslySetInnerHTML={{
              __html: props.datas[2].section_list[0].video_url,
            }}
          />
        </MainBody>
        <MainBottom>
          <Description>제품 설명</Description>
          <Img4
            src={props.datas[5].product_list[0].pill_image_url}
            alt=""
            style={{ width: "240px" }}
          />
          <TopText>이렇게 드세요</TopText>
          <MiddleText>
            {props.datas[5].product_list[0].pill_description}
          </MiddleText>
          <BottomText>
            {props.datas[5].product_list[0].pill_sub_description}
          </BottomText>
          <Img5
            src={props.datas[5].product_list[0].pill_sub_image_url}
            alt=""
            style={{ width: "183px", height: "33px" }}
          />
          <Ingredient>
            {props.datas[5].product_list[0].ingredient.slice(
              0,
              props.datas[5].product_list[0].ingredient.length - 22
            )}
          </Ingredient>
          <Ingredient2>
            {props.datas[5].product_list[0].ingredient.slice(
              props.datas[5].product_list[0].ingredient.length - 22,
              props.datas[5].product_list[0].ingredient.length
            )}
          </Ingredient2>
        </MainBottom>
      </Main>
    </>
  );
}

const mapDispatchProps = (dispatch) => ({
  addNavCart: (id) => dispatch(addNavCart(id)),
});

export default connect(null, mapDispatchProps)(ProductLists8);

//style

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
  padding-bottom: 60px;
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

const SectionLists5 = styled.div`
  iframe {
    margin-top: 150px;
    height: 540px;
  }
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
