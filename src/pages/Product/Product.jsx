import React from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/UI/Container/Container";

const Product = () => {
  const params = useParams();
  return <Container>Product {params.productId}</Container>;
};

export default Product;
