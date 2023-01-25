import { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./NavBar";
function News() {
    const[info, setInfo] = useState([]);
    let u=localStorage.getItem("user");

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://crypto-news34.p.rapidapi.com/news',
            headers: {
              'X-RapidAPI-Key': '439c26f6a8mshe5720aa5eef71c2p1532f5jsnae65400b4bf8',
              'X-RapidAPI-Host': 'crypto-news34.p.rapidapi.com'
            }
        };
    
          
            axios.request(options)
            .then(res=> {
                setInfo(res.data);
                console.log(res.data);
                })
            .catch(err=> {
              console.error(err);
          });

     }, []);
    return (
        <>
            <NavBar/>
         <h1>
            hello! {u} loading some latest crypto gossip...
        </h1>
        {
            info.map((a) => (
                <div>
                    <h2>{a.title}</h2>
                    <a href={a.url}> Read Me</a>
                    <h3>{a.source}</h3>
                    <hr/><hr/>
                </div>
        
                

            ))
            }
              </>
    )
      
}
export default News;




