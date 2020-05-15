import React, { useState, useEffect, useCallback } from "react";
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";

function NavBar(props) {
  const [datas, setDatas] = useState([]);
  const [state, setState] = useState({ y: 0 });
  const [address] = useState([
    "survey",
    "product",
    "review",
    "cart",
    "signin",
    "story",
    "cs",
  ]);
  //console.log(state);

  const onScroll = useCallback(() => {
    setState({ y: window.scrollY });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/data/menu.json")
      .then((res) => res.json())
      .then((res) => {
        setDatas(res.menu);
      });

    window.addEventListener("scroll", onScroll);
  }, [onScroll]);

  const goToPage = (idx) => {
    props.history.push(`/${address[idx]}`);
  };
  return (
    <Nav style={{ backgroundColor: state.y > 0 ? "white" : "" }}>
      <Link to="/">
        <Img src="https://pilly.kr/images/logo-colored.png" alt="" />
      </Link>
      <MenuUl>
        {datas.map((data, index) => {
          return (
            <MenuLi onClick={() => goToPage(index)} key={index}>
              {data}
            </MenuLi>
          );
        })}
      </MenuUl>
    </Nav>
  );
}

export default withRouter(NavBar);

//style
const Nav = styled.div`
  box-sizing: border-box;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
  padding: 0 0 0 70px;
`;

const Img = styled.img`
  width: 59px;
  height: 35px;
`;

const MenuUl = styled.ul`
  display: flex;
  margin: 0 72px 0 0;
  cursor: pointer;
`;

const MenuLi = styled.li`
  font-size: 14px;
  font-weight: 700;
  line-height: 90px;
  list-style: none;
  margin: 0 0 0 40px;
`;
