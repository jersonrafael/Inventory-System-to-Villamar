import { useContext, useState } from "react";
import { LoginContext } from "./context";
import AddProductModal from "./modal";


function Header() {
    const loginStatus = useContext(LoginContext)
    const [modal, setModalStatus] = useState(false)

    const openModal = () => setModalStatus(true);
    const closeModal = () => setModalStatus(false);

    document.addEventListener("keydown", (e) => {
        if (e.key == 'F1') {
            e.preventDefault();
            setModalStatus(!modal)
        }
    })

    if (loginStatus === true) {
        return (
            <>
                <header>
                    <nav className="flex justify-end">
                        <ul className="flex gap-x-4 mx-2">

                            <button onClick={openModal}>
                                ( F1 ) Agregar
                            </button>

                            <li>
                                Cerrar Sesion
                            </li>
                        </ul>
                    </nav>
                </header>

                <AddProductModal modal={modal} closeModal={closeModal} />
            </>
        )
    }
    else {
        return (
            <>
                <header>
                    <nav className="flex justify-end" >
                        <ul className="mx-2" >
                            <li>
                                <a href="login/">Iniciar Sesion</a>
                            </li>
                        </ul>
                    </nav>
                </header>
            </>
        )
    }
}

export default Header;