import { createGlobalStyle } from 'styled-components'

/**
 * App-level component
 */
const GlobalStyle = createGlobalStyle`
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
	height: 100%;
	margin: 0;

	/* typography */
	font-family: ${({ theme }) => theme.fonts.primary};
	line-height: 20px;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

div#root {
	position: relative;
	height: 100%;
}

code {
	font-family: ${({ theme }) => theme.fonts.monospace};
}

select {
	appearance: none;
}
select::-ms-expand {
    display: none; /* Hide the default arrow in Internet Explorer 10 and Internet Explorer 11 */
}
`

export default GlobalStyle
