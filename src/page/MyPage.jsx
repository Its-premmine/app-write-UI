import React from "react";
import "./MyPage.scss"
import { useNavigate } from "react-router-dom";

const MyPage = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate('/')
    }
    return(
        <div >
            
            <div className="headearTag">
            
            <img src="https://framerusercontent.com/images/ba9osFXOxT2jz5pagZ7lDhnZDw.svg" alt="" className="chiImg" />
            <input type="button" value="Logout" className="headerButton" onClick={handleLogout}/>
            </div>
            <div className="mainBody">
                <div className="mybody">
                <h1 >
                    Chat,Call & Pay Securely
                </h1>
                
                
                
                <p className="secondHeadling">Simple, secure messaging,calling,and instant payments-all in one app. Currently beta testing in Zambia before an Africa wide roll-out</p>
                <input type="button" value="Try ChitChat-Because Money Talks" className="headerButton1"/>
                 </div>          
            </div>
        </div>
        
    )
}

export default MyPage