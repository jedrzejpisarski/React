import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import Card from '../Card/Card';

const Column = props => {

    state = {
        cards: this.props.cards || [],
      }

    return (
        <div className={styles.component}>
            <h2>
                <Icon name={props.icon} />
                { props.title }</h2>
        </div>
    )
};

Column.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string
}

export default Column;