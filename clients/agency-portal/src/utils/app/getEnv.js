/**
 * Returns the environment variable from the given key value; returns an empty string
 *    if not found.
 */
export default function getEnv({ key, env = process.env }) {
  return env?.[key] || ''
}
