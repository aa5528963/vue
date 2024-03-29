var express = require('express');
var bp = require('body-parser');
var app = express();

app.use(bp.urlencoded({extended: false}));

var rooms = require('./rooms')
var qian = require('./qian')
var behindUser = require('./behindUser')
var order = require('./order')
var user = require('./user')

module.exports = {
    start: function(_port){

        app.all('*', function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
            res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
            res.header("X-Powered-By",' 3.2.1')
            if(req.method=="OPTIONS") {
                res.send(200);
            } else {
                next();
            }
        });          

        rooms.register(app);
        qian.register(app);
        behindUser.register(app);
        order.register(app);
        user.register(app);

        app.listen(_port);
    }
}