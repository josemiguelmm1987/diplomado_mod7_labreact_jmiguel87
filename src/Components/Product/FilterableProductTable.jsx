import React from "react";
import { useState } from "react";
import ProductTable from "./ProductTable.jsx";
import SearchBar from "./SearchBar.jsx";
const FilterableProductTable = ({ products }) => {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);
  return (
    <>
      {/* <p>Inicio Componente para 1. FilterableProductTable</p> */}
      <div>
        <SearchBar
          filterText={filterText}
          inStockOnly={inStockOnly}
          onFilterTextChange={setFilterText}
          onInStockOnlyChange={setInStockOnly}
        />
        <ProductTable
          products={products}
          filterText={filterText}
          inStockOnly={inStockOnly}
        />
      </div>

      {/* <p>Fin Componente para 1. FilterableProductTable</p> */}
    </>
  );
};

export default FilterableProductTable;
