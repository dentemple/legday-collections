import { createGlobalStyle } from 'styled-components'
import * as fonts from 'assets/fonts'

/**
 * App-level component
 */
const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Source Serif Pro';
    src: url(${fonts.SourceSerifProRegular}) format('truetype');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'Source Serif Pro';
    src: url(${fonts.SourceSerifProItalic}) format('truetype');
    font-weight: normal;
    font-style: italic;
}
@font-face {
    font-family: 'Source Serif Pro';
    src: url(${fonts.SourceSerifProBold}) format('truetype');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Montserrat';
    src: url(${fonts.MontserratRegular}) format('truetype');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'Montserrat';
    src: url(${fonts.MontserratItalic}) format('truetype');
    font-weight: normal;
    font-style: italic;
}
@font-face {
    font-family: 'Montserrat';
    src: url(${fonts.MontserratBold}) format('truetype');
    font-weight: bold;
    font-style: normal;
}
@font-face {
    font-family: 'Montserrat';
    src: url(${fonts.MontserratExtraLight}) format('truetype');
    font-weight: 200;
    font-style: normal;
}

/* -------------------------------------------------- */ /* css reset */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, img, ins, kbd, q, s, samp,
small, strike, sub, sup, tt, var,
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
/* HTML5 display-role reset for older browsers */
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
/* -------------------------------------------------- */ /* end reset */
*, *:before, *:after {
	box-sizing: border-box;
}

html {
	/* color */
	background-color: ${({ theme }) => theme.colors.white};
	color: ${({ theme }) => theme.colors.black};

	/* layout */
	font-size: ${({ customBaseSize, theme }) => customBaseSize || theme.fonts.baseFontSize || '16px'};
	height: 100%;
}

body {
	/* flex */
	display: flex;
	flex-direction: column;

	/* layout */
	height: 100%;
	margin: 0;

	/* typography */
	font-family: ${({ theme }) => theme.fonts.primary};
	font-weight: ${({ theme }) => theme.fonts.primaryWeight};
	line-height: 20px;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

div#root {
	/* flex */
	display: flex;
	flex-direction: column;

/* position */
	position: relative;

	/* layout */
	height: 100%;
}

h1, h2, h3, h4, h5, h6 {
	font-family: ${({ theme }) => theme.fonts.secondary};
	font-size: 1.4rem;
	line-height: 1
}

h1 {
	font-weight: ${({ theme }) => theme.fonts.secondaryWeightLighter};
}

h2, h3, h4, h5, h6 {
	font-weight: ${({ theme }) => theme.fonts.secondaryWeight};
}

code {
	font-family: ${({ theme }) => theme.fonts.monospace};
	font-weight: ${({ theme }) => theme.fonts.monospaceWeight};
}

select {
	appearance: none;
}
select::-ms-expand {
    display: none; /* Hide the default arrow in Internet Explorer 10 and Internet Explorer 11 */
}
`

export default GlobalStyle
