import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';

import styles from '../StylesLogin.module.scss';
import modals from '..';
import { useEffect, useRef, useState } from 'react';
import { user, users } from '~/assert/demo';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ModalRegister({ onClick }) {
    const handleModal = () => {
        onClick(modals.login);
    };

    const refName = useRef();
    const refEmail = useRef();
    const refPass = useRef();
    const refRepass = useRef();
    const refCheck = useRef();
    const refCheckText = useRef();

    useEffect(() => {
        refEmail.current.classList.remove(styles.err);
        refPass.current.classList.remove(styles.err);
    });

    const handleRegister = () => {
        let name = refName.current.value;
        let email = refEmail.current.value;
        let pass = refPass.current.value;

        if (name === '') {
            refName.current.classList.add(styles.err);
        } else {
            refName.current.classList.remove(styles.err);
            if (email === '') {
                refEmail.current.classList.add(styles.err);
            } else {
                refEmail.current.classList.remove(styles.err);

                if (pass === '') {
                    refPass.current.classList.add(styles.err);
                } else {
                    refPass.current.classList.remove(styles.err);
                    if (refRepass.current.value !== pass) {
                        refRepass.current.classList.add(styles.err);
                    } else {
                        refRepass.current.classList.remove(styles.err);
                        if (refCheck.current.checked) {
                            refCheckText.current.classList.remove(styles.err);
                            users.push({
                                name: name,
                                email: email,
                                pass: pass,
                            });
                            user.name = name;
                            user.email = email;
                            user.pass = pass;
                            console.log(users);
                        } else {
                            refCheckText.current.classList.add(styles.err);
                        }
                    }
                }
            }
        }

        console.log();
    };

    return (
        <div>
            <div className={cx('modal-header', 'my_modal-header')}>
                <div className={cx('header-icon')}>
                    <button type="button" className={cx('my_btn-close')} data-bs-dismiss="modal">
                        <FontAwesomeIcon icon={faClose} />
                    </button>
                </div>
                <div className={cx('header-title')}>
                    <p
                        onClick={() => {
                            handleModal();
                        }}
                    >
                        Đăng Nhập
                    </p>
                    <p className={cx('selected')}>Đăng Ký</p>
                </div>
            </div>
            <div className={cx('modal-body')}>
                <div className={cx('content')}>
                    <from>
                        <label>
                            <span>
                                <FontAwesomeIcon className={cx('icon')} icon={faUser} />
                                Tên
                            </span>
                            <input ref={refName} type="text" placeholder="Tên" />
                        </label>

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

                        <label>
                            <span>
                                <FontAwesomeIcon className={cx('icon')} icon={faLock} />
                                Nhập lại Mật Khẩu
                            </span>
                            <input ref={refRepass} type="password" placeholder="Nhập lại Mật khẩu" />
                        </label>

                        <label className={cx('d-flex', 'align-items-center')}>
                            <input ref={refCheck} type="checkbox" placeholder="Email" />
                            <span ref={refCheckText}>Đồng ý với điều khoản</span>
                        </label>
                        <Link onClick={handleRegister} className={cx('my_btn', 'btn-modal')}>
                            Đăng Ký
                        </Link>
                    </from>
                </div>
            </div>
            <div className={cx('modal-footer')}></div>
        </div>
    );
}

export default ModalRegister;
