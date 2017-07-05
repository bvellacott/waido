import { normalize, denormalize, schema } from 'normalizr';

export const actions = new schema.Entity('actions');

export const todos = new schema.Entity('todos');

export const dependencies = new schema.Entity('dependencies', {
	dependent: todos,
	dependable: todos
});

const schemaDefinitions = {
	action,
	todo,
	dependency
};

export function getDefinition(recType) {
	var definition = schemaDefinitions[recType];
	if(!definition)
		throw new Error('No schema definition exists for the record type: ' + recType);
	return definition;
}

function validateRecords(records) {
	if(!records)
		throw new Error('No records were passed in');
	if(!Array.isArray(records)) {
		if(typeof records !== 'object')
			throw new Error('Either a single record or an array of records needs to be passed in for writing');
		records = [ records ];
	}
	return records;
}

function validateIds(ids) {
	if(!ids)
		throw new Error('No ids were passed in');
	if(!Array.isArray(ids)) {
		if(typeof ids !== 'string')
			throw new Error('Either a single id string or an array of ids needs to be passed in for reading');
		ids = [ ids ];
	}
	return ids;
}

function validateNormalizedDb(normalizedDb) {
	if(!normalizedDb || typeof normalizedDb !== 'object')
		throw new Error('The passed db instance must be a valid js object');
	if(!normalizedDb.entities || typeof normalizedDb.entities !== 'object')
		throw new Error('The passed db instance must have an entities property with a valid js object value');
}

export function write(recType, records, normalizedDb) {
	var definition = getDefinition(recType);
	records = validateRecords(records);
	validateNormalizedDb(normalizedDb);

	Object.assign(normalizedDb.entities, records);

	return normalizedData.result;
}

export function normalizeAndWrite(recType, records, normalizedDb) {
	var definition = getDefinition(recType);
	records = validateRecords(records);
	validateNormalizedDb(normalizedDb);

	var normalizedData = normalize(records, definition);

	Object.assign(normalizedDb.entities, normalizedData.entities);

	return normalizedData.result;
}

export function readAsDenormalized(recType, ids, normalizedDb) {
	var definition = getDefinition(recType);
	ids = validateIds(ids);
	validateNormalizedDb(normalizedDb);

	var input = {};
	input[recType] = ids;

	denormalizedData = denormalize(input, definition, normalizedDb.entities);
	return denormalizedData[recType];
}

export const read(recType, ids, normalizedDb) {
	getDefinition(recType);
	validateIds(ids);
	validateNormalizedDb(normalizedDb);

  return ids.map(id => normalizedDb.entities.getIn([recType, id]));
}