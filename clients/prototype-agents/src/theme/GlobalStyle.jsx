import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
/* -----------------------------------------*/
/* 
  Modified from 
    http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

*, *::before, *::after {
  margin: 0;
	padding: 0;
  box-sizing: border-box;
}

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
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}

body {
	min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
	line-height: 1;
}

ol, ul {
	list-style: none;
}

img {
  max-width: 100%;
  display: block;
}

input,
button,
textarea,
select {
  font: inherit;
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

/* Remove all animations and transitions for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* -----------------------------------------*/
html {
  height: 100%;
}

body {
  background-color: ${({ isAuthRoute, theme }) => (isAuthRoute ? theme.colors.white : theme.colors.primary)};
  color: ${({ isAuthRoute, theme }) => (isAuthRoute ? theme.colors.primary : theme.colors.white)};
  font-size: ${({ baseFontSize }) => baseFontSize || '16px'};
  font-family: ${({ theme }) => theme.fonts.primary};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}

div#root {
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;
  width: 100%;

  & > * {
    width: 100%;
  }
}

code {
  font-family: ${({ theme }) => theme.fonts.monospace};
}
`

export default GlobalStyle
