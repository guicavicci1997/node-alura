module.exports = function(app){
    app.get('/produtos', function(req,res){
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);
        
        produtosDAO.lista(function(erros,resultados){
            res.format({
                html: function(){
                    res.render('produtos/lista',{lista:resultados});
                },
                json: function(){
                    res.json(resultados)
                }
            });
    
        });
        connection.end();

    });

        app.get('/produtos/form',function(req,res){
            res.render('produtos/form');
        });

        //Post salvando o form
        app.post('/produtos', function(req,res){

            var produto = req.body;

            // var validatorPreco = req.assert ('preco','O preco é obrigatorio')
            // validatorPreco.notEmpty();

            // var errors = req.validationErrors();
            // if(errors){
            //     res.render('produtos/form')
            // }
            
            var connection = app.infra.connectionFactory();
            var produtosDAO = new app.infra.ProdutosDAO(connection);
            produtosDAO.salva(produto,function(errors, resultados){
                res.redirect('/produtos');

            });

        });
}
