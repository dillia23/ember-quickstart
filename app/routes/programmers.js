import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return ['Ada Lovelace', 'Charles Babbage', 'Donald Knuth', 'Grace Hopper']
	}
});
