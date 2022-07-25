import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux'
import userSlice from './actions/Users';
import jenisSlice from '../actions/jenis';


function App({ Component, pageProps }) {

  const store = configureStore({
    reducer: {
      jenis: jenisSlice,
      users: userSlice
    },
  });
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default App
