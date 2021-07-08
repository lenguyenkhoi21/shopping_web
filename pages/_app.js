import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import {AppState} from '../AppState/AppState'

function MyApp({ Component, pageProps }) {

    return (
        <AppState>
            <Component {...pageProps} />
        </AppState>
    )
}

export default MyApp
