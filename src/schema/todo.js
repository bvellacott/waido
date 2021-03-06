import { normalize as _normalize, schema as _schema } from 'normalizr';
import { Map } from 'immutable';
import { 
	create as _create, 
	read as _read,
	update as _update,
	del as _del
} from './db';

var idCount = 0;

// Define a todo schema
export const schema = new _schema.Entity('todos');

export function normalize(todo) { 
	var norm = Map(_normalize(todo, schema));
	return norm;
};

export function create(text, completed = false, selected = true) {
	return Map(_create('todo', { text, completed }));
}

export function read(id) {
	return Map('todo', _read('todo', id));
}

export function update(todo) {
	_update('todo', todo.toJS());
}

export function del(id) { 
	_del('todo', id);
}
