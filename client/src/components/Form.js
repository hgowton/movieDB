import React from "react";
// import styled from "styled-components";
// import { Search } from "../Styled"; 


export function Input(props) {
    return(
        <div className="form-group">
            <input type="text" className="form-control" name={props.name} onChange={props.handleInputChange} required/>
        </div>
    );
}

export function FormBtn(props) {
    return (
        <button {...props}>
            <i className="fas fa-search"></i> Search
        </button>

    )
}



// import React, { useState } from "react";

// const Form = () => {
//     const [ name,setName ] = useState('')
//     return (
//         <form onSubmit={(event) => {
//           event.preventDefault();
//           formSubmit( name, setName );
//         }}>
//           <input 
//           type="text" 
//           onChange={event => setName(event.target.value)} 
//           value={name} />
//           <button><i className="fas fa-search"></i></button>
//         </form>
//     )
// }

// const formSubmit = ( value, setValue ) => {
//     console.log(`email sent ${value}`);
//     setValue('')
//   }


// export default Form;
