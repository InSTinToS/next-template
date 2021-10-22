import { GetStaticPaths, GetStaticProps } from 'next'

import axios from 'axios'
import Home from 'frontend/pagesComponents/Home'

export const getStaticPaths: GetStaticPaths = async () => ({
  fallback: 'blocking',
  paths: [{ params: { id: ['1'] } }, { params: { id: ['2'] } }]
})

export const getStaticProps: GetStaticProps = async ({ params }) => {
  sleep(5000)
  const response = await axios.get(`http://localhost:3333/users/${params.id}`)

  console.log('getPropsResponse', response.data)

  return { revalidate: 10, props: { user: response.data } }
}

export default Home

function sleep(milliseconds) {
  const date = Date.now()
  let currentDate = null
  do {
    currentDate = Date.now()
  } while (currentDate - date < milliseconds)
}
