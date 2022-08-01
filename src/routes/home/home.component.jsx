import {Directory} from "../../components/directory/directory.component";
import {Outlet} from "react-router-dom";
import Categories from "../../categories-data.json";
export const Home = () => {

    return (
        <div>
        <Directory categories={Categories}/>
            <Outlet />
        </div>
    );
}
