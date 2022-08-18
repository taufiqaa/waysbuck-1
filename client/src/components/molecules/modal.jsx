import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { API } from '../config/api';
import { Alert } from 'react-bootstrap';
import { useMutation } from 'react-query';

const modal = {
    hidden: { x: "-100vw", opacity: 0 },
    visible: { x: "0vw", opacity: 1,
        transition: { duration: 0.1, type: "spring", damping: 50, stiffness: 500 }
    },
    exit: { x: "100vw", opacity: 0 }
}

export function Login({modalLogin, setModalLogin, switchModal}) {
   return (
        <AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={() => null}>
            {modalLogin &&
            <motion.section className="modal fixed z-index-3 w100 h100 flex jc-center ai-center"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={ () => setModalLogin(false) }
            >
                <motion.form className="py2 px1-5 flex-col bg-white br10"
                initial="hidden" animate="visible" exit="exit"
                variants={ modal }
                onClick={ (e) => e.stopPropagation() }
                >
                    <h2 className="mb1-75 txt-red fw700">Login</h2>
                    <input className="modal-input br-red br5 mb1 fs0-9"
                    type="email"
                    id="email" name="email"
                    placeholder="Email"
                    required
                    />
                    <input className="modal-input br-red br5 mb2 fs0-9"
                    type="password"
                    id="password" name="password"
                    placeholder="Password"
                    required
                    />
                    <button className="pt0-3 pb0-5 mb1 bg-red br-none br5 fs0-9 fw500 txt-white"
                    type="submit"
                    >Login</button>
                    <p className="fs0-9 fw500 ta-center">Don't have an account ? Click <strong className="cursor-pointer"
                    onClick={ switchModal }
                    >Here</strong>
                    </p>
                </motion.form>
            </motion.section>
            }
        </AnimatePresence>
    )
}

export function Register({modalRegister, setModalRegister, switchModal}) {
    //   const [state, dispatch] = React.useContext(UserContext);

    const [message, setMessage] = React.useState(null);

    // Create variabel for store data with useState here ...
    const [form, setForm] = React.useState({
        name: '',
        email: '',
        password: '',
    });

    const { name, email, password } = form;

    const handleChange = (e) => {
        setForm({
        ...form,
        [e.target.name]: e.target.value,
        });
    };

    // Create function for handle insert data process with useMutation here ...
    const handleSubmit = useMutation(async (e) => {
        try {
            e.preventDefault();

            // Configuration Content-type
            const config = {
                headers: {
                'Content-type': 'application/json',
                },
            };

            // Data body
            const body = JSON.stringify(form);

            // Insert data user to database
            const response = await API.post('/register', body, config);

            // Handling response here
            const alert = (
                <Alert variant="success" className="py-1">
                Successfully Register
                </Alert>
            );
            setMessage(alert);

        } catch (error) {
            const alert = (
                <Alert variant="danger" className="py-1">
                Failed
                </Alert>
            );
            setMessage(alert);
            console.log(error);
        }
    });
    return (
        <AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={() => null}>
            {modalRegister &&
            <motion.section className="modal fixed z-index-3 w100 h100 flex jc-center ai-center"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={ () => setModalRegister(false) }
            onSubmit={ (e) => handleSubmit.mutate(e) }
            >
                <motion.form className="py2 px1-5 flex-col bg-white br10"
                initial="hidden" animate="visible" exit="exit"
                variants={ modal }
                onClick={ (e) => e.stopPropagation() }
                onSubmit={ (e) => handleSubmit.mutate(e) }
                >
                    <h2 className="mb1-75 txt-red fw700">Register</h2>
                    { message && message }
                    <input className="modal-input br-red br5 mb1 fs0-9"
                    type="email"
                    id="email" name="email"
                    placeholder="Email"
                    value={email}
                    onChange={ handleChange }
                    />
                    <input className="modal-input br-red br5 mb1 fs0-9"
                    type="password"
                    id="password" name="password"
                    placeholder="Password"
                    value={password}
                    onChange={ handleChange }
                    />
                    <input className="modal-input br-red br5 mb2 fs0-9"
                    type="text"
                    id="name" name="name"
                    placeholder="Full Name"
                    value={name}
                    onChange={ handleChange }
                    />
                    <button className="pt0-3 pb0-5 mb1 bg-red br-none br5 fs0-9 fw500 txt-white"
                    type="submit"
                    >Register</button>
                    <p className="fs0-9 fw500 ta-center">Already have an account ? Click <strong className="cursor-pointer"
                    onClick={ switchModal }
                    >Here</strong>
                    </p>
                </motion.form>
            </motion.section>
            }
        </AnimatePresence>
    )
}