import React from "react";
import ProductItem from "./ProductItem/ProductItem";
import { ProductInterface } from "../ProductPage/Products";

type ProductListProps = {
  products: ProductInterface[];
  toggleView: (editProduct: ProductInterface) => void;
  getEditProduct: (editProduct: ProductInterface) => void;
  setEditProduct: (editProduct: ProductInterface) => void;
  editProduct: ProductInterface | null;
  isGridView: boolean;

};

const ProductList = ({
  products,
  editProduct,
  getEditProduct,
  setEditProduct,
  toggleView,
  isGridView,
}: ProductListProps) => {
  console.log(isGridView);
  // console.log(toggleView);
  return (
    <ul className={`${isGridView ? "flex flex-wrap" : "grid"} product-list`}>
      {products
        .map((product) => (
          <ProductItem
            toggleView={toggleView}
            isGridView={isGridView}
            key={product.id}
            product={product}
            editProduct={editProduct}
            getEditProduct={getEditProduct}
            setEditProduct={setEditProduct}
          />
        ))}
    </ul>
  );
};

export default ProductList;
