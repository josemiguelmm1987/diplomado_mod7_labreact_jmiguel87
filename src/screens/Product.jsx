import React from "react"
import { useSelector } from "react-redux"
import FilterableProductTable from "../Components/Product/FilterableProductTable";

const Product = () => {
  const dataProduct = useSelector(state => state.product.dataProduct)
  return (
    <>
      {/* <p>Inicio Componente para Product</p> */}
      <FilterableProductTable products={dataProduct}/>
      {/* <p>Fin Componente para Product</p> */}
    </>
  );
};

export default Product;