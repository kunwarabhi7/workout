import ScrollToTop from 'react-scroll-to-top'
import NavBar from '../components/NavBar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <NavBar />
  <Component {...pageProps} />
  <ScrollToTop smooth />
    </>
  )
}

export default MyApp
