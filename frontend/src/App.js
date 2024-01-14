import { Container } from 'react-bootstrap'
import {Outlet} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
const App = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <h1 className='py-2'>E-Mart, one stop for all electronics.</h1>
          <Outlet />
        </Container>
      </main>
      <Footer />
      
    </>
  )
}

export default App