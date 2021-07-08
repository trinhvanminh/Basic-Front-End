// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes#polyfill

// This method has been added to the ECMAScript 2015 specification
// and **may not be available in all JavaScript implementations** yet.

// However, you can easily polyfill this method:


if (!String.prototype.includes) {
	String.prototype.includes = function (search, start) {
		"use strict";

		if (search instanceof RegExp)
			throw TypeError("first argument must not be a RegExp");

		if (start === undefined) start = 0;

		return this.indexOf(search, start) !== -1;
	};
}
