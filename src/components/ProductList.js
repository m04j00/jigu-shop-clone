import React from "react";
import './css/ProductList.css';
import list from '../data/list.json';
import { Link } from 'react-router-dom';
function ProductList(){
    return(
        <div className="list-container">
            {
                list.map((data, i) => {
                    return(
                        <Link to={'/product/' + data.id}>
                            <li className="list-li">
                                <img className="list-img" src={data.img}></img>
                                <p className="list-name">{data.name}</p>
                                <p className="list-price">{data.price}원</p>
                                <span className="list-tag">NEW</span>
                            </li>
                        </Link>

                    )
                })
            }

        </div>
    )
}
export default ProductList;