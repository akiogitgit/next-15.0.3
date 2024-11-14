const Page = async () => {
  const res1 = await fetch(
    'https://timeapi.io/api/time/current/zone?timeZone=Europe/Amsterdam',
    {
      cache: 'force-cache',
      next: {
        tags: ['tag1', 'tag2'],
      },
    },
  )
  const data1 = await res1.json()
  console.log('🚀 ~ revalidate-tag12 ~')

  return (
    <div>
      <h1>revalidate-tag12</h1>
      <pre>tag1, tag2: {data1.dateTime}</pre>
    </div>
  )
}

export default Page
