import {connect} from 'react-redux';
import List from './List';

export const getColumnsForList = ({columns}, listId) => columns.filter(column => column.listId == listId);

const mapStateToProps = (state, props) => {
    const id = props.match.params.id;
    const filteredLists = state.lists.filter(list => list.id == id);
    const listParams = filteredLists[0] || {};
  
    console.log(id)
    return {
      ...listParams,
      columns: getColumnsForList(state, id),
    };
};

export default connect(mapStateToProps)(List);