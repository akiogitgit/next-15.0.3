export const GET = () => {
  console.log('GET /api/health')
  console.log('🚀 ~ GET ~ /api/health')
  return Response.json({ data: 'healthy' })
}
