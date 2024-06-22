import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile, faStar, faTrophy, faUserCheck, faUserTie } from '@fortawesome/free-solid-svg-icons';

import { images } from '~/assert';
import styles from './About.module.scss';

const cx = classNames.bind(styles);

function About() {
    return (
        <>
            <div id="demo" className={cx('carousel slide ')} data-bs-ride="carousel">
                <div className={cx('carousel-indicators ')}>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                </div>

                <div className={cx('carousel-inner ', 'my_carousel-inner')}>
                    <div className={cx('carousel-item my_carousel-item active')}>
                        <div className={cx('my_img-slide', 'my_img-1')}></div>
                        <div className={cx('carousel-caption', 'my_carousel-caption')}>
                            <div className={cx('wel_com')}>
                                <p>WELCOME</p>
                            </div>
                            <h3>Tiêu Đề 1</h3>
                            <p>Miêu Tả 1</p>
                        </div>
                    </div>
                    <div className={cx('carousel-item my_carousel-item ')}>
                        <div className={cx('my_img-slide', 'my_img-2')}></div>
                        <div className={cx('carousel-caption', 'my_carousel-caption')}>
                            <div className={cx('wel_com')}>
                                <p>WELCOME</p>
                            </div>
                            <h3>Tiêu Đề 2</h3>
                            <p>Miêu Tả 2</p>
                        </div>
                    </div>
                </div>

                <button
                    className={cx('carousel-control-prev')}
                    type="button"
                    data-bs-target="#demo"
                    data-bs-slide="prev"
                >
                    <span className={cx('carousel-control-prev-icon')}></span>
                </button>
                <button
                    className={cx('carousel-control-next')}
                    type="button"
                    data-bs-target="#demo"
                    data-bs-slide="next"
                >
                    <span className={'carousel-control-next-icon'}></span>
                </button>
            </div>

            <div className={cx('container-fluid', 'text-white')}>
                <div className={cx('row', 'about', 'bacground-color')}>
                    <h5 className={cx('my_primary-color-opacity')}>VỀ CHÚNG TÔI</h5>
                    <div className={cx('col-md-12', 'col-lg-6')}>
                        <h1 className={cx('mb-4')}>Tiêu Đề</h1>
                        <p>
                            Miêu Tả ... Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptate
                            laboriosam accusamus amet at beatae cum eos sit earum similique voluptates, cupiditate
                            saepe, tenetur exercitationem doloremque ex tempora delectus obcaecati.
                        </p>

                        <ul>
                            <li>
                                <h3>Tiêu Đề 1</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa doloremque iusto
                                    voluptatem id facilis. Quaerat repudiandae autem nulla dolores natus saepe
                                    aspernatur deserunt. Incidunt molestias quas alias iusto! Necessitatibus, aliquam!
                                </p>
                            </li>
                            <li>
                                <h3>Tiêu Đề 2</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa doloremque iusto
                                    voluptatem id facilis. Quaerat repudiandae autem nulla dolores natus saepe
                                    aspernatur deserunt. Incidunt molestias quas alias iusto! Necessitatibus, aliquam!
                                </p>
                            </li>
                            <li>
                                <h3>Tiêu Đề 3</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa doloremque iusto
                                    voluptatem id facilis. Quaerat repudiandae autem nulla dolores natus saepe
                                    aspernatur deserunt. Incidunt molestias quas alias iusto! Necessitatibus, aliquam!
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('col-md-12', 'col-lg-6')}>
                        <img src={images.chef_about} alt="" style={{ width: '100%' }} />
                    </div>
                </div>

                <div className={cx('row', 'we-have', 'text-center')}>
                    <div className={cx('container', 'list-card')}>
                        <h5 className={cx('my_primary-color-opacity')}>Thành Tích</h5>
                        <h1>Đạt được</h1>
                        <div className={cx('row', 'achievement')}>
                            <div className={cx('col-md-3')}>
                                <FontAwesomeIcon icon={faUserCheck} className={cx('icon')} />
                                <h2 className={cx('my_primary-color-opacity')}>200+</h2>
                                <div>
                                    <h3>Khách Hàng Cao Cấp</h3>
                                </div>
                            </div>

                            <div className={cx('col-md-3')}>
                                <FontAwesomeIcon icon={faUserTie} className={cx('icon')} />
                                <h2 className={cx('my_primary-color-opacity')}>200+</h2>
                                <div>
                                    <h3>Đầu Bếp Chuyên Nghiệp</h3>
                                </div>
                            </div>

                            <div className={cx('col-md-3')}>
                                <FontAwesomeIcon icon={faTrophy} className={cx('icon')} />
                                <h2 className={cx('my_primary-color-opacity')}>200+</h2>
                                <div>
                                    <h3>Giành Giải Thưởng</h3>
                                </div>
                            </div>

                            <div className={cx('col-md-3')}>
                                <FontAwesomeIcon icon={faFaceSmile} className={cx('icon')} />
                                <h2 className={cx('my_primary-color-opacity')}>200+</h2>
                                <div>
                                    <h3>Đánh Giá 5 Sao</h3>
                                </div>
                            </div>
                        </div>

                        <div className={cx('row', 'staffs')}>
                            <h5 className={cx('my_primary-color-opacity')}>Chefs</h5>
                            <h1>Chefs</h1>
                            <div className={cx('col-sm-6', 'col-md-6', 'col-lg-3')}>
                                <div className={cx('card', 'item')}>
                                    <img className={cx('card-img-top')} src={images.chef} alt="" />
                                    <div className={cx('card-body text-center', 'content')}>
                                        <div className={cx('contact-info')}>
                                            <h6>GMAIL: anhht23.ite@gmail.com</h6>
                                            <h6>PHONE: 083x x1x x1x</h6>
                                        </div>
                                        <h4 className="card-title">Hoang Anh</h4>
                                        <p className="card-text">Head Chef</p>
                                    </div>
                                </div>
                            </div>

                            <div className={cx('col-sm-6', 'col-md-6', 'col-lg-3')}>
                                <div className={cx('card', 'item')}>
                                    <img className={cx('card-img-top')} src={images.demo2} alt="" />
                                    <div className={cx('card-body text-center', 'content')}>
                                        <div className={cx('contact-info')}>
                                            <h6>GMAIL: anhht23.ite@gmail.com</h6>
                                            <h6>PHONE: 083x x1x x1x</h6>
                                        </div>
                                        <h4 className="card-title">Hoang Anh</h4>
                                        <p className="card-text">Head Chef</p>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('col-sm-6', 'col-md-6', 'col-lg-3')}>
                                <div className={cx('card', 'item')}>
                                    <img className={cx('card-img-top')} src={images.chef_about} alt="" />
                                    <div className={cx('card-body text-center', 'content')}>
                                        <div className={cx('contact-info')}>
                                            <h6>GMAIL: anhht23.ite@gmail.com</h6>
                                            <h6>PHONE: 083x x1x x1x</h6>
                                        </div>
                                        <h4 className="card-title">Hoang Anh</h4>
                                        <p className="card-text">Head Chef</p>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('col-sm-6', 'col-md-6', 'col-lg-3')}>
                                <div className={cx('card', 'item')}>
                                    <img className={cx('card-img-top')} src={images.avatar} alt="" />
                                    <div className={cx('card-body text-center', 'content')}>
                                        <div className={cx('contact-info')}>
                                            <h6>GMAIL: anhht23.ite@gmail.com</h6>
                                            <h6>PHONE: 083x x1x x1x</h6>
                                        </div>
                                        <h4 className="card-title">Hoang Anh</h4>
                                        <p className="card-text">Head Chef</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={cx('row', 'feetback')}>
                            <h5 className={cx('my_primary-color-opacity')}>Phản Hồi</h5>
                            <h1>Phản Hồi</h1>
                            <div className={cx('col-md-3')}>
                                <div className={cx('item')}>
                                    <img src={images.avatar} alt="" />
                                    <div>
                                        <div className={cx('icon')}>
                                            <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                            <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                            <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                            <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                            <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                        </div>
                                        <h3>Tên 1</h3>
                                        <p>
                                            Comment Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
                                            laborum doloremque vel veniam harum facilis. Tempore, excepturi. Voluptatem,
                                            nesciunt. Vitae atque enim nostrum eos asperiores expedita obcaecati
                                            quibusdam at facilis.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('col-md-3')}>
                                <div className={cx('item')}>
                                    <img src={images.avatar} alt="" />
                                    <div>
                                        <div className={cx('icon')}>
                                            <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                            <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                            <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                            <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                            <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                        </div>
                                        <h3>Tên 2</h3>
                                        <p>
                                            Comment Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
                                            laborum doloremque vel veniam harum facilis. Tempore, excepturi. Voluptatem,
                                            nesciunt. Vitae atque enim nostrum eos asperiores expedita obcaecati
                                            quibusdam at facilis.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('col-md-3')}>
                                <div className={cx('item')}>
                                    <img src={images.avatar} alt="" />
                                    <div>
                                        <div className={cx('icon')}>
                                            <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                            <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                            <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                            <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                            <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                        </div>
                                        <h3>Tên 3</h3>
                                        <p>
                                            Comment Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
                                            laborum doloremque vel veniam harum facilis. Tempore, excepturi. Voluptatem,
                                            nesciunt. Vitae atque enim nostrum eos asperiores expedita obcaecati
                                            quibusdam at facilis.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('col-md-3')}>
                                <div className={cx('item')}>
                                    <img src={images.avatar} alt="" />
                                    <div>
                                        <div className={cx('icon')}>
                                            <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                            <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                            <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                            <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                            <FontAwesomeIcon icon={faStar} />
                                        </div>
                                        <h3>Tên 4</h3>
                                        <p>
                                            Comment Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
                                            laborum doloremque vel veniam harum facilis. Tempore, excepturi. Voluptatem,
                                            nesciunt. Vitae atque enim nostrum eos asperiores expedita obcaecati
                                            quibusdam at facilis.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx('row', 'video')}>
                    <div className={cx('ratio ratio-16x9', 'item')}>
                        <iframe
                            src="https://www.youtube.com/embed/wdqS8ai9cls?si=u9czjoXyzqbAj14Q"
                            title="YouTube video"
                            allowfullscreen
                        ></iframe>
                    </div>
                </div>

                <div className={cx('row', 'book')}>
                    <div className={cx('col-md-8')}>
                        <h5 className={cx('my_primary-color-opacity')}>
                            Tiếp sức cho hành trình cuộc sống, mỗi miếng ăn là một cuộc phiêu lưu ẩm thực!
                        </h5>
                        <h1>Hãy Đặt Bàn Cho Bạn & Gia Đình</h1>
                    </div>
                    <div className={cx('col-md-4', 'd-flex', 'align-items-md-center', 'justify-content-md-end')}>
                        <form>
                            <button className={cx('btn', 'my_btn', 'mt-3')} type="button">
                                Đặt Ngay
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
