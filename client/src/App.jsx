
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import SellerDashboard from './pages/SellerDashboard'
import BuyerDashboard from './pages/BuyerDashboard'
import Navbar from './components/Navbar'
function App() {
  

  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/profile/seller' element={<SellerDashboard/>}/>
          <Route path='/profile/buyer' element={<BuyerDashboard/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
