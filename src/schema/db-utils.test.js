import { getId, create, read, update, del } from './db';

test('db - getId', () => {
	var firstId = getId();
	var secondId = getId();

	expect(firstId).toBeTruthy();
	expect(secondId).toBeTruthy();

	expect(firstId !== secondId).toBeTruthy();
});

test('db - create - read - update - delete', () => {
	var created = create('testRec', { attr1: 1 });
	var readRec = read('testRec', created.id);

	expect(created).toMatchObject(readRec);

	var toBeUpdated = { id: readRec.id, attr2: 2 };
	update('testRec', toBeUpdated);
	readRec = read('testRec', readRec.id);

	expect(toBeUpdated).toMatchObject(readRec);

	del('testRec', readRec.id);
	var exceptionThrown = false;

	try {
		read('testRec', readRec.id);
	} catch(e) {
		exceptionThrown = true;
	}

	expect(exceptionThrown).toBeTruthy();
});
