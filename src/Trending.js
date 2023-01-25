import axios from "axios";
import { useEffect, useState } from "react";

function Trending() {
    const [coins, setCoins] = useState([])

    useEffect(() => {
        let url = 'https://api.coingecko.com/api/v3/search/trending';
        axios.get(url)
            .then(
                res => {
                    // console.log(res.data);
                   setCoins(res.data.coins);
            }
        )
        .catch(err=>{console.log(err)})
    }, [])
    return ( <div>
        <h2>Trending</h2>
        <table border="5" style={{width: "70%"}}>
            <tr>
<th></th>
            <th>NAME</th>
            <th>ID</th>
                <th>RANK</th>
                {/* <th>ATH</th>
                <th>VOLUME</th> */}

            </tr>
           
{
coins.map((coin=>
    <tr style={{ "textAlign": "center" }}>
        <td><img src={coin.item.small}></img></td>
        <td>{coin.item.name}</td>

    <td>{coin.item.id}</td>

    <td>{coin.item.market_cap_rank}</td>

        
        

</tr>
))
}
        </table>           

        </div>);
}
export default Trending;