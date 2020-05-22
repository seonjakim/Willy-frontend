import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { HO_URL } from "../../Constants"; // 석호님 IP
import NavBar from "../../Component/NavBar/NavBar";
import ProductLists2 from "./ProductLists2";
import ProductLists3 from "./ProductLists3";
import ProductLists4 from "./ProductLists4";
import ProductLists5 from "./ProductLists5";
import ProductLists6 from "./ProductLists6";
import ProductLists7 from "./ProductLists7";
import ProductLists8 from "./ProductLists8";
import ProductLists9 from "./ProductLists9";
import Footer from "../../Component/Footer/Footer";

function ProductLists(props) {
  const [datas, setData] = useState([]);
  const [explanation, setExplanation] = useState([]);
  const [material, setMaterial] = useState([]);

  useEffect(() => {
    fetch(`${HO_URL}/product/${props.match.params.id}`) // 석호님 IP 이용
      .then((res) => res.json())
      .then((res) => {
        setData(res.product_detail);
        setExplanation(res.product_detail[0].explanation_list);
        setMaterial(res.product_detail[4].material_list);
      });
  }, [props.match.params.id]);

  return (
    <Body>
      <NavBar props={props} />
      {props.match.params.id === "8" || props.match.params.id === "10" ? (
        material.length >= 1 ? (
          <>
            <ProductLists8 datas={datas} id={8} />
            <ProductLists9 datas={datas} />
            <ProductLists5 datas={explanation} />
          </>
        ) : (
          <></>
        )
      ) : material.length >= 1 ? (
        <>
          <ProductLists8 datas={datas} />
          <ProductLists9 datas={datas} />
          <ProductLists7 datas={material} />
          <ProductLists2 datas={datas} />
          <ProductLists3 />
          <ProductLists4 datas={explanation} />
          <ProductLists5 datas={explanation} />
          <ProductLists6 props={props} />
        </>
      ) : (
        <></>
      )}
      <Footer props={props} />
    </Body>
  );
}

export default ProductLists;

//style
const Body = styled.div`
  background-color: #fafafa;
`;
