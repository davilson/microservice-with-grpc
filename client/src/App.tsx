import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

type Product = { id: string, name: string };

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [newProduct, setNewProduct] = useState('');

  const loadData = useCallback(async () => {
    try {
      const { data } = await axios.get<Product[]>('http://localhost:9000/products');
      setProducts(data);
    } catch (error) {
      alert('Ocorreu um erro ao listar, tente novamente!')
      console.log(error);
    }
  }, []);

  const handleAddProduct = useCallback(async () => {
    if (newProduct) {
      try {
        await axios.post('http://localhost:9000/products', { name: newProduct });
        loadData();
        setNewProduct('');
      } catch (error) {
        alert('Ocorreu um erro ao salvar, tente novamente!')
        console.log(error);
      }
    }
  }, [loadData, newProduct]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <div className="container">
      <h1 className="title">Produtos</h1>
      <div className="form-add">
        <input
          type="text"
          name="name"
          value={newProduct}
          onChange={e => setNewProduct(e.target.value)}
          id="name"
        />
        <button type="button" onClick={handleAddProduct}>Adicionar</button>
      </div>
      <table className="product-list">
        <tr>
          <th>#id</th>
          <th>Nome</th>
        </tr>
        {products.map(product => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
