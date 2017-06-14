import { _normalize, schema } from 'normalizr';

// Define a users schema
const user = new schema.Entity('users');

// Define your comments schema
const comment = new schema.Entity('comments', {
  commenter: user
});

// Define your article 
export const schema = new schema.Entity('articles', { 
  author: user,
  comments: [ comment ]
});

export function normalize(article) { 
	return _normalize(article, schema); 
};
