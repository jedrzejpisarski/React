import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import styles from '../Column/Column.scss';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import { Card } from '../Card/Card';
import { settings } from '../../data/dataStore';

const SearchResults = ({ cards, match }) => {
  console.log(match.params.id);
  return (
    <div className={styles.component}>
      <h2>
        <Icon name={'question'} /> Search Result
      </h2>
      {cards
        .filter((card) => card.title.toLowerCase().includes(match.params.id))
        .map((card) => {
          return <Card key={card.id} title={card.title} />;
        })}
    </div>
  );
};

const mapStateToProps = ({ cards }) => ({
  cards: cards,
});

const WithRouterSearchResults = withRouter(SearchResults);
export default connect(mapStateToProps)(WithRouterSearchResults);
