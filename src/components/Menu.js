import React, { useState } from "react";
import './css/Menu.css';

function Menu(){
    const [menu, setMenu] = useState('');

    return(
        <div class='menu-container'>
            <ul>
                <li class='green-btn' onClick={() => {setMenu('MADE')}}>MADE</li>
                <li class='green-btn'>장보기</li>
                <li class='green-btn'>지구소개</li>
                <li class='green-btn'>게시판</li>
                <li class='green-btn'>콘텐츠</li>
                <li class='green-btn'>제안하기</li>
                <li class='green-btn'>대량주문</li>
            </ul>
        </div>
    )
}
export default Menu;