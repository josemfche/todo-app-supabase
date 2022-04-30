import '../styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Auth0Provider } from "@auth0/auth0-react"
import NavBar from '../components/layout/navbar'
import { store } from '../redux/store'
import { Provider } from 'react-redux'


function MyApp({ Component, pageProps }) {
  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH_DOMAIN}
      clientId={process.env.NEXT_PUBLIC_CLIENT_ID}
      redirectUri={process.env.NEXT_PUBLIC_REDIRECTURI}
    ><Provider store={store}>
        <NavBar />
        <div className='container'>
          <Component {...pageProps} />
        </div>
      </Provider>
    </Auth0Provider>)
}

export default MyApp