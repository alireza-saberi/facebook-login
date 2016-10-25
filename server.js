/*
* @Author: Ali
* @Date:   2016-10-21 21:44:13
* @Last Modified by:   alireza-saberi
* @Last Modified time: 2016-10-24 09:47:11
*/

/******** Requiring libraries ********/
var express = require('express');
var app = express();


/******** Setting ********/
app.disable('x-powered-by');
app.set('port', 3000 || process.env.PORT);


/******** Routing ********/
app.use(express.static(__dirname + '/app'));


app.listen(app.get('port'), function(){
    console.log('Server is listening on port ' + app.get('port') + '. Press CTRL-C to terminate.');
});
