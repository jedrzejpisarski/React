import { connect } from 'react-redux';
import Search from './Search';
import {
  getSearchString,
  countVisibleCards,
  countAllCards,
  changeSearchString,
} from '../../redux/searchStringRedux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
  searchString: getSearchString(state),
  countVisible: countVisibleCards(state),
  countAll: countAllCards(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchString: (newSearchString) =>
    dispatch(changeSearchString(newSearchString)),
});

const WithRouterSearch = withRouter(Search);
export default connect(mapStateToProps, mapDispatchToProps)(WithRouterSearch);
