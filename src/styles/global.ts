import { createGlobalStyle } from "styled-components"
import background from "../assets/layers.svg"

export const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}

body {
	line-height: 1;
}

ol, ul {
	list-style: none;
}

blockquote, q {
	quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
}

:root {
    --gray0: #101010;
    --gray1: #323232;
    --gray2: #545454;
    --gray3: #767676;
    --gray4: #989898;
    --gray5: #BBBBBB;
    --gray6: #CCCCCC;
    --gray7: #DDDDDD;
    --gray8: #EEEEEE;

    --brand0: #8800c7;
    
    --purple0: #bf8bff;
    --purple1: #cca3ff;
    --purple2: #dabcff;
    --purple3: #e5d0ff;
    --purple4: #65006246;

    --font-default: 'M PLUS 1p', sans-serif;
}

body {
    background-image: url(${() => background});
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    font-family: var(--font-default);
}

`