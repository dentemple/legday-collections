import { FormattedMessage } from 'react-intl'

/**
 * Page-level component
 */
export function Home() {
  return (
    <>
      <h1>
        <FormattedMessage id="app.title.full" />
      </h1>
    </>
  )
}

export default Home
