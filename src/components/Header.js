import React, { useState } from 'react';
import foodLogo from'../../foodlogo.png';

const Header = () => {
    const [btnName, setBtnName] = useState(false);
    return (
        <div className='header' >
            <div className='logo-container'>
                <img className='logo' src={foodLogo} />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className='login-btn' onClick={() => 
                        {
                            setBtnName(!btnName);
                            // setTimeout(()=>{
                                console.log(btnName,"878787")
                            // },1000)
                        }}>{ btnName ? "Logout" : "Login" }</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;