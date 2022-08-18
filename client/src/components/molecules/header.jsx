import React from "react"
import logo from "../../assets/logo.svg"
import cart from "../../assets/cart.svg"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { Login, Register } from "./modal"
import { UserContext } from "../context/user"
import Dropdown from "./dropdown"

const photo = "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"

export default function Header({ addCart }) {

  const navigate = useNavigate()
  const [user, setUser] = React.useContext(UserContext)
  
  const [modalLogin, setModalLogin] = React.useState(false)
  const [modalRegister, setModalRegister] = React.useState(false)
  const [userDropdown, setUserDropdown] = React.useState(false)
  const [adminDropdown, setAdminDropdown] = React.useState(false)

  function switchModal() {
    if (modalLogin) {
      setModalLogin(false)
      setModalRegister(true)
    } else {
      setModalRegister(false)
      setModalLogin(true)
    }
  }

  function logOut() {
    setUserDropdown(false)
    setAdminDropdown(false)
    setUser({ type: 'LOG_OUT' })
  }

  function handleOnSubmit(e) {
    e.preventDefault()

    const email = document.getElementById("email").value
    let status

    if (email === "admin@gmail.com") {
      status = "admin"
      navigate('/income')
    } else {
      status = "customer"
    }
    
    const data = { email, status }

    setUser({
      type: 'LOG_IN',
      payload: data
    })

    setModalLogin(false)
    setModalRegister(false)
  }
  return (
    <header className="fixed z-index-2 w100">
      <nav className="py2 px6 flex jc-between ai-center bg-white">
        <motion.img className="logo round cursor-pointer"
         whileHover={{ rotate: 90 }} whileTap={{ rotate: 360, scale: 0.9 }}
         src={logo} alt="logo"
         onClick={ () => navigate("/") }
        />

        { user.isLogin ?
        <div className="flex ai-center">
          { user.user.status === "customer" &&
          <div className="cart relative cursor-pointer">
            <img src={cart} alt="cart" onClick={()=>navigate("/cart")} />
            { (addCart >= 1) && <span>{addCart}</span> }
          </div>
          }
         <img className="pp cursor-pointer" src={photo} alt="user"
           onClick={() =>
            (user.user.status === "admin") ? setAdminDropdown(!adminDropdown) : setUserDropdown(!userDropdown)
           }
          />
        </div>
        :
        <div className="grid col-2 col-gap-1 w15rem">
          <motion.button className="py0-1 bg-none br5 br-red txt-red bold"
           whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
           onClick={ () => setModalLogin(true) }
          >Login</motion.button>

          <motion.button className="py0-1 bg-red br5 br-red txt-white fw500"
           whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
           onClick={ () => setModalRegister(true) }
          >Register</motion.button>
        </div>
        }
      </nav>

      <Login
      modalLogin={modalLogin}
      setModalLogin={setModalLogin}
      switchModal={switchModal}
      />

      <Register
      modalRegister={modalRegister}
      setModalRegister={setModalRegister}
      switchModal={switchModal}
      />

      <Dropdown
      adminDropdown={adminDropdown}
      userDropdown={userDropdown}
      logOut={logOut}
      />
    </header>
  )
}
