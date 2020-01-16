var express = require("express");

var model = require("../models/burger.js");

module.exports = function(app) {

        app.get('/', async function (req, res) {
                const result = await model.selectAll();
                console.table(result);
                // res.json(result);
                res.render("index", {
                    all: result,
                  });

        });
        

        app.post('/newburger', async function (req, res) {
                
                let burgerName = req.body.burger_name || "Hamburger";
                let isDevoured = req.body.devoured || false;

                const result = await model.insertOne({burger_name: burgerName, devoured: isDevoured});
                res.json(result);
        });

        app.post('/devour', async function (req, res) {
                
            let burgerID = req.body.id;

            const result = await model.updateOne({id: burgerID});
            res.json(result);
        });

}