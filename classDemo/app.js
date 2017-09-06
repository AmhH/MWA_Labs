var hello = require('./testR');
hello.hi();
hello.hello();
const util = require('util');
const path = require('path');
const sayHi = util.format("Hi, %s", "Amsalu");
util.log(sayHi);