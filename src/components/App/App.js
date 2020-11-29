import React from 'react';
import styles from '../App/App.scss';
import ListContainer from '../List/ListContainer.js';

class App extends React.Component {
   
    static propTypes = {
        title: PropTypes.node,
        subtitle: PropTypes.node,
        lists:PropTypes.array,
      }
      
    render() {
        const {title, subtitle, lists} = this.props;
        return (
          <main className={styles.component}>
            <h1 className={styles.title}>{title}</h1>
            <h2 className={styles.subtitle}>{subtitle}</h2>
            {lists.map(listData => (
              <ListContainer key={listData.id} {...listData} />
            ))}
          </main>
        );
      }
}

export default App;
