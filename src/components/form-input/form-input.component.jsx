import {FormInputLabel, FormGroup, Input} from "./form-input.styles"

export const FormInput = ({label, ...otherProps}) => {

    return (
        <FormGroup>
            <Input {...otherProps}/>
            {
                label &&
                <FormInputLabel htmlFor={otherProps.id} shrink={otherProps.value.length}>{label}</FormInputLabel>
            }

        </FormGroup>
    );
}
