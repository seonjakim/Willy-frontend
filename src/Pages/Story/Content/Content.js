import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Content = (props) => {
  const contents = props.content;
  return (
    <ContentWrapper>
      {console.log(contents)}
      <Inner>
        <Lists>
          {contents.map((content) => (
            <List>
              <Link>
                <Image src={content.image_url} />
                <Type>{content.pilly_story__name}</Type>
                <Title>{content.title}</Title>
                <Description>
                  {content.content}
                  <More>더보기</More>
                </Description>
              </Link>
            </List>
          ))}
        </Lists>
      </Inner>
    </ContentWrapper>
  );
};

export default Content;

const ContentWrapper = styled.div`
  color: #000;
  background-color: #fafafa;
`;

const Inner = styled.div`
  width: 1150px;
  margin: 0 auto;
`;

const Lists = styled.ul`
  padding-top: 80px;
`;

const List = styled.li`
  display: inline-block;
  width: 560px;
  height: 620px;
  margin: 0 15px 60px 0;
  padding: 20px;
  vertical-align: top;
  overflow: hidden;
`;

const Image = styled.img`
  /* width: 520px; */
  height: 336px;
  max-width: 100%;
`;

const Type = styled.span`
  display: block;
  font-size: 16px;
  font-weight: 700;
  color: #e26d59;
  padding-top: 20px;
  letter-spacing: 2px;
`;

const Title = styled.p`
  padding-top: 20px;
  font-size: 24px;
  line-height: 34px;
  font-weight: 700;
`;

const Description = styled.p`
  padding-top: 22px;
  font-size: 17px;
  line-height: 26px;
  white-space: pre-line;
`;

const More = styled.span`
  display: block;
  padding-top: 26px;
  font-size: 14px;
  line-height: 20px;
  text-decoration: underline;
`;
