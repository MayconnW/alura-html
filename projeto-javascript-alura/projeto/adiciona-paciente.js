var btnAddPaciente = document.querySelector("#adicionar-paciente");

btnAddPaciente.addEventListener("click", 
                                function(event){
                                  event.preventDefault();
                                  
                                  var nome = document.querySelector("#campo-nome");
                                  var peso = document.querySelector("#campo-peso");
                                  var altura = document.querySelector("#campo-altura");
                                  if (nome.value == ""){
                                    alert("Nome não pode ser vazio");
                                  } else if (peso.value == "" || peso.value < 0){
                                    alert("Peso não pode ser vazio ou menor que 0");
                                  } else if (altura.value == "" || altura.value < 0){
                                    alert("Altura não pode ser vazio ou menor que 0");                                    
                                  }else{
                                    pacienteNovo ="<tr class='paciente'> "+
                                                  "  <td class='info-nome'>"+nome.value+"</td> "+
                                                  "  <td class='info-peso'>"+peso.value+"</td> "+
                                                  "  <td class='info-altura'>"+altura.value+"</td> "+
                                                  "  <td class='info-imc'></td> "+
                                                  "</tr>";

                                    var tabela = document.querySelector("#tabela-pacientes");                                  
                                    tabela.innerHTML = tabela.innerHTML + pacienteNovo;
                                    nome.value = "";
                                    peso.value = "";
                                    altura.value = "";
                                  }  
                                }
                               );