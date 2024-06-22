import classNames from 'classnames/bind';

import styles from './DefaultLayout.module.scss';
import Header from './Header';
import Footer from './Footer';
import Modal from '../../Modals/Modal';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function DefaultLayout({ children, modal, onClick, hidden_btn = false, list }) {
    console.log(list);
    return (
        <div className={cx('wrapper')}>
            <Header onClick={onClick} dataList={list} />
            <div className={cx('container-fluid', 'content')}>{children}</div>
            <Footer />

            <Modal>{modal}</Modal>
            <Link className={cx('book', { hidden_btn })} to="/book">
                Đặt Bàn
            </Link>
        </div>
    );
}

export default DefaultLayout;
