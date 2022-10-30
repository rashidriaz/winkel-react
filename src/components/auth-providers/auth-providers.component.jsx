import {Button} from "../button/button.component";
import {GoogleSignIn} from "../../services/database/auth/google-auth.service";
import {AuthProviderContainer, AuthProviderButton} from "./auth-provider.styles";

export const AuthProviderOptions = () => {
    const authService = new GoogleSignIn();


    return (
        <>
            <AuthProviderButton onClick={authService.signIn} buttonType="google">
                Sign In With Google</AuthProviderButton>
        </>
    );
}
