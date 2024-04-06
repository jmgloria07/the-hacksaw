
import './App.css'
import HeaderComponent from './components/HeaderComponent'
import ComputeComponent from './components/ComputeComponent'
import HomeComponent from './components/HomeComponent'
import AboutComponent from './components/AboutComponent'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import FooterComponent from './components/FooterComponent'

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent/>
        <Routes>
          <Route path='/' element={<HomeComponent/>}></Route>
          <Route path='/home' element={<HomeComponent/>}></Route>
          <Route path='/compute' element={<ComputeComponent/>}></Route>
          <Route path='/about' element={<AboutComponent/>}/>
        </Routes>
        <FooterComponent/>
      </BrowserRouter>
    </>
  )
}

export default App
