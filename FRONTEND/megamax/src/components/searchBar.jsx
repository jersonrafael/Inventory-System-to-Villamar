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
            <div className="flex justify-center">

                <div className="flex justify-center" >
                    <input
                        type="text"
                        onChange={handleChange}
                        value={searchTerm}
                        placeholder="Buscar"
                        className="h-10 w-full px-2 outline-none"
                    />
                </div>

                <div className="flex gap-x-4 absolute top-10 py-4 px-2">
                    <ul>
                        {filteredProducts && (
                            filteredProducts.map((response) => (
                                <li className="bg-gray-400 my-2">
                                    <a key={response.id} href={`product/${response.id}/`} className="">
                                        <span>{response.name}</span>
                                        <span>{response.price}</span>
                                        <span>Precio: {response.price * 42}BS</span>
                                    </a>
                                </li>
                            ))
                        )
                        }
                    </ul>
                </div>
            </div>
        </>
    );
}

export default SearchBar;
