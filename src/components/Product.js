import React from "react";
import { useParams } from "react-router-dom";
import Menu from "./Menu";
import Navbar from "./Navbar";
import './css/Product.css';
import data from '../data/product.json';
import Footer from "./Footer";

function Product() {
    const {id} = useParams();
    const product1 = data.filter(item => {
        return item.id == id;
    })
    const product = product1[0];
    return(
        <div>
            <Navbar/>
            <br/>
            <Menu/>
            
            <div className="product-container">
                <div className="product-explain">
                    <div className="product-explain-left">
                        <img className="product-explain-img" src={product.img}></img>
                    </div>
                    <div className="product-explain-right">
                        <p className="product-explain-name">{product.name}</p>
                        <p className="product-explain-price">{product.price}원</p>
                        <p className="product-explain-hr"/>
                        <p className="product-explain-explain">{product.explain}</p>
                        <div className="product-explain-basic-explain">
                            <p><b>원산지</b>  대한민국</p>
                            <p><b>브랜드</b>  지구샵</p>
                            <p><b>구매혜택</b>  300 포인트 적립예정</p>
                            <p><b>배송비</b>  3,000원(50,000원 이상 무료배송)</p>
                            <p><b>배송안내</b><br/>방문 수령 : 지구샵 연남점 (서울시 마포구 성미산로 155, 1층) / 방문수령 선택 시 방문수령 일자 및 시간을 입력해주세요. (Npay 구매 시 배송메모에 기재)</p>
                        </div>

                        <select name='receipt'>
                            <option value='택배'>택배</option>
                            <option value='방문 수령'>방문 수령</option>
                        </select>
                        <p><b>구성 *</b></p>
                        <select className="select" name='composition'>
                            <option value='0'>구성 (필수) </option>
                            <option value='1'>구성1 +2,000원</option>
                            <option value='2'>구성2 +2,500원</option>
                            <option value='3'>구성3 </option>
                        </select>
                        <div className="product-explain-btn-box">
                            <button className="product-explain-btn product-explain-btn-green">구매하기</button>
                            <button className="product-explain-btn">장바구니</button>
                            <button className="product-explain-btn">♡ 0</button>
                        </div>
                    </div>
                </div>
                <div className="product-btn-box">
                    <button style={{width:'33.33%'}}>상세정보</button>
                    <button style={{width:'33.33%'}}>구매평</button>
                    <button style={{width:'33.33%'}}>질문</button>
                </div>
                <img className="product-img" src={product["explain-img"]}></img>
            </div>
            <Footer/>
        </div>
    )
}

export default Product;