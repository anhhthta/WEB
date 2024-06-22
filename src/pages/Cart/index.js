import classNames from 'classnames/bind';

import styles from './Cart.module.scss';

const cx = classNames.bind(styles);

function Cart({ list }) {
    return (
        <div className={cx('sticky-table')}>
            <table>
                <thead>
                    <tr>
                        <th>Tên</th>
                        <th>Miêu tả</th>
                        <th>Giá</th>
                        <th>Số lượng</th>
                        <th>Tổng</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((data, key) => {
                        return (
                            <tr key={key}>
                                <td>
                                    <div className={cx('image')}>
                                        <img src={data.image} alt="err" />
                                        <span>{data.name}</span>
                                    </div>
                                </td>
                                <td>{data.des}</td>
                                <td>{data.price}$</td>
                                <td>{data.count}</td>
                                <td>{data.total}$</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Cart;
