import React from "react";
import './css/Navbar.css'
import logo from './image/logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <div class="nav-container">
        <div class="logo-box">
            <Link to='/'><img class="logo" src={logo}/></Link>
        </div>
        
        <div class="nav-btn-box">
            <button class="green-btn">로그인</button>
            <button class="green-btn">회원가입</button>
            <button class="green-btn">장바구니</button>
        </div>
    </div>
    )
}
export default Navbar;