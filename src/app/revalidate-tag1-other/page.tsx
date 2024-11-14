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
  const other = await fetch(
    'https://timeapi.io/api/time/current/zone?timeZone=Europe/Berlin',
    {
      cache: 'force-cache',
    },
  )
  const otherData = await other.json()
  console.log('🚀 ~ revalidate-tag1-other ~')

  return (
    <div>
      <h1>revalidate-tag1-other</h1>
      <pre>tag1: {data.dateTime}</pre>
      <pre>other: {otherData.dateTime}</pre>
    </div>
  )
}

export default Page
