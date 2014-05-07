default: unit

unit:
	@mocha -u bdd -R dot -c --recursive test

test: unit

.PHONY: unit
