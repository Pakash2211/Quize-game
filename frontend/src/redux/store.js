import { legacy_createStore as createStore,applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import{reducer} from './reducer'

const datamiddleware = applyMiddleware(thunk);

const store = createStore(reducer,datamiddleware)


export{store};