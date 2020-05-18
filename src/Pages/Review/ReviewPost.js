import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { HO_URL } from "../../Constants";
import NavBar from "../../Component/NavBar/NavBar";
import Footer from "../../Component/Footer/Footer";

function ReviewPost(props) {
  const [reviews, setReviews] = useState([]);
  const [side, setSide] = useState([]);

  useEffect(() => {
    fetch(`${HO_URL}/product/review/${props.match.params.id}`)
      .then((res) => res.json())
      .then((res) => {
        setReviews(res.reviews);
        setSide(res.side_products);
      });
  }, [props.match.params.id]);

  const goNextPage = (id) => {
    props.history.push(`/review/${id}`);
  };

  const goPrevPage = (id) => {
    if (id > 1) {
      return props.history.push(`/review/${id}`);
    } else {
      return props.history.push("/review/1");
    }
  };

  const goReviewPage = () => {
    props.history.push("/review");
  };

  return (
    <Body>
      <NavBar />
      <Header>
        <p>고객리뷰</p>
        <div>
          <span>필리를 이용해주신 고객님들의 리얼후기를 확인하세요!</span>
        </div>
      </Header>
      <Div>
        {reviews.length >= 1 ? (
          <div>
            <Content>
              <div>
                <Top>
                  <Title>
                    <em>
                      {reviews[0].name}
                      <span> {reviews[0].products}</span>
                    </em>
                    <span>
                      {reviews[0].created_at} /{" "}
                      <em>{reviews[0].subscription}</em>
                    </span>
                  </Title>
                </Top>
                <img src={reviews[0].image} alt="" />
                <p>{reviews[0].content}</p>
              </div>
            </Content>
            <Bottom>
              <Button onClick={() => goPrevPage(reviews[0].id - 1)}>
                이전 후기
              </Button>
              <Button2 onClick={() => goReviewPage()}>목록으로</Button2>
              <Button onClick={() => goNextPage(reviews[0].id + 1)}>
                다음 후기
              </Button>
            </Bottom>
          </div>
        ) : (
          <></>
        )}
        {side.length >= 1 ? (
          <Side>
            <Info>
              {reviews[0].name}님의 필리영양제{side.length - 1}종
            </Info>
            <div>
              {side.map((data, idx) => {
                return (
                  <SideContent key={idx}>
                    <SideTitle>
                      <div>
                        <P>필리가 연구한</P>
                        <Name>{data.name}</Name>
                      </div>
                      <img src={data.image} alt="" />
                    </SideTitle>
                    <SideBottom>
                      <Dot1 />
                      <p>{data.content[0].content}</p>
                      <Dot2 />
                      <p>{data.content[0].product_content}</p>
                      <Dot3 />
                      <p>{data.content[0].sub_content}</p>
                    </SideBottom>
                  </SideContent>
                );
              })}
            </div>
          </Side>
        ) : (
          <></>
        )}
      </Div>
      <Footer />
    </Body>
  );
}

export default ReviewPost;

//style

const Body = styled.div`
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
`;

const Div = styled.div`
  width: 1024px;
  margin: 0 auto;
  padding: 0 50px;
  display: flex;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  width: 920px;
  margin: 0 auto;
  p {
    margin-top: 20px;
    font-size: 24px;
  }

  div {
    display: flex;
    margin-top: 37px;
    font-size: 16px;
    color: #848484;
    span {
      font-weight: 400;
    }
  }
`;

const Content = styled.div`
  width: 552px;
  background-color: white;
  border-radius: 6px 6px 0 0;
  border: 1px solid #e6e6e6;
  box-shadow: 0px 2px 3px 0 rgba(0, 0, 0, 0.08);
  overflow: hidden;
  margin-top: 50px;
  img {
    width: 552px;
    margin-top: 14px;
  }
  p {
    padding: 20px 22px 30px;
    font-size: 12px;
  }
`;

const Top = styled.div``;

const Title = styled.div`
  padding: 24px 20px;
  em {
    font-weight: bold;
    span {
      font-weight: initial;
      display: inline;
      font-size: 14px;
      float: none;
    }
  }
  span {
    display: block;
    float: right;
    margin-top: 8px;
    font-size: 12px;
    em {
      font-weight: initial;
    }
  }
`;

const Button = styled.button`
  width: 110px;
  color: #848484;
  padding: 0 4px;
  border-radius: 25px;
  border: 1px solid #d7d7d7;
  background-color: #fff;
  font-weight: 700;
  line-height: 48px;
`;

const Button2 = styled.button`
  width: 275px;
  color: white;
  padding: 0 4px;
  border-radius: 25px;
  border: 1px solid #d7d7d7;
  background-color: #e26d59;
  font-weight: 700;
  line-height: 48px;
`;

const Bottom = styled.div`
  width: 552px;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

const Side = styled.div`
  margin-left: 28px;
`;

const SideContent = styled.div`
  width: 312px;
  height: 182px;
  background-color: white;
  padding: 30px 25px 0;
  border-radius: 8px;
  border: 1px solid #e6e6e6;
  box-shadow: 0px 2px 3px 0 rgba(0, 0, 0, 0.08);
  margin-bottom: 10px;
  img {
    width: 72px;
  }
`;

const SideTitle = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

const Name = styled.p`
  font-weight: 400;
  margin-top: 5px;
`;

const P = styled.p`
  font-weight: 200;
`;

const SideBottom = styled.div`
  position: relative;
  p {
    font-size: 12px;
    color: #999;
    padding-left: 8px;
    line-height: 18px;
  }
`;

const Dot1 = styled.div`
  content: "";
  position: absolute;
  left: 0;
  top: 8px;
  width: 2px;
  height: 2px;
  border-radius: 50%;
  background-color: #999;
`;

const Dot2 = styled.div`
  content: "";
  position: absolute;
  left: 0;
  top: 25px;
  width: 2px;
  height: 2px;
  border-radius: 50%;
  background-color: #999;
`;

const Dot3 = styled.div`
  content: "";
  position: absolute;
  left: 0;
  top: 44px;
  width: 2px;
  height: 2px;
  border-radius: 50%;
  background-color: #999;
`;

const Info = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 50px 0 19px;
`;
