import React, { useEffect, useState } from "react";
import style from '../css/main.module.css';
import home from "../../../../Images/img-01.png";
import classNames from "classnames/bind";
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';	
import * as Yup from 'yup';
import { getUsers } from '../../../../services/user.Service';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { saveUserToLocalStorage } from '../../../../redux/actions/UserAction';


const initValues = {
	name: "",
	password: ""
}

const validate = Yup.object().shape({
	name: Yup.string().required("Vui lòng nhập tên người dùng"),
	password: Yup.string().required("Vui lòng nhập mật khẩu")
});


const cx = classNames.bind(style);








function Login() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [error, setError] = useState("");
	const formik = useFormik({
		initialValues: initValues,
		validationSchema: validate,
		onSubmit: async data => {
			let response = await getUsers();
			let users = response.data;
			let findUser = users.filter(u => {
				return data.name === u.name && data.password === u.password;
			});
			let user = findUser[0];
			if (user) {
				dispatch(saveUserToLocalStorage(user));
				navigate("/");
			} else {

				setError("tên người dùng hoặc mật khẩu không chính xác")

			}
		}
	})


	return (
		<div className={cx("limiter")}>
			<div className={cx("container-login100")}>
				<div className={cx("wrap-login100")}>
					<div className={cx("login100-pic", "js-tilt")} >
						<img src={home} alt="IMG" />
					</div>

					<form onSubmit={formik.handleSubmit} className={cx("login100-form", "validate-form")}>
						<span className={cx("login100-form-title")}>
							Login
						</span>
						<span className={cx("err")}>
							{error}
						</span>
						<div className={cx("wrap-input100", "validate-input")} data-validate="Your userName dose not exits">
							<input className={cx("input100")} type="text" name="name" placeholder="User Name" value={formik.values.name} onChange={formik.handleChange} />
							<span className={cx("focus-input100")}></span>
							<span className={cx("symbol-input100")}>

								<i className="fas fa-solid fa-user" aria-hidden="true"></i>
							</span>
							<span className={cx("err")}>
								{formik.errors.name ? formik.errors.name : ""}
							</span>
							
							
						</div>

						<div className={cx("wrap-input100", "validate-input")} data-validate="Password is required">
							<input className={cx("input100")} type="password" name="password" placeholder="Password" value={formik.values.password} onChange={formik.handleChange} />
							<span className={cx("err")}>
								{formik.errors.password ? formik.errors.password : ""}
							</span>
							<span className={cx("focus-input100")}></span>
							<span className={cx("symbol-input100")}>
								<i className="fa fa-lock" aria-hidden="true"></i>
							</span>
						</div>

						<div className={cx("container-login100-form-btn")}>
							<button type="submit" className={cx("login100-form-btn", "bottomLogin", "btn", "btn-success")} >
								Login
							</button>
						</div>

						<div className={cx("text-center", "p-t-12")}>
							<span className={cx("txt1")}>
								Forgot
							</span>
							
							
							<a className={cx("txt2")} href="#">
								 Username / Password?
							</a>
						</div>

						<div className={cx("text-center", "pt-3")}>
							<Link to="/Register" className={cx("txt2")} href="#">
								Create your Account
								<i className="fa fa-long-arrow-right ml-1 register" aria-hidden="true"></i>
							</Link>
						</div>
					</form>

				</div>
			</div>
		</div>
	);

}

export default Login;