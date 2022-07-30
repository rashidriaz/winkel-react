import {AuthService} from "../../services/database/auth/auth.service";
import {FormInput} from "../form-input/form-input.component";
import {useState} from "react";
import {Button} from "../button/button.component";
import {Link} from "react-router-dom";

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
        <div className="auth-form-container">
            <h2>Sign In</h2>
            {
                renderErrorMessage()
            }
            <form onSubmit={onFormSubmit}>


                <FormInput required id="email" label="Email" value={email} type="email" name="email"
                           onChange={handleChange}/>

                <FormInput required id="password" label="Password" value={password} type="password"
                           name="password"
                           onChange={handleChange}/>

                <Button type="submit" buttonType="default">Sign In</Button>
                <span>Don't have an account? <Link className="link" to="../sign-up">create an account</Link></span>
            </form>
        </div>
    );
}
