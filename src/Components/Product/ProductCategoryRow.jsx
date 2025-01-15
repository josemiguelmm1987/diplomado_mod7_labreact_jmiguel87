const ProductCategoryRow = ({ category }) => {
  return (
    <>
      {/* <p>Inicio de Componente 4. ProductCategoryRow</p> */}
      <tr>
      <th colSpan="2">
        {category}
      </th>
    </tr>
      {/* <p>Fin de Componente 4. ProductCategoryRow</p> */}
    </>
  );
};

export default ProductCategoryRow;
