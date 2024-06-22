import classNames from 'classnames/bind';

import styles from './Modal.module.scss';

export const cx = classNames.bind(styles);

function Modal({ children }) {
    return (
        <div className={cx('modal')} id="myModal">
            <div className={cx('modal-dialog', 'my_modal-dialog')}>
                <div className={cx('modal-content')}>{children}</div>
            </div>
        </div>
    );
}
export default Modal;
