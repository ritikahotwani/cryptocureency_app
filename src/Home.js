import NavBar from "./NavBar";
import axios from "axios";
import { useEffect, useState } from "react";
import {useLocation,Navigate,useNavigate} from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { set, ref ,get,child} from "firebase/database";

// import Favorites from "./Favorites";
// import Description from "./Description";
import { Link } from "react-router-dom";
import db from "./FirebaseConfig";
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

    
 const lo=(event)=>{
    event.preventDefault();
    const auth=getAuth();
    localStorage.clear();
    signOut(auth)
    .then(res=>nav("/login"))
    .catch(err=>console.log(err));
}

const loc=useLocation();
useEffect(()=>{
let u=localStorage.getItem("user");
if(u==null){
    nav("/login");
}
else{
    setUsername(u);
    }
}, [])
    
    const [thirdArray, setThirdArray]=useState([]);
    const addFav = (id) => {
        fav.push({id})
        console.log(fav);
        saveThirdArray();

    }
    const saveThirdArray = () => {
        let  finalArray = coin.filter((elem) => {
         return fav.some((ele) => {
        return ele.id === elem.id;    
        });
        });
        console.log(finalArray);
        setThirdArray(finalArray);
        set(ref(db, "/users/" + userEmail.replace(".", "_")), thirdArray)
            .then(console.log("stored"))
            .catch(err=>console.log(err))
        }
        
    // useEffect(() => {
    // }, [fav])
    
    const remFav = (id) => {
        const newfav = fav.filter(coin => coin.id !== id);
        setFav(newfav);
        saveThirdArray();

    }
    let userEmail=localStorage.getItem("userEmail")
    console.log(thirdArray);

    const [info,setInfo]=useState([]);
    // useEffect(()=>{
    //     let r =ref(db);
    //     get(child(r,"users/"+ userEmail.replace(".", "_")))
    //     .then((ss)=>{
    //         if(ss.exists()){
    //             let data=ss.val();
    //             console.log("data:",data);

    //             Object.values(data).map((d)=>{
    //                 setInfo((olddata)=>[...olddata,d]);
    //             });
    //             console.log("info:",info);

    //         }
    //         else{
    //             console.log("no data found");
    //         }
    //     })
    //     .catch(err=>console.log(err));
    // },[]);

    return (
        <><center>
            <NavBar />
            
            <h1>{username}</h1>
            <form onSubmit={lo}>
                <input type="submit" value="LOGOUT"/>
{/* logout icon */}
            </form>
            <h1>Your Favorites</h1>
          
            <table>
            <tr>
            <th>NAME</th>
            <th>ID</th>
            <th>CURRENT PRICE</th>
            <th>RANK</th>
            <th>ATH</th>
            <th>VOLUME</th>
            </tr>
            {
        thirdArray.map((e=>
        <tr style={{ "textAlign": "center" }}>

        <td><Link to="/description">{e.name}</Link></td>
            <td id ="uid">{e.id}</td>
            <td id="uprice">{e.current_price}</td>
            <td id="urank">{e.market_cap_rank}</td>
            <td id="uath">{e.ath}</td>
            <td id="uvol">{e.total_volume}</td>


            <button onClick={()=>{remFav(e.id)}}>rem</button>


    </tr>
    ))
                    }
               
            </table>
            
            <div className="count">
                
                <h1>
                    CURRENCIES
                </h1>
                <input type="radio" name="currency" value="inr" onChange={hCurrency} defaultChecked={true} />INR
                <input type="radio" name="currency" value="usd" onChange={hCurrency}/>USD
                <input type="radio" name="currency" value="eur" onChange={hCurrency}/>EUR
                <input type="radio" name="currency" value="gbi" onChange={hCurrency}/>GBI
                <input type="radio" name="currency" value="jpy" onChange={hCurrency}/>JPY
                <input type="radio" name="currency" value="chf" onChange={hCurrency} />CHF
                <input type="radio" name="currency" value="cad" onChange={hCurrency} />CAD
                <input type="radio" name="currency" value="zar" onChange={hCurrency}/>ZAR


            </div>
            <table border="5" style={{ width: "70%" }}>
                <tbody>
                <tr>
                    <th></th>
                <th>NAME</th>
                    <th>ID</th>
                    <th>CURRENT PRICE</th>
                    <th>RANK</th>
                    <th>ATH</th>
                    <th>VOLUME</th>
                    <th>favourites</th>

                </tr>
               
{
    coin.map((e=>
        <tr style={{ "textAlign": "center" }}>
        <td><img src={e.image}></img></td>
        <td><Link to="/description">{e.name}</Link></td>
            <td id ="uid">{e.id}</td>
            <td id="uprice">{e.current_price}</td>
            <td id="urank">{e.market_cap_rank}</td>
            <td id="uath">{e.ath}</td>
            <td id="uvol">{e.total_volume}</td>

            <button onClick={() => { addFav(e.id) }}>add</button>



    </tr>
    ))
                    }
                    </tbody>
            </table>           
            </center>
        </>
    );
}

export default Home;