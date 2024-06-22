import classNames from 'classnames/bind';
import styles from './Book.module.scss';
import { images } from '~/assert';

const cx = classNames.bind(styles);

function Book() {
    return (
        <div className={cx('container-fluid', 'bo')}>
            <div className={cx('row')}>
                <div className={cx('col-md-12', 'col-lg-9', 'p-0')}>
                    <img className={cx('img')} src={images.haha} alt="" />
                </div>
            </div>
            <div className={cx('row')}>
                <div className={cx('info')}>
                    <div className={cx('box')}>
                        <div className={cx('title', 'text-center')}>Đặt Bàn</div>
                        <form className={cx('row', 'form')}>
                            <label className={cx('col-sm-6', 'label')}>
                                <p>Họ Tên</p>
                                <input className={cx('input', 'ip')} type="text" placeholder="Hoàng Anh" />
                            </label>
                            <label className={cx('col-sm-6', 'label')}>
                                <p>Email</p>
                                <input className={cx('input', 'ip')} type="text" placeholder="anh@gmail.com" />
                            </label>
                            <label className={cx('col-sm-6', 'label')}>
                                <p>Số Điện Thoại</p>
                                <input className={cx('input', 'ip')} type="text" placeholder="0123456789" />
                            </label>
                            <label className={cx('col-sm-6', 'label')}>
                                <p>Số Người</p>
                                <input className={cx('input', 'ip')} type="text" placeholder="01" />
                            </label>
                            <label className={cx('col-sm-6', 'label')}>
                                <p>Ngày</p>
                                <input className={cx('input', 'ip')} type="date" />
                            </label>
                            <label className={cx('col-sm-6', 'label')}>
                                <p>Giờ</p>
                                <select className={cx('input', 'ip')}>
                                    <option>7:00</option>
                                    <option>7:30</option>
                                    <option>8:00</option>
                                    <option>8:30</option>
                                    <option>...</option>
                                    <option>18:30</option>
                                </select>
                            </label>

                            <label className={cx('col-sm-12', 'label')}>
                                <p>Yêu Cầu Thêm</p>
                                <textarea className={cx('input')} rows={3} placeholder="text"></textarea>
                            </label>

                            <label className={cx('d-flex', 'align-items-center')}>
                                <input type="checkbox" placeholder="Email" />
                                <span>Đồng ý với điều khoản</span>
                            </label>

                            <button className={cx('btn_book')}>Đặt Ngay</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Book;
