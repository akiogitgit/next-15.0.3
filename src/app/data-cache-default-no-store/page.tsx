export const fetchCache = 'default-no-store'

const Page = async () => {
  const res = await fetch(
    'https://timeapi.io/api/time/current/zone?timeZone=Europe/Amsterdam',
  )
  const data = await res.json()
  console.log('🚀 ~ data-cache-default-no-store ~')
  return (
    <div>
      <h1>data-cache-default-no-store</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default Page
