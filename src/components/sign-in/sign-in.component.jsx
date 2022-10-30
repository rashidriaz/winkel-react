import {AuthService} from "../../services/database/auth/auth.service";
import {FormInput} from "../form-input/form-input.component";
import {useState} from "react";
import {Button} from "../button/button.component";
import {Link} from "react-router-dom";
import {AuthFormContainer, AuthFormHeading, UnderlinedLink, CenteredButton} from "../signup/auth-form.styles";

const defaultFormFieldValues = {
    email: "",
    password: "",
}
export const SignInForm = () => {
    const authService = new AuthService();
    const [formFields, setFormFields] = useState(defaultFormFieldValues);
    const [errorMessage, setErrorMessage] = useState(null);
    const {email, password} = formFields;
    const resetFormFields = () => {
        setFormFields(defaultFormFieldValues);
    }
    const onFormSubmit = async (event) => {
        event.preventDefault();
        const {error, user} = await authService.signInUser(formFields)
        console.log(user);
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
            <AuthFormHeading>Sign In</AuthFormHeading>
            {
                renderErrorMessage()
            }
            <form onSubmit={onFormSubmit}>


                <FormInput required id="email" label="Email" value={email} type="email" name="email"
                           onChange={handleChange}/>

                <FormInput required id="password" label="Password" value={password} type="password"
                           name="password"
                           onChange={handleChange}/>

                <CenteredButton type="submit" buttonType="default">Sign In</CenteredButton>
                <span>Don't have an account? <UnderlinedLink to="../sign-up">create an account</UnderlinedLink></span>
            </form>
        </AuthFormContainer>
    );
}
