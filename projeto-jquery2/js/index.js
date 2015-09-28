var aposInicializado = function(){
  atualiza();
}
$(aposInicializado);

function removeItem(event){
  event.preventDefault();
  
  $(this).closest("tr").hide();
  
  atualiza();   
}

function undo(){
  $("tr:visible").removeClass("desfeito");
  $("tr:hidden").show().addClass("desfeito");
}

function atualiza(){
  var itens = $(".total-item:visible");
  $("#itens-pedido").text(itens.length);
  var valor = 0;
  $.each(itens,function(){
    valor += parseFloat($(this).text());
  });
  $("#total-pedido").text(valor);
}

$("#tabela-produtos .remove-item").click(removeItem);

$("#botao-voltar").click(undo);

