import { GetStaticPaths, GetStaticProps } from 'next'
import api from 'services/api'

import Home from '../../pageComponents/Home'

//? ISR
export const getStaticPaths: GetStaticPaths = async () => ({
  fallback: 'blocking',
  paths: [{ params: { id: ['1'] } }, { params: { id: ['2'] } }]
})

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await api.get(`users/${params.id}`)

  return {
    revalidate: 60,
    props: { message: res.data.message, id: res.data.id }
  }
}

export default Home
