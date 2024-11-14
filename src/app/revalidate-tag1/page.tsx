const Page = async () => {
  const res = await fetch(
    'https://timeapi.io/api/time/current/zone?timeZone=Europe/Amsterdam',
    {
      cache: 'force-cache',
      next: {
        tags: ['tag1'],
      },
    },
  )
  const data = await res.json()
  console.log('🚀 ~ revalidate-tag1 ~')
  return (
    <div>
      <h1>revalidate-tag1</h1>
      <pre>tag1: {data.dateTime}</pre>
    </div>
  )
}

export default Page
