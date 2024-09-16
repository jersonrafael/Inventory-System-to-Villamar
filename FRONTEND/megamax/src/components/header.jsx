import { useContext, useState } from "react";
import { LoginContext } from "./context";
import AddProductModal from "./modal";


function Header({products}) {
    const loginStatus = useContext(LoginContext)
    const [modal, setModalStatus] = useState(false)

    const openAddProductModal = () => setModalStatus(true);
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
                <header className="py-2 shadow mb-5">
                    <nav className="d-flex justify-content-end">
                        <ul className="d-flex gap-2 mx-2">

                            <button onClick={openAddProductModal} className="btn btn-success">
                                ( F1 ) Agregar
                            </button>

                            <button onClick={()=>{}} className="btn btn-warning">
                                ( F2 ) Clientes
                            </button>

                            <li className="btn btn-danger" >
                                Cerrar Sesion
                            </li>
                        </ul>
                    </nav>
                </header>

                <AddProductModal modal={modal} closeModal={closeModal} products={products} />
            </>
        )
    }
    else {
        return (
            <>
                <header className="py-2 shadow mb-5">
                    <nav className="d-flex justify-content-end" >
                        <ul className="mx-2" >
                            <li>
                                <a href="login/" className="btn btn-info">Iniciar Sesion</a>
                            </li>
                        </ul>
                    </nav>
                </header>
            </>
        )
    }
}

export default Header;