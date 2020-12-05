import React from "react";
import styles from "./Hero.scss";
import PropTypes from "prop-types";
//import image2 from '../../data/image/logo.jpg';

const Hero = props => {
  return (
    <div className={styles.component}>
      <h2 className={styles.title}>{props.titleText}</h2>
      <img className={styles.image} src={props.url} />
    </div>
  );
};
 
Hero.propTypes = {
  titleText: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Hero;