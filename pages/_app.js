import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux'
import { jenisReducer } from '../actions/jenis'


function MyApp({ Component, pageProps }) {

  const store = configureStore({
    reducer: {
      users: jenisReducer,
    },
  });
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
