import NavBar from "./NavBar";
import {useState} from "react";
import emailjs from "@emailjs/browser";
import { useEffect,useRef } from "react";
function Enquiry(){

    const [name,setName]=useState("");
    const [phone,setPhone]=useState("");
    const [query,setQuery]=useState("");
    const [ans,setAns]=useState("");

    const rName = useRef();

    const hName=(event)=>{setName(event.target.value);}
    const hPhone=(event)=>{setPhone(event.target.value);}
    const hQuery=(event)=>{setQuery(event.target.value);}

    const save=(event)=>{
        event.preventDefault();
        let data={"from_name":name,
                    "from_phone":phone,"message":query};
        emailjs.send("service_0doluwf", "template_xa3kngl", data, "tmb5zXdqDfmOkGxwN")
            .then(res => {
                alert("We recived your query,reach back to you soon!");
                rName.current.focus();
            })
        .catch(err=>console.log(err));
    }

    useEffect(() => {
        rName.current.focus();

},[])


    return(
        <>
            <h1 className="text-3xl font-semibold p-2 text-blue-400 text-center my-auto mt-[5vh]">Need Help?</h1>
            <div className="mt-[10vh] max-w-sm mx-auto my-auto rounded-md shadow-2xl text-center p-3 ">

                    <form className="p-3 flex flex-col gap-3 items-center"
                        onSubmit={save}>
                        <input className=" border-2 w-[80%] rounded-md  p-2 "
                            type="text" placeholder="Name" onChange={hName} ref={rName} required />

               
                        <input className=" border-2 w-[80%] rounded-md  p-2 "
                            type="number" placeholder="Phone" onChange={hPhone} />

                        <textarea className=" border-2 w-[80%] rounded-md  p-2 resize-none"
                            placeholder="Query" rows={5} cols={25} onChange={hQuery} required />

                        <input className="bg-white w-[60%] border-2 rounded-md h-10 p-1 my-2 "
                            type="submit" />
            </form>
            </div>
        </>
    );
}
export default Enquiry;