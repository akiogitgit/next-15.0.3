import { cookies } from 'next/headers'

const getServerRequestHeader = async () => {
  const requestHeaders: Record<string, string> = {}

  const cookie = (await cookies())
    .getAll()
    .map(cookie => `${cookie.name}=${cookie.value}`)
    .join('; ')
  requestHeaders.cookie = cookie

  return requestHeaders
}

const Page = async () => {
  const cookies = await getServerRequestHeader()
  console.log('🚀 ~ full-route-cookie:')
  return (
    <div>
      <h1>full-route-cookie</h1>
      <pre>{JSON.stringify(cookies, null, 2)}</pre>
    </div>
  )
}

export default Page
