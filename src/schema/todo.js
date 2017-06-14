import { normalize as _normalize, schema as _schema } from 'normalizr';
import { Map } from 'immutable';

var idCount = 0;

// Define a todo schema
export const schema = new _schema.Entity('todos');

export function normalize(todo) { 
	return Map(_normalize(todo, schema));
};

export function create(text, completed = false) {
	idCount++;
	return normalize({ id: idCount, text, completed });
}
