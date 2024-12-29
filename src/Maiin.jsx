import { Outlet } from "react-router-dom";
import Nav from "./Nav";



const Maiin = () => {
    return (
        <div>
    <Nav></Nav>
      <Outlet></Outlet>
        </div>
    );
};

export default Maiin;