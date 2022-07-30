import {Outlet, Link} from "react-router-dom";
import {Fragment, useContext} from "react";
import {ReactComponent as Logo} from "../../assets/crown.svg";
import {UserContext} from "../../context/user.context";
import "./navigation.styles.scss";
import {AuthService} from "../../services/database/auth/auth.service";

export const Navigation = () => {
    const authService = new AuthService();
    const {currentUser} = useContext(UserContext);
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <Logo className="logo"/>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="shop">Shop</Link>
                    {
                        currentUser ? (
                            <span className="nav-link" onClick={authService.signOut}>Sign Out</span>
                        ) : <Link className="nav-link" to="auth/sign-in">Login/Sign up</Link>
                    }

                </div>
            </div>
            <Outlet/>
        </Fragment>
    )
}
