import {settings, listData} from '../../data/dataStore';
import styles from './Card.scss';

const Card = ({title}) => {
    return (
        <div className={styles.component}>
            <h2>{ title }</h2>
        </div>
    )
};

export default Card; 