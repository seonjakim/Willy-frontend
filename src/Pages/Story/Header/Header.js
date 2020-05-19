import React from "react";
import styled from "styled-components";

const Header = ({ header, history }) => {
  const items = ["All", "Life", "People", "Nutrition", "Review"];
  return (
    <HeaderWrapper image={header.image_url}>
      {console.log(header)}
      <Contents>
        <Title>{header.title}</Title>
        <Description>
          {header.content
            .split("#")[0]
            .split(",")
            .map((content, index) => (
              <p>
                {content}
                {index !== header.content.split("#")[0].split(",").length - 1
                  ? ","
                  : ""}{" "}
              </p>
            ))}
          {"# " + header.content.split("#")[1]}
        </Description>
        <Navigation>
          {console.log(history)}
          {items.map((item) => (
            <Item onClick={() => history.push(`?category=${item}`)}>
              {item}
            </Item>
          ))}
        </Navigation>
      </Contents>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  height: 670px;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
`;

const Contents = styled.div`
  position: relative;
  padding: 267px 48px 0 48px;
  width: 1150px;
  margin: 0 auto;
  color: #000;
`;

const Title = styled.p`
  font-size: 41px;
  line-height: 46px;
  letter-spacing: -0.4px;
  font-weight: 700;
`;

const Description = styled.p`
  margin-top: 30px;
  font-size: 18px;
  line-height: 29px;
  letter-spacing: -0.1px;
`;

const Navigation = styled.nav`
  margin-top: 132px;
`;

const Item = styled.span`
  display: inline-block;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  padding-right: 47px;
  cursor: pointer;
`;
