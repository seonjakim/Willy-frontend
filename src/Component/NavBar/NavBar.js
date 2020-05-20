import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

function NavBar(props) {
  const [datas, setDatas] = useState([]);
  const [stateY, setStateY] = useState({ y: 0 });
  const [address] = useState([
    "survey",
    "product",
    "review",
    "cart",
    "signin",
    "story",
    "cs",
  ]);

  const onScroll = useCallback(() => {
    setStateY({ y: window.scrollY });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/data/menu.json")
      .then((res) => res.json())
      .then((res) => {
        setDatas(res.menu);
      });

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  const goToPage = (idx) => {
    props.props.history.push(`/${address[idx]}`);

    if (props.props.match.url === `/${address[idx]}`) {
    }
  };

  return (
    <Nav style={{ backgroundColor: stateY.y > 0 ? "white" : "" }}>
      {props.props.match.url === "/product" && window.scrollY === 0 ? (
        <Link to="/">
          <Img src="https://pilly.kr/images/logo-white.png" alt="" />
        </Link>
      ) : (
        <Link to="/">
          <Img src="https://pilly.kr/images/logo-colored.png" alt="" />
        </Link>
      )}
      <MenuUl>
        {props.props.match.url === "/product" && window.scrollY === 0
          ? datas.map((data, index) => {
              return (
                <li
                  style={{
                    color: "white",
                    borderBottom: `${
                      props.props.match.url === `/${address[index]}`
                        ? "1px solid white"
                        : ""
                    }`,
                  }}
                  onClick={() => goToPage(index)}
                  key={index}
                >
                  {data}
                  {index === 3 && props.CartNum.length > 0
                    ? props.CartNum.length
                    : ""}
                </li>
              );
            })
          : datas.map((data, index) => {
              return (
                <li
                  style={
                    props.props.match.url ===
                    `/${address[index] || props.props.match.url === "/result"}`
                      ? { borderBottom: "1px solid black" }
                      : {}
                  }
                  onClick={() => goToPage(index)}
                  key={index}
                >
                  {data}
                  {index === 3 && props.CartNum.length > 0
                    ? props.CartNum.length
                    : ""}
                </li>
              );
            })}
      </MenuUl>
    </Nav>
  );
}

const mapStateProps = (state) => {
  return {
    CartNum: state.CartNum,
  };
};

export default connect(mapStateProps)(NavBar);

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
  li {
    font-size: 14px;
    font-weight: 700;
    margin: 0 0 0 40px;
    color: black;
    padding-bottom: 4px;
    cursor: pointer;
  }
`;
