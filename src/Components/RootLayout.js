import React from 'react'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store/store'

export default function RootLayout() {
  return (
    <div>
      {/* <h1>ROOTlAYOUT</h1> */}
      <Provider store={store}>
        <main>
          <Outlet />
        </main>
      </Provider>
    </div>
  )
}
