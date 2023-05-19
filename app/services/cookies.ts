import { createCookie } from '@remix-run/node'

export let colorModeCookie = createCookie('color-mode')

export const getColorModeToken = async (req: Request) =>
  await colorModeCookie.parse(req.headers.get('Cookie'))

export const getColorMode = async (req: Request) => {
  const userSelectedMode = await getColorModeToken(req)
  const systemMode = req.headers.get('Sec-CH-Prefers-Color-Scheme')
  return userSelectedMode || systemMode || 'light'
}
