import { Outlet } from 'react-router-dom'
import Header from '../interface/components/header/Header'
import Footer from '../interface/components/footer/Footer'
const Layout = () => {
  return(
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout