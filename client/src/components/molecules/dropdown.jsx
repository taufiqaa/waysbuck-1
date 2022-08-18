import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import out from "../../assets/logout.svg"
import profile from "../../assets/user.svg"
import product from "../../assets/drink.svg"
import toping from "../../assets/toping.svg"
import triangle from "../../assets/triangle.svg"

export default function Dropdown({adminDropdown, userDropdown, logOut}) {

    const navigate = useNavigate()

    const dropdownList = {
      hidden: { y: "-1rem", opacity: 0 },
      visible: { y: "0rem", opacity: 1,
        transition: { delayChildren: 0.1, staggerChildren: 0.1 }
      },
      exit: { y: "-1rem", opacity: 0 }
    }
    const dropdownItem = {
      hidden: { y: 20, opacity: 0 },
      visible: { y: 0, opacity: 1 }
    }
    return (
        <>
        <AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={() => null}>
            {adminDropdown &&
            <section className="flex">
                <motion.ul className="dropdown bg-white br10 fw700 cursor-pointer"
                initial="hidden" animate="visible" exit="exit"
                variants={ dropdownList }
                >
                    <img className="dropdown-triangle" src={triangle} alt="white-triangle" />
                    <motion.li className="py1 pr3 pl1-5 flex ai-center"
                    variants={ dropdownItem }
                    onClick={ () => navigate('/add-product') }
                    >
                        <img src={product} alt="icon" />
                        <p>Add Product</p>
                    </motion.li>
                    <motion.li className="pt0-5 pb1 pr3 pl1-5 flex ai-center"
                    variants={ dropdownItem }
                    onClick={ () => navigate('/add-toping') }
                    >
                        <img src={toping} alt="icon" />
                        <p>Add Toping</p>
                    </motion.li>
                    <motion.li className="py1 pr3 pl1-5 flex ai-center"
                    variants={ dropdownItem }
                    onClick={ logOut }
                    >
                        <img src={out} alt="icon" />
                        <p>Logout</p>
                    </motion.li>
                </motion.ul>
            </section>
            }
        </AnimatePresence>
        
        <AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={() => null}>
            {userDropdown &&
            <section className="flex">
                <motion.ul className="dropdown bg-white br10 fw700 cursor-pointer"
                initial="hidden" animate="visible" exit="exit"
                variants={ dropdownList }
                >
                    <img className="dropdown-triangle" src={triangle} alt="white-triangle" />
                    <motion.li className="py1 pr3 pl1-5 flex ai-center"
                    variants={ dropdownItem }
                    onClick={ () => navigate('/profile') }
                    >
                    <img src={profile} alt="icon" />
                    <p>Profile</p>
                    </motion.li>
                    <motion.li className="py1 pr3 pl1-5 flex ai-center"
                    variants={ dropdownItem }
                    onClick={ logOut }
                    >
                    <img src={out} alt="icon" />
                    <p>Logout</p>
                    </motion.li>
                </motion.ul>
            </section>
            }
        </AnimatePresence>
        </>
    )
}
