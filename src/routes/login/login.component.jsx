import {signInWithGooglePopup, createUser} from "../../utils/firebase/firebase.utils";

export const Login = () => {
    const loginGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        await createUser({id: user.uid, name: user.displayName, email: user.email});
    }
    return (
        <div><h1>This page is under construction</h1>
            <button onClick={loginGoogleUser}>SignIn With Google</button>
        </div>
    );
}
