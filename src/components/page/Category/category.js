import { useEffect, useState } from "react";
import * as categoryService from "../../../services/categoryService"
import { Link } from "react-router-dom";
import style from './category.module.css';
import classNames from "classnames/bind";


const cx = classNames.bind(style);

function Category() {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        const getDataFromAPI = async () => {
            const data = await categoryService.getAll();
            setCategory(data)
        }
        getDataFromAPI();
    }, [])
    


    return (
        <div className={cx("mb-5")}>
            <div className={cx("container")}>
                <div className={cx("row")} >
                    <div className={cx("section-header", "d-md-flex", "justify-content-between", "align-items-center")}>
                        <h2 className={cx("display-3 fw-normal")}>furniture</h2>
                                    <div className={cx("mb-4 mb-md-0")}>
                                    <p>
                                        <Link to="/products" ><button className={cx("filter-button", "m-5",  "active")} data-filter="*">All</button></Link>
                                        
                                    </p>
                                    </div>
                    </div>

                    {
                        category.map((item) => {
                            return (
                                
                                <div className={cx("cardCategory", "m-5")} key={item.id} >
                                    <Link to={`/shop/${item.id}`}  >
                                    <button  className={cx("filter-button", "me-4")} data-filter=".cat">{item.name}</button>
                                    </Link>
                                </div>
                                

                            );
                        })
                    }
                </div >
            </div >

        </div >
    );
}

export default Category;