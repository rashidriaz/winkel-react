import {useEffect} from "react";
import {GoogleSignIn} from "../../services/database/auth/google-auth.service";
import {SignUpForm} from "../../components/signup/signup-form.component";

export const Login = () => {
    const authService = new GoogleSignIn(true);

    useEffect(() => {
        void authService.createUserForGoogleSignIn();
    }, []);

    return (
        <div><h1>This page is under construction</h1>
            <button onClick={authService.signIn}>SignIn With Google</button>
            <SignUpForm />
        </div>
    );
}
