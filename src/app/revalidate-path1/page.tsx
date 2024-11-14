const Page = async () => {
  const res = await fetch(
    'https://timeapi.io/api/time/current/zone?timeZone=Europe/Amsterdam',
    {
      cache: 'force-cache',
    },
  )
  const data = await res.json()
  console.log('🚀 ~ revalidate-path1 ~')
  return (
    <div>
      <h1>revalidate-path1</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default Page
