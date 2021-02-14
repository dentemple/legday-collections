/* components */
import AppContainer from 'App/design/AppContainer'
import GlobalStyle from 'App/design/GlobalStyle'
import Routes from 'App/Routes'

/**
 * App-level component
 */
function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Routes />
      </AppContainer>
    </>
  )
}

export default App
