import { StrictMode } from 'react'
import ReactDOM from 'react-dom'

/* polyfills */
import 'whatwg-fetch'

/* components */
import { Providers } from './Providers'

/* utils */
import { reportWebVitals } from 'utils/app'

const render = () => {
  const App = require('./App').default

  ReactDOM.render(
    <Providers>
      <StrictMode>
        <App />
      </StrictMode>
    </Providers>,
    document.getElementById('root')
  )
}

render()

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./App', render)
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
