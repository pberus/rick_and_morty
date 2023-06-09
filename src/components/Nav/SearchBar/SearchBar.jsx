function SearchBar(props) {
   const {onSearch} = props
   //! No necesito todo el props, solo eso
   return (
      <div>
         <input type='search' />
         <button onClick={onSearch}>Agregar</button>     
      </div>
   );
}

export default SearchBar