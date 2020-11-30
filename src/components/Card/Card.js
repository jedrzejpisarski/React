import React from "react";
import styles from "./Card.scss";
import PropTypes from "prop-types";

export const Card = ({ title }) => {
  return (
    <div className={styles.component}>
      <h2>{title}</h2>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
};
