import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import { drinks, foods } from '~/assert/demo';
import modals from '~/components/Modals';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Menu({ onClick }) {
    const handleModal = (food, data) => {
        onClick(food, data);
    };

    const [sFoods, setSFoods] = useState(foods);
    const [sDrinks, setSDrinks] = useState(drinks);

    const [search, setSearch] = useState('');

    useEffect(() => {
        let mounted = false;

        const cleanup = () => {
            mounted = true;
        };

        if (search === '') {
            setSDrinks(drinks);
            setSFoods(foods);
        } else {
            if (mounted) return;
            setSDrinks(() => {
                return drinks.filter((d) => d.name.toLowerCase().includes(search.toLowerCase()));
            });
            setSFoods(() => {
                return foods.filter((f) => f.name.toLowerCase().includes(search.toLowerCase()));
            });
        }

        console.log(sFoods);

        return cleanup;
    }, [search]);

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
                                <p>Chào Mừng</p>
                            </div>
                            <h3>Tiêu Đề 1</h3>
                            <p>Miêu tả 1</p>
                        </div>
                    </div>
                    <div className={cx('carousel-item my_carousel-item ')}>
                        <div className={cx('my_img-slide', 'my_img-2')}></div>
                        <div className={cx('carousel-caption', 'my_carousel-caption')}>
                            <div className={cx('wel_com')}>
                                <p>Chào Mừng</p>
                            </div>
                            <h3>Tiêu Đề 2</h3>
                            <p>Miêu tả 2</p>
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
                <div className={cx('row', 'menu')}>
                    <div className={cx('container', 'list-card', 'bacground-color')}>
                        <h5 className={cx('text-center', 'my_primary-color')}>Món ăn ngon nhất</h5>
                        <h1 className={cx('text-center')}>Menu</h1>
                        <div>
                            <input
                                type="text"
                                placeholder="Search..."
                                onChange={(e) => setSearch(e.target.value)}
                                className={cx('text-search')}
                            />
                        </div>
                        <div className={cx('row', 'list_menu', 'food')}>
                            <h4 className={cx('col-sm-12', 'my_primary-color')}>Đồ Ăn</h4>

                            {sFoods.map((food, key) => {
                                return (
                                    <div
                                        onClick={() => handleModal(modals.product, food)}
                                        key={key}
                                        className={cx('col-md-6', 'col-lg-6', 'col-xl-4')}
                                        data-bs-toggle="modal"
                                        data-bs-target="#myModal"
                                    >
                                        <div className={cx('item')}>
                                            <img src={food.image} alt="" />
                                            <div>
                                                <h5>{food.name}</h5>
                                                <p>{food.des}</p>
                                                <p className={cx('my_primary-color')}>
                                                    .............. {food.price}$ (Giá)
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className={cx('row', 'list_menu', 'water')}>
                            <h4 className={cx('col-sm-12', 'my_primary-color')}>Nước</h4>

                            {sDrinks.map((drink, key) => {
                                return (
                                    <div
                                        onClick={() => handleModal(modals.product, drink)}
                                        key={key}
                                        className={cx('col-md-6', 'col-lg-6', 'col-xl-4')}
                                        data-bs-toggle="modal"
                                        data-bs-target="#myModal"
                                    >
                                        <div className={cx('item')}>
                                            <img src={drink.image} alt="" />
                                            <div>
                                                <h5>{drink.name}</h5>
                                                <p>{drink.des}</p>
                                                <p className={cx('my_primary-color')}>
                                                    .............. {drink.price}$ (Giá)
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
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

export default Menu;
