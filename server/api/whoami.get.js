import jwt from '@tsndr/cloudflare-worker-jwt'

export default defineEventHandler(async (event) => {
  const jwtToken = getCookie(event, 'access_token')

  try {
    const isValid = await jwt.verify(jwtToken, 'JWT_SIGN_SECRET_PLEASE_REPLACE_WITH_YOUR_KEY')
      if (!isValid) {
        throw Error('無效或過期的 JWT Token')
      }

    const { payload } = jwt.decode(jwtToken)
    const { data: userInfo } = payload

    return {
      id: userInfo.id,
      nickname: userInfo.nickname,
      email: userInfo.email,
      avatar: userInfo.avatar
    }
  } catch (e) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized'
    })
  }
})
