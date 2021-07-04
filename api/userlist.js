const MySQL = require('mysql');

const connection = MySQL.createConnection({
    host: '',
    user: '',
    password: '',
    database: ''
});

module.exports = (req, res) => {

    connection.connect(err => {
        if (err) res.status(400).send('Error');

        connection.query('SELECT * FROM icare_account', (errror, results) => {
            res.json(results);
        });

        
    });

    
};