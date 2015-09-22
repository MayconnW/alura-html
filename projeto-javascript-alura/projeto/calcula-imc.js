/*global document, window, alert, console, require*/

btn_calculaImcs = document.getElementById("calcula-imcs");
btn_calculaImcs.addEventListener("click", 
                                function() {
                                  var trsPacientes = document.getElementsByClassName("paciente");

                                  percorreArray(trsPacientes, 
                                                function(trPaciente){
                                                paciente = montaPaciente(trPaciente);
                                                trPaciente.getElementsByClassName("info-imc")[0].textContent = paciente.pegaImc();  
                                                }
                                               );
                                  }
                                );




