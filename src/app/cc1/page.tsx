'use client'
import { useEffect, useState } from 'react'

const Page = () => {
  const [data, setData] = useState()
  useEffect(() => {
    ;(async () => {
      const res = await fetch('/api/health', {})
      const data = await res.json()
      setData(data)
    })()
  }, [])

  return (
    <div>
      <h1>cc1</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default Page
