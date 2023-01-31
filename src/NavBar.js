import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { GiTwoCoins } from "react-icons/gi";
import { getAuth, signOut } from "firebase/auth";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsMoon, BsSun } from "react-icons/bs";
import Darkmode from 'darkmode-js';
import {AiOutlineLogout} from "react-icons/ai"

function NavBar() {
    const user =localStorage.getItem("user");
    const [isProfileMenu, setIsProfileMenu] = useState(false);
    const nav=useNavigate();

    const lo=(event)=>{
        event.preventDefault();
        const auth=getAuth();
        localStorage.clear();
        setIsProfileMenu(false);
        signOut(auth)
        .then(res=>nav("/"))
        .catch(err=>console.log(err));
    }
    


    const changepassword = (event) => {
        nav("/changepassword")
    }

    let defaultProfileImage ="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541";

    let googleUserInfo = ""

	if ( localStorage.getItem("loginType") === "google" )
		googleUserInfo = JSON.parse(localStorage.getItem('googleUserInfo'))
	else
		googleUserInfo = ""

    

    const [isHamMenu, setIsHamMenu] = useState(false);

//   const options = {
//     bottom: '64px', // default: '32px'
//     right: 'unset', // default: '32px'
//     left: '32px', // default: 'unset'
//     time: '0.5s', // default: '0.3s'
//     mixColor: '#fff', // default: '#fff'
//     backgroundColor: '#fff',  // default: '#fff'
//     buttonColorDark: '#100f2c',  // default: '#100f2c'
//     buttonColorLight: '#fff', // default: '#fff'
//     saveInCookies: false, // default: true,
//     label: '🌓', // default: ''
//     autoMatchOsTheme: true // default: true
//   }
    
  
    // const darkmode = new Darkmode(options);

    // console.log(darkmode.isActivated())
    // const[isDarkMode,setIsDarkMode]=useState(darkmode.isActivated())
    // darkmode.showWidget();
    let u=localStorage.getItem("user");

    return (
        <>
            
            <div className="flex items-center justify-between m-auto py-5  p-3 max-w-[1200px] "> 
                <Link to="/home"><div className="flex gap-2 items-center">
                    <GiTwoCoins className="inline" size={40} />
                    <h2 className="text-3xl  font-mono font-semibold"><span className="text-4xl font-serif font-bold ">K</span>rypto </h2>
                </div>
                </Link>
                <div className="relative flex items-center gap-2 text-gray-400 "> 
                    <div className=" gap-2 hidden md:flex">
                    {(user==null) && (<Link to="/">Login</Link>)}
                    {(user == null) && (<Link to="/signup">SignUp</Link>)}
                    {(user==null) && (<Link to="/forgotpassword">Forgot Password</Link>)}
                    {(user!=null)&&(<Link to="/">Home</Link>)}
                    {(user!=null)&&(<Link to="/description">Coins</Link>)}
                    {(user!=null)&&(<Link to="/historychart">History</Link>)}
                    {(user!=null)&&(<Link to="/news">News</Link>)}
                    {(user!=null)&&(<Link to="/about">About</Link>)}
                    </div>

                    <div><RxHamburgerMenu className="cursor-pointer md:hidden"
                        onClick={() => {
                            setIsHamMenu(!isHamMenu);
                    }}
                        size={20} /></div>
                    <div className={`absolute top-10 right-9 p-3 rounded-md border-2  bg-white text-black 
                        ${isHamMenu ? "" : "scale-0" } transition-all className="border-b"
                    `}>
                       <div className="flex gap-2 flex-col min-w-[100px] text-center ">
                    {(user==null) && (<Link className="border-b" to="/">Login</Link>)}
                    {(user == null) && (<Link className="border-b" to="/signup">SignUp</Link>)}
                    {(user==null) && (<Link className="border-b" to="/forgotpassword">Forgot Password</Link>)}
                    {(user!=null)&&(<Link className="border-b" to="/">Home</Link>)}
                    {(user!=null)&&(<Link className="border-b" to="/description">Coins</Link>)}
                    {(user!=null)&&(<Link className="border-b" to="/historychart">History</Link>)}
                    {(user!=null)&&(<Link className="border-b" to="/news">News</Link>)}
                    {(user!=null)&&(<Link className="" to="/about">About</Link>)}
                    
                    </div>
                    
                    </div>

                    {/* {darkmode.isActivated()
                        ? <BsSun className="cursor-pointer"
                            onClick={() => {
                            darkmode.toggle();
                            console.log(darkmode.isActivated());
                            // setIsDarkMode(darkmode.isActivated());

                        }} />
                        : <BsMoon className="cursor-pointer"
                            onClick={() => {
                            darkmode.toggle()
                            console.log(darkmode.isActivated());
                            // setIsDarkMode(darkmode.isActivated())
                                
                        }} />} */}
                    
                    
                   
                    {(user != null) && ( <img src={googleUserInfo !== "" ? googleUserInfo.photoURL : defaultProfileImage}
                        onClick={() => {
                            setIsProfileMenu(!isProfileMenu);
                        }}
                        className="rounded-[50%] w-8 ml-2 cursor-pointer"
                    />
                    
                    
                    
                    )}
                   
                    
                    <div className={`absolute bg-white text-black  top-10 right-3  p-3 rounded-md  min-w-[120px] text-left border-2
                        ${isProfileMenu ? "" : "scale-0" } transition-all
                    `}>
                        <ul>
                            <li className="cursor-pointer border-b-2 py-2" onClick={changepassword}>Change Password</li>
                            <li className="cursor-pointer border-b-2 py-2 flex items-center"  onClick={lo}>Logout <AiOutlineLogout size={16} className="ml-2 inline"/> </li>
                        </ul>
                    </div>
                        
               </div>

            </div>
        </>
    );
}
export default NavBar;