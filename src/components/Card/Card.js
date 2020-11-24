import React from 'react';
import styles from './Card.scss';

export const Card = (props) => {
    return (
        <div className={styles.component}>
            <h2>{props.title}</h2>
        </div>
    );
};
