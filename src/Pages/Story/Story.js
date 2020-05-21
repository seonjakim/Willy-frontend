import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { HO_URL } from "../../Constants";

import NavBar from "../../Component/NavBar/NavBar";
import Header from "./Header/Header";
import Content from "./Content/Content";

const Story = (props) => {
  const [header, setHeader] = useState({});
  const [content, setContent] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const { data: story_list } = await axios.get(
        `${HO_URL}/information/story`
      );
      console.log(story_list["story_list"]);
      setHeader(story_list["story_list"][0]["header_image"]);
      setContent(story_list["story_list"][1]["story"]);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <NavBar props={props} />
      <StoryWrapper>
        {isLoading ? (
          <h2>Fetching...</h2>
        ) : (
          <>
            <Header header={header} history={props.history} />
            <Content content={content} />
          </>
        )}
      </StoryWrapper>
    </>
  );
};

export default Story;

const StoryWrapper = styled.div``;
