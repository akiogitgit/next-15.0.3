import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        {[
          'cc1',
          'sc2-build',
          'request-memoization',
          'data-cache',
          'sc-build-default',
          'sc-build-force-cache',
          'sc-build-no-store',
          'sc-build-revalidate',
          'full-route-cookie',
          'full-route-force-dynamic',
          'full-route-header',
          'full-route-params',
          'full-route-revalidate-0',
          'data-cache-default-no-store',
          'data-cache-default-no-store-force-cache',
          'data-cache-force-dynamic',
          'revalidate-button',
          'revalidate-button-sa',
          'revalidate-path1',
          'revalidate-path2',
          'revalidate-tag1',
          'revalidate-tag2',
          'revalidate-tag1-other',
          'revalidate-tag2-other',
          'revalidate-tag1-2',
          'revalidate-tag12',
          'router-cache-button',
        ].map((v, index) => (
          <Link key={index} href={v} prefetch={false}>
            {v},{' '}
          </Link>
        ))}
        {children}
      </body>
    </html>
  )
}
