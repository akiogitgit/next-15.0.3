const Page = async () => {
  const res1 = await fetch(
    'https://timeapi.io/api/time/current/zone?timeZone=Europe/Amsterdam',
    {
      cache: 'force-cache',
      next: {
        tags: ['tag1'],
      },
    },
  )
  const data1 = await res1.json()
  const res2 = await fetch(
    'https://timeapi.io/api/time/current/zone?timeZone=Europe/Berlin',
    {
      cache: 'force-cache',
      next: {
        tags: ['tag2'],
      },
    },
  )
  const tag2 = await res2.json()
  console.log('🚀 ~ revalidate-tag1-2 ~')

  return (
    <div>
      <h1>revalidate-tag1-2</h1>
      <pre>tag1: {data1.dateTime}</pre>
      <pre>tag2: {tag2.dateTime}</pre>
    </div>
  )
}

export default Page
