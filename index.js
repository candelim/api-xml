var express = require('express');

var router = express.Router();
var bodyParser = require('body-parser');

var fs = require('fs');


router.use(bodyParser.json());
/* GET users listing. */

router.route('/getFile').get(function (req, response) {

    var file = process.env.CONFIGXML;

    //var parser = new xml2js.Parser();
    fs.readFile('genericQueryXMLall.xml', (err, data) => {
      if (err) throw response.send('No hay archivo o puede que su configuracion sea erronea');
      response.download(data);
    });
    
});

module.exports = router;
