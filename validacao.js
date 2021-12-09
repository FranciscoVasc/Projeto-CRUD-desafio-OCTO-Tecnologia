$("#was-validated").validate();

//
$('#txtDocumentacao').mask('000.000.000-00', {
    onKeyPress : function(Documentacao, e, field, options) {
      const masks = ['000.000.000-000', '00.000.000/0000-00'];
      const mask = (Documentacao.length > 14) ? masks[1] : masks[0];
      $('#txtDocumentacao').mask(mask, options);
    }
  });