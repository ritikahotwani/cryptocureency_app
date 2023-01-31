import NavBar from "./NavBar";
import { Link } from "react-router-dom";

import {AiFillGithub,AiFillLinkedin,AiFillMail} from "react-icons/ai"
function About() {
    
    return (
        <>
        <div class="text-center max-w-[80%] m-auto">
            <p className="text-md p-7">Cryptocurrency is a digital payment system that doesn't rely on banks to verify transactions. It’s a peer-to-peer system that can enable anyone anywhere to send and receive payments. Instead of being physical money carried around and exchanged in the real world, cryptocurrency payments exist purely as digital entries to an online database describing specific transactions. When you transfer cryptocurrency funds, the transactions are recorded in a public ledger. Cryptocurrency is stored in digital wallets.
            Cryptocurrencies run on a distributed public ledger called blockchain, a record of all transactions updated and held by currency holders.
            You can learn about the different coins and currencies in th market by clicking <Link className="text-blue-500 darkmode-ignore" to="/description">here.</Link></p>
        </div>
                
            <div className="max-w-2xl  mx-auto rounded-md shadow-lg text-center">
            <p>
                <h1 className="text-2xl text-center darkmode-ignore text-blue-300   my-3">
                    Features
                </h1>
                <ul className=" p-2 list-disc text-left px-12 mb-6 flex flex-col gap-3">
                <li>Firebase authentication for email & password login and google signIn</li>
                <li>Light and Dark theme supported</li>
                 <li>Various currency </li>
                 <li>Coin description</li>
                 <li>Trending coins</li>
                 <li>Favourite coins tracking</li>
                 <li>Current data about the coins</li>
                 <li>Visual display based on historical data</li>
                 <li>Query service</li>
                </ul>

                </p>
             </div>
                
            <footer className="border-t text-l m-auto p-3 min-w-[100%] -z-10">
                <h2 className="text-xl t  my-3 text-blue-300 darkmode-ignore">Cryptocurrency Web-application</h2>
                <p>Greetings, I'm a computer science student studying for my bachelor's degree at Mumbai University.
                I am passionate about web applications. This is a web application for cryptocurrecny users. Thank you for visiting.</p>
               
                <div className="flex gap-6 m-auto justify-center pb-2">
                    
                    <a target="_blank" href="https://www.linkedin.com/in/ritika-hotwani-46a651201/"><AiFillLinkedin size={25}/></a>
                    <a target="_blank" href="mailto:ritikahotwani24@gmail.com"><AiFillMail size={25} /></a>
                    <a target="_blank" href="https://github.com/ritikahotwani"><AiFillGithub size={25}/></a>
                </div>

                {/* <AiFillGithub className="cursor-pointer"
                    onClick={<a target="_blank" href="https://github.com/ritikahotwani">Git</a>
                }/> */}
                {/* <div className="flex justify-center px-9" >
				<h1 className="text-black  text-xl flex justify-center px-9 my-4 ">© 2023 | Ritika Hotwani</h1>
                <span className="text-l text-black-200 m-auto">~Ritika Hotwani</span>


<</div> */}
                <h1 className=" text-center font-serif  ">© 2023 | Ritika Hotwani</h1>
            </footer>

        </>
    );

}
export default About;

