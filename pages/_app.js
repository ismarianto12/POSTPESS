import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/SlideDrawer.css'
import '../styles/Backdrop.css'
// stylesheet

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux'
import userSlice from './actions/Users';
import jenisSlice from '../actions/jenis';
import barangSlice from '../actions/barang';

 



function App({ Component, pageProps }) {

  const store = configureStore({
    reducer: {
      jenis: jenisSlice,
      users: userSlice,
      barang: barangSlice
    },
  });
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default App
