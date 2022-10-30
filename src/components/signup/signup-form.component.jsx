import {useState} from "react";
import {AuthService} from "../../services/database/auth/auth.service";
import {FormInput} from "../form-input/form-input.component";
import {AuthFormContainer, AuthFormHeading, CenteredButton, UnderlinedLink} from "./auth-form.styles"
import {Link} from "react-router-dom";

const defaultFormFields = {
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
}
export const SignUpForm = () => {
    const authService = new AuthService();
    const [formFields, setFormFields] = useState(defaultFormFields);
    const [errorMessage, setErrorMessage] = useState(null);
    const {name, email, password, confirmPassword} = formFields;
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }
    const onFormSubmit = async (event) => {
        event.preventDefault();
        const {error} = await authService.createUser(formFields)
        if (error) {
            setErrorMessage(error);
        } else {
            resetFormFields();
        }
    };

    const handleChange = ({target: {name, value}}) => {
        setFormFields({...formFields, [name]: value});
    }

    const renderErrorMessage = () => {
        if (errorMessage) {
            return <h2 style={{color: "red"}}> {errorMessage}</h2>;
        }
    }

    return (
        <AuthFormContainer>
            <AuthFormHeading>Create an account</AuthFormHeading>
            {
                renderErrorMessage()
            }
            <form onSubmit={onFormSubmit}>

                <FormInput required id="name" label="Name" value={name} type="text" name="name"
                           onChange={handleChange}/>

                <FormInput required id="email" label="Email" value={email} type="email" name="email"
                           onChange={handleChange}/>

                <FormInput required id="password" label="Password" value={password} type="password"
                           name="password"
                           onChange={handleChange}/>

                <FormInput required id="confirm-password" label="Confirm Password" value={confirmPassword}
                           type="password"
                           name="confirmPassword"
                           onChange={handleChange}/>

                <CenteredButton type="submit" buttonType="default">Create an Account</CenteredButton>
                <span>Already have an account? <UnderlinedLink to="../sign-in">Sign In</UnderlinedLink></span>
            </form>
        </AuthFormContainer>
    );
}
