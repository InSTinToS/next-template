import { GetServerSideProps, GetStaticProps } from 'next'
import Home from 'pageComponents/Home'
import api from 'services/api'

//? SSR HERE
// export const getServerSideProps: GetServerSideProps = async () => {
//   const res = await api.get('/user')

//   if (!res)
//     return {
//       notFound: true
//     }

//   return {
//     props: { message: res.data.message }
//   }
// }

// //? SSG HERE
// export const getStaticProps: GetStaticProps = async () => {
//   const res = await api.get('/user')

//   if (!res)
//     return {
//       notFound: true
//     }

//   return {
//     props: { message: res.data.message }
//   }
// }

export default Home
