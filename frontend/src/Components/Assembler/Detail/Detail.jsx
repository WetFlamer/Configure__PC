import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Detail.module.css';

const Detail = () => {
    const accessories = useSelector((state) => state.accessories.accessories);
    const selectedAccessory = useSelector((state) => state.accessories.accessory);


    return (
        <>
            {accessories.map((accessory) => {
                if (selectedAccessory === accessory._id) {
                    return (
                        <div className={styles.main}>
                            <div className={styles.first}>
                                <img src={`/assets/images/accessories/${accessory.image}`} alt="image" className={styles.image} />
                                <div className={styles.second}>
                                    <div className={styles.cost}> {accessory.cost} ₽</div>
                                    <button className={styles.btn}>Выбрать</button>
                                </div>
                            </div>

                            <div className={styles.description}> {accessory.description}</div>

                        </div>
                    )
                }
            })}
        </>
    );
};

export default Detail;