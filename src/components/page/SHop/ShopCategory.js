import { useEffect, useState } from "react";
import * as productService from '../../../services/productService'
import * as categoryService from '../../../services/categoryService'
import { NavLink, useParams } from "react-router-dom";
import style from './shop.module.css';
import classNames from "classnames/bind";
import cross from "../../../Images/cross.svg"
import Searchbar from "../../Search/Searchbar/Searchbar";
import Category from "../Category/category";


const cx = classNames.bind(style);

function ShopCategory() {
    let {id} = useParams();
    const [listProduct, setListProduct] = useState([]);
    useEffect(() => {
        const getDataFromAPI = async () => {
            const data = await productService.findByCategory_id(id);
            setListProduct(data)

        }
        getDataFromAPI();
        
    }, [])

   
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

                </div>
            </div>
            </>
    );
}

export default ShopCategory;