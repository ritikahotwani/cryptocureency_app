import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
function Signup() {
    const nav=useNavigate();
    const[user,setUser]=useState("");
    const[pw1,setPw1]=useState("");
    const[pw2,setPw2]=useState("");
    const [ans, setAns] = useState("");
    const hUser=(event)=>{setUser(event.target.value);}
    const hPw1=(event)=>{setPw1(event.target.value);}
    const hPw2=(event)=>{setPw2(event.target.value);}
   
    const save=(event)=>{
        event.preventDefault();
        if(pw1==pw2){
            const auth=getAuth();
            createUserWithEmailAndPassword(auth,user,pw1)
            .then(res=>nav("/login"))
            .catch(err=>setAns("issue "+err));
        }
        else{
            setAns("passwords dont match");
        }
    }
   
    return (
        <>
            <NavBar/>
        <form onSubmit={save}>
            <input type="email" placeholder="enter reg email"
            onChange={hUser}/>
                        <br/><br/>

             <input type="password" placeholder="enter pass"
            onChange={hPw1}/>
            <br/><br/>
            <input type="password" placeholder="confirm pass"
            onChange={hPw2}/>
            <br/><br/>
            <input type="submit" value="Login"/>
            <br/><br/>
            </form>
            <h1>{ans}</h1>
        </>
    )
}
export default Signup;