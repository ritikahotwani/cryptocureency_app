import NavBar from "./NavBar";
import {useState} from "react";
import {getAuth,updatePassword,onAuthStateChanged} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {useEffect,useRef} from "react";

function ChangePassword(){
    const nav=useNavigate();
    const[pw1,setPw1]=useState("");
    const[pw2,setPw2]=useState("");
    const[ans,setAns]=useState("");
    const rFocuspw = useRef();
    useEffect(()=>{
        const user =localStorage.getItem("user");
        if(user==null){
            nav("/");
        }
    },[]);
    const hPw1=(event)=>{setPw1(event.target.value);}
    const hPw2=(event)=>{setPw2(event.target.value);}

    useEffect(() => {
        rFocuspw.current.focus();

},[])

    const save=(event)=>{
        event.preventDefault();
        if(pw1==pw2){
            const auth=getAuth();
            onAuthStateChanged(auth,(user)=>{
                updatePassword(user,pw1)
           
            .then(res=>{
                localStorage.clear();
                nav("/")})
            .catch(err=>setAns("issue "+err));
                rFocuspw.current.focus();
        })
    }
        else{
            alert("passwords don,t match");
        }
    }
    return(
        <>

                <div className="mt-[20vh] max-w-sm mx-auto rounded-md shadow-xl text-center">
            <h1 className="text-3xl font-semibold p-3 text-[#b1d4e0] darkmode-ignore ">Change Password</h1>
                <form className="p-5 flex flex-col items-center"
                    onSubmit={save}>
                    <input className=" border-2 w-[80%] rounded-md text-center my-4  h-10 p-4 m-auto "
                        type="password" placeholder="New password" required ref={rFocuspw}
            onChange={hPw1}/>

                    <input className=" border-2 w-[80%] rounded-md h-10 text-center my-4  p-4 m-auto"
                        type="password" placeholder="Confirm password" required
            onChange={hPw2}/>

            <input className="m-auto border-2 bg-white min-w-[60%] text-lg cursor-pointer rounded-md h-10 p-1 my-5"type="submit" value="Reset"/>

                    </form>
                    </div>
           
        </>
    );
}
export default ChangePassword;