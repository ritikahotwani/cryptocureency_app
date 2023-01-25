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
            <NavBar/>
            
            <Trending />
            <br/><br/>
            <br/>
            <h1>
                Know Your Coins!
            </h1>
            <br/><br/>

            <div>
            
            {
                    info.map((i =>
                        <p>          
                            <img src={i.image}/>
                            <h1>This is {i.name}</h1>
                            <h1>with id: {i.id}</h1>
                            <h2>Estabilished in: {i.year_established}</h2>
                            <h1>Origin: {i.country}</h1>
                            <h3>{i.description}</h3>
                            <h1>Trust Score rank would be: {i.trust_score_rank}</h1>

                        </p>
    ))
}

            </div>
        </>
    )
}
export default Description;