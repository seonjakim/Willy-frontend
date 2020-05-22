import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { connect } from "react-redux";
import { getResult } from "../../../Actions";
import { HO_URL } from "../../../Constants";

import Banner from "./Banner/Banner";
import UserInfo from "./UserInfo/UserInfo";
import Summary from "./Summary/Summary";
import Recommendations from "./Recommendations/Recommendations";
import ButtonCart from "./ButtonCart/ButtonCart";
import NavBar from "../../../Component/NavBar/NavBar";

function Result(props) {
  const [click, setClick] = useState(false);

  console.log(props);

  let { person_id, products, handleGetResult } = props;
  console.log("person_id,,", person_id);
  console.log("products", products);

  useEffect(() => {
    if (person_id === 0) person_id = localStorage.getItem("person_id");
    try {
      const fetchData = async () => {
        const response = await axios.post(`${HO_URL}/survey/result`, {
          person_id,
        });
        console.log("res..", response);
        console.log("pa", response.data.survey_result);
        handleGetResult(response.data.survey_result);
      };
      fetchData();
    } catch (e) {
      console.log(e);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <NavBar props={props} />
      <ResultWrapper>
        <Banner />
        <UserInfo setClick={setClick} />
        <Summary click={click} setClick={setClick} />
        <Recommendations />
        {/* <ButtonCart /> */}
        <ButtonCart products={products} history={props.history} />
      </ResultWrapper>
    </>
  );
}

const mapStateToProps = (state) => ({
  person_id: state.surveyForm.person_id,
  products: state.surveyResult.Recommendations.nutrients.map(
    (product) => product.product_id
  ),
});

const mapDispatchToProps = (dispatch) => ({
  handleGetResult: (result) => dispatch(getResult(result)),
});

// export default Result;
export default connect(mapStateToProps, mapDispatchToProps)(Result);

const ResultWrapper = styled.div`
  position: relative;
  min-height: 100%;
  padding-bottom: 60px;
  background-color: #fafafa;
`;
