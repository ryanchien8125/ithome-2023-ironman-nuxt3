import jwt from '@tsndr/cloudflare-worker-jwt'

const urls = [
  {
    path: '/api/articles',
    method: 'POST'
  },
  {
    path: /^\/api\/articles\/(.*)($|\?.*|#.*)/,
    method: 'DELETE'
  },
  {
    path: /^\/api\/articles\/(.*)($|\?.*|#.*)/,
    method: 'PATCH'
  }
]

export default defineEventHandler(async (event) => {
  const requireVerify = urls.some((apiUrl) => {
    if (event.method === apiUrl.method) {
      if (apiUrl.path instanceof RegExp) {
        return apiUrl.path.test(event.path)
      }

      return event.path === apiUrl.path
    }

    return false
  })

  if (!requireVerify) {
    return
  }
  const jwtToken = getCookie(event, 'access_token')

  if (jwtToken) {
    try {
      const isValid = await jwt.verify(jwtToken, 'JWT_SIGN_SECRET_PLEASE_REPLACE_WITH_YOUR_KEY')
      if (!isValid) {
        throw Error('無效或過期的 JWT Token')
      }

      const { payload } = jwt.decode(jwtToken)
      const { data: user } = payload

      event.context.auth = {
        user
      }
    } catch (error) {
      console.error(error)
    }
  }
})
