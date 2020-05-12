import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import logo_pilly from "../../../../Images/logo_pilly.png";

function SurveyStart(props) {
    const { handleClickPlus } = props;
    return (
        <SurveyStartWrapper>
            <StartHeader>
                <IconPilly />
                <Title>
                    <p>필리!</p>
                    <p>내 건강을 알려줘!</p>
                </Title>
            </StartHeader>
            <StartIntro>
                <Description>
                    <p>
                        몇 가지 질문에 답하고
                        <br />
                        나에게 필요한 영양성분을 알아보세요.
                        <br />
                        <br />
                        <span>약 3분정도 소요됩니다.</span>
                    </p>
                </Description>
                <ButtonStart onClick={handleClickPlus}>시작하기</ButtonStart>
                <Warning>※ 질병의 진단 및 치료는 전문적인 의료기관을 이용하세요.</Warning>
            </StartIntro>
        </SurveyStartWrapper>
    );
}

export default SurveyStart;

const SurveyStartWrapper = styled.div`
    width: 100%;
`;

const StartHeader = styled.div`
    position: relative;
    margin: auto;
    width: 418px;
    height: 286px;
`;

const IconPilly = styled.span`
    display: inline-block;
    margin-top: 60px;
    width: 60px;
    height: 60px;
    background-image: url(${logo_pilly});
    background-size: 60px;
    background-repeat: no-repeat;
    background-position: 50% 50%;
`;

const Title = styled.div`
    margin-top: 32px;
    > * {
        font-size: 30px;
        line-height: 40px;
        font-weight: 700;

        &:first-child {
            font-weight: 300;
        }
    }
`

const StartIntro = styled.div`
    position: relative;
    margin: auto;
    width: 418px;
`;

const Description = styled.div`
    > p {
        line-height: 24px;
        font-size: 16px;
        color: #333;

        span {
            font-size: 13px;
            color: #848484;
        }
    }
`;

const ButtonStart = styled.button`
    display: inline-block;
    margin-top: 120px;
    padding: 0 36px;
    width: 418px;
    height: 50px;
    line-height: 50px;
    background-color: #333;
    border: none;
    border-radius: 25px;
    vertical-align: middle;
    text-align: center;
    font-weight: 700;
    color: #fff;
`;

const Warning = styled.p`
    margin-top: 28px;
    font-size: 13px;
    line-height: 24px;
    color: #848484;
`;