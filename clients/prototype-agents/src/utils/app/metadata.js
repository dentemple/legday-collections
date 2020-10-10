const metadata = {
  appName: 'Vestery',
  appKey: 'vestery-dialer',
  baseUrl: generateBaseUrlFromEnvVariables(process.env),
  useTestIntl: process.env.REACT_APP_LANGUAGE_TEST || undefined
}

function generateBaseUrlFromEnvVariables(processEnv = {}) {
  switch (processEnv.REACT_APP_ARMSTRONG_ENVIRONMENT) {
    default:
      return processEnv.REACT_APP_ARMSTRONG_HOST_MOCK_API || ''
  }
}

export default metadata
