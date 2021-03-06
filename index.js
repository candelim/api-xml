var express = require('express');

var router = express.Router();
var bodyParser = require('body-parser');

var fs = require('fs');
var zlib = require('zlib')

router.use(bodyParser.json());
/* GET users listing. */
//CONFIGXML='genericQueryXMLall.xml' FILECUTOVERAVANCE='cutover_fan_avance.csv' FILECUTOVERSTATUS='cutover_fan_status.csv'

router.route('/getFile').get(function (req, response) {
    
    fs.readFile( __dirname + '/' + process.env.CONFIGXML, function(err, data) {
        if(err)
        {
            response.send('No hay archivo o puede que su configuracion sea erronea :' + err);
        }
        else {
                var text = data.toString();

                response.send(text);

        }
    });

});

router.route('/getFileCutoverAvance').get(function (req, response) {

    fs.readFile( __dirname + '/' + process.env.FILECUTOVERAVANCE, function(err, data) {
        if(err)
        {
            response.send('No hay archivo o puede que su configuracion sea erronea');
        }
        else {
            var text = data.toString();

            response.send(text);

        }
    });


});


router.route('/getFileCutoverStatus').get(function (req, response) {

    //response.chunkedEncoding = true

    fs.readFile( __dirname + '/' + process.env.FILECUTOVERSTATUS, function(err, data) {
        if(err)
        {
            response.send('No hay archivo o puede que su configuracion sea erronea');
        }
        else {
            var text = data.toString();

            response.send(text);

        }
    });


});

module.exports = router;
