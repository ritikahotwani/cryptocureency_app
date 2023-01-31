import { RiHistoryLine } from "react-icons/ri";
import {BsGraphUp} from "react-icons/bs";
import {AiOutlineRise} from "react-icons/ai";
import React, {useEffect, useState} from "react";
import {Chart, Filler} from 'chart.js'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
// import { faker } from '@faker-js/faker'
import axios from "axios";
import NavBar from "./NavBar"
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const HistoryChart = () => {

    const [currency, setCurrency] = useState("inr");
    const hCurrency = (event) => { setCurrency(event.target.value); }
    const [id, setId] = useState("bitcoin");
    const hId = (event) => { setId(event.target.value); }
    // const[id,setId]=(event) => { setCurrency(event.target.value); }
	const [ coinData, setCoinData ] = useState([])
	const [ finalData, setFinalData ] = useState([])

	const [ days, setDays ] = useState(1);


	// const url = `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=${days}&interval=${days === 1 ? "minutely" : "daily"}`

	Chart.register(Filler)


  useEffect(() => {
    
    let newurl=`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=250&page=1&sparkline=false`
    axios.get(newurl)
        .then(res => {
           
            setFinalData(res.data);
            console.log(newurl);
       })
        .catch(err => console.log(err));
  },[])
  useEffect(() => {
    const url = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}&interval=${days === 1 ? "minutely" : "daily"}`
	axios.get(url)
		.then(res => {
            setCoinData(res.data.prices)
            console.log(url);
		})
		.catch(err => console.log(err))
  },[currency,id,days])

	const options = {
    responsive: true,
    scales: {
      x: {
         grid: {
            display: false
         }
      },
      y: {
         grid: {
            display: false
         }
      }
 },
	  plugins: {
		legend: {
        position: 'bottom',

		},
		title: {
		  display: true,
		  text: 'History',
      },
    
    },
    
	};
   
	// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

	const labels = coinData.map((coin) => {
		let date = new Date(coin[0]);
		// let time = `${date.getHours()}:${date.getMinutes()}`
		let time = date.getHours() + ":" + date.getMinutes();

    return days === 1 ? time : date.toLocaleDateString();
    
	})
	const data = {
	  labels,
	  datasets: [
		
		{
			label:finalData.map((coin)=>coin.id),
			data:coinData.map((coin) => coin[1]),
			borderColor: 'rgb(255, 99, 132)',
        fill: true,
       backgroundColor: 'rgba(255, 99, 132, 0.5)',
        elements: {
          point: {
            radius: 0
          }
        }

        


		}
	  ],
	};
 
	return(
        <>
            <h1 className="text-3xl text-center font-semibold my-3">
            Coin History
            </h1>
            {/* <div className="m-auto w-fit my-3 flex gap-1 flex-col md:flex-row">
              <div className="flex gap-3 text-left">
                <input className="-mx-2"  type="radio" name="currency" value="inr" onChange={hCurrency} defaultChecked={true} />INR
                <input className="-mx-2"  type="radio" name="currency" value="usd" onChange={hCurrency}/>USD
                <input className="-mx-2" type="radio" name="currency" value="eur" onChange={hCurrency}/>EUR
                <input className="-mx-2" type="radio" name="currency" value="gbi" onChange={hCurrency}/>GBI
              </div>
              <div className="flex gap-3 text-left">
                <input className="-mx-2" type="radio" name="currency" value="jpy" onChange={hCurrency}/>JPY
                <input className="-mx-2" type="radio" name="currency" value="chf" onChange={hCurrency} />CHF
                <input className="-mx-2" type="radio" name="currency" value="cad" onChange={hCurrency} />CAD
                <input className="-mx-2" type="radio" name="currency" value="zar" onChange={hCurrency}/>ZAR
              </div>
            </div>
			 */}
      <div className="flex flex-col sm:flex-row gap-1 md:gap-2 m-auto max-w-[80%] my-4 mt-9 text-xl">
        <select className="bg-[#b1d4e0] darkmode-ignore rounded-md text-center p-1 outline-none w-[100%] sm:w-[60%]" onChange={hId} >  
                {/* <option> ---Choose coin--- </option>   */}
                {
                        finalData.map((coin)=>
                        <option>{coin.id}</option>
                    )
                } 
        </select> 

        <select onChange={hCurrency} className="bg-[#b1d4e0] darkmode-ignore rounded-md text-center p-1 outline-none w-[100%] sm:w-[40%]"
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

      </div>   
            

			<Line className="max-w-[1200px] min-w-[400px] m-auto w-[80%]" options={options} data={data} />
      
      <div className="text-sm m-auto w-fit">
        <button className={`border-2 p-2 rounded-lg border-black mx-2 py-1 ${days===1 ? "bg-[#b1d4e0] darkmode-ignore" : null}`}
          onClick={() => setDays(1)}>Today</button>
        <button className={`border-2 p-2 rounded-lg border-black mx-2 py-1 ${days===7 ? "bg-[#b1d4e0] darkmode-ignore" : null}`}
          onClick={() => setDays(7)}>7 Days</button>
        <button className={`border-2 p-2 rounded-lg border-black mx-2 py-1 ${days===30 ? "bg-[#b1d4e0] darkmode-ignore" : null}`}
          onClick={() => setDays(30)}>30 Days</button>
        <button className={`border-2 p-2 rounded-lg border-black mx-2 py-1 ${days===122 ? "bg-[#b1d4e0] darkmode-ignore" : null}`}
          onClick={() => setDays(122)}>6 Months</button>
        <button className={`border-2 p-2 rounded-lg border-black mx-2 py-1 ${days===365 ? "bg-[#b1d4e0] darkmode-ignore" : null}`}
          onClick={() => setDays(365)}>1 Year</button>
      </div>
		</>
	)
}

export default HistoryChart;
