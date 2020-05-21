import React from "react";
import styled, { css } from "styled-components";
import { connect } from "react-redux";

const UserInfo = ({ userInfo, setClick }) => {
  console.log("userInfo..", userInfo);
  return (
    <UserInfoWrapper>
      <UserInfoBox>
        <Lists>
          <List>
            나이<Value>{userInfo.age}세</Value>
          </List>
          <List>
            성별<Value>{userInfo.sex}</Value>
          </List>
          <List onClick={() => setClick((click) => !click)}>
            BMI
            <Info />
            <Value>{(userInfo.bmi + "").substring(0, 4)}</Value>
          </List>
        </Lists>
      </UserInfoBox>
    </UserInfoWrapper>
  );
};

const mapStateToProps = (state) => ({
  userInfo: state.surveyResult.UserInfo,
});

export default connect(mapStateToProps, "")(UserInfo);

const MAX_WIDTH = "1008px";

//inner CSS
const inner = css`
  margin: 0 auto;
  max-width: ${MAX_WIDTH};
`;

// UserInfo
const UserInfoWrapper = styled.section`
  ${inner}
  margin: -75px auto 0;
  width: 90%;
`;

const UserInfoBox = styled.div`
  /*  */
  margin-top: 40px;
  padding: 0 19px;
  background-color: #fff;
  box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.06);
  border-radius: 6px;
`;

const Lists = styled.ul`
  display: table;
  padding: 20px 0;
  height: 30px;
  width: 100%;
`;

const Value = styled.span`
  display: inline-block;
  margin-left: 7px;
  font-size: 16px;
  font-weight: 400;
`;

const List = styled.li`
  display: table-cell;
  position: relative;
  padding: 8px 0;
  vertical-align: middle;
  font-size: 14px;
  font-weight: 700;
  color: #333;
  width: 30%;
  text-align: center;

  &:last-child {
    width: 40%;
    cursor: pointer;

    ${Value} {
      margin-left: 30px;
    }
  }
`;

const Info = styled.span`
  display: inline-block;
  position: absolute;
  top: 7px;
  margin-left: 3px;
  width: 22px;
  height: 22px;
  background-image: url("https://pilly.kr/images/icons/survey/result/icon-bmiinfo@2x.png");
  background-size: 22px 22px;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;
