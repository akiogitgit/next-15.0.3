import { FetchComponent1 } from './FetchComponent1'
import { FetchComponent2 } from './FetchComponent2'

const Page = async () => {
  return (
    <div>
      <h1>request-memoization</h1>
      <FetchComponent1 />
      <FetchComponent2 />
    </div>
  )
}

export default Page
