import { useState, useEffect } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import './App.css';

type Product = {
  id: number;
  name: string;
  quantity: number;
};

const Product: React.FC<{ product: Product; removeProduct: (id: number) => void }> = ({
  product,
  removeProduct,
}) => {
  return (
    <div className="product">
      <div className="product-name">{product.name}</div>
      <div className="product-quantity">Quantity: {product.quantity}</div>
      <div className="product-actions">
        <button className="action-button" onClick={() => removeProduct(product.id)}>
          <FaMinus />
        </button>
      </div>
    </div>
  );
};

const AddProduct: React.FC<{ addProduct: (product: Product) => void }> = ({ addProduct }) => {
  const [productName, setProductName] = useState('');

  const handleAddProduct = () => {
    if (productName.trim() !== '') {
      const newProduct: Product = {
        id: Date.now(),
        name: productName.trim(),
        quantity: 1,
      };
      addProduct(newProduct);
      setProductName('');
    }
  };

  return (
    <div className="add-product">
      <input
        type="text"
        placeholder="Enter product name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <button className="action-button" onClick={handleAddProduct}>
        <FaPlus />
      </button>
    </div>
  );
};

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const addProduct = (newProduct: Product) => {
    setProducts([...products, newProduct]);
  };

  const removeProduct = (productId: number) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };

  return (
    <div className="app">
      <h1>Product Demo</h1>
      <AddProduct addProduct={addProduct} />
      {products.map((product) => (
        <Product key={product.id} product={product} removeProduct={removeProduct} />
      ))}
    </div>
  );
};

export default App;
