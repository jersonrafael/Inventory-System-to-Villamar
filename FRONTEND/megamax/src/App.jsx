import { useEffect, useState, useContext } from 'react'
import axios from "axios";
import { Await } from 'react-router-dom';
import SearchBar from './components/searchBar';
import Header from './components/header';
import { LoginContext } from './components/context';

function App() {
  const loginStatus = useContext(LoginContext)
  const [products, getProducts] = useState([]);
  const [dolarParalelo, getDolarParalelo] = useState(42);

  useEffect(() => {

    axios.get('http://localhost:8000/api/product/')
      .then((response) => {
        // console.log(response.data)
        getProducts(response.data);
      })
      .catch((err) => {
        console.log(err);
      })

  }
    , []);


  return (
    <>
      <Header />
      <SearchBar />
      <div className='flex justify-center'>
        <ul className='my-4 bg-blue-400'>
          {
            products.map((product) => {
              return <li key={product.id} className='flex items-center'>
                <h2 className='w-60 px-4 py-2'>{product.name}</h2>
                <h4 className='bg-green-400 w-60 px-4 py-2'>Precio en $ {product.price}</h4>
                <h4 className='bg-yellow-300 w-60 px-4 py-2 ' >Precio a Paralelo: {product.price * dolarParalelo} BS</h4>
                <h4 className='bg-green-400 w-60 px-4 py-2'>CODIGO {product.code}</h4>
                {loginStatus ? <ul className='flex gap-x-4 mx-2'>
                  <li>
                    <a href={product.id} >Editar</a>
                  </li>
                  <li>
                    <a href={product.id}>Eliminar</a>
                  </li>
                </ul> : <></>}
              </li>
            })
          }
        </ul>
      </div>
    </>
  )
}

export default App
