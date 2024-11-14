const Page = async () => {
  const res = await fetch(
    'https://timeapi.io/api/time/current/zone?timeZone=Europe/Amsterdam',
    {
      cache: 'force-cache',
      next: {
        tags: ['tag2'],
      },
    },
  )
  const data = await res.json()
  console.log('🚀 ~ revalidate-tag2 ~')
  return (
    <div>
      <h1>revalidate-tag2</h1>
      <pre>tag2: {data.dateTime}</pre>
    </div>
  )
}

export default Page
