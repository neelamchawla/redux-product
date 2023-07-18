import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
// import { v4 as uuidv4 } from "uuid";
import { editProduct as updateProduct } from "../../redux/product";
import { ProductInterface } from "../ProductPage/Products";

type EditProductProps = {
  editProduct: ProductInterface;
  setEditProduct: (editProduct: ProductInterface) => void;
};

const EditProduct = ({ editProduct, setEditProduct }: EditProductProps) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");
  console.log(editProduct);
  
  useEffect(() => {
    setTitle(editProduct.title);
    setDescription(editProduct.description);
    setPrice(editProduct.price);
  }, [editProduct]);

  const handleEditProductSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(title, description);
    if (title.trim().length < 0) {
      setError("Please Enter Correct Name");
    } else if (description.trim().length < 0) {
      setError("Please Enter Correct Name");
    } else {
      dispatch(updateProduct({ editedProduct: { ...editProduct, title, description, price } }));
      setEditProduct({ id: "", title: "", description: "", price: "" });
      setTitle("");
      setDescription("");
      setPrice("");
    }
  };

  const handleUpdateTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    if (title.trim().length > 1) {
      setError("");
    }
  };
  const handleUpdateDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
    if (description.trim().length > 1) {
      setError("");
    }
  };
  const handleUpdatePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
    if (price.trim().length > 1) {
      setError("");
    }
  };

  // console.log(editProduct);
  return (
    <form onSubmit={handleEditProductSubmit} className="form">
      <div className="form__control">
        <input
          onChange={handleUpdateTitleChange}
          value={title}
          type="text"
          className="form__input"
          placeholder="Edit Product..."
        />
        {error && <p className="form__error-text">{error}</p>}
      </div>
      <div className="form__control">
        <input
          onChange={handleUpdateDescriptionChange}
          value={description}
          type="textarea"
          className="form__input"
          placeholder="Edit Product..."
        />
        {error && <p className="form__error-text">{error}</p>}
      </div>
      <div className="form__control">
        <input
          onChange={handleUpdatePriceChange}
          value={price}
          type="number"
          className="form__input"
          placeholder="Edit Product..."
        />
        {error && <p className="form__error-text">{error}</p>}
      </div>

      <button className="btn form__btn">Edit Product</button>
    </form>
  );
};

export default EditProduct;
