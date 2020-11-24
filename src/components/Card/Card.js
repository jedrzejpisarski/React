import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

export const Card = (props) => {
    return (
        <div className={styles.component}>
            <h2>{props.title}</h2>
        </div>
    );
};

Card.propTypes = {
    title: PropTypes.string,
};