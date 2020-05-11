import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

//글로벌 스타일
export const GlobalStyle = createGlobalStyle`
${reset};
* {
	box-sizing: border-box;
	font-style: "Noto Sans KR", sans-serif;
	text-decoration: none;
}

html, body, root {
	height: 100%;
}

body {
	line-height: 1.2;
	font-size: 14px;
}

[onClick] {
	cursor: pointer;
}

a {
	color: inherit;
	text-decoration: none;
	background-color: transparent;
	cursor: pointer;
}

input {
	box-shadow: none;
	border: 1px solid #d7d7d7;
	border-radius: 4px;
	outline: none;
}

button {
	border: 0;
	outline: 0;
	background-color: inherit;
	cursor: pointer;
}
`;