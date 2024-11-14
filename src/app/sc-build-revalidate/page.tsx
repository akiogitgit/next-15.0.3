const Page = async () => {
  const res = await fetch(
    'https://timeapi.io/api/time/current/zone?timeZone=Europe/Amsterdam',
    {
      cache: 'force-cache',
      next: {
        revalidate: 3,
      },
    },
  )
  const data = await res.json()
  console.log('🚀 ~ sc-build-revalidate:')
  return (
    <div>
      <h1>sc-build-revalidate</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default Page
