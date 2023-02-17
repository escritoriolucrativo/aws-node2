$("#send").click(function(event){
		
		//EVITAR QUE O FORMULÁRIO SEJA SUBMETIDO ANTES DO ENVIO PARA A API
		event.preventDefault();

		//ENVIA PARA A API
		$.ajax({
			//METODO DE ENVIO
			type: "POST",
			//URL PARA QUAL OS DADOS SERÃO ENVIADOS
			url: "localhost:8080/ext/subscription/add",
			//DADOS QUE SERÃO ENVIADOS
			data: $("#formulario").serialize(),
			//TIPOS DE DADOS QUE O AJAX TRATA
			dataType: "json",
			//CASO DÊ TUDO CERTO NO ENVIO PARA A API
			success: function(){
				//SUBMETE O FORMULÁRIO PARA A ACTION DEFINIDA NO CABEÇALHO
				$("#formulario").submit();
			}
		});
	})