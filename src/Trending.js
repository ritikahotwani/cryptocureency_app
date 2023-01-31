import axios from "axios";
import { useEffect, useState } from "react";
import {AiFillFire} from "react-icons/ai"
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
    return (
<>        <h2 className="text-2xl mt-6 text-center font-semibold"><AiFillFire className="inline mb-1 text-orange-500 darkmode-ignore "/>Trending Coins</h2>

        <div className="mt-[7vh] max-w-2xl mx-auto rounded-md shadow-2xl text-center">

        <div className="m-auto max-w-[1000px] md:w-[80%]">

        <table className="min-w-[80%] m-auto">
            <tr  className=" h-[3rem] ">
            <th>#</th>
            <th></th>
            <th>ID</th>
            <th>NAME</th>
                {/* <th>ATH</th>
                <th>VOLUME</th> */}

            </tr>
           
{
coins.map((coin=>
    <tr className="border-b h-[3rem] ">
        <td className="text-center px-7">{coin.item.market_cap_rank}</td>
        <td><img src={coin.item.small} className="min-w-[20px] max-w-[30px]"></img></td>
        <td className="text-center px-7">{coin.item.id}</td>
        <td className="text-center">{coin.item.name}</td>

    </tr>           
        ))
}
        </table>           
</div>
            </div>
        </>
        );
}
export default Trending;