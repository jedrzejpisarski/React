import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';

const Hero = props => {
    return (
      <div className={styles.component}>
        <h2 className={styles.title}>{props.titleText}</h2>
        <img className={styles.image} src={props.image} />
      </div>
    );
}
 
Hero.propTypes = {
    titleText: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}

export default Hero;