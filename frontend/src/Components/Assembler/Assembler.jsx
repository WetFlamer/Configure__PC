import React from 'react';
import styles from './Assembler.module.css';
import plataFon from '../../images/plataFon.jpg';

const Assembler = () => {
    return (
        <div className={styles.assembler}>
                <div className="description">
                    <img src={plataFon} alt="fonplata" className={styles.plataFon}/></div>     
        </div>
    );
};

export default Assembler;