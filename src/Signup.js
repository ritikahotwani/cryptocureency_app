import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import { FcGoogle } from "react-icons/fc";
function Signup() {
    const nav=useNavigate();
    const[user,setUser]=useState("");
    const[pw1,setPw1]=useState("");
    const[pw2,setPw2]=useState("");
    const [ans, setAns] = useState("");
    const hUser=(event)=>{setUser(event.target.value);}
    const hPw1=(event)=>{setPw1(event.target.value);}
    const hPw2=(event)=>{setPw2(event.target.value);}
    const rMail = useRef();

    useEffect(() => {
        rMail.current.focus();

},[])

    const save=(event)=>{
        event.preventDefault();
        if(pw1==pw2){
            const auth=getAuth();
            createUserWithEmailAndPassword(auth,user,pw1)
            .then(res=>nav("/"))
            .catch(err=>setAns("issue "+err));
        }
        else{
            setAns("passwords dont match");
        }
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
            <div className="mt-[10vh] max-w-sm mx-auto rounded-md shadow-xl text-center ">
       <h2 className="text-[#b1d4e0] darkmode-ignore text-3xl font-semibold p-3   ">Sign-Up</h2>
                <form onSubmit={save} className="p-5 flex flex-col items-center ">
                    <input className="border-2 w-[80%] rounded-md h-10 p-2 my-2 " type="email" placeholder="Email" required ref={rMail}
            onChange={hUser}/>
             <input className=" border-2 w-[80%] rounded-md h-10 p-2 my-2 " type="password" placeholder="Password" required
            onChange={hPw1}/>
            <input className=" border-2 w-[80%] rounded-md h-10 p-2 my-2 " type="password" placeholder="Confirm password" required
            onChange={hPw2}/>
            <input className="bg-white w-[60%] border-2 rounded-md h-10 p-1 my-4 cursor-pointer font-semibold"  type="submit" value="Sign Up"/>
                
                    <h3>Or</h3>
                    <button className="bg-white w-[80%] border-2 rounded-md h-10 p-1 my-3 font-semibold" onClick={googleLogin}>
                        <FcGoogle size={25} className="inline mr-3"/>
                        SignIn with Google</button>
                    
                    <h2 className="text-xs">Already have an account? <Link className="text-xxs border-b my-4 text-blue-400 darkmode-ignore"
                        to="/">login.</Link></h2>
            </form>
            </div>
        </>
    )
}
export default Signup;