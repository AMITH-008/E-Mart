import React from 'react'
import Header from './components/Header'
import { Container } from 'react-bootstrap'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <h1 className='py-2'>E-Mart, one stop for all electronics.</h1>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
      
    </>
  )
}

export default App