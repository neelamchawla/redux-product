import React, { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import EditProduct from "../EditProduct/EditProduct";
import ProductList from "../ProductList/ProductList";
// import ModalPop from "../AddProduct/ModalPop";
import AddProduct from "../AddProduct/AddProduct";
import { FaListAlt } from "react-icons/fa";
import { FiGrid } from "react-icons/fi";

export interface ProductInterface {
  id: string;
  title: string;
  description: string;
  price: string;
}

const Products = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const [editProduct, setEditProduct] = useState<ProductInterface | null>(null);
  const getEditProduct = (editProduct: ProductInterface) => setEditProduct(editProduct);
  console.log(editProduct);

  const [isGridView, setIsGridView] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const toggleView = () => {
    setIsGridView(!isGridView);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <main className="relative flex w-full app">
      <div className="app__wrapper">
        <div className="app__header">
          <h1 className="app__title">Product Page</h1>
          {/* <ModalPop /> */}
        </div>
        <div className="app__inputs-box">
          {editProduct?.id ? (
            <EditProduct editProduct={editProduct} setEditProduct={setEditProduct} />
          ) : (
            <AddProduct />
          )
          }
        </div>

        {/* <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearch}
          className="border rounded-l py-2 px-4 w-full my-5 text-cyan-950"
        /> */}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-8"
          onClick={toggleView}
        >
          {isGridView ? <FaListAlt /> : <FiGrid />}
        </button>
        <ProductList
          isGridView={isGridView}
          toggleView={toggleView}
          products={products}
          getEditProduct={getEditProduct}
          setEditProduct={setEditProduct}
          editProduct={editProduct}
        />
      </div>
    </main>
  );
};

export default Products;