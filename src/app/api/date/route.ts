export const GET = () => {
  console.log('🚀 ~ GET ~ /api/date')
  const now = new Date().toLocaleString()
  return Response.json({ data: now })
}
