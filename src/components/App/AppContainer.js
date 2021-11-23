import {connect} from 'react-redux';
import App from './App';
import {getList, createActionAddList} from '../../redux/listRedux.js';

const mapStateToProps = state => ({
  lists: getList(state),
});
const mapDispatchToProps = (dispatch, props) => ({
  addList: title => dispatch(createActionAddList({
    listId: props.id,
    title,
  })),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);

