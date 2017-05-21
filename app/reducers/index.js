import { combineReducers } from 'redux';
import customer from './customer';
import feed from './feed';

export default combineReducers({
  customer, 
  feed
});
