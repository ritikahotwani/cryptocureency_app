import NavBar from "./NavBar";
import {useState} from "react";
import {getAuth,sendPasswordResetEmail} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {useEffect,useRef} from "react";

function ForgotPassword(){
    const nav=useNavigate();
    const[user,setUser]=useState("");
    const[ans,setAns]=useState("");

    useEffect(() => {
        rMail.current.focus();
        const user =localStorage.getItem("user");
        if(user!=null){
            nav("/home");
        }
    },[]);
    const hUser=(event)=>{setUser(event.target.value);}

    const rMail = useRef();
    const save=(event)=>{
        event.preventDefault();
        
            const auth=getAuth();
            sendPasswordResetEmail(auth,user)
                .then(res => {
                alert("Check You Mail")
                    nav("/")
                    rMail.current.focus();
                })
                .catch(err => setAns("issue " + err));
        }
     
    return(
        <>

            <div className="mt-[20vh] max-w-sm mx-auto rounded-md shadow-xl text-center">

            <h1 className="text-3xl font-semibold p-3 text-[#b1d4e0] darkmode-ignore ">Forgot Password</h1>
                <form className="p-5 flex flex-col items-center"
                    onSubmit={save}>
                <input className=" border-2 w-[80%] rounded-md h-10 p-2 "
                    type="email" placeholder="Email"required ref={rMail}
            onChange={hUser}/>
          
            <br/><br/>
                <input className="bg-white w-[60%] border-2 rounded-md h-10 p-1 my-2 font-semibold "
                    type="submit" value="Reset" />
                    <br /><br />
                </form>
                </div>

            <h1>{ans}</h1>

        </>
    );
}
export default ForgotPassword;