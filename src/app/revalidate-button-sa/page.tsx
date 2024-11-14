'use client'
import Link from 'next/link'
import { revalidatePathSA } from '../_server-actions/revalidatePath'
import { revalidateTagSA } from '../_server-actions/revalidateTag'
import { getDate } from '../_server-actions/date'

const Page = () => {
  console.log('🚀 ~ revalidate-button')

  const revalidatePath = async (path: string) => {
    const data = await revalidatePathSA(`/${path}`)
    if (data.revalidated) {
      alert(`${path}をrevalidateしました`)
    }
  }

  const revalidateTag = async (tag: string) => {
    const data = await revalidateTagSA(tag)
    const date = await getDate()
    console.log('🚀 ~ revalidateTag ~ date:', date)
    if (data.revalidated) {
      alert(`${tag}をrevalidateしました`)
    }
  }

  return (
    <div>
      <h1>revalidate-button-sa</h1>

      <p>revalidateボタン</p>
      <div className='flex flex-col items-start gap-4'>
        <div>
          <button
            className='bg-red-500'
            onClick={() => revalidatePath('revalidate-path1')}
          >
            path1
          </button>
          <Link href='/revalidate-path1' prefetch={false}>
            → revalidate-path1
          </Link>
        </div>
        <div>
          <button
            className='bg-red-500'
            onClick={() => revalidatePath('revalidate-path2')}
          >
            path2
          </button>
          <Link href='/revalidate-path2' prefetch={false}>
            → revalidate-path2
          </Link>
        </div>

        <div>
          <button className='bg-red-500' onClick={() => revalidateTag('tag1')}>
            tag1
          </button>
          <Link href='/revalidate-tag1' prefetch={false}>
            → revalidate-tag1
          </Link>
        </div>

        <div>
          <button className='bg-red-500' onClick={() => revalidateTag('tag2')}>
            tag2
          </button>
          <Link href='/revalidate-tag2' prefetch={false}>
            → revalidate-tag2
          </Link>
        </div>

        <Link href='/revalidate-tag1-other' prefetch={false}>
          → revalidate-tag1-other
        </Link>
        <Link href='/revalidate-tag2-other' prefetch={false}>
          → revalidate-tag2-other
        </Link>

        <Link href='/revalidate-tag1-2' prefetch={false}>
          → revalidate-tag1-2
        </Link>

        <div>
          <button
            className='bg-red-500'
            onClick={async () => {
              await revalidateTag('tag1')
              await revalidateTag('tag2')
            }}
          >
            revalidate-tag-12
          </button>
          <Link href='/revalidate-tag12' prefetch={false}>
            → revalidate-tag12
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Page
