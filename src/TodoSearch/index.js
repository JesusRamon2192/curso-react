import "./TodoSearch.css";
import { TodoContext } from "../TodoContext";
import React from "react";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  return (
    <input
      placeholder="Cortar cebolla"
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        /* console.log("Escribiste");
        console.log(event);
        console.log(event.target.value); */
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { TodoSearch };
