const Page = async () => {
  const res = await fetch('http://localhost:3000/api/health')
  const data = await res.json()
  return (
    <div>
      <h1>sc1</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default Page
