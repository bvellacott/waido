import { fromJS } from 'immutable';

export function getId() {
	var idCount = window.localStorage.getItem('idCount');
	idCount = idCount ? parseInt(idCount) : 0;
	idCount++;
	window.localStorage.setItem('idCount', idCount);
	return idCount;
}

export function create(recType, record) {

	if(typeof recType !== 'string')
		throw new Error('You must specify a record type name');
	if(!record || typeof record !== 'object')
		throw new Error("The record you're trying to create isn't a js object");
	if(record.id)
		throw new Error("The record you're trying to create already has an id: " + record.id);

	var id = '' + getId();
	record.id = id;
	// window.localStorage.setItem('record.' + recType + '.' + id, JSON.stringify(record));

	return record
}

export function read(recType, id) {
	if(typeof recType !== 'string')
		throw new Error('You must specify a record type name');

	var existingRecord = window.localStorage.getItem('record.' + recType + '.' + id);
	if(!existingRecord)
		throw new Error("No record exists with the id: " + id);

	return JSON.parse(existingRecord);
}

export function update(recType, record) {
	if(typeof recType !== 'string')
		throw new Error('You must specify a record type name');
	if(!record || typeof record !== 'object')
		throw new Error("The record you're trying to update isn't a js object");
	if(!record.id)
		throw new Error("The record you're trying to update doesn't have an id");

	var existingRecord = window.localStorage.getItem('record.' + recType + '.' + record.id);
	if(!existingRecord)
		throw new Error("No record exists with the id: " + record.id);

	window.localStorage.setItem('record.' + recType + '.' + record.id, JSON.stringify(record));
}

export function del(recType, id) {
	if(typeof recType !== 'string')
		throw new Error('You must specify a record type name');
	var existingRecord = window.localStorage.getItem('record.' + recType + '.' + id);
	if(!existingRecord)
		throw new Error("No record exists with the id: " + id);
	window.localStorage.removeItem('record.' + recType + '.' + id);
}

// changes here need to be queued up and applied periodically for performance
export function saveState(state) {
	return new Promise((resolve, reject) => {
		try {
			resolve(window.localStorage.setItem('state', JSON.stringify(state)));
		} catch(e) { reject(e); }
	});
}

export function recoverStateSync(initialState) {
	var recovered = window.localStorage.getItem('state');
	if(recovered) {
		try {
			recovered = JSON.parse(recovered);
		} catch(e) {
			console.error(typeof e === 'string' ? e : e.getMessage());
		}
	}
	return fromJS(recovered || initialState || {});
}

