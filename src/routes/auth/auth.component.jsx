import {useEffect} from "react";
import {Outlet} from "react-router-dom";
import {GoogleSignIn} from "../../services/database/auth/google-auth.service";
import {AuthProviderOptions} from "../../components/auth-providers/auth-providers.component";
import {AuthFormsContainer, Divider, AuthContainer} from "./auth.styles"

export const Auth = () => {
    const authService = new GoogleSignIn(true);
    useEffect(() => {
        void authService.createUserForGoogleSignIn();
    }, []);

    return (
        <AuthContainer>
            <AuthFormsContainer>
                <Outlet/>
            </AuthFormsContainer>
            <Divider>OR</Divider>
            <AuthProviderOptions/>
        </AuthContainer>
    );
}

