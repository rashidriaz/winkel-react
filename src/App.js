import {Routes, Route} from "react-router-dom";
import {Home} from "./routes/home/home.component";
import {Navigation} from "./routes/navigation/navigation.component";
import {Login} from "./routes/login/login.component";

const Shop = ()=>{
  return (<h1>Hello there! Welcome to our shop</h1>);
}
export const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home/>} />
        <Route path="shop" element={<Shop />}/>
        <Route path="login" element={<Login />}/>
      </Route>

    </Routes>
)
  ;
}

