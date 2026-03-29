import React from 'react'
import HomePage from './pages/HomePage'
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div>
      <ToastContainer />
      <HomePage />
    </div>
  )
}

export default App