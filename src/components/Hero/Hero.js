import React from "react";
import styles from "./Hero.scss";
import PropTypes from "prop-types";
import ReactHtmlParser from 'react-html-parser';

const Hero = ({titleText, image}) => {
  return (
    <div className={styles.component}>
      <h2 className={styles.title}>{ReactHtmlParser(titleText)}</h2>
      <img className={styles.image} src={image}/>
    </div>
  );
};
 
Hero.propTypes = {
  titleText: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Hero;