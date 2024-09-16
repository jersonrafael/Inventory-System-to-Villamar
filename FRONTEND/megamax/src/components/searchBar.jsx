import axios from "axios";
import { useEffect, useState } from "react";

function SearchBar() {
    const [filteredProducts, setFilteredProducts] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/')
            .then((response) => {
                setProduct(response.data)
            })

            .catch((err) => {
                setProduct(null)
            })
    }, [])


    function handleChange(e) {
        const value = e.target.value;
        setSearchTerm(value);

        if (value.trim() === "") {
            setFilteredProducts([]);
        } else {
            const filtered = product.filter(product =>
                product.name.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredProducts(filtered);
        }
    }

    return (
        <>
            <div className="d-flex justify-content-center w-100">

                <div className="d-flex justify-content-center w-50">
                    <input
                        type="text"
                        onChange={handleChange}
                        value={searchTerm}
                        placeholder="Buscar"
                        className="h-10 p-2 outline-none border-2 w-100 rounded-pill"
                    />

                    <div className="d-flex gap-2 position-absolute" style={{top:'23%',left:'25%'}}>
                        <ul className="bg-white border-2">
                            {filteredProducts && (
                                filteredProducts.map((response) => (
                                    <li className="my-2 px-2 py-2">
                                        <a key={response.id} href={`product/${response.id}/`} className="d-flex aling-items-center gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                            </svg>
                                            <h2>{response.name}</h2>
                                            <h2>{response.price}$</h2>
                                            <h2>{response.price * 42} BS</h2>
                                        </a>
                                    </li>
                                ))
                            )
                            }
                        </ul>
                    </div>
                </div>

            </div>
        </>
    );
}

export default SearchBar;
