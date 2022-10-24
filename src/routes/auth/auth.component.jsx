import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";
import {GoogleSignIn} from "../../services/database/auth/google-auth.service";
import {AuthProviderOptions} from "../../components/auth-providers/auth-providers.component";
import "./auth.styles.scss"

export const Auth = () => {
    const authService = new GoogleSignIn(true);
    useEffect(() => {
        void authService.createUserForGoogleSignIn();
    }, []);

    return (
        <div>
            <div className="auth-forms">
                <Outlet/>
            </div>
            <span className="divider">OR</span>
            <AuthProviderOptions/>
        </div>
    );
}

