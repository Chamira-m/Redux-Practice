import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { setProducts } from "../redux/actions/productActions";

const ProductListning = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const responce = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("err", err);
      });
    dispatch(setProducts(responce.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log("products", products);
  return (
    <div>
      <ProductComponent />{" "}
    </div>
  );
};

export default ProductListning;
