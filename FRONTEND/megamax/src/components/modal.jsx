import axios from "axios";
import { useState } from "react";

function AddProductModal({ modal, closeModal }) {

    const [name,setName] = useState(null)
    const [code,setCode] = useState(null)
    const [price,setPrice] = useState(null)
    const [date,setDate] = useState(null)


    function handleSubmit(e) {
        e.preventDefault()
        axios.post('http://localhost:8000/api/product/',{
            "name":name,
            "code":code,
            "price":price,
            "expiration_date":date,
        })
        .then((response)=>{
            console.log(response)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    if (modal) {
        return (
            <>
                <div className="bg-white absolute top-0 bottom-0 left-0 right-0 bg-opacity-30 flex justify-center items-center">
                    <div className="bg-red-500 px-4">
                        <button onClick={closeModal} className="inline-block my-2" >( F1 ) Cerrar</button>
                        <h2 className="text-4xl" >Agregar Producto</h2>
                        <form action="" className="" onSubmit={handleSubmit}>
                            <div className="flex gap-x-4 my-4" >
                                <input type="text" placeholder="Nombre" className="block" value={name} onChange={(e)=>{setName(e.target.value)}} />
                                <input type="text" placeholder="Codigo" className="block" value={code} onChange={(e)=>{setCode(e.target.value)}}/>
                                <input type="text" placeholder="Precio en $" className="block" value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
                                <input type="datetime-local" value={date} onChange={(e)=>{setDate(e.target.value)}}></input>
                            </div>

                            <button type="submit" className="bg-blue-500 px-4 py-2 text-white rounded-xl inline-block my-4 mx-2">Agregar</button>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}

export default AddProductModal;