module.exports = function(app) {
  app.get('/cadastrar-cliente', function(req, res) {
    res.render('admin/form_add_cliente');
  });

  app.post('/clientes/salvar', function (req, res) {
    var cliente = req.body;
    //res.send(cliente);

  // Conexao
  // Model
   var connection = app.config.dbConnection();
   var ClientesDAO = new app.app.models.ClientesDAO(connection);

  // FUNÇÃO DE INSERT
  ClientesDAO.salvarCliente(cliente,function(error, result) {
    res.redirect('/clientes');
  });


  });
}
