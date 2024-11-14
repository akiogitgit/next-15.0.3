const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ id: string }>
}) => {
  const id = (await searchParams).id
  console.log('🚀 ~ full-route-params:')

  return (
    <div>
      <h1>full-route-params</h1>
      <pre>{JSON.stringify(id, null, 2)}</pre>
    </div>
  )
}

export default Page
