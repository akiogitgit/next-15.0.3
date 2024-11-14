export const fetchCache = 'default-no-store'

const Page = async () => {
  const res = await fetch(
    'https://timeapi.io/api/time/current/zone?timeZone=Europe/Amsterdam',
    {
      cache: 'force-cache',
    },
  )
  const data = await res.json()
  console.log('🚀 ~ data-cache-default-no-store-force-cache ~')
  return (
    <div>
      <h1>data-cache-default-no-store-force-cache</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default Page
