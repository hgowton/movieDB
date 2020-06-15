import React, { useState } from "react";

const Form = () => {
    const [ name,setName ] = useState('')
    return (
        <form onSubmit={(event) => {
          event.preventDefault();
          formSubmit( name, setName );
        }}>
          <input 
          type="text" 
          onChange={event => setName(event.target.value)} 
          value={name} />
          <button><i className="fas fa-search"></i></button>
        </form>
    )
}

const formSubmit = ( value, setValue ) => {
    console.log(`email sent ${value}`);
    setValue('')
  }


export default Form;
