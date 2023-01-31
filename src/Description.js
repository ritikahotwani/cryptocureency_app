import axios from "axios";
import { useEffect, useState } from "react";
import Trending from "./Trending";
import NavBar from "./NavBar";
function Description() {
    const [info, setInfo] = useState([])

   
    useEffect(() => {
        let url = 'https://api.coingecko.com/api/v3/exchanges';
        axios.get(url)
            .then(
                res => {
                    setInfo(res.data);
            }
        )
        .catch(err=>{console.log(err)})
    },[])
    return (
        <>
            
            <Trending />
            <br/><br/>
            <br/>
            <h1 className="text-2xl text-center  fon-semibold">
                Know your Coins!
            </h1>
            <br/><br/>

            <div className="news-container max-w-[1000px]  m-auto sm:w-[80%]">
            
            {
                    info.map((i =>
                            <div className=" max-w-[1000%] sm:max-w-[350px] shadow-xl  bg-[#b1d4e0] darkmode-ignore  border-solid-black rounded-md text-center px-1 hover:scale-105 transition-all">
                                <div className="p-3 ">
                                <img className="m-auto rounded-[50%] overflow-hidden "
                                    src={i.image} onMouseOver={i.trade_volume_24h_btc} />
                                </div>
                                <h3 className="text-xl text-center">{i.name}</h3>
                                <h3 className="text-md text-center">id: {i.id}</h3>
                                <h3 className="text-l text-center">Origin: {i.country}</h3>
                                <h3 className="text-sm text-center p-1 ">{i.description}</h3>
                                <h3 className="text-l text-center py-[2px]">{i.year_established}</h3>
                                <h3 className="text-sm text-center py-[2px]"># {i.trust_score_rank}</h3>
                            </div>
    ))
    
}
                            

            </div>
        </>
    )
}
export default Description;