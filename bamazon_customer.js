// Running this application will first display all of the items 
// available for sale. Include the ids, names, and prices of products 
// for sale.
var mysql = require('mysql');
var inquirer = require('inquirer');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '92',
    database: 'bamazon_db'
});


function displayProducts() {
    // First connect to db and display all of the items available for sale
    connection.connect();
    console.log(`********** In-stock Inventory: **********`);
    connection.query('SELECT  * from products', function (error, results, fields) {
        if (error) throw error;
        console.log(`******** Total # of Products: ${results.length} ********`);
        for (var i = 0; i < results.length; i++) {
            //id, product_name, deparment_name, price, stock_quantity
            console.log(`
    // ********** Product **********
    Stock #: ${results[i].id}      
    Item Name: ${results[i].product_name}       
    Price: ${results[i].price}      
    Quantity Remaining: ${results[i].stock_quantity}        
    `);
        }
    })
    // connection.end()
    sellProducts();
}

function sellProducts() {
    console.log('**Bamazon Interface**');
    var questions = [{
            type: 'input',
            name: 'product',
            message: 'Which product would you like to buy?',
            validate: function (value) {
                var validProd = !isNaN(parseFloat(value));
                return validProd || 'Please enter a product id number';
            },
            filter: Number
        },
        {
            type: 'input',
            name: 'quantity',
            message: 'How many would you like to buy?',
            validate: function (value) {
                var valid = !isNaN(parseFloat(value));
                return valid || 'Please enter a number';
            },
            filter: Number
        },
    ];

    inquirer.prompt(questions).then(answers => {
        console.log('\nOrder invoice:');
        console.log(JSON.stringify(answers, null, '  '));
        
        // 
        
        // connection.connect();
        console.log('We will now check our inventory...');
        let quant = answers.quantity;
        let prod = answers.product;
        //decrements quantity based on user input
        //query statement to update
        let query = 'UPDATE products SET stock_quantity = stock_quantity -? WHERE id = ?;';
        //pass in variables along with query
        connection.query(query, [[quant],[prod]], function (error, results, fields) {
            if (error) throw error;
            console.log('Congrats, successful purchase...');
        });
        let query2 = 'SELECT price FROM products WHERE id = ?;';
        connection.query(query2, [prod], function (error, results, fields) {
            if (error) throw error;
            console.log('Your total is ' + results[0].price * quant);
        connection.end();
        });

    })
    // create a sql connection to query if there is enough quantity
    // First connect to db and display all of the items available for sale
    
}
    displayProducts();
