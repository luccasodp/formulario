<?php // Verifica se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtém os dados do formulário
    $nome = $_POST["nome"];
    $email = $_POST["telefone"];
    $senha = $_POST["senha"];
    
    // Salva os dados em um banco de dados ou arquivo
    // ...
}
>