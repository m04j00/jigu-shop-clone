import React from "react";

function Footer(){
    return(
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
    )
}
export default Footer;