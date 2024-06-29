import {combineReducers} from 'redux';
// import counterReducer from './counter';
import CartReducer from './CartReducer';
import UserReducers from './UserReducer';

const allReducer = combineReducers({
    UserReducers,
    CartReducer
})

export default allReducer;