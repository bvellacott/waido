import { normalize as _normalize, schema as _schema } from 'normalizr';
import { Map } from 'immutable';
import { 
	create as _create, 
	read as _read,
	update as _update,
	del as _del
} from './db';

export const schema = new _schema.Entity('actions');

export function normalize(todo) { 
	var norm = Map(_normalize(todo, schema));
	return norm;
};

export function create(action) {
	if(typeof action.type !== 'string')
		throw new Error('An action must specify a type');
	return Map(_create('action', action));
}

export function read(id) {
	return Map(_read('action', id));
}

export function update(action) {
	_update('action', action.toJS());
}

export function del(id) { 
	_del('action', id);
}
