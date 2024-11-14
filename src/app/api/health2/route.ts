export const GET = () => {
  console.log('GET /api/health')
  console.log('🚀 ~ GET ~ /api/health2')
  return Response.json({ data: 'healthy' })
}
