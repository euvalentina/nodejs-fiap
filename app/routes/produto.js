module.exports = function(app){

app.get('/produto', function(req, res){

var connection = app.config.dbConnection();
var ProdutosDAO = new app.app.models.ProdutosDAO(connection);

ProdutosDAO.getProduto( function(error, result){
    res.render('produtos/produto', {produto: result });
  });


});
}
