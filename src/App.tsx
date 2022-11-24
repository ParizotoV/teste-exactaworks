import { ThemeProvider } from '@mui/material'
import { theme } from 'core/theme'
import Form from 'pages/Register/Form'
import List from 'pages/Register/List'
import React, { useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'

import Layout from './components/Layout'

function App() {
  const location = useLocation()
  const navigate = useNavigate()
  useEffect(() => {
    console.log()
    if (location.pathname === '/') navigate('/customers')
  }, [location.pathname, navigate])

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Routes>
          <Route path="/customers" element={<List />} />
          <Route path="/customers/add" element={<Form />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  )
}

export default App
