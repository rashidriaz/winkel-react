import {Directory} from "../../components/directory/directory.component";
import {Outlet} from "react-router-dom";

export const Home = () => {

    return (
        <div>
        <Directory/>
            <Outlet />
        </div>
    );
}
