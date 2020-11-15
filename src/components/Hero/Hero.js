import React from 'react';
import styles from './Hero.scss';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';


const Hero = props => {
    return (
      <div className={styles.component}>
        <h2 className={styles.title}>{ReactHtmlParser(props.titleText)}</h2>
        <img className={styles.image} src={props.image} />
      </div>
    );
}
 
Hero.propTypes = {
    titleText: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}

export default Hero;