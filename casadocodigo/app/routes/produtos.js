module.exports = function(app){
    app.get('/produtos', function(req,res){
        var connection = app.infra.connectionFactory();
        var produtosBanco = app.infra.produtosBanco(connection);
        
        produtosBanco.lista(function(errors, results){
            res.send(results);
            //res.render('produtos/lista', {lista:results})

        });
      
        connection.end();

        });

        app.get ('produtos/remove', function(){
    });
}
