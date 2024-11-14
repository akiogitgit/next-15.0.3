'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Page = () => {
  const router = useRouter()
  console.log('🚀 ~ router-cache-button:')
  return (
    <div>
      <h1>router-cache-button</h1>
      <button
        className='bg-red-500'
        onClick={() => {
          router.refresh()
          alert('router.refresh()しました')
        }}
      >
        router.refresh()
      </button>

      <div className='flex flex-col items-start gap-4'>
        <Link href='/full-route-cookie' prefetch={false}>
          → 動的: full-route-cookie
        </Link>
        <Link href='/revalidate-path1' prefetch={false}>
          → 静的: revalidate-path1
        </Link>
      </div>
    </div>
  )
}

export default Page
