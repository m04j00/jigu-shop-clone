import React from "react";
import Navbar from './Navbar';
import Menu from './Menu';
import ProductList from './ProductList';
import banner from './image/banner.jpg';
import './css/Main.css'
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
            <br/>
            <div className="footer">
                <div className="footer-left">
                    <img className="footer-logo" src='https://cdn.imweb.me/thumbnail/20220217/a5d090c029b04.png'></img>
                </div>
                <div className="footer-right">
                    <p>이용약관 | 개인정보처리방침 | 도매 전용 B2B몰</p>
                    <div className="footer-detail">
                        <p>・ 회사명 : 주식회사 피스온테이블 | 대표자 : 김아리</p>
                        <p>・ 주소 : 서울특별시 동작구 성대로1길 16, 1층 | 이메일 : contact@jigushop.co.kr | 팩스 : 0303-3444-2050 </p>
                        <p>・ 사업자등록번호 : 689-86-00791 | 통신판매업신고 : 제2018-서울동작-0295 </p>
                        <p>・ 개인정보보호책임자 : 김아리 | 고객센터 : 02-812-2050 | 호스팅 제공자 : ㈜아임웹</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Main;