import React, { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import EditProduct from "../EditProduct/EditProduct";
import ProductList from "../ProductList/ProductList";
import ModalPop from "../AddProduct/ModalPop";

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

  const toggleView = () => {
    setIsGridView(!isGridView);
  };
  return (
    <main className="relative flex w-full app">
      <div className="app__wrapper">
        <div className="app__header">
          <h1 className="app__title">Product Page</h1>
          <ModalPop />
        </div>
        <div className="app__inputs-box">
          {editProduct?.id && (
            <EditProduct editProduct={editProduct} setEditProduct={setEditProduct} />
          )}
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={toggleView}
        >
          {isGridView ? 'List View' : 'Grid View'}
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