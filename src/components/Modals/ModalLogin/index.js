import { Fragment, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

import styles from '../StylesLogin.module.scss';
import modals from '..';
import { user, users } from '~/assert/demo';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ModalLogin({ onClick }) {
    const refEmail = useRef();
    const refPass = useRef();
    const refErr = useRef();
    const refCheck = useRef();

    const handleModal = () => {
        onClick(modals.register);
    };

    useEffect(() => {
        refEmail.current.classList.remove(styles.err);
        refPass.current.classList.remove(styles.err);
        refErr.current.hidden = true;
    });

    const handleLogin = () => {
        let email = refEmail.current.value;
        let pass = refPass.current.value;

        if (email === '') {
            refEmail.current.classList.add(styles.err);
            refErr.current.hidden = true;
        } else {
            let u = users.filter((user) => user.email === email);
            if (pass === '') {
                refPass.current.classList.add(styles.err);
                refErr.current.hidden = true;
            } else {
                if (u.length >= 1) {
                    console.log(u);
                    if (u[0].pass === pass) {
                        user.name = u[0].name;
                        user.email = email;
                        user.pass = pass;
                        console.log('login', user);
                    } else {
                        refPass.current.classList.add(styles.err);
                        refErr.current.removeAttribute('hidden');
                    }
                }
            }
        }
    };
    return (
        <Fragment>
            <div className={cx('modal-header', 'my_modal-header')}>
                <div className={cx('header-icon')}>
                    <button type="button" className={cx('my_btn-close')} data-bs-dismiss="modal">
                        <FontAwesomeIcon icon={faClose} />
                    </button>
                </div>
                <div className={cx('header-title')}>
                    <p className={cx('selected')}>Đăng Nhập</p>
                    <p
                        onClick={() => {
                            handleModal();
                        }}
                    >
                        Đăng Ký
                    </p>
                </div>
            </div>
            <div className={cx('modal-body')}>
                <div className={cx('content')}>
                    <from>
                        <label>
                            <span>
                                <FontAwesomeIcon className={cx('icon')} icon={faEnvelope} />
                                Email
                            </span>
                            <input ref={refEmail} type="email" placeholder="Email" />
                        </label>

                        <label>
                            <span>
                                <FontAwesomeIcon className={cx('icon')} icon={faLock} />
                                Mật Khẩu
                            </span>
                            <input ref={refPass} type="password" placeholder="Mật khẩu" />
                        </label>

                        <label className={cx('d-flex', 'align-items-center')}>
                            <input ref={refCheck} type="checkbox" placeholder="Email" />
                            <span>Đồng ý với điều khoản</span>
                        </label>
                        <p ref={refErr} className={cx('text-center', 'm-0', 'err')} hidden>
                            Tài Khoản Hoặc Mật Khẩu Không Đúng
                        </p>
                        <Link onClick={handleLogin} className={cx('my_btn', 'btn-modal')}>
                            Đăng Nhập
                        </Link>
                    </from>
                </div>
            </div>
            <div className={cx('modal-footer')}></div>
        </Fragment>
    );
}

export default ModalLogin;
