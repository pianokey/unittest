TESTS = test/*.test.js
REPORTER = spec
TIMEOUT = 10000
JSCOVERAGE = ./node_modules/jscover/bin/jscover

test:
	@NODE_ENV=test ./node_modules/mocha/bin/mocha -R $(REPORTER) -t $(TIMEOUT) $(TESTS)

test-cov: lib-cov
	@LIB_COV=1 $(MAKE) test REPORTER=dot
	@LIB_COV=1 $(MAKE) test REPORTER=html-cov > coverage.html

lib-cov:
	@rm -rf ./lib-cov
	@$(JSCOVERAGE) lib lib-cov

test-coveralls:
	$(MAKE) test REPORTER=spec
	$(MAKE) test REPORTER=mocha-lcov-reporter | COVERALLS_REPO_TOKEN="UI8zFg66aoPV2bUG3T87w7hcwRIqpfI4g" ./node_modules/coveralls/bin/coveralls.js
	rm -rf lib-cov

.PHONY: test test-cov lib-cov
