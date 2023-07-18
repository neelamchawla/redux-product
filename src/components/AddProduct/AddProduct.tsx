import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addProduct } from "../../redux/product";

const AddProduct = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");

  const handleAddSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (title.trim().length > 0 || description.trim().length > 0 || price.trim().length > 0) {
      console.log(title, description, price);
      dispatch(addProduct({ title, description, price, id: uuidv4() }));
      setTitle("");
      setDescription("");
      setPrice("");
    }
  };

  const handleUpdateTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    if (title.trim().length > 0) {
      setError("");
    }
  };

  const handleUpdateDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
    if (description.trim().length > 0) {
      setError("");
    }
  };

  const handleUpdatePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
    if (price.trim().length > 0) {
      setError("");
    }
  };

  return (
    <>
      <form onSubmit={handleAddSubmit} className="form">
        <div className="form__control">
          <input
            onChange={handleUpdateTitleChange}
            value={title}
            type="text"
            className="form__input"
            placeholder="Title"
          />
          {error && <p className="form__error-text">{error}</p>}
        </div>
        <div className="form__control">
          <input
            onChange={handleUpdateDescriptionChange}
            value={description}
            type="textarea"
            className="form__input"
            placeholder="Description"
          />
          {error && <p className="form__error-text">{error}</p>}
        </div>
        <div className="form__control">
          <input
            onChange={handleUpdatePriceChange}
            value={price}
            type="number"
            className="form__input"
            placeholder="Price"
          />
          {error && <p className="form__error-text">{error}</p>}
        </div>


        <button className="btn form__btn">Submit</button>
      </form>
    </>
  );
};

export default AddProduct;
