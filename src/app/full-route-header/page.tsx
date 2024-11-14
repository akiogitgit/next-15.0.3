import { headers } from 'next/headers'

const Page = async () => {
  const headerList = await headers()
  console.log('🚀 ~ full-route-header:')
  return (
    <div>
      <h1>full-route-header</h1>
      <pre>{JSON.stringify(headerList, null, 2)}</pre>
    </div>
  )
}

export default Page
