var db = require('../db/db')

module.exports = {
    register: function(app){
        
        
        

       
        

        app.get('/change',function(req,res){
            var _id = req.query.id;
            console.log(_id);
            var sql = `UPDATE goods_order SET type = '1' WHERE id = '${_id}'`

            db.update(sql,function(data){
                res.send(data);
            })
        })

        app.get('/shan',function(req,res){
            var _id = req.query.id;
            console.log(_id)

           var sql = `delete  from car where id=${_id}`

            db.delete(sql,function(data){
                res.send(data);
            })
        })

        app.get('/data',function(req,res){
            
            
            var _data = req.query.data;
            console.log(_data);
            var sql = `select * from list where  name like '%${_data}%' or title like '%${_data}%'`
            console.log(sql)
                
            db.select(sql, function(data){
                1
                
                res.send(data);
            })



        })

        app.get('/car',function(req,res){
            var _id = req.query.goid;
            var _imgurl = req.query.goimg;
            var _price = req.query.goprice;
            var _name = req.query.goname;
            
            var _num = req.query.qty;

            console.log(_name)

            var sql = `insert into car (name,price,id,imgurl,num) values ('${_name}','${_price}','${_id}','${_imgurl}','${_num}')`

            db.insert(sql,function(data){
                res.send(data);
            })
        })

         app.get('/list1',function(req,res){
            var sql = "select * from list" ;
            // console.log(sql);
            db.select(sql, function(data){
                res.send(data);
            })
        })

        app.get('/carlist',function(req,res){
            var sql2 = "select * from car" ;
            console.log(sql2);
            db.select(sql2, function(data){
                res.send(data);
            })
        })

        app.get('/list2',function(req,res){
            var _name = req.query.name;
            var sql = `select * from list  where  name like '%${_name}%' or title like '%${_name}%'` ;
            console.log(sql);
            db.select(sql, function(data){
                res.send(data);
            })
        })


        // -------------支付后删除购物车商品------------
        app.get('/cardelete',function(req,res){
            console.log(req.query);
            var sql = `delete from car`;
            console.log(sql);
            db.delete(sql,function(data){
                res.send(data);
            })
        })
        // -------------支付后删除购物车商品------------

        //------------请求type=0的订单------------------
        app.get('/gettype0',function(req,res){
            console.log(req.query);
            var _type = req.query.type;
            var sql = `select * from goods_order where type = ${_type}`;
            console.log(sql)
            db.select(sql,function(data){
                res.send(data);
            });
        })
        //------------请求type=0的订单------------------


        //------------请求type=1的订单------------------
        app.get('/gettype1',function(req,res){
            console.log(req.query);
            var _type = req.query.type;
            var sql = `select * from goods_order where type = ${_type}`;
            console.log(sql)
            db.select(sql,function(data){
                res.send(data);
            });
        })

        app.get('/sortgoods',function(req,res){
            console.log(req.query);
            var sort = req.query.way;
            var sql = `SELECT * FROM list ORDER BY nprice ${sort}`;
            console.log(sql);
            db.select(sql,function(data){
                res.send(data);
            })
         })
        //------------请求type=1的订单------------------

    }
}