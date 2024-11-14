'use server'
import { revalidatePath } from 'next/cache'

export async function revalidatePathSA(path: string) {
  revalidatePath(path)
  console.log('🚀 ~ SA revalidatePath :', path)
  return { revalidated: true, now: Date.now() }
}
