import {Button} from "../button/button.component";
import {GoogleSignIn} from "../../services/database/auth/google-auth.service";

export const AuthProviderOptions = () => {
    const authService = new GoogleSignIn();


    return (
        <div className="auth-providers">
            <Button onClick={authService.signIn} buttonType="google">
                Sign In With Google</Button>
        </div>
    );
}
