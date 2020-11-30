import React, { useState } from "react";
import styles from "./Column.scss";
import PropTypes from "prop-types";
import Icon from "../Icon/Icon";
import { Card } from "../Card/Card";
import Creator from "../Creator/Creator.js";

const Column = (props) => {
  const [cards, setCards] = useState(props.cards);
  const addCard = (arg) => {
    setCards([
      ...cards,
      { key: cards.length ? cards[cards.length - 1].key + 1 : 0, title: arg },
    ]);
  };
  return (
    <div className={styles.component}>
      <h2>
        <Icon name={props.icon} />
        {props.title}
      </h2>
      {cards.map((card) => {
        return <Card key={card.key} title={card.title} />;
      })}
      <div className={styles.creator}>
        <Creator text={"add card"} action={(title) => addCard(title)} />
      </div>
    </div>
  );
};

Column.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  cards: PropTypes.array,
};

export default Column;
