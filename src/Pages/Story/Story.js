import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import Header from "./Header/Header";
import Content from "./Content/Content";

const Story = () => {
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "http://10.58.6.120:8000/information/story"
      );
      console.log(response);
    };
    fetchData();
  });

  return (
    <StoryWrapper>
      <Header />
      <Content />
    </StoryWrapper>
  );
};

export default Story;

const StoryWrapper = styled.div``;
