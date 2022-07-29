import {Outlet, Link} from "react-router-dom";
import {Fragment} from "react";
import {ReactComponent as Logo} from "../../assets/crown.svg";
import "./navigation.styles.scss";
export const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <Logo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="shop">Shop</Link>
                    <Link className="nav-link" to="auth/sign-in">Login/Sign up</Link>
                </div>
            </div>
            <Outlet/>
        </Fragment>
    )
}
