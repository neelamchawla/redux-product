/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { MdModeEditOutline } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../../redux/product";
import { ProductInterface } from "../../ProductPage/Products";

type ProductItemProps = {
  product: ProductInterface;
  editProduct: ProductInterface | null;
  getEditProduct: (editProduct: ProductInterface) => void;
  setEditProduct: (editProduct: ProductInterface) => void;
  toggleView: (editProduct: ProductInterface) => void;
  isGridView: boolean;
};

const ProductItem = ({
  product,
  editProduct,
  getEditProduct,
  setEditProduct,
  toggleView,
  isGridView,
}: ProductItemProps) => {
  const dispatch = useDispatch();
  const handleGetEditProductClick = () => getEditProduct(product);
  const handleDeleteProductClick = () => {
    dispatch(deleteProduct({ productId: product.id }));
    if (product.id === editProduct?.id) {
      setEditProduct({ id: "", title: "", description: "", price: "" });
    }
  };

  return (
    <div className="flex items-center border p-4">
      <li className={`${!isGridView ? "relative w-[35rem] h-90 bg-pattern bg-cover bg-center rounded-lg product-list__item" : "w-52"}`}>
        <div className={`${!isGridView ? "flex justify-between items-center" : ""}`}>
          <img
            src={`https://th.bing.com/th/id/OIP.2XJftqEiS0yv8EpXKEMUTQHaEo?w=295&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7`}
            alt="img"
            width={250}
            height={250}
          />
          <label
            htmlFor={product.id}
            className="product-list__label text-amber-500 font-bold"
          >
            {product.title}
          </label>
          <div>
            {product.description}
          </div>
          <div className="font-bold">
            Price: ${product.price}
          </div>
          <div className="product-list__btns-box flex place-content-around pt-5">
            <button
              onClick={handleGetEditProductClick}
              className="product-list__btn product-list__edit-btn"
            >
              <MdModeEditOutline />
            </button>
            <button
              onClick={handleDeleteProductClick}
              className="product-list__btn product-list__delete-btn"
            >
              <FaTrashAlt />
            </button>
          </div>
        </div>
      </li>
    </div>
  );
};

export default ProductItem;
