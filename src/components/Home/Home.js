/* eslint-disable react/prop-types */
import React from "react";
import { connect } from "react-redux";
import styles from "../Home/Home.scss";
import List from "../List/List.js";
import Search from "../Search/SearchContainer";

const Home = ({ title, subtitle, lists }) => {
  return (
    <main className={styles.component}>
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.subtitle}>{subtitle}</h2>
      <Search />
      {lists.map((listData) => (
        <List key={listData.id} {...listData} />
      ))}
    </main>
  );
};

const mapStateToProps = ({ app: { title, subtitle }, lists }) => ({
  title: title,
  subtitle: subtitle,
  lists: lists,
});

export default connect(mapStateToProps)(Home);

// wrzucić do package.json pod scripts

// "husky": {
//   "hooks": {
//     "pre-commit": "lint-staged"
//   }
// },
// "lint-staged": {
//   "src/**/*.js": "eslint"
// },