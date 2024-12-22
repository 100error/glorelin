import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Outlet} from 'react-router'



function Layout() {

    
  return (
    <div className="h-screen w-screen bg-rose-300">
    <Header></Header>
    <main>
        <Outlet></Outlet>
    </main>
    <Footer></Footer>
    </div>
  )
}

export default Layout
