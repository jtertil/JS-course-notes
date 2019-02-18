'use strict'
// Strict mode makes it easier to write "secure" JavaScript. Strict mode changes
// previously accepted "bad syntax" into real errors.

// Method 2
var cat1 = {
	name: 'Filemon',
	color: 'white',
	speak: function() {console.log('Miauu') }
}

// Method 2
function Cat(name, color) {
	this.name = name
	this.color = color
}

var cat2 = new Cat('Bonifacy', 'black')

// Method 3
var cat3 = Object.create(Object.prototype,{
	name: {
		value: 'Rademenes',
		enumerable: 'true',
		writable: 'true',
		configurable: 'true',
	},
	color: {
		value: 'black',
		enumerable: 'true',
		writable: 'true',
		configurable: 'true',
	}
})

// Method 4
class Cat4 {
	constructor(name, color) {
		this.name = name
		this.color = color
	}
}

var cat4 = new Cat4('Garfield', 'orange')
