import React from "react";
import styled from "styled-components";

export const CircleCanvas = () => {
  return <Canvas width="100" height="100" className="canvas" />;
};

export const animateCircle = () => {
  const ctx = document.querySelector(".canvas").getContext("2d");
  ctx.lineWidth = 2;
  const end = Math.PI * 1.5;
  for (let i = 0; i < 100; i++) {
    setTimeout(() => {
      ctx.clearRect(0, 0, 200, 200);
      ctx.beginPath();
      ctx.arc(50, 50, 47, Math.PI * 1.5, (end / 100) * i + 0.045);
      ctx.stroke();
    }, i * 10);
  }
};

const Canvas = styled.canvas`
  width: 100px;
  height: 100px;
`;
