import { AppProps } from 'next/app'
import 'antd/dist/antd.css'
import '../styles/tailwind.css'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// Static Generation and Server-side Rendering
// import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'

// export const getStaticProps: GetStaticProps = async context => {
//   // ...
// }

// export const getStaticPaths: GetStaticPaths = async () => {
//   // ...
// }

// export const getServerSideProps: GetServerSideProps = async context => {
//   // ...
// }