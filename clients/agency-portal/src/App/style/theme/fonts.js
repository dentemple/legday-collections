const primaryFont = {
  primary: 'serif'
}

const secondaryFont = {
  secondary: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif`
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
