
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import TopBar from './components/Header/TopBar'
import FooterButtom from './components/Footer/FooterButtom'

function App() {


  return (
    <>
      <TopBar/>
      <div className='min-h-[calc(100vh-120px)] '>
            <Outlet/>
      </div>
      <Footer/>
      <FooterButtom/>
    </>
  )
}

export default App
