import React from 'react';
import Hero from '../Hero/Hero.js';
import ColumnContainer from '../Column/ColumnContainer.js';
import styles from './List.scss';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
//import Creator from '../Creator/Creator.js';

class List extends React.Component {
 
  static propTypes = {
      title: PropTypes.node,
      description: PropTypes.node,
      columns: PropTypes.array,
  };

  static defaultProps = {
      description: settings.defaultListDescription,
  };

  render() {

    const {title, image, description, columns} = this.props;

      return (
          <section className={styles.component}>
              <Hero titleText={title} image={image} />
              <div className={styles.description}>
                    {ReactHtmlParser(description)}
              </div>
              <div className={styles.columns}>
                  {columns.map(columnData => (
                    <ColumnContainer key={columnData.id} {...columnData} />
                  ))}
              </div>
              {/*
              <div className={styles.creator}>
                  <Creator
                      text={settings.columnCreatorText}
                      action={(title) => this.addColumn(title)}
                  />
              </div>
              */}
          </section>
      );
  }
}

List.propTypes = {
    columns: PropTypes.array.isRequired,
    title: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
};

export default List;
