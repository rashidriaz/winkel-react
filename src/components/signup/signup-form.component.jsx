import {useState} from "react";

const defaultFormFields = {
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
}
export const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {name, email, password, confirmPassword} = formFields;
    const onFormSubmit = () => {

    };

    return (
        <div>
            <h1>SignUp With Your email</h1>
            <form onSubmit={onFormSubmit}>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" required/>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" required/>
                <label htmlFor="password">Password</label>
                <input id="password" type="password" required/>
                <label htmlFor="confirm-password">Confirm Password</label>
                <input id="confirm-password" type="password" required/>

                <button type="submit">Create an Account</button>
            </form>
        </div>
    );
}
