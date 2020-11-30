import React from "react";
import { connect } from "react-redux";
import Hero from "../Hero/Hero.js";
import Column from "../Column/Column.js";
import styles from "./List.scss";
import PropTypes from "prop-types";
import { settings } from "../../data/dataStore";
import Creator from "../Creator/Creator.js";
import { getColumnsForList } from "../../redux/columnsRedux";
import { createActionAddColumn } from "../../redux/columnsRedux";

const List = ({ title, image, columns, addColumn }) => {
  return (
    <section className={styles.component}>
      <Hero titleText={title} image={image} />
      <div className={styles.columns}>
        {columns.map(({ id, ...column }) => {
          return <Column key={id} id={id} {...column} />;
        })}
      </div>
      <div className={styles.creator}>
        <Creator
          text={settings.columnCreatorText}
          action={(item) => addColumn(item)}
        />
      </div>
    </section>
  );
};

List.propTypes = {
  title: PropTypes.node,
  description: PropTypes.node,
  columns: PropTypes.array,
  image: PropTypes.string,
};

List.defaultProps = {
  description: settings.defaultListDescription,
};

const mapStateToProps = (state, props) => ({
  columns: getColumnsForList(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addColumn: (title) =>
    dispatch(
      createActionAddColumn({
        listId: props.id,
        title,
      })
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
