export const FetchComponent1 = async () => {
  const res = await fetch(
    'https://timeapi.io/api/time/current/zone?timeZone=Europe/Amsterdam',
  )
  const data = await res.json()

  return (
    <div className='bg-red-800'>
      <h1>FetchComponent1</h1>
      <pre>message: {data.data}</pre>
    </div>
  )
}
