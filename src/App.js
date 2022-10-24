import {Routes, Route} from "react-router-dom";
import {Home} from "./routes/home/home.component";
import {Navigation} from "./routes/navigation/navigation.component";
import {Auth} from "./routes/auth/auth.component";
import {SignInForm} from "./components/sign-in/sign-in.component";
import {SignUpForm} from "./components/signup/signup-form.component";
import {Shop} from "./routes/shop/shop.component";
import {Checkout} from "./routes/checkout/checkout.component";

export const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path="shop/*" element={<Shop/>}/>
        <Route path="auth" element={<Auth/>}>
          <Route path="sign-in" element={<SignInForm/>}/>
          <Route path="sign-up" element={<SignUpForm/>}/>
        </Route>
        <Route path="checkout" element={<Checkout/>}></Route>

      </Route>

    </Routes>
  )
    ;
}

