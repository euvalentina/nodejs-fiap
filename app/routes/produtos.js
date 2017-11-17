module.exports = function(app){

app.get('/produtos', function(req, res){

var connection = app.config.dbConnection();
var ProdutosDAO = new app.app.models.ProdutosDAO(connection);

  ProdutosDAO.getProdutos(function(error, result){
    res.render('produtos/produtos', {produtos: result });
  });


});
}
