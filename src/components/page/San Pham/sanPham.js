
import React, {  useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import classNames from "classnames/bind";
import * as productService from '../../../services/productService'
import style from '../Products/product.module.css';
import cross from "../../../Images/cross.svg"
const cx = classNames.bind(style);


function Sanpham() {
    const [listProduct, setListProduct] = useState([]);
    const [listProducts, setListProducts] = useState([]);

    useEffect(() => {
        const getDataFromAPI = async () => {
            const data = await productService.getAll();
            setListProduct(data)
        }
        getDataFromAPI();
    }, [])

    useEffect(() => {
        const getData = async () => {
            const data = await productService.getAllproducts();
            setListProducts(data)
        }
        getData();
    }, [])

    var _html = [];
    const panginate = () => {
 
        for (let index = 1; index <= Math.ceil(listProducts.length/6); index++) {
            _html.push(<li className={cx("page-item")} key={index} ><a className={cx("page-link")} href="#" onClick={(event) => getData(index,event)}>{index}</a></li>)

        }
    }
    panginate();

    const getData = (index,e) => {
        e.preventDefault();
        const getDataFromAPI = async () => {
            const data = await productService.getAll(index);
            setListProduct(data)
        }
        getDataFromAPI();
        // window.scrollTo(0, 0)
    }
    return ( 
        <>
            <div className={cx("CardProduct", "container", "mt-5")}>
                <div className={cx("row")} >


                    {listProduct.map((product, index) => {

                        return (
                            <div className={cx("list", "productCart", "mt-5", "mb-5", "p-3")} key={index}>

                                <NavLink to={`/detail/${product.id}`} className={cx("text-decoration-none")}  >
                                    <div className={cx("main_right")}>
                                        <img className={cx("home_product")} src={product.image} />
                                        <p className={cx("p")}>{product.name} <b className={cx("d-block")}>{product.price} $</b></p>
                                        
                                        <span className={cx("icon_cross")}>
                                            <img src={cross} />
                                        </span>
                                        
                                    </div>
                                </NavLink>

                            </div>


                        );



                    })
                    }
                    <div className={cx("container")}>
                <nav aria-label="Page navigation example">
                    <ul className={cx("pagination")}>
                        
                        {_html.map(item => {
                            return item
                        })}

                        
                    </ul>
                </nav>
            </div>

                </div>
            </div>

            
        </>
     );
}

export default Sanpham;