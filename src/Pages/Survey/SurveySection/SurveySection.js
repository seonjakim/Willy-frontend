// import React, { useState } from "react";
// import styled from "styled-components";

// import SurveyStart from "./SurveyStart/SurveyStart";
// import SurveyTest from "./SurveyTest/SurveyTest";

// function SurveySction({
//   survey,
//   count,
//   handleClickPlus,
//   handleClickMinus,
//   history,
// }) {
//   console.log("his", history);
//   const goBack = () => history.goBack();

//   return (
//     <>
//       {count === -1 ? (
//         <>
//           <CloseButton onClick={goBack}>X</CloseButton>
//           <SurveyStart handleClickPlus={handleClickPlus} />
//         </>
//       ) : (
//         <SurveyTest
//           survey={survey}
//           count={count}
//           handleClickPlus={handleClickPlus}
//           handleClickMinus={handleClickMinus}
//         />
//       )}
//     </>
//   );
// }

// export default SurveySction;

// const CloseButton = styled.button`
//   position: absolute;
//   right: -25px;
//   top: -25px;
//   width: 50px;
//   height: 50px;
//   line-height: 50px;
//   text-align: center;
//   border-radius: 50%;
//   background-color: #fff;
//   box-shadow: 1px 2px 3px 0 rgba(0, 0, 0, 0.08);
//   z-index: 5;
// `;
