/**
 * Abstracts accessing values from process.env
 *
 * @param {string} key - The name of the environment variable.
 * @param {object} [env = process.env] - An optional environment object for testing purposes only.
 *
 * @returns {string}
 */
export default function getEnvironmentVariable(key, env = process.env) {
  return env?.[key] || ''
}
