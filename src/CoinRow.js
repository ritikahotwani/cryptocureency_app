import { useState } from "react";
import { MdFavoriteBorder,MdFavorite  } from "react-icons/md";
import { Link } from "react-router-dom";
function CoinRow({rank,imgsrc,name,id,price,ath,vol,addFav,remFav,isFavList}) {
    const [isFav, setIsFav] = useState(isFavList===true ? true:false);

    const hIsFav = (event) => {
        if (isFav === false) {
            addFav(id);
        }
        else if(isFav === true) {
            remFav(id);
        }
        setIsFav(!isFav);

    };
    return (
        <>
              <tr className="border-b h-[3rem] ">
                                    <td>
                                        {
                                            isFavList 
                                            ? <MdFavorite className="cursor-pointer" onClick={hIsFav}/>
                                            : <div>
                                                {
                                                isFav === false
                                                ? <MdFavoriteBorder className="cursor-pointer " onClick={hIsFav}/>
                                                : <MdFavorite className="cursor-pointer " onClick={hIsFav}/>
                                                 }
                                            </div>
                                        }
                                        
                                        
                                    </td>
                                    <td className="text-center " id="urank">{rank}</td>
                                    <td><img className="min-w-[20px] max-w-[30px] "
                                        src={imgsrc}></img></td>
                                    <td className="text-center"><Link to="/description">{name}</Link></td>
                                    <td className="text-center"  id ="uid">{id}</td>
                                    <td  className="text-right" id="uprice">{price}</td>
                                    <td className="text-right"  id="uath">{ath}</td>
                                    <td className="text-right"  id="uvol">{vol}</td>
                            </tr>
        </>
    );
}
export default CoinRow;