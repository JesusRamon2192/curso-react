import React from "react";
import "./TodoSearch.css";

function TodoSearch() {
    const [searchValue, setSearchValue] = React.useState(''); 

    console.log('Los usuarios buscan todos de ' + searchValue);

    return (
        <input
            placeholder="Cortar cebolla"
            className="TodoSearch" 
            value={searchValue}
            onChange={(event)=>{
                /* console.log('Escribiste');
                console.log(event);
                console.log(event.target.value); */
                setSearchValue(event.target.value);
            }}/>
    );
}

export { TodoSearch };