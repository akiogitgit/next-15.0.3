'use server'
import { revalidateTag } from 'next/cache'

export async function revalidateTagSA(tag: string) {
  revalidateTag(tag)
  console.log('🚀 ~ SA revalidateTag :', tag)
  return { revalidated: true, now: Date.now() }
}
