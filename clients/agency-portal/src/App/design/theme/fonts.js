const primaryFont = {
  primary: `'Source Serif Pro', serif`,
  primaryWeight: 400
}

const secondaryFont = {
  secondary: `'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif`,
  secondaryWeight: 400,
  secondaryWeightLighter: 200
}

const monospaceFont = {
  monospace: `Menlo, Monaco, Consolas, 'Courier New', monospace`,
  monospaceWeight: '400'
}

const general = {
  baseFontSize: '16px'
}

export const fonts = {
  ...general,
  ...primaryFont,
  ...secondaryFont,
  ...monospaceFont
}

export default fonts
