import { Outlet } from "react-router-dom"
import Modal from "../components/Modal/Modal"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"

function AppLayout() {

  const {pathname} = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div>
        <Outlet />    
        <Modal></Modal>
    </div>
  )
}

export default AppLayout