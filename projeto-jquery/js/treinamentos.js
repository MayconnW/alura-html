  function addItem(id_, nome_){
    $("<li>",{id:id_, css:{display:"none"}}).text(nome_).addClass("list-group-item dropdown-toggle").appendTo("#lista").fadeIn(1300);
  }
   
  function atualiza(){

    $.ajax({
      url: "https://livro-rails-mayconn.c9.io/compromissos.json",
      dataType: "jsonp",
      success: function(retorno){
        $("#lista li").remove();
        $.each(retorno, function(){
          //$("<li>",{id:this.id}).text(this.descricao).addClass("list-group-item dropdown-toggle").appendTo("#lista");
          addItem(this.id,this.descricao);
        }); 
      }
    });
          
  }
  
  $("#botao-adiciona").click(function(){
    var input = $("#treinamento");
    var novo = input.val();
    addItem(-1, novo);
    
    var jsonPost = JSON.stringify('{descricao": "teste"}');
    $.post("https://livro-rails-mayconn.c9.io/compromissos.json",{compromisso:{"descricao": novo}},'jsonp');
 
    input.val("");  
    input.focus();
  });
  
  $('#lista').on("click", "li", function(){
        $(this).fadeOut(1300, function(){

        $.ajax({
          type: "DELETE",
          url: "https://livro-rails-mayconn.c9.io/compromissos/"+$(this).attr("id")+".json",
          data: {compromisso:{"id": '"'+$(this).attr("id")+'"'}},
          dataType: 'jsonp'
        });
        
      });
    }
  
  );
  
  $("#botao-atualiza-ajax").click(function(event){
    event.preventDefault();
    $.ajax({
      url: "http://mirrorfashion.caelum.com.br/treinamentos",
      dataType: "jsonp",
      success: function(retorno){
        $.each(retorno.treinamentos, function(){
          $("<li>", {id:"'li'"}).text(this.nome).appendTo("#lista");
        }); 
      }
    });
  });
  
  $("#botao-atualiza-get").click(function(event){
    event.preventDefault();
    atualiza();
  });

  
  atualiza();
  
  
  
   /*$("#lista").on("mouseover", "li", function(){
    $(this).removeClass("sem-cor");
    $(this).addClass("cor-selecao");
  }  
  );
  
  $("#lista").on("mouseout","li", function(){
    $(this).removeClass("cor-selecao");
    $(this).addClass("sem-cor");
  }  
  );*/
  
  /*function selecionado(){
    $(this).removeClass("sem-cor");
    $(this).addClass("cor-selecao");
  }
    
  function deselecionado(){
    $(this).removeClass("cor-selecao");
    $(this).addClass("sem-cor");
  } 
  $("#lista").hover(selecionado, deselecionado);*/
      
