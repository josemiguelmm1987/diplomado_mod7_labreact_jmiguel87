const SearchBar = ({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) => {
  return (
    <>
      {/* <p>Inicio Componente para 2. SearchBar</p> */}
      <form>
        <input
          type="text"
          placeholder="Buscar..."
          value={filterText}
          onChange={(e) => onFilterTextChange(e.target.value)}
        ></input>
        <label>
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) => onInStockOnlyChange(e.target.checked)}
          ></input>{" "}
          Solo productos en Stock
        </label>
      </form>
      {/* <p>Fin Componente para 2. SearchBar</p> */}
    </>
  );
};

export default SearchBar;
