
var dados = []

function ApagaRegistro(id) {

    let _confirm = confirm("Deseja Realmente excluir este registro?")
    if (_confirm) {
        for (let i = 0; i < dados.length; i++) {
            if (dados[i].ID == id) {
                dados.splice(1, 1)
            }
        }
        PopulaTabela()
    }
}

function EditaRegistro(id) {
    $("#modalRegistro").modal("show")

    dados.forEach(function (item) {
        if (item.ID == id) {

            $("#hdID").val(item.ID)
            $("#txtNome").val("")
            $("#txtSobrenome").val("")
            $("#txtCPF_CNPJ").val("")            
            $("#txtDocumentacao").val("")
            $("#txtInTelefone").val("")
            $("#txtTelefone").val("")
            $("#txtQualEndereco").val("")
            $("#txtEndereco").val("")

        }
    })


}

function PopulaTabela() {
    if (Array.isArray(dados)) {

        localStorage.setItem("__dados__", JSON.stringify(dados))

        $("#tblDados tbody").html("")

        dados.forEach(function (item) {
            $("#tblDados tbody").append(`<tr>
              <td>${item.ID}</td>
              <td>${item.Nome}</td>
              <td>${item.Sobrenome}</td>
              <td>${item.CPF_CNPJ}</td>             
              <td>${item.Documentacao}</td>
              <td>${item.InTelefone}</td>
              <td>${item.Telefone}</td>
              <td>${item.QualEndereco}</td>
              <td>${item.Endereco}</td>
              <td><button type="button" onclick="javascript:EditaRegistro(${item.ID})"><img src="editar.png" width="40" height="40" alt="Editar"></button></td>
              <td><button type="button" onclick="javascript:ApagaRegistro(${item.ID})"><img src="excluir.png" width="40" height="40" alt="Excluir"></button></td>
            </tr>`)

        })
    }
}

$(function () {
    //executa ao carregar da tabela 
    dados = JSON.parse(localStorage.getItem("__dasos__")) ?? []

    if (dados) {
        PopulaTabela()

        $("#btnSalvar").click(function () {
            //para salvar
            let _id = $("#hdID").val()
            let Nome = $("#txtNome").val()
            let Sobrenome = $("#txtSobrenome").val()
            let CPF_CNPJ = $("#txtCPF_CNPJ").val()          
            let Documentacao = $("#txtDocumentacao").val()
            let InTelefone = $("#txtInTelefone").val()
            let Telefone = $("#txtTelefone").val()
            let QualEndereco = $("#txtQualEndereco").val()
            let Endereco = $("#txtEndereco").val()

            let registro = {}

            registro.Nome = Nome
            registro.Sobrenome = Sobrenome
            registro.CPF_CNPJ = CPF_CNPJ          
            registro.Documentacao = Documentacao
            registro.InTelefone = InTelefone
            registro.Telefone = Telefone
            registro.QualEndereco = QualEndereco
            registro.Endereco = Endereco

            if (!_id || _id == "0") {

                registro.ID = dados.length + 1

                dados.push(registro)

            }
            else {
                dados.forEach(function (item) {
                    if (item.ID == _id) {
                        item.Nome = Nome
                        item.Sobrenome = Sobrenome
                        item.CPF_CNPJ = CPF_CNPJ                    
                        item.Documentacao = Documentacao
                        item.InTelefone = InTelefone
                        item.Telefone = Telefone
                        item.QualEndereco = QualEndereco
                        item.Endereco = Endereco
                    }
                })
            }



            $("#modalRegistro").modal("hide")
            //limpa dados
            $("#hdID").val("0")
            $("#txtNome").val("")           
            $("#txtSobrenome").val("")
            $("#txCPF_CNPJ").val("") 
            $("#txtDocumentacao").val("")
            $("#txtInTelefone").val("") 
            $("#txtTelefone").val("")
            $("#txtQualEndereco").val("") 
            $("#txtEndereco").val("")

            PopulaTabela()
        })

    }

})