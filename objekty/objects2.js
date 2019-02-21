'use strict'
// Strict mode makes it easier to write "secure" JavaScript. Strict mode changes
// previously accepted "bad syntax" into real errors.

function Airplane(model, type, country, manufacturer, engine, firstFlight)  {
  this.model = model;
  this.type = type;
  this.country = country;
  this.manufacturer = manufacturer;
  this.engine = engine;
  this.firstFlight = firstFlight;
}

// Using prototype in this case is better for memory usage (new objects dont copy it)
Airplane.prototype.info = function() {
    console.log(this.model + ' is ' + this.country + ', ' + this.engine
    + ' powered, ' + this.type + ' airplane whose first flight was in '
    + this.firstFlight + '.');
}


var mustang = new Airplane('mustang', 'fighter', 'USA', 'North American', 'piston engine', 1940);

var fulcrum = new Airplane('MiG-29', 'fighter', 'USSR', 'Mikoyan', 'jet engine', 1977);
