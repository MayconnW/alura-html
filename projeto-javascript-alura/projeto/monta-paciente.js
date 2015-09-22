function montaPaciente(trPaciente){
  
  tdNome = trPaciente.getElementsByClassName("info-nome")[0].textContent;
  tdPeso = trPaciente.getElementsByClassName("info-peso")[0].textContent;
  tdAltura = trPaciente.getElementsByClassName("info-altura")[0].textContent;

  paciente = {"nome":tdNome, 
              "peso":tdPeso, 
              "altura":tdAltura, 
              "pegaImc" : function(){
                var alturaValida = (this.altura > 0);
                var pesoValido = (this.peso > 0);

                if (!alturaValida) {
                  return "Altura menor que 0";
                } else if (!pesoValido) {
                  return "Peso menor que 0";
                } else {
                  return this.peso / (this.altura * this.altura);
                }          
              }
  };  
  return paciente;
}