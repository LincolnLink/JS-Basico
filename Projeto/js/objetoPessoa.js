function pessoa(trPaciente){

	var tdNome = trPaciente.getElementsByClassName("info-nome")[0];
	var tdPeso = trPaciente.getElementsByClassName("info-peso")[0];
	var tdAltura = trPaciente.getElementsByClassName("info-altura")[0];

	var paciente = {
		nome : tdNome.textContent,	
		peso : tdPeso.textContent,
		altura : tdAltura.textContent,

		calculaIMC : function(){
			if(this.altura != 0){
				var imc = this.peso / (this.altura * this.altura);
				return imc;			
			} else {
				console.log("Não executei porque altura e igual a zero!!");
			}
		}
	}

	return paciente;
}