function validar(){
    var email = document.frmLogin.txtEmail;
    var pass = document.frmLogin.pwdPass;
    var cpf = document.frmLogin.txtCPF;
    var nascimento = document.frmLogin.txtDataNasc;
    var nome = document.frmLogin.txtNomeCompleto;
    var endereco = document.frmLogin.txtEndereco;
    



    if(email.value == ""){
        alert("Campo em branco");
        email.style.backgroundColor="white";
        email.focus();
        document.getElementById("erro").innerText = "Campo email em branco";
        return false;

    }
    else{
        email.style.backgroundColor="#7ab5cb";
    }
    
    if(nome.value == ""){
        alert("Campo em branco");
        nome.style.backgroundColor="white";
        nome.focus();
        document.getElementById("erro").innerText = "Campo nome em branco";
        return false;
    }
    else{
        nome.style.backgroundColor="#7ab5cb";
    }
    if(cpf.value == ""){
        alert("Campo em branco");
        cpf.style.backgroundColor="white";
        cpf.focus();
        document.getElementById("erro").innerText = "Campo CPF em branco ou com menos de 11 caracteres";
        return false;
    }
    else{
        cpf.style.backgroundColor="#7ab5cb";
    }
    

        if(endereco.value == ""){
            alert("Campo em branco");
            endereco.style.backgroundColor="white";
            endereco.focus();
            document.getElementById("erro").innerText = "Campo endereço em branco ";
            return false;
        }
        else{
            endereco.style.backgroundColor="#7ab5cb";
        }
    
        if(nascimento.value == ""){
            alert("Campo em branco");
            nascimento.style.backgroundColor="white";
            nascimento.focus();
            document.getElementById("erro").innerText = "Campo data de nascimento em branco ";
            return false;
        }
        else{
            nascimento.style.backgroundColor="#7ab5cb";
        }
    
        if(pass.value == "" || pass.value.length <= 8){
            alert("Campo em branco");
            pass.style.backgroundColor="white";
            pass.focus();
            document.getElementById("erro").innerText = "Campo senha em branco ou com menos de 8 caracteres";
            return false;
        }
        else{
            pass.style.backgroundColor="#7ab5cb";
        }
    
       
        
    
}