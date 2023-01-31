import { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./NavBar";
function News() {
    const[info, setInfo] = useState([]);
    let u=localStorage.getItem("user");

    useEffect(() => {

const options = {
  method: 'GET',
  url: 'https://crypto-news34.p.rapidapi.com/news/cryptonews',
  headers: {
    'X-RapidAPI-Key': '17557fc315mshe0bbf8c6a418754p1b7babjsn3596e4c7b90e',
    'X-RapidAPI-Host': 'crypto-news34.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	setInfo(response.data);
}).catch(function (error) {
    console.error(error);
    const options = {
        method: 'GET',
        url: 'https://crypto-news34.p.rapidapi.com/news/cryptonews',
        headers: {
          'X-RapidAPI-Key': '387056f89amsh5d2ca1e9016ee25p114b6fjsnafffbfa4c8b6',
          'X-RapidAPI-Host': 'crypto-news34.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
          setInfo(response.data);
      }).catch(function (error) {
          console.error(error);


const options = {
    method: 'GET',
    url: 'https://bitcoin-news1.p.rapidapi.com/news',
    headers: {
      'X-RapidAPI-Key': 'bfd2093d80msh5feb6eb415aec1ep1ef4eajsn6711a51e28ce',
      'X-RapidAPI-Host': 'bitcoin-news1.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
      setInfo(response.data);
  }).catch(function (error) {
      console.error(error);


const options = {
  method: 'GET',
  url: 'https://bitcoin-news1.p.rapidapi.com/news',
  headers: {
    'X-RapidAPI-Key': '387056f89amsh5d2ca1e9016ee25p114b6fjsnafffbfa4c8b6',
    'X-RapidAPI-Host': 'bitcoin-news1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	setInfo(response.data);
}).catch(function (error) {
    console.error(error);
    const options = {
        method: 'GET',
        url: 'https://crypto-news11.p.rapidapi.com/cryptonews/bitcoin',
        params: {max_articles: '10', last_n_hours: '48', top_n_keywords: '10'},
        headers: {
          'X-RapidAPI-Key': '387056f89amsh5d2ca1e9016ee25p114b6fjsnafffbfa4c8b6',
          'X-RapidAPI-Host': 'crypto-news11.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
          setInfo(response.data.articles);
      }).catch(function (error) {
          console.error(error);


const options = {
  method: 'GET',
  url: 'https://crypto-news11.p.rapidapi.com/cryptonews/bitcoin',
  params: {max_articles: '10', last_n_hours: '48', top_n_keywords: '10'},
  headers: {
    'X-RapidAPI-Key': 'bfd2093d80msh5feb6eb415aec1ep1ef4eajsn6711a51e28ce',
    'X-RapidAPI-Host': 'crypto-news11.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
    console.error(error);
    const options = {
        method: 'GET',
        url: 'https://crypto-news34.p.rapidapi.com/news/cryptonews',
        headers: {
          'X-RapidAPI-Key': 'bfd2093d80msh5feb6eb415aec1ep1ef4eajsn6711a51e28ce',
          'X-RapidAPI-Host': 'crypto-news34.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
          console.log(response.data);
      }).catch(function (error) {
          console.error(error);

        const options = {
            method: 'GET',
            url: 'https://crypto-news-live9.p.rapidapi.com/news/CryptoNews',
            headers: {
              'X-RapidAPI-Key': '439c26f6a8mshe5720aa5eef71c2p1532f5jsnae65400b4bf8',
              'X-RapidAPI-Host': 'crypto-news-live9.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
              setInfo(response.data);
          }).catch(function (error) {
              console.error(error);
          });
      });
});
      });
});
  });

      });
});




     }, []);
    return (
        <>

         <h1 className="mb-[1rem] text-xl text-center">
                Hello!  {u.split('@')[0]} 
            </h1>
            <h2 className="mb-[1rem] text-lg text-center">Loading some latest crypto gossip for you...</h2>
            
        <div className="news-container max-w-[1000px] m-auto sm:w-[80%] ">
            {
            info.map((a) => (
                <div className=" max-w-[100%] mt-[1vw] sm:max-w-[350px] bg-[#b1d4e0] darkmode-ignore rounded-md text-center p-4 hover:scale-105 transition-all ">
                   <h3 className="text-xs text-left">Source: {a.source}</h3>
                    <h2>{a.title}</h2>
                    <a className="text-blue-600" href={a.url} target="_blank"> Read Me</a>
                    
                  
                </div>
            ))
            }
        </div>
              </>
    )
      
}
export default News;




