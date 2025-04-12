import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

   // 1 - resgatando dados
  // useEffect(async () => {
  //   const res = await fetch("http://localhost:3000/products");

  //   const data = await res.json();

  //   setProducts(data);
  // }, []);

  // 2 - add product
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };
  return (
    <div className='App'>
      
      <h1>Lista de produtos</h1>
    </div>
  )
}

export default App
