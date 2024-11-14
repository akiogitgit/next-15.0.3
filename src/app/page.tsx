import Link from 'next/link'

export default function Home() {
  return (
    <div className='flex flex-col justify-items-center min-h-screen p-8 pb-20'>
      {['sc1', 'cc1', 'sc2-build', 'request-memoization', 'data-cache'].map(
        (v, index) => (
          <Link key={index} href={v}>
            - {v}
          </Link>
        ),
      )}
    </div>
  )
}
