const Page = async () => {
  const res = await fetch(
    'https://timeapi.io/api/time/current/zone?timeZone=Europe/Amsterdam',
  )
  const data = await res.json()
  console.log('🚀 ~ sc-build-default ~')
  return (
    <div>
      <h1>sc-build-default</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default Page
