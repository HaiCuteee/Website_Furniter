
import Slider from "../Slider/Slider";
import homeImg from "../../Images/couch.png";
import style from './home.module.css';
import product1 from "../../Images/product-1.png";
import product2 from "../../Images/product-2.png";
import product3 from "../../Images/product-3.png";
import struck from "../../Images/truck.svg";
import bag from "../../Images/bag.svg";
import Support from "../../Images/support.svg";
import returnn from "../../Images/return.svg";
import whyChooseUs from "../../Images/why-choose-us-img.jpg";
import grids1 from "../../Images/img-grid-1.jpg";
import grids2 from "../../Images/img-grid-2.jpg";
import grids3 from "../../Images/img-grid-3.jpg";
import cross from "../../Images/cross.svg"
import classNames from "classnames/bind";
import { NavLink } from "react-router-dom";
const cx = classNames.bind(style);



function Home() {
    return (
        <div className={cx('Home')}>
            <div>
                <div className={cx("top")}>
                    <div className={cx("container")}>
                        <div className={cx("row", "justify-content-between")}>
                            <div className={cx("top_left", "col-lg-5" )}>
                                <h1>Modern interior <span className={cx("d-block")}>Design Studio</span></h1>
                                <p className={cx("mb-4")}>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                                <NavLink to='/products'><button  className={cx("btn btn-warning", "btn1")}>Shop Now</button></NavLink>
                                <button className={cx("btn2")}>Explore</button>
                            </div>
                            <div className={cx("top_right", "col-lg-7")}>
                                <img src={homeImg} />
                            </div>
                        </div>
                    </div>
                </div>

        {/* end header */}

                <div className={cx("Main")}>
                    <div className={cx("list")}>
                        <div className={cx("container")}>     
                            <div className={cx("row")}>
                                <div className={cx("col-3")}>
                                    <h2 className=" ">Crafted with excellent material.</h2>
                                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                                    <button className={cx("explore", "btn-dark")}> <b>Explore</b></button>
                                </div>
                                <a className={cx("col-md-3", "main_right")}>
                                <img className={cx("home_product")} src={product1} />
                                <p className={cx("p")}>Nordic Chair <b className={cx("d-block")}>$49</b></p>
                                <span className={cx("icon_cross")}>
                                    <img src={cross}  className={cx("img-fluid")} />
                                </span>
                                </a>
                                <a className={cx("col-md-3", "main_right")}> <img className={cx("home_product")} src={product2} />
                                <p className={cx("p")}>Nordic Chair <b className={cx("d-block")}>$50</b></p>
                                <span className={cx("icon_cross")}>
                                    <img src={cross}  className={cx("img-fluid")} />
                                </span>
                                </a>
                                <a className={cx("col-md-3", "main_right")}><img className={cx("home_product")} src={product3} />
                                <p className={cx("p")}>Nordic Chair <b className={cx("d-block")}>$30</b></p>
                                <span className={cx("icon_cross")}>
                                    <img src={cross}  className={cx("img-fluid")} />
                                </span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={cx("why_choose_us")}>
                        <div className={cx("container", "choose_us")}>
                            <div className={cx("row", "justify-content-between")}>
                                <div className={cx("section-title", "col-lg-6")}>
                                <h2>Why Choose Us</h2>
                                <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                                    <div className={cx("row", "my-5")}>
                                        <div className={cx("col-6", "col-md-6")}>
                                            <div className={cx("feature")}>
                                                <div className={cx("icon")}>
                                                    <img src = {struck}/>
                                                </div>
                                                <h3>Fast & Free Shipping</h3>
                                                <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>

                                            </div>
                                        </div>
                                        <div className={cx("col-6", "col-md-6")}>
                                        <div className={cx("feature")}>
                                                <div className={cx("icon")}>
                                                    <img src = {bag}/>
                                                </div>
                                                <h3>Easy to Shop</h3>
                                                <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>

                                            </div>
                                        </div>
                                        <div className={cx("col-6", "col-md-6")}>
                                        <div className={cx("feature")}>
                                                <div className={cx("icon")}>
                                                    <img src = {Support}/>
                                                </div>
                                                <h3>24/7 Support</h3>
                                                <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>

                                            </div>
                                        </div>
                                        <div className={cx("col-6", "col-md-6")}>
                                        <div className={cx("feature")}>
                                                <div className={cx("icon")}>
                                                    <img src = {returnn}/>
                                                </div>
                                                <h3>Hassle Free Returns</h3>
                                                <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>

                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className={cx("col-lg-5")} >
                                    <div className={cx("img_wrap")}>
                                        <img className={cx("img_fluid")} src = {whyChooseUs} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*  end why-choose-us */ }

                    <div className={cx("we_helper")}>
                        <div className={cx("container")}>
                            <div className={cx("row", "justify-content-between")}>
                                <div className={cx("col-lg-7", "mb-5", "mb-lg-0")}>
                                    <div className={cx("imgs_grids")}>
                                        <div className={cx("grids", "grid_1")}>
                                            <img src = {grids1} />
                                        </div>
                                        <div className={cx("grids", "grid_2")}>
                                            <img src = {grids2} />
                                        </div>
                                        <div className={cx("grids", "grid_3")}>
                                            <img src = {grids3} />
                                        </div>
                                    </div>
                                </div>

                                <div className={cx("col-lg-5", "ps-lg-5")}>
                                    <h2 className={cx("section-title", "mb-4")}>We Help You Make Modern Interior Design</h2>
                                    <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
                                     Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada</p>
                                    <ul className={cx("list-unstyled", "custom-list", "my-4")}>
                                        <li>Donec vitae odio quis nisl dapibus malesuada</li>
                                        <li>Donec vitae odio quis nisl dapibus malesuada</li>
                                        <li>Donec vitae odio quis nisl dapibus malesuada</li>
                                        <li>Donec vitae odio quis nisl dapibus malesuada</li>
                                    </ul>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* end we-help */}

                    <div className={cx("popular_product", "mb-5")}>
                        <div className={cx("container")}>
                            <div className={cx("row")}>
                                <div className={cx("col-12", "col-md-6", "col-lg-4", "mb-4", "mb-lg-0")}>
                                    <div className={cx("product-item-sm", "d-flex")}>
                                        <div className={cx("thumbnail")}>
                                            <img src={product1} className={cx("img_fluid")} />
                                        </div>
                                        <div className={cx("pt-3")}>
                                            <h3>Nordic Chair</h3>
                                            <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio </p>
                                            <p><a href="#" >Read More</a></p>
                                        </div>

                                    </div>
                                </div>
                                <div className={cx("col-12", "col-md-6", "col-lg-4", "mb-4", "mb-lg-0")}>
                                    <div className={cx("product-item-sm", "d-flex")}>
                                        <div className={cx("thumbnail")}>
                                            <img src={product2} className={cx("img_fluid")} />
                                        </div>
                                        <div className={cx("pt-3")}>
                                            <h3>Kruzo Aero Chair</h3>
                                            <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio </p>
                                            <p><a href="#" >Read More</a></p>
                                        </div>

                                    </div>
                                </div>
                                <div className={cx("col-12", "col-md-6", "col-lg-4", "mb-4", "mb-lg-0")}>
                                    <div className={cx("product-item-sm", "d-flex")}>
                                        <div className={cx("thumbnail")}>
                                            <img src={product3} className={cx("img_fluid")}/>
                                        </div>
                                        <div className={cx("pt-3")}>
                                            <h3>Ergonomic Chair</h3>
                                            <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio </p>
                                            <p><a href="#" >Read More</a></p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                {/* end popular product */}

                <div>
                <Slider/>
                </div>
                
                   


                
                </div>
            </div>
        </div>

    );
}

export default Home;