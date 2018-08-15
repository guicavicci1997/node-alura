var mysql = require('mysql');

function createDBConnection(){
        return mysql.createConnection({
            host : 'localhost',
            user : 'root',
            password : 'mudar@123',
            database : 'casadocodigonode'
    });
}

module.exports = function(){
    return createDBConnection;

}