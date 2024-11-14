export const FetchComponent2 = async () => {
  const res = await fetch(
    'https://timeapi.io/api/time/current/zone?timeZone=Europe/Amsterdam',
  )
  const res2 = await fetch(
    'https://timeapi.io/api/time/current/zone?timeZone=Europe/Amsterdam',
  )
  const data = await res.json()
  const data2 = await res2.json()

  return (
    <div className='bg-blue-800'>
      <h1>FetchComponent2</h1>
      <pre>message: {data.data}</pre>
      <pre>message: {data2.data}</pre>
    </div>
  )
}
