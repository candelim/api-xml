var express = require('express');

var router = express.Router();
var bodyParser = require('body-parser');

var fs = require('fs'),
    xml2js = require('xml2js');


router.use(bodyParser.json());
/* GET users listing. */

router.route('/getFile').get(function (req, response) {

    var dataXml = process.env.CONFIGXML;

    var parser = new xml2js.Parser();
    fs.readFile( dataXml, function(err, data) {
        if(err)
        {
            response.send('No hay archivo o puede que su configuracion sea erronea');
        }
        else {
            parser.parseString(data, function (err, result) {
                var file = result.route;

                fs.readFile( file, function(err, data) {
					if(err)
					{
						response.send('No hay archivo o puede que su configuracion sea erronea');
					}
					else {
						var text = data.toString();

						response.send(text); // Set disposition and send it.
					}
				});
			});
        }
    });





});

module.exports = router;
