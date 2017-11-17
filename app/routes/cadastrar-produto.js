module.exports = function(app){

app.get('/cadastrar-produto', function(req, res){
  res.render('admin/form_add_produto');
});

app.post('/produtos/salvar', function(req, res) {
  var produto = req.body;
// função para salvar
var connection = app.config.dbConnection();
var ProdutosDAO = new app.app.models.ProdutosDAO(connection);

  ProdutosDAO.salvarProduto(produto, function(error, result){
    //res.render('produtos/produtos', {produtos : result });
    res.redirect('/produtos');
  });

});

}
