var dns = require('dns');
dns.resolve4("www.mum.edu", (err, address) => console.log(address));