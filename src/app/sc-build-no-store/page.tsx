const Page = async () => {
  const res = await fetch(
    'https://timeapi.io/api/time/current/zone?timeZone=Europe/Amsterdam',
    {
      cache: 'no-store', // 向き先がRoute Handlersでもエラーにならない 動的なページになる
    },
  )
  const data = await res.json()
  console.log('🚀 ~ sc-build-no-store ~')
  return (
    <div>
      <h1>sc-build-no-store</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default Page
