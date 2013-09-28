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

	describe('async', function() {
		it('async', function(done) {
			lib.async(function(result) {
				done();
			});
		});
	});

	describe('asyncTimeout', function() {
		it('async should success', function(done) {
			lib.asyncTimeout(function(result) {
				done();
			});
		});
	});

	describe('parseAsync', function () {
		it('parseAsync should ok', function (done) {
			lib.parseAsync('{"name": "LiangMingyi"}', function (err, data) {
				should.not.exist(err);
				data.name.should.be.equal('LiangMingyi');
				done();
			});
		});

		it('parseAsync should throw err', function (done) {
			lib.parseAsync('{"name": "LiangMingyi"}}', function (err, data) {
				should.exist(err);
				done();
			});
		});
	});

	describe('getContent', function () {
		it('getContent should ok', function (done) {
			lib.getContent(__filename, function (err, content) {
				should.not.exist(err);
				content.length.should.be.above(100);
				done();
			});
		});
	})
});