import React from 'react';
import struck from "../../../Images/truck.svg";
import bag from "../../../Images/bag.svg";
import Support from "../../../Images/support.svg";
import returnn from "../../../Images/return.svg";
import whyChooseUs from "../../../Images/why-choose-us-img.jpg";
import AboutImg from "../../../Images/couch.png";
import style from './About.module.css'
import classNames from "classnames/bind";
import { NavLink } from 'react-router-dom';
const cx = classNames.bind(style);

function AboutUs() {
    return (
        <div>

            <div className={cx("About")}>
                <div className={cx("container")}>
                    <div className={cx("row", "justify-content-between")}>
                        <div className={cx("about_left", "col-lg-5")}>
                            <h1>About Us </h1>
                            <p className={cx("mb-4")}>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                            <NavLink to='/products'><button className={cx("btn btn-warning", "btn1")}>Shop Now</button></NavLink>
                            <button className={cx("btn2")}>Explore</button>
                        </div>
                        <div className={cx("about_right", "col-lg-7")}>
                            <img src={AboutImg} />
                        </div>
                    </div>
                </div>
            </div>

            {/* end */}

            <div className={cx("Main")}>
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
                                                <img src={struck} />
                                            </div>
                                            <h3>Fast & Free Shipping</h3>
                                            <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>

                                        </div>
                                    </div>
                                    <div className={cx("col-6", "col-md-6")}>
                                        <div className={cx("feature")}>
                                            <div className={cx("icon")}>
                                                <img src={bag} />
                                            </div>
                                            <h3>Easy to Shop</h3>
                                            <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>

                                        </div>
                                    </div>
                                    <div className={cx("col-6", "col-md-6")}>
                                        <div className={cx("feature")}>
                                            <div className={cx("icon")}>
                                                <img src={Support} />
                                            </div>
                                            <h3>24/7 Support</h3>
                                            <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>

                                        </div>
                                    </div>
                                    <div className={cx("col-6", "col-md-6")}>
                                        <div className={cx("feature")}>
                                            <div className={cx("icon")}>
                                                <img src={returnn} />
                                            </div>
                                            <h3>Hassle Free Returns</h3>
                                            <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>

                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className={cx("col-lg-5")} >
                                <div className={cx("img_wrap")}>
                                    <img className={cx("img_fluid")} src={whyChooseUs} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* end why choose us */}

            <div className={cx("untree_co-section", "mb-5")}>
                <div className={cx("container")}>

                    <div className={cx("row", "mb-5")}>
                        <div className={cx("col-lg-5", "mx-auto", "text-center")}>
                            <h2 className={cx("section-title")}>Our Team</h2>
                        </div>
                    </div>

                    <div className={cx("row")}>

                        
                        <div className={cx("col-12", "col-md-6", "col-lg-3", "mb-5", "mb-md-0")}>
                            <img src="https://themewagon.github.io/furni/images/person_1.jpg" className={cx("img-fluid", "mb-5")}/>
                                <h3 className={cx("nameourteam")}><span className="">Lawson</span> Arnol</h3>
                                <span className={cx("d-block", "position", "mb-4")}>CEO, Founder, Atty.</span>
                                <p>Separated they live in.
                                    Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                <p className={cx("mb-0")}><a href="#" className={cx("more", "dark")}>Learn More <span className={cx("icon-arrow_forward")}></span></a></p>
                        </div>
                        
                        <div className={cx("col-12", "col-md-6", "col-lg-3", "mb-5", "mb-md-0")}>
                            <img src="https://themewagon.github.io/furni/images/person_2.jpg" className={cx("img-fluid", "mb-5")}/>

                                <h3 className={cx("nameourteam")}><span className="">Jeremy</span> Walke</h3>
                                <span className={cx("d-block", "position", "mb-4")}>CEO, Founder, Atty.</span>
                                <p>Separated they live in.
                                    Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                <p className={cx("mb-0")}><a href="#" className={cx("more", "dark")}>Learn More <span className={cx("icon-arrow_forward")}></span></a></p>

                        </div>
                        
                        <div className={cx("col-12", "col-md-6", "col-lg-3", "mb-5", "mb-md-0")}>
                            <img src="https://themewagon.github.io/furni/images/person_3.jpg" className={cx("img-fluid", "mb-5")}/>
                                <h3 className={cx("nameourteam")}><span className="">Patrik</span> White</h3>
                                <span className={cx("d-block", "position", "mb-4")}>CEO, Founder, Atty.</span>
                                <p>Separated they live in.
                                    Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                <p className={cx("mb-0")}><a href="#" className={cx("more", "dark")}>Learn More <span className={cx("icon-arrow_forward")}></span></a></p>
                        </div>
                       
                        <div className={cx("col-12", "col-md-6", "col-lg-3", "mb-5", "mb-md-0")}>
                            <img src="https://themewagon.github.io/furni/images/person_4.jpg" className={cx("img-fluid", "mb-5")}/>

                                <h3 className={cx("nameourteam")}><span className="">Kathryn</span> Ryan</h3>
                                <span className={cx("d-block", "position", "mb-4")}>CEO, Founder, Atty.</span>
                                <p>Separated they live in.
                                    Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                <p className={cx("mb-0")}><a href="#" className={cx("more", "dark")}>Learn More <span className={cx("icon-arrow_forward")}></span></a></p>


                        </div>
                        



                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;