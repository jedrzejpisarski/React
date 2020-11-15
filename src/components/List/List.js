import React from 'react';
import Hero from '../Hero/Hero.js'
import Column from '../Column/Column.js'
import styles from './List.scss'
import PropTypes from 'prop-types';

class List extends React.Component {
  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} image={this.props.image} />
        <div className={styles.columns}>
            {this.props.columns.map(col => <Column key={col.title} icon={col.icon} title={col.title} />)}
        </div>
      </section>
    )
  }
}

List.propTypes = {
    columns: PropTypes.array.isRequired,
    title: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string
}

export default List;