import axios from "axios";
import { useState } from "react";

function AddProductModal({ modal, closeModal, products }) {

    const [productName, setProductName] = useState(null)
    const [productPrice, setProductPrice] = useState(null)
    const [productCode, setProductCode] = useState(null)
    const [productDate, setProductDate] = useState(null)
    const [message, setMessage] = useState(null)


    function handleSubmit(e) {
        e.preventDefault()
        axios.post('http://localhost:8000/api/product/', {
            "name": productName,
            "code": productPrice,
            "price": productCode,
            "expiration_date": productDate,
        })
            .then((response) => {
                if (response.status == 200) {
                    setMessage("El producto se agrego correctamente")
                }
                setMessage("Error al agregar producto")
            })
            .catch((err) => {
                setMessage("Error al agregar producto")
            })

        products()
        closeModal()
    }

    if (modal) {
        return (
            <>
                <div className="bg-white position-absolute w-100 top-0 bottom-0 left-0 right-0 bg-opacity-50 d-flex justify-content-center align-items-center">
                    <div className="border-2 bg-white shadow px-4 py-3">
                        <button onClick={closeModal} className="btn btn-outline-danger my-3" >F1 Cerrar</button>
                        <h2 className="" >Agregar Producto</h2>
                        <form action="" className="" onSubmit={handleSubmit}>
                            <div className="d-flex align-items-center gap-2 my-4" >

                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingInput" autoComplete="none" onChange={(e)=>{setProductName(e.target.value)}}/>
                                    <label for="floatingInput">Nombre</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type="number" className="form-control" id="floatingInput"  autoComplete="none" onChange={(e)=>{setProductPrice(e.target.value)}}/>
                                    <label for="floatingInput">Precio</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type="number" className="form-control" id="floatingInput" autoComplete="none" onChange={(e)=>{setProductCode(e.target.value)}}/>
                                    <label for="floatingInput">Codigo</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type="date" className="form-control" id="floatingInput" autoComplete="none" onChange={(e)=>{setProductDate(e.target.value)}}/>
                                    <label for="floatingInput">Fecha Vencimiento</label>
                                </div>

                            </div>

                            <button type="submit" className="btn btn-outline-success">Agregar</button>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}

export default AddProductModal;