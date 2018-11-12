import React from 'react';
import {StyledInput} from "./styles";

const FormInput = ({type, placeholder, value, changeState, maxLength}) => ( //to co odosiela
    
    <StyledInput 
    type={type} // to co prijma
    placeholder={placeholder} 
    value={value}
    onChange={changeState}

    required
    minLength={3}
    maxLength={maxLength}
    />
);

export default FormInput;