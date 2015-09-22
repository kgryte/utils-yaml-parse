'use strict';

// MODULES //

var yaml = require( 'js-yaml' );


// PARSE //

/**
* FUNCTION: parse( value[, options] )
*	Attempts to parse a value as YAML.
*
* @param {*} value - value to parse
* @param {Object} [options] - function options
* @returns {Object|Error} parsed value or an error
*/
function parse( value, options ) {
	try {
		return yaml.safeLoad( value, options );
	} catch ( error ) {
		return error;
	}
} // end FUNCTION parse()


// EXPORTS //

module.exports = parse;
