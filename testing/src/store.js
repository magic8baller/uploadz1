import reducers from 'reducers';
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
