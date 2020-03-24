import React from 'react';

import { GroupContainer, FormInputContainer, FormInputLabel} from './from-input.styles';

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <GroupContainer>
        <FormInputContainer onChange={handleChange} {...otherProps} />
        {
            label ?
            (<FormInputLabel 
                className={`
                        ${otherProps.value.length ? 
                        'shrink' : 
                        null} 
                        label`
            }>
                {label}
            </FormInputLabel>)
            : null
        }
    </GroupContainer>
);

export default FormInput;