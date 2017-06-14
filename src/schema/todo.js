import { normalize as _normalize, schema as _schema } from 'normalizr';
import { Map } from 'immutable';

var idCount = 0;

// Define a todo schema
export const schema = new _schema.Entity('todos');

export function normalize(todo) { 
	var norm = Map(_normalize(todo, schema));
	return norm;
};

export function create(text, completed = false) {
	idCount++;
	return Map({ id: idCount, text, completed });
}
