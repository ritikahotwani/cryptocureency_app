import { useState ,useEffect,useRef} from "react";
import {getAuth,signInWithEmailAndPassword} from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate,Link } from "react-router-dom";
import NavBar from "./NavBar";
import { FcGoogle } from "react-icons/fc";
function Login() {
    const [pw, setPw] = useState("");
    const [user, setUser] = useState("");
    const [ans, setAns] = useState("");
    const hUser = (event) => { setUser(event.target.value); }
    const hPw = (event) => { setPw(event.target.value); }
    const nav = useNavigate("");
    const rMail = useRef();
    useEffect(() => {
        rMail.current.focus();
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
            nav("/home")
        })
        .catch(err=>console.log("issue "+err))
    }
    const googleLogin = (event) => {
        event.preventDefault();

		const auth = getAuth();
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider)
            .then((result) => {
				const user = result.user;
				console.log(result);
				localStorage.setItem("googleUserInfo", JSON.stringify(result.user));
                localStorage.setItem("userEmail", result.user.email);
                localStorage.setItem("user", result.user.email);
				setUser(result.user.email)
				localStorage.setItem("loginType", "google")
				nav("/home");
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                rMail.current.focus();

			});
	}

    return (
        <>
            <div className="mt-[10vh] max-w-sm mx-auto rounded-md shadow-xl text-center">
            <h1  className="text-3xl font-semibold p-3 text-[#b1d4e0] darkmode-ignore ">Login</h1>
            <form className="p-5 flex flex-col items-center"
                onSubmit={log}>
                <input className=" border-2 w-[80%] rounded-md h-10 p-2  my-4"
                    type="email" placeholder="Email"  ref={rMail}
            onChange={hUser}/>

                <input className=" border-2 w-[80%] rounded-md h-10 p-2  my-4"
                    type="password" placeholder="Password"
            onChange={hPw}/>

                <input className="bg-white w-[30%] font-semibold border-2 cursor-pointer rounded-md h-10 p-1 my-4 "
                        type="submit" value="Login" />

                    
                    {/* <button className="bg-white w-[70%] font-semibold border-2 cursor-pointer rounded-md h-10 p-1 my-3"
                        onClick={nav("/signup")}>Sign Up</button> */}
                    
       <h3>Or </h3>

                    <button className="bg-white w-[80%] border-2 cursor-pointer rounded-md h-10 p-1 my-3" onClick={googleLogin}>
                        <FcGoogle size={25} className="inline mr-3"/>
                        SignIn with Google</button>

                    <h2 className="text-xs">Don't have an account? <Link className="text-xxs border-b my-4 text-blue-400 darkmode-ignore"
                        to="/signup">signup.</Link></h2>
                    
             
                </form>

                </div>
        </>

    )
}
export default Login;