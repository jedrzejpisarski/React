import React from 'react';
import { connect } from 'react-redux';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import { Card } from '../Card/Card';
import Creator from '../Creator/Creator.js';
import { settings } from '../../data/dataStore';
import { createActionAddCard } from '../../redux/cardsRedux';

const Column = ({ icon, title, cards, addCard, id, searchString }) => {
  return (
    <div className={styles.component}>
      <h2>
        <Icon name={icon} />
        {title}
      </h2>
      {cards
        .filter((card) => card.columnId == id)
        .map((card) => {
          return <Card key={card.id} title={card.title} />;
        })}
      <div className={styles.creator}>
        <Creator text={'add card'} action={(title) => addCard(title)} />
      </div>
    </div>
  );
};

Column.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  cards: PropTypes.array,
};

Column.defaultProps = {
  icon: settings.defaultColumnIcon,
};

const mapStateToProps = ({ cards, searchString }) => ({
  cards: cards,
  searchString: searchString,
});

const mapDispatchToProps = (dispatch, props) => ({
  addCard: (title) =>
    dispatch(
      createActionAddCard({
        columnId: props.id,
        title,
      })
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);
