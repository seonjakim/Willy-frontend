import React from "react";
import styled from "styled-components"

import arrow_right from "../../../../Images/arrow_right.png";

import SurveyForm from "./SurveyForm/SurveyForm";

function SurveyTest() {
    return (
        <SurveyTestWrapper>
            <TestHeader>
                <TestItems>
                    <TestItem>기본정보</TestItem>
                    <TestItem>증상/불편</TestItem>
                    <TestItem>생활 습관</TestItem>
                    <TestItem>기타</TestItem>
                </TestItems>
                <Progress>
                    <ProgressRate rate="5%" />
                </Progress>
                <SurveyForm />
            </TestHeader>
        </SurveyTestWrapper>
    );
}

export default SurveyTest;

const SurveyTestWrapper = styled.div`
    width: 100%;
`;

const TestHeader = styled.div`
    height: 91px;

`;

const TestItems = styled.ul`
    display: table;
    margin: 0 auto;
    width: 670px;
    table-layout: fixed;
`;

const TestItem = styled.li`
    position: relative;
    display: table-cell;
    height: 90px;
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    vertical-align: middle;
    color: #e26d59;

    &:not(:last-child):after {
        content: "";
        display: block;
        position: absolute;
        top: 34px;
        right: 0;
        margin-right: -13px;
        width: 19px;
        height: 23px;
        background-image: url(${arrow_right});
        background-repeat: no-repeat;
        background-size: 23px;
        background-position: 50% 50%;
    }
`;

const Progress = styled.div`
    height: 4px;
    background-color: #eee;
`;

const ProgressRate = styled.div`
    height: 4px;
    width: ${props => props.rate || "0"};
    background-color: #e26d59;
`;