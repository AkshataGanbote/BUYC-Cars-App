import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddCar = () => {
  const [car, setcar] = useState({
    name: "",
    price: "",
    color:"",
    imageUrl: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setcar({ ...car, [name]: value });
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(
        "http://localhost:3001/cars",
        { ...car },
      );

      alert("Car Added");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="create-car">
      <h2>Add Car</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={car.name}
          onChange={handleChange}
        />

        <label htmlFor="color">Color</label>
        <input
          id="color"
          name="color"
          value={car.color}
          onChange={handleChange}
        ></input>

        <label htmlFor="price">Price</label>
        <input
          id="price"
          name="price"
          value={car.price}
          onChange={handleChange}
        ></input>

        <label htmlFor="imageUrl">Image URL</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          value={car.imageUrl}
          onChange={handleChange}
        />

        <button type="submit">Add car</button>
      </form>
    </div>
  );
};

export default AddCar