import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import styles from './ModalProduct.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

function ModalProduct({ data, al }) {
    const [count, setCount] = useState(0);

    const addList = (data) => {
        const newData = {
            id: data.id,
            name: data.name,
            image: data.image,
            des: data.des,
            price: data.price,
            count: count,
            total: count * data.price,
        };
        al(newData);
    };

    const Down = () => {
        setCount((prevState) => prevState - 1);
    };

    const Up = () => {
        setCount((prevState) => prevState + 1);
    };

    return (
        <div>
            <div className={cx('modal-header', 'my_modal-header')}>
                <div className={cx('header-icon')}>
                    <button type="button" className={cx('my_btn-close')} data-bs-dismiss="modal">
                        <FontAwesomeIcon icon={faClose} />
                    </button>
                </div>
            </div>
            <div className={cx('modal-body')}>
                <div className={cx('content')}>
                    <div className={cx('container-fluid')}>
                        <div className={cx('row')}>
                            <div className={cx('col-sm-6')}>
                                <img src={data.image} alt="err" />
                            </div>
                            <div className={cx('col-sm-6')}>
                                <h1>{data.name}</h1>
                                <p>{data.des}</p>
                                <p>Price:......................{data.price}$</p>
                                <div className={cx('b')}>
                                    <button onClick={Down} className={cx('btn', 'btn_b', 'btn_d')}>
                                        -
                                    </button>
                                    <input value={count} className={cx('input')} />
                                    <button onClick={Up} className={cx('btn', 'btn_b', 'btn_u')}>
                                        +
                                    </button>
                                </div>

                                <p>Tổng: {count * data.price}$</p>

                                <button onClick={() => addList(data)} className={cx('btn', 'btn_buy')}>
                                    Đặt
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('modal-footer')}></div>
        </div>
    );
}

export default ModalProduct;
