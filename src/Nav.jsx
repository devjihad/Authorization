import { Link } from "react-router-dom";


const Nav = () => {
    return (
        <div className="flex justify-around">
            <h1>Authentication</h1>
            <div className="flex gap-5">
                <Link to='Login'><button>Login</button></Link>
                <Link to='Resistration'><button>Resistation</button></Link>
              
            </div>
        </div>
    );
};

export default Nav;