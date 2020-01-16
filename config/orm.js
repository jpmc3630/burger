var connection = require("./connection.js");


class ORM {
        static selectAll() {

                return new Promise(function(resolve){    
                        connection.query(`SELECT * FROM burgers_db.burgers;`, function(error,result) {
                                if (error) console.log(error);
                                resolve(result);
                        });
                })
        }

        static insertOne(incoming) {

                return new Promise(function(resolve){    
                        connection.query(`INSERT INTO burgers_db.burgers (burger_name, devoured)
                        VALUES (?, ?);`, [incoming.burger_name, incoming.devoured], function(error) {
                                if (error) console.log(error);
                                console.log(incoming);
                                resolve('burger added');
                        });
                })
        }


        static updateOne(incoming) {

            return new Promise(function(resolve){    
                    connection.query(`UPDATE burgers_db.burgers
                    SET devoured = true 
                    WHERE id = ?;`, [incoming.id], function(error) {
                            if (error) console.log(error);
                            resolve('burger updated');
                    });
            })
        }
}


module.exports = ORM;

