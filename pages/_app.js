import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    // this is the key point to remember
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
