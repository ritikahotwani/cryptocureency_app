import NavBar from "./NavBar";
import axios from "axios";
import { useEffect, useState } from "react";
import {useLocation,Navigate,useNavigate} from "react-router-dom";
import { set, ref ,get,child,remove} from "firebase/database";
import { MdFavoriteBorder,MdFavorite  } from "react-icons/md";
import { Link } from "react-router-dom";
import db from "./FirebaseConfig";
import CoinRow from "./CoinRow";
import { AiFillQuestionCircle } from "react-icons/ai"
import Enquiry from "./Enquiry"
function Home() {
    const nav=useNavigate();

    const [coin, setCoin] = useState([]);
    const [currency, setCurrency] = useState("inr");
    const[username,setUsername]=useState("");
    const [fav, setFav] = useState([]);
    
    const hCurrency = (event) => { setCurrency(event.target.value); }
    useEffect(() => {
         let url='https://api.coingecko.com/api/v3/coins/markets?vs_currency='+currency+'&order=market_cap_desc&per_page=250&page=1&sparkline=false'
        console.log(url);
        axios.get(url)
            .then(res => {
               
                setCoin(res.data);
           })
            .catch(err => console.log(err));
 },[currency])

    
 
const loc=useLocation();
useEffect(()=>{
let u=localStorage.getItem("user");
if(u==null){
    nav("/");
}
else{
    setUsername(u);
    }
}, [])


    const [theme, setTheme] = useState(null);
    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme:dark)').matches) {
            setTheme('dark');
        }
        else
        {
            setTheme('light');

            }
    },[])
    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        }
        else {
            document.documentElement.classList.remove("dark");

        }
    }, [theme])
    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    }



    const [favArray, setFavArray] = useState([]);

    let userEmail=localStorage.getItem("userEmail");

    useEffect(() => { 
        let r = ref(db, "/users/" );
        get(child(r, userEmail.replace(".", "_")))
            .then(ss => {
                console.log(ss.val());
                if (ss.val() !== null)
                { setFavArray(ss.val()); }
            })
            .catch(err => console.log(err));
    }, [])
    

    const addFav = (id) => {
        console.log("hello add", id);
        setFavArray([...favArray, id]);
        let r = ref(db, "/users/" + userEmail.replace(".", "_"));
        set(r, [...favArray,id])
            .then(res => {
                console.log("saveeeeeed");
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        // console.log(favArray);
    },[favArray])



    const remFav = (id) => {
        console.log("bye add", id);
        const newArray = favArray.filter((coin) => coin !== id)
        console.log("new", newArray);
        setFavArray(newArray);
        let r = ref(db, "/users/" + userEmail.replace(".", "_"));
        set(r,newArray)
            .then(res => {
                console.log("removeddddddddddd");
                // window.location.reload();

            })
            .catch(err => console.log(err));
    }



    const displayArray = coin.filter((elem) => {
        if(favArray !==  null)
       { return favArray.some((ele) => {
            return ele === elem.id;
          });}
        });    
    console.log(displayArray,"shutup");







    let u=localStorage.getItem("user");




    return (
        <>
            
        <div className="fixed bottom-[64px] right-[32px] text-[#b1d4e0]">
                
                <Link to="/enquiry"><AiFillQuestionCircle size={50}
                /></Link>
        </div>
            
            <div className="flex flex-col items-center">

            <h1 className=" text-2xl text-center my-[1%] ">
                Welcome!  {u.split('@')[0]} 
            </h1>

                <select onChange={hCurrency} className=" darkmode-ignore m-auto bg-[#b1d4e0] rounded-xl min-w-[200px] text-center p-1 "
         >
          <option value="inr">INR</option>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="gbp">GBP</option>
          <option value="jpy">JPY</option>
          <option value="chf">CHF</option>
          <option value="cad">CAD</option>
          <option value="zar">ZAR</option>
        </select>
                



            <div className="mt-[4vh] mb-[7vh]  mx-auto rounded-md 
            shadow-lg  text-center overflow-auto  p-3   pt-1">
            <div className="m-auto max-w-[1000px]  ">
                <table>
                    <tbody>
                    <tr  className= "h-[3rem] ">
                            <th> </th>
                            <th className="">#</th>
                            <th> </th>
                            <th className="">Name</th>
                            <th>Id</th>
                            <th>Current price</th>
                            <th>ATH</th>
                            <th>Volume</th>
                    </tr>
                        {
                            displayArray.map((e =>
                                <CoinRow
                                    key={e.id}
                                    rank={e.market_cap_rank}
                                    imgsrc={e.image}
                                    name={e.name}
                                    id={e.id}
                                    price={e.current_price}
                                    ath={e.ath}
                                    vol={e.total_volume}
                                    addFav={addFav}
                                    remFav={remFav}
                                    isFavList={true}
                                />
                            
                            ))
                                            }
                        </tbody>
                        </table>    
                    </div>
            </div>     





            <div className="m-auto max-w-[1000px] md:w-[80%] ">
                <table className="lg:w-[80%] m-auto">
                    <tbody>
                    <tr  className=" h-[3rem] ">
                    <th> </th>
                            <th className="">#</th>
                            <th> </th>
                            <th>Name</th>
                            <th>Id</th>
                            <th>Current price</th>
                            <th>ATH</th>
                            <th>Volume</th>
                    </tr>
                        {
                            coin.map((e =>
                                <CoinRow
                                    key={e.id}
                                    rank={e.market_cap_rank}
                                    imgsrc={e.image}
                                    name={e.name}
                                    id={e.id}
                                    price={e.current_price}
                                    ath={e.ath}
                                    vol={e.total_volume}
                                    addFav={addFav}
                                    remFav={remFav}
                                    isFavList={favArray.some( ai => e.id===ai )}
                                    // let isFounded = favArray.some( ai => e.id===ai );

                                />
                            
                            ))
                                            }
                        </tbody>
                </table>    
            </div>       
            </div>
        </>
    );
}

export default Home;