import React from 'react';
import styles from './MyComponent.scss';

class Hero extends React.Component {
  render() {
    return (
      <div>
        <h2 className={styles.title}>Things to do</h2>
        <img className={styles.img}>http://uploads.kodilla.com/bootcamp/fer/11.react/space.png</img>

      </div>
    );
  }
}

export default Hero;