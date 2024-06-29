import React, { useContext, useState, useRef, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import * as productService from "../../../services/productService"
import style from './detail.module.css';
import classNames from "classnames/bind";
import { useDispatch } from 'react-redux';
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { addToCart } from "../../../redux/actions/CartAction";
import * as Swal from 'sweetalert2';
const cx = classNames.bind(style);




export default function Details() {
    let { id } = useParams();
    const [detail, setDetail] = useState({});

    const [count, setCount] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        const getDataFromAPI = async () => {
            const data = await productService.find(id);
            setDetail(data)
        }
        
        getDataFromAPI();
    }, [])


    const handleAddToCart = (product, quantity) => {
        let item = {
          product, quantity
        }
        console.log(dispatch(addToCart(item)));
        Swal.fire({
          icon: "success",
          text: "Đã thêm vào giỏ hàng"
        });
      }
    return (
        <>


            <div className={cx("details")} >
                <div className={cx("img-container")} >
                    <img src={detail.image} className={cx("img-fluid", "DetailImg")} />
                </div>

                <div className={cx("box-details")}>
                    <h2>{detail.name}</h2>
                    <h3>Price: {detail.price}$</h3>

                    <p>Description: {detail.description}</p>
                    <p> Color: {detail.color}</p>
                    <p><b>{detail.shipping}</b></p>

                    <p>Số lượng:</p>
                    <button className={cx('btn-count', 'line-minus')} onClick={() => {
                        if (count < 2) {
                            setCount(1);
                        } else {
                            setCount(count - 1);
                        }
                    }}><AiOutlineMinus className={cx('minus')} /></button>
                    <span className={cx('number', 'mt-1')}>
                        {count}
                    </span>
                    <span>
                        <button className={cx('btn-count', 'line-plus')} onClick={() => setCount(count + 1)}><AiOutlinePlus className={cx('plus')} /></button>
                    </span>
                    <br />
                    <button
                        className={cx("btn", "btn-dark", "btn-green", "mr-1", "mt-4", "text-uppercase", "font-weight-bold")}
                        data-toggle="tooltip"
                        title=""
                        data-original-title="Add to cart" onClick={() => handleAddToCart(detail, count)}
                    >
                        Thêm vào giỏ hàng
                    </button>
                </div>

            </div>

        </>
    )
}
