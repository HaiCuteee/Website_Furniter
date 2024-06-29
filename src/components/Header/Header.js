import React from 'react'
import {  NavLink } from 'react-router-dom';
import style from './header.module.css';
import classNames from "classnames/bind";
const cx = classNames.bind(style);



export default function Header() {
    return (
        

      <div className={cx("containerr")}>
                <div className={cx("menu_main")}>
                    <div>
                        <h2>HaiXinh Store</h2>
                    </div>
                    <div className={cx("menu_right")}>
                        <div className={cx("menu_page")}>
                            <ul>
                                <li><NavLink to="/">Trang chủ</NavLink></li>
                                <li><NavLink to="/products">Sản Phẩm</NavLink></li>
                                <li><NavLink to="/About">Giới thiệu</NavLink></li>
                                <li><NavLink to="/Address" >Địa chỉ</NavLink></li>
                                
                                
                            </ul>
                        </div>
                        <div className={cx("menu_login_cart")}>
                            <NavLink to="/Login" ><i className="fas fa-user"></i></NavLink>
                            <NavLink to="/Cart" ><i className="fas fa-shopping-cart"></i></NavLink>
                        </div>
                    </div>
                </div>
            </div>

    )
}
