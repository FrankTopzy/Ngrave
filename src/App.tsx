import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Shop from './Pages/Shop/Shop'
import Sidebar from './Components/Sidebar/Sidebar'
import { useContext, useEffect } from 'react'
import { ProductsContext } from './Components/context'

function App() {
  const { setSidebar } = useContext(ProductsContext) ?? {};

  useEffect(() => {
    setSidebar && setSidebar(false);
  }, [])

  return (
    <>
    <Sidebar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
      </Routes>
    </>
  )
}

export default App
