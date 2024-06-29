import React from 'react'

import style from './product.module.css';
import shopImg from "../../../Images/couch.png";
import classNames from "classnames/bind";

import Category from '../Category/category';
import Searchbar from '../../Search/Searchbar/Searchbar';
import { CartProvider } from 'react-use-cart';

const cx = classNames.bind(style);


export default function Products({children}) {
    
        
    return (
        
        <>
            <div className={cx("top_Shop")}>
                <div className={cx("container")}>
                    <div className={cx("row", "justify-content-between")}>
                        <div className={cx("top_left", "col-lg-5")}>
                            <h1>Modern interior <span className={cx("d-block")}>Design Studio</span></h1>
                            <p className={cx("mb-4")}>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>

                        </div>
                        <div className={cx("top_right", "col-lg-7")}>
                            <img src={shopImg} />
                        </div>
                    </div>
                </div>
            </div>
            {/* end top */}
            
            
            <Category />
            <Searchbar/>
            


            
            <CartProvider>
                {children}
            </CartProvider>









        </>


    )
}
