import axios from "axios";
import { useState } from "react";

function ProductModal({ data, closeProductModal, products }) {

    const [productName, setProductName] = useState()
    const [productPrice, setProductPrice] = useState()
    const [productCode, setProductCode] = useState()
    const [productDate, setProductDate] = useState()

    function successMessage() {

        return (
            <>

            </>
        )
    }



    function handleSubmit(e) {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/product/${data.id}/`, {
            "name": productName,
            "price": productPrice,
            "code": productCode,
            "expiration_date": productDate,

        })
            .then((response) => {
                if (response.status == 200) {
                    products()
                    successMessage()
                }
            })
            .catch((err) => {
            })
        closeProductModal()
    }

    return (
        <>
            <div className="bg-white bg-opacity-50 position-absolute top-0 bottom-0 left-0 right-0 w-100 d-flex justify-content-center align-items-center">
                <div className="bg-white border border-2 shadow px-3 py-4">
                    <button onClick={() => closeProductModal()} className="btn btn-outline-danger my-3">Cerrar</button>
                    {data ?
                        <div className="">
                            <form action="" className="" onSubmit={handleSubmit}>
                                <div className="d-flex align-items-center gap-2 my-2">

                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="floatingInput" placeholder={data.name} autoComplete="none" onChange={(e) => { setProductName(e.target.value) }} />
                                        <label for="floatingInput">{data.name}</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input type="number" className="form-control" id="floatingInput" placeholder={data.price} autoComplete="none" onChange={(e) => { setProductPrice(e.target.value) }} />
                                        <label for="floatingInput">{data.price}</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input type="number" className="form-control" id="floatingInput" placeholder={data.code} autoComplete="none" onChange={(e) => { setProductCode(e.target.value) }} />
                                        <label for="floatingInput">{data.code}</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input type="date" className="form-control" id="floatingInput" value={data.date} autoComplete="none" onChange={(e) => { setProductDate(e.target.value) }} />
                                        <label for="floatingInput">Fecha Vencimiento</label>
                                    </div>
                                </div>
                                <button className="btn btn-outline-success mt-3" type="submit">Actualizar</button>
                            </form>
                        </div>
                        :
                        <>
                        </>
                    }
                </div>
            </div>
        </>
    )
}

export default ProductModal;