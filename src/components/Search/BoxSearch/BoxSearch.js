import React from 'react';
import className from 'classnames/bind';
import styles from "./BoxSearch.module.css";
import { Link } from 'react-router-dom';

let cx = className.bind(styles);

function BoxSearch({ keyWord, data, reset }) {
    return (
        <div>
            <div className={cx('box-search1', 'd-lg-block d-none')}>
                <p className={cx('p-result',"pt-3",'font-weight-bold')}>Tìm kiếm: "{keyWord}"</p>
                {data.map((item) => {
                    return (
                        <Link className={cx('linkitem')} to={`/detail/${item.id}`} onClick={reset}  key={item.id}>
                            <div className={cx('media', 'form-item')}>
                                <img src={item.image} alt="" className={cx('img-search')} />
                                <div className="media-body">
                                    <h5 className={cx('fontname','pt-3')}>{item.name}</h5>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default BoxSearch