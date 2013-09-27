var lib = require('../');
var should = require('should');

describe('module', function() {
	describe('limit', function() {
		it('limit should success', function() {
			lib.limit(10).should.be.equal(10);
		});

		it('limit should ok when less than 0', function() {
			lib.limit(-1).should.be.equal(0);
		});
	});
});