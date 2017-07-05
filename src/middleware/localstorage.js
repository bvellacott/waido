import { compose } from 'redux';
import { fromJS, Map } from 'immutable';
import { saveState } from '../schema/db';

var stateRecovered = false;

export default store => next => action => {
		var result = next(action);
		saveState(store.getState());
		return result;
};