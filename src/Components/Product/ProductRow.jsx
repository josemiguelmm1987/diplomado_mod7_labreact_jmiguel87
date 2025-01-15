import React from 'react';
const ProductRow = ({ product }) => {
  
  const name = product.stocked ? product.name :
  <span style={{ color: 'red' }}>{product.name}</span>;
  return (
    <>
      {/* <p>Inicio de Componente 5. ProductRow</p> */}
      <tr>
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>
      {/* <p>Fin de Componente 5. ProductRow</p> */}
    </>
  );
};

export default ProductRow;
