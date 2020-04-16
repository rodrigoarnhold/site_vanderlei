(function () {
    "use strict"

    var express = require('express');
    var bodyParser = require('body-parser');

    var server = express();

    server.use(bodyParser.json());
	  server.use(bodyParser.urlencoded({ extended: true }));

    server.all('*', function (req, res, next) {
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
		res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Authorization");
		res.header('Cache-Control', 'no-cache');
		next();
    });
    
    server.use(express.static('public'));
    server.listen(process.env.PORT || 3000);
})();