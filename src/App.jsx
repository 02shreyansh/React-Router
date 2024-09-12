import { Outlet } from "react-router-dom"
import {Header,Footer} from './Components/Render/Render'
function App() {
  
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
