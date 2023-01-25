import {getAuth,signOut} from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Logout() {
    const nav=useNavigate();

    const lo=(event)=>{
        event.preventDefault();
        const auth=getAuth();
        localStorage.clear();
        signOut(auth)
        .then(res=>nav("/login"))
        .catch(err=>console.log(err));
    }
    return (


        <h1>logout</h1>
    );
}
export default Logout;