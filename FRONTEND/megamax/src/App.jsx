import { useEffect, useState, useContext } from 'react'
import axios from "axios";
import { Await } from 'react-router-dom';
import SearchBar from './components/searchBar';
import Header from './components/header';
import { LoginContext } from './components/context';
import ProductModal from './components/productModal';
import DeleteProductModal from './components/products/deleteProductModal';
import ShoppingCart from './components/shoppingCart/shoppingCart';

function App() {
  const loginStatus = useContext(LoginContext)
  const [products, getProducts] = useState([]);
  const [dolarParalelo, getDolarParalelo] = useState(42);
  const [productModalData, setProductModalData] = useState(null)
  const [productModalStatus, setproductModalStatus] = useState(false)

  useEffect(() => {
    updateProducts()

  }
    , []);


  function updateProducts() {
    axios.get('http://localhost:8000/api/product/')
      .then((response) => {
        getProducts(response.data);
      })
      .catch((err) => {
        getProducts(null)
      })
  }

  function activateProductModal(id) {
    axios.get(`http://localhost:8000/api/product/${id}/`)
      .then((response) => {
        setProductModalData(response.data)
      })
      .catch((err) => {
        setProductModalData(null)
      })

    setproductModalStatus(true)
  }

  function closeProductModal() {
    setproductModalStatus(false)
  }

  return (
    <>
      <Header products={updateProducts} />
      <SearchBar />

      <div className='d-flex justify-content-center mt-5'>
        <table className="table w-75 border border-1 px-4 shadow rounded">
          <thead>
            <tr>
              <th scope="col">Codigo</th>
              <th scope="col">Nombre</th>
              <th scope="col">Precio</th>
              <th scope="col">BS</th>

              {
                loginStatus && (
                  <th>Acciones</th>
                )
              }

            </tr>
          </thead>
          <tbody>

            {
              products && products.length > 0 ? (
                products.map((product) => (
                  <tr key={product.id} className=''>
                    <th>{product.code}</th>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.price * dolarParalelo}</td>

                    {loginStatus && (
                      <td className='d-flex gap-2'>
                        <button onClick={() => activateProductModal(product.id)} className='btn btn-outline-primary'>Editar</button>
                        <DeleteProductModal productId={product.id} />
                      </td>
                    )}
                  </tr>
                ))
              ) : (
                <h2>No products available</h2>
              )
            }
          </tbody>
        </table>



      </div>


      {
        productModalStatus ?
          <ProductModal data={productModalData} closeProductModal={closeProductModal} products={updateProducts} />
          : <></>
      }

      {
        loginStatus && (
          <ShoppingCart/>
        )
      }

    </>
  )
}

export default App
