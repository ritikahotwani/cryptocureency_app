import { useState ,useEffect} from "react";
import {getAuth,signInWithEmailAndPassword} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import NavBar from "./NavBar";
function Login() {
    const [pw, setPw] = useState("");
    const [user, setUser] = useState("");
    const [ans, setAns] = useState("");
    const hUser = (event) => { setUser(event.target.value); }
    const hPw = (event) => { setPw(event.target.value); }
    const nav = useNavigate("");
    
    useEffect(() => {
        const user = localStorage.getItem("user");
    if(user!=null)        {
        nav("/home");
        setAns(user);
    }
},[])
    const log = (event) => {
        event.preventDefault();
        const auth=getAuth();

        signInWithEmailAndPassword(auth,user,pw)
        .then(res=>{
            localStorage.setItem("user",user);
            localStorage.setItem("userEmail",user);
            nav("/")
        })
        .catch(err=>setAns("issue "+err))
    }

    return (
        <>
            <NavBar/>
            <h1>Login</h1>
            <form onSubmit={log}>
            <input type="email" placeholder="enter registered email"
            onChange={hUser}/>
            <br></br><br></br>
             <input type="password" placeholder="enter pass"
            onChange={hPw}/>
            <br/><br/>
            <input type="submit" value="Login"/>
            <br/><br/>
            </form>
        <h1>{ans}</h1>
        </>

    )
}
export default Login;