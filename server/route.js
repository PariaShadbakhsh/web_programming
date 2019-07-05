const express = require("express");
const Restaurant = require("./restaurant.js");
const Category = require("./category.js");
const Address = require("./address.js");
const Comment = require("./comment.js");
const Food = require("./food.js");



const restaurantRouter = express.Router();

restaurantRouter.route('/category')
    .get((req,res) => {

var cats = req.query.category;


        res.contentType('json');
        res.setHeader('Access-Control-Allow-Origin','*');

    Restaurant.find({'categories_r.category_name': {$in:Array.isArray(cats) ? cats : [cats]} ,
            'address.address_area' : req.query.area },
        (err, results) => {

            res.send(results);
        });




    })


restaurantRouter.route('/categoryCheckbox')
    .get((req,res) => {


        res.contentType('json');
        res.setHeader('Access-Control-Allow-Origin','*');
        res.send(	{

            "data":
                [
                    {"name":	"ساندویچ"},
                    {"name":"برگر"},
                    {"name":"پیتزا"},
                    {"name":"فست فود"},
                    {"name":"کباب"}

                ]


        });




    })



restaurantRouter.route('/restaurants')
    .get((req,res) => {


        Restaurant.find({'address.address_area' : req.query.area  },
            (err, results) => {

                res.setHeader('Access-Control-Allow-Origin','*');
                res.send(results)

            })

    })



restaurantRouter.route('/restaurants/:id/comments')
    .get((req,res) => {


        var query = Restaurant.findOne( {"id" : req.params.id});

        query.exec(function(err, results){
            res.send(results.comments)

        });


    })

restaurantRouter.route('/restaurants/:id/comments')
    .post((req,res) => {


        var query1 = Restaurant.findOne( {"id" : req.params.id});

        query1.exec(function(err, results){
            var i;
            for (i = 0; i < req.body.comments.length; ++i) {
                results.comments.push(req.body.comments[i])
            }
            results.save();

            res.send(results.comments)
        });


    });

restaurantRouter.route('/restaurants/create')
    .post((req,res) => {





       var newRestaurant = new Restaurant({


           address : {

               address_id: req.body.address.address_id,
               address_city: req.body.address.address_city,
               address_area: req.body.address.address_area,
               address_Line: req.body.address.addressLine

           }, id : req.body.id,
           name: req.body.name,
           logo: req.body.logo,
           openingTime: req.body.openingTime,
           closingTime: req.body.closingTime,
           averageRate: req.body.averageRate
           ,

        });

var i;

        for ( i = 0; i < req.body.foods.length; ++i) {

            newRestaurant.foods.push(req.body.foods[i]);

        }

        for ( i = 0; i < req.body.categories_r.length; ++i) {
            newRestaurant.categories_r.push(req.body. categories_r[i]);
        }










//Restaurant.deleteMany();


        Restaurant.findOne( function (err, docs) {
                    if (docs.length) {
                        console.log(req.body.name + ' already exists.');
                        res.contentType('json');
                        res.setHeader('Access-Control-Allow-Origin','*');
                        res.send(docs);

                    } else {

                        newRestaurant.save(function (err, p) {
                            if (err) return console.error(err);
                            res.contentType('json');
                            res.setHeader('Access-Control-Allow-Origin','*');

                            res.send(p); // route to load content
                        });
                    }
                });



    })

restaurantRouter.route('/restaurants/:id')
    .get((req, res) => {
        Restaurant.find({id : req.params.id}, (err, p) => {
            res.send(p)
        })
    })


module.exports = restaurantRouter;