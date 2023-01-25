import { Link } from "react-router-dom";

function NavBar() {
    const user =localStorage.getItem("user");

    return (
        <>
            <div className="nav">
{(user==null) && (<Link to="/login">LOGIN</Link>)}
                {(user == null) && (<Link to="/signup">SIGNUP</Link>)}
                {(user==null) && (<Link to="/forgotpassword">ForgotPassword</Link>)}
                {(user!=null)&&(<Link to="/">HOME</Link>)}
                {(user!=null)&&(<Link to="/description">COINS</Link>)}
                {(user!=null)&&(<Link to="/news">NEWS</Link>)}
                {(user!=null)&&(<Link to="/about">ABOUT</Link>)}
                {(user!=null)&&(<Link to="/historychart">HISTORY</Link>)}
                {(user!=null)&&(<Link to="/logout">Logout</Link>)}


            </div>
        </>
    );
}
export default NavBar;