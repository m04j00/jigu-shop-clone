import React from "react";
import Navbar from './Navbar';
import Menu from './Menu';
import ProductList from './ProductList';
import banner from './image/banner.jpg';
import './css/Main.css'
import Footer from "./Footer";
function Main() {
    return(
        <div>
            <Navbar/>
            <br/>
            <Menu/>
            <img style={{width : '100%'}} src={banner}/>
            <div className="main-list">
                <div className="main-list-left">
                    <p className="main-list-left-p1"># BEST</p>
                    <p className="main-list-left-p2">제로웨이스트 입문자도<br/>
                        어려움 없이 사용할 수 있는<br/>
                        베스트 제품!
                    </p>
                    <img className="main-list-left-img" src='https://cdn.imweb.me/thumbnail/20220304/e7edd6d6a102d.jpg'></img>
                </div>
                <div className="main-list-right">
                    <ProductList/>
                </div>
            </div>
            <br/>
            <Footer/>
        </div>
    )
}
export default Main;