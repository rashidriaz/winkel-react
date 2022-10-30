import {Outlet, Link} from "react-router-dom";
import {Fragment, useContext} from "react";
import {CartIcon} from "../../components/cart-icon/cart-icon.component";
import {CartDropdown} from "../../components/cart-dropdown/cart-dropdown.component";
import {ReactComponent as Logo} from "../../assets/crown.svg";
import {UserContext} from "../../context/user.context";
import {CartContext} from "../../context/cart.context";
import {NavigationContainer, LogoContainer, NavLinks, NavLink} from "./navigation.styles";

import {AuthService} from "../../services/database/auth/auth.service";

export const Navigation = () => {
    const authService = new AuthService();
    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);
    return (
            <Fragment>
                <NavigationContainer>
                    <LogoContainer to="/">
                        <Logo className="logo"/>
                    </LogoContainer>
                    <NavLinks>
                        <NavLink to="shop">Shop</NavLink>
                        {
                            currentUser ? (
                                <NavLink as="span" onClick={authService.signOut}>Sign Out</NavLink>
                            ) : <NavLink  to="auth/sign-in">Login/Sign up</NavLink>
                        }
                        <CartIcon/>
                    </NavLinks>
                    {isCartOpen && <CartDropdown/>}
                </NavigationContainer>
                <Outlet/>
            </Fragment>
    )
}
